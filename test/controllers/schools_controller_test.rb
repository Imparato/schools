require "test_helper"

class SchoolsControllerTest < ActionDispatch::IntegrationTest
  test "should load index" do
    sign_in create(:user)

    get root_path
    assert_response :success
  end

  test "should redirect an anonymous user to sign in" do
    get root_path
    assert_redirected_to new_user_session_path
  end

  test "should list schools of current_user" do
    create(:school, name: "Test school")
    school = create(:school, name: "Owned school")

    sign_in school.user

    get root_path
    assert_response :success
    assert_not_includes body, "Test school"
    assert_includes body, school.name
  end

  test "should create a school" do
    user = create(:user)
    sign_in user

    post schools_path params: { school: {
      name: "New school",
      published: "1",
      description: "The description",
      email: "my@email.com",
      city: "Marseille"
    }}

    assert_redirected_to schools_path

    school = School.last
    assert_equal "New school", school.name
    assert_equal user, school.user
  end

  test "should not create an invalid school" do
    user = create(:user)
    sign_in user

    post schools_path params: { school: {
      name: "",
      published: "1",
      description: "The description",
      email: "my@email.com",
      city: "Marseille"
    }}

    assert_response :success
    assert_includes body, "Veuillez entrer un nom"
  end
end
