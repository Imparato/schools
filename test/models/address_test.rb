# == Schema Information
#
# Table name: addresses
#
#  id                 :bigint           not null, primary key
#  published          :boolean
#  school_id          :bigint           not null
#  address            :string
#  address_complement :string
#  city               :string
#  zipcode            :string
#  details            :text
#  phone              :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#
require "test_helper"

class AddressTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
