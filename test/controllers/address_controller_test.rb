require "test_helper"

class SchoolsControllerTest < ActionDispatch::IntegrationTest
  test "should list address for current school" do
    school = create(:school)
    sign_in school.user
    address = create(:address, school: school)
    get school_addresses_path(school)

    assert_response :success
    assert_includes body, address.address
  end

  test "should create new address" do
    school = create(:school)
    sign_in school.user
    post school_addresses_path(school, params:{ 
      address: {
        school: school,
        address: "12 rue du test",
        zipcode: "13001",
        city: "Marseille" 
      }
    })
    assert_redirected_to school_addresses_path(school)

    testaddress = Address.last
    assert_equal "12 rue du test", testaddress.address
  end

  test "should not create new address with empty address" do
    school = create(:school)
    sign_in school.user
    post school_addresses_path(school, params:{ 
      address: {
        school: school,
        address: nil,
        zipcode: "13001",
        city: "Marseille" 
      }
    })

    assert_response :success
    assert_includes body, "Veuillez entrer une addresse"
  end
end
