# == Schema Information
#
# Table name: teachings
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  course_id  :bigint           not null
#  teacher_id :bigint           not null
#
# Indexes
#
#  index_teachings_on_course_id   (course_id)
#  index_teachings_on_teacher_id  (teacher_id)
#
# Foreign Keys
#
#  fk_rails_...  (course_id => courses.id)
#  fk_rails_...  (teacher_id => teachers.id)
#
require "test_helper"

class TeachingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
