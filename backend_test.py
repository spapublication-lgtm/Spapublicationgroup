import requests
import sys
from datetime import datetime
import json

class SPAPublicationAPITester:
    def __init__(self, base_url="https://publish-expert.preview.emergentagent.com/api"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.failed_tests = []

    def run_test(self, name, method, endpoint, expected_status, data=None, headers=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}" if endpoint else self.base_url
        if headers is None:
            headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)
            elif method == 'PUT':
                response = requests.put(url, json=data, headers=headers, timeout=10)
            elif method == 'DELETE':
                response = requests.delete(url, headers=headers, timeout=10)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    response_data = response.json()
                    if isinstance(response_data, list):
                        print(f"   Response: List with {len(response_data)} items")
                    elif isinstance(response_data, dict):
                        print(f"   Response keys: {list(response_data.keys())}")
                except:
                    print(f"   Response: {response.text[:100]}...")
            else:
                self.failed_tests.append({
                    'name': name,
                    'expected': expected_status,
                    'actual': response.status_code,
                    'response': response.text[:200]
                })
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"   Response: {response.text[:200]}")

            return success, response.json() if success and response.text else {}

        except requests.exceptions.RequestException as e:
            self.failed_tests.append({
                'name': name,
                'error': str(e)
            })
            print(f"❌ Failed - Network Error: {str(e)}")
            return False, {}
        except Exception as e:
            self.failed_tests.append({
                'name': name,
                'error': str(e)
            })
            print(f"❌ Failed - Error: {str(e)}")
            return False, {}

    def test_root_endpoint(self):
        """Test root API endpoint"""
        success, response = self.run_test(
            "Root API Endpoint",
            "GET",
            "",
            200
        )
        return success

    def test_companies_endpoint(self):
        """Test companies endpoint"""
        success, response = self.run_test(
            "Get All Companies",
            "GET",
            "companies",
            200
        )
        
        if success and response:
            # Verify we have 5 companies as expected
            if len(response) == 5:
                print(f"   ✅ Correct number of companies: {len(response)}")
                
                # Check for expected company slugs
                expected_slugs = ["spa-publications", "legal-luminaries", "intellect-jurists", 
                                "blue-globe-international", "aquitas-international"]
                actual_slugs = [company.get('slug') for company in response]
                
                if all(slug in actual_slugs for slug in expected_slugs):
                    print(f"   ✅ All expected companies present")
                else:
                    print(f"   ⚠️  Missing companies: {set(expected_slugs) - set(actual_slugs)}")
            else:
                print(f"   ⚠️  Expected 5 companies, got {len(response)}")
        
        return success

    def test_individual_company(self, slug):
        """Test individual company endpoint"""
        success, response = self.run_test(
            f"Get Company: {slug}",
            "GET",
            f"companies/{slug}",
            200
        )
        
        if success and response:
            required_fields = ['name', 'slug', 'focus', 'scope', 'description']
            missing_fields = [field for field in required_fields if field not in response]
            if not missing_fields:
                print(f"   ✅ All required fields present")
            else:
                print(f"   ⚠️  Missing fields: {missing_fields}")
        
        return success

    def test_publications_endpoint(self):
        """Test publications endpoint"""
        success, response = self.run_test(
            "Get All Publications",
            "GET",
            "publications",
            200
        )
        return success

    def test_contact_submission(self):
        """Test contact form submission"""
        test_data = {
            "name": f"Test User {datetime.now().strftime('%H%M%S')}",
            "email": "test@example.com",
            "subject": "Test Subject",
            "message": "This is a test message from automated testing."
        }
        
        success, response = self.run_test(
            "Submit Contact Form",
            "POST",
            "contact",
            200,
            data=test_data
        )
        
        if success and response:
            # Verify response contains expected fields
            if 'id' in response and 'created_at' in response:
                print(f"   ✅ Contact message created with ID: {response.get('id')}")
            else:
                print(f"   ⚠️  Response missing expected fields")
        
        return success

    def test_office_bearers_endpoint(self):
        """Test office bearers endpoint"""
        success, response = self.run_test(
            "Get Office Bearers",
            "GET",
            "office-bearers",
            200
        )
        return success

    def test_invalid_endpoints(self):
        """Test invalid endpoints return 404"""
        success, response = self.run_test(
            "Invalid Company Slug",
            "GET",
            "companies/invalid-slug",
            404
        )
        return success

def main():
    print("🚀 Starting SPA Publication Group API Testing")
    print("=" * 60)
    
    # Setup
    tester = SPAPublicationAPITester()
    
    # Test basic endpoints
    tester.test_root_endpoint()
    tester.test_companies_endpoint()
    
    # Test individual companies
    company_slugs = ["spa-publications", "legal-luminaries", "intellect-jurists", 
                    "blue-globe-international", "aquitas-international"]
    
    for slug in company_slugs:
        tester.test_individual_company(slug)
    
    # Test other endpoints
    tester.test_publications_endpoint()
    tester.test_contact_submission()
    tester.test_office_bearers_endpoint()
    
    # Test error handling
    tester.test_invalid_endpoints()
    
    # Print results
    print("\n" + "=" * 60)
    print(f"📊 FINAL RESULTS")
    print(f"Tests Run: {tester.tests_run}")
    print(f"Tests Passed: {tester.tests_passed}")
    print(f"Tests Failed: {len(tester.failed_tests)}")
    print(f"Success Rate: {(tester.tests_passed/tester.tests_run)*100:.1f}%")
    
    if tester.failed_tests:
        print(f"\n❌ FAILED TESTS:")
        for i, test in enumerate(tester.failed_tests, 1):
            print(f"{i}. {test['name']}")
            if 'expected' in test:
                print(f"   Expected: {test['expected']}, Got: {test['actual']}")
            if 'error' in test:
                print(f"   Error: {test['error']}")
            if 'response' in test:
                print(f"   Response: {test['response']}")
    
    return 0 if tester.tests_passed == tester.tests_run else 1

if __name__ == "__main__":
    sys.exit(main())