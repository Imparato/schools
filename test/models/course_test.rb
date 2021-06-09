# == Schema Information
#
# Table name: courses
#
#  id           :bigint           not null, primary key
#  published    :boolean
#  price        :float
#  description  :text
#  address_id   :bigint           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  price_period :string
#
require "test_helper"

class CourseTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
