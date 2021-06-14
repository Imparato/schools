require "test_helper"

class TeachersControllerTest < ActionDispatch::IntegrationTest
  test "should list teacher for current school" do
    school = create(:school)
    sign_in school.user
    teacher = create(:teacher, school: school)
    get school_teachers_path(teacher.school)

    assert_response :success
    assert_includes body, teacher.full_name
  end

  test "should create new teacher" do
    school = create(:school)
    sign_in school.user
    post school_teachers_path(school, params:{
      teacher:{
        school: school,
        email: "testteacher@test.fr",
        phone: "0612121212",
        first_name: 'test',
        last_name: "teacher"
      }
    })
    assert_redirected_to school_teachers_path(school)

    testteacher = Teacher.last
    assert_equal "test teacher", testteacher.full_name
  end

  test "should not create new teacher with empty name" do
    school = create(:school)
    sign_in school.user
    post school_teachers_path(school, params:{
      teacher:{
        school: school,
        email: "testteacher@test.fr",
        phone: "0612121212",
      }
    })

    assert_response :success
    assert_includes body, "Veuillez préciser le nom de votre professeur"
  end

  test "should update teacher" do
    # Create teacher
    school = create(:school)
    sign_in school.user
    post school_teachers_path(school, params:{
      teacher:{
        school: school,
        email: "testteacher@test.fr",
        phone: "0612121212",
        first_name: 'test',
        last_name: "teacher"
      }
    })

    # try to update teacher
    teacher = Teacher.last
    # binding.pry
    patch school_teacher_path(teacher.school, teacher, params:{
      teacher:{
        phone: "06 00 00 00 00"
      }
    })

    assert_redirected_to school_teachers_path(teacher.school)
    testteacher = Teacher.last
    assert_equal "06 00 00 00 00", testteacher.phone
  end
end