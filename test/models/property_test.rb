# == Schema Information
#
# Table name: properties
#
#  id         :bigint           not null, primary key
#  course_id  :bigint           not null
#  tag_id     :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require "test_helper"

class AttributeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
