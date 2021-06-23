# == Schema Information
#
# Table name: teachers
#
#  id         :bigint           not null, primary key
#  bio        :text
#  email      :string
#  first_name :string
#  last_name  :string
#  phone      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  school_id  :bigint
#
# Indexes
#
#  index_teachers_on_school_id  (school_id)
#
# Foreign Keys
#
#  fk_rails_...  (school_id => schools.id)
#
require "test_helper"

class TeacherTest < ActiveSupport::TestCase
  test "should compute a full name" do
    teacher = build(:teacher, first_name: "Toto", last_name: "Abitbol")
    assert_equal "Toto Abitbol", teacher.full_name
  end

  # test "should validates a phone number" do
  #   assert build(:teacher).valid?

  #   teacher = build(:teacher, phone: "12345")
  #   assert_not teacher.valid?

  #   teacher = build(:teacher, phone: "0612345678")
  #   assert teacher.valid?

  #   teacher = build(:teacher, phone: "+33612345678")
  #   assert teacher.valid?

  #   teacher = build(:teacher, phone: "+336")
  #   assert_not teacher.valid?

  #   teacher = build(:teacher, phone: "+33 6 12 34 56 78")
  #   assert teacher.valid?
  # end
end
