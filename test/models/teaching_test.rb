# == Schema Information
#
# Table name: teachings
#
#  id         :bigint           not null, primary key
#  course_id  :bigint           not null
#  teacher_id :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require "test_helper"

class TeachingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
