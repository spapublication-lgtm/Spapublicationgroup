from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# ==================== MODELS ====================

class Publication(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    author: str
    publication_type: str  # "book", "edited_volume", "research"
    publisher: str
    year: int
    cover_image: Optional[str] = None
    description: Optional[str] = None
    isbn: Optional[str] = None
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class PublicationCreate(BaseModel):
    title: str
    author: str
    publication_type: str
    publisher: str
    year: int
    cover_image: Optional[str] = None
    description: Optional[str] = None
    isbn: Optional[str] = None

class Company(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    slug: str
    focus: str
    scope: str
    description: str
    manuscripts_accepted: List[str]
    icon: str

class ContactMessage(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    subject: str
    message: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class ContactMessageCreate(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str

class OfficeBearer(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    designation: str
    role_type: str  # "founder", "director", "editor", "advisory"
    bio: Optional[str] = None
    image: Optional[str] = None
    order: int = 0

# ==================== SEED DATA ====================

COMPANIES_DATA = [
    {
        "id": "spa-publications",
        "name": "SPA Publications",
        "slug": "spa-publications",
        "focus": "Authored Books & Research Books",
        "scope": "National Publication",
        "description": "SPA Publications specializes in publishing authored books and research monographs across diverse academic disciplines. We are committed to promoting original scholarly work that contributes to the advancement of knowledge at the national level.",
        "manuscripts_accepted": ["Research Monographs", "Authored Academic Books", "Scholarly Treatises", "Subject-specific Studies"],
        "icon": "BookOpen"
    },
    {
        "id": "legal-luminaries",
        "name": "Legal Luminaries Publication House",
        "slug": "legal-luminaries",
        "focus": "Edited Books Across All Subjects",
        "scope": "National Publication",
        "description": "Legal Luminaries Publication House is dedicated to publishing high-quality edited volumes featuring contributions from multiple scholars. We cover all academic subjects with a special emphasis on legal studies and interdisciplinary research.",
        "manuscripts_accepted": ["Edited Volumes", "Multi-author Collections", "Conference Proceedings", "Legal Commentaries"],
        "icon": "Scale"
    },
    {
        "id": "intellect-jurists",
        "name": "Intellect Jurists Publishers",
        "slug": "intellect-jurists",
        "focus": "Textbooks for All Academic Subjects",
        "scope": "National Publication",
        "description": "Intellect Jurists Publishers focuses on developing comprehensive textbooks for students and educators across all academic subjects. Our publications are designed to meet curriculum requirements while maintaining high academic standards.",
        "manuscripts_accepted": ["Academic Textbooks", "Study Guides", "Course Materials", "Educational Resources"],
        "icon": "GraduationCap"
    },
    {
        "id": "blue-globe-international",
        "name": "Blue Globe International",
        "slug": "blue-globe-international",
        "focus": "All Types of International Publications",
        "scope": "International Publication",
        "description": "Blue Globe International is our flagship international publishing division, handling all types of academic publications for the global market. We connect scholars worldwide and facilitate the dissemination of knowledge across borders.",
        "manuscripts_accepted": ["International Research Papers", "Global Collaborative Works", "Cross-cultural Studies", "International Conference Proceedings"],
        "icon": "Globe"
    },
    {
        "id": "aquitas-international",
        "name": "Aquitas International",
        "slug": "aquitas-international",
        "focus": "Global & International Academic Publications",
        "scope": "International Publication",
        "description": "Aquitas International specializes in global academic publications with a focus on equity, fairness, and scholarly excellence. We publish works that address international issues and promote academic discourse across continents.",
        "manuscripts_accepted": ["International Journals", "Global Academic Books", "Transnational Research", "International Policy Studies"],
        "icon": "Award"
    }
]

# ==================== ROUTES ====================

@api_router.get("/")
async def root():
    return {"message": "SPA Publication Group API"}

# Publications
@api_router.get("/publications", response_model=List[Publication])
async def get_publications(publication_type: Optional[str] = None):
    query = {}
    if publication_type:
        query["publication_type"] = publication_type
    publications = await db.publications.find(query, {"_id": 0}).to_list(1000)
    for pub in publications:
        if isinstance(pub.get('created_at'), str):
            pub['created_at'] = datetime.fromisoformat(pub['created_at'])
    return publications

@api_router.post("/publications", response_model=Publication)
async def create_publication(input: PublicationCreate):
    pub_obj = Publication(**input.model_dump())
    doc = pub_obj.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.publications.insert_one(doc)
    return pub_obj

@api_router.get("/publications/{publication_id}", response_model=Publication)
async def get_publication(publication_id: str):
    pub = await db.publications.find_one({"id": publication_id}, {"_id": 0})
    if not pub:
        raise HTTPException(status_code=404, detail="Publication not found")
    if isinstance(pub.get('created_at'), str):
        pub['created_at'] = datetime.fromisoformat(pub['created_at'])
    return pub

# Companies
@api_router.get("/companies", response_model=List[Company])
async def get_companies():
    return COMPANIES_DATA

@api_router.get("/companies/{slug}", response_model=Company)
async def get_company(slug: str):
    for company in COMPANIES_DATA:
        if company["slug"] == slug:
            return company
    raise HTTPException(status_code=404, detail="Company not found")

# Contact
@api_router.post("/contact", response_model=ContactMessage)
async def submit_contact(input: ContactMessageCreate):
    msg_obj = ContactMessage(**input.model_dump())
    doc = msg_obj.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.contact_messages.insert_one(doc)
    return msg_obj

@api_router.get("/contact-messages", response_model=List[ContactMessage])
async def get_contact_messages():
    messages = await db.contact_messages.find({}, {"_id": 0}).to_list(1000)
    for msg in messages:
        if isinstance(msg.get('created_at'), str):
            msg['created_at'] = datetime.fromisoformat(msg['created_at'])
    return messages

# Office Bearers
@api_router.get("/office-bearers", response_model=List[OfficeBearer])
async def get_office_bearers():
    bearers = await db.office_bearers.find({}, {"_id": 0}).sort("order", 1).to_list(1000)
    return bearers

@api_router.post("/office-bearers", response_model=OfficeBearer)
async def create_office_bearer(input: OfficeBearer):
    doc = input.model_dump()
    await db.office_bearers.insert_one(doc)
    return input

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
