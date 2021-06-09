# == Schema Information
#
# Table name: networks
#
#  id         :bigint           not null, primary key
#  school_id  :bigint           not null
#  url        :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require "test_helper"

class NetworkTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
