require "test_helper"

class TeacherTest < ActiveSupport::TestCase
  test "should compute a full name" do
    teacher = Teacher.new(first_name: "Toto", last_name: "Abitbol")
    assert_equal "Toto Abitbol", teacher.full_name
  end

  test "should validates a phone number" do
    teacher = Teacher.new(phone: "12345")
    assert_not teacher.valid?
    assert teacher.errors.key?("phone")

    teacher = Teacher.new(phone: "0612345678")
    teacher.valid?
    assert_not teacher.errors.key?("phone")

    teacher = Teacher.new(phone: "+33612345678")
    teacher.valid?
    assert_not teacher.errors.key?("phone")

    teacher = Teacher.new(phone: "+336")
    teacher.valid?
    assert teacher.errors.key?("phone")

    teacher = Teacher.new(phone: "+33 6 12 34 56 78")
    teacher.valid?
    assert_not teacher.errors.key?("phone")
  end
end
