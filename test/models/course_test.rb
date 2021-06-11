# == Schema Information
#
# Table name: courses
#
#  id           :bigint           not null, primary key
#  description  :text
#  price        :float
#  price_period :string
#  published    :boolean
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  address_id   :bigint           not null
#
# Indexes
#
#  index_courses_on_address_id  (address_id)
#
# Foreign Keys
#
#  fk_rails_...  (address_id => addresses.id)
#
require "test_helper"

class CourseTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
