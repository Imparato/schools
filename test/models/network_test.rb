# == Schema Information
#
# Table name: networks
#
#  id         :bigint           not null, primary key
#  url        :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  school_id  :bigint           not null
#
# Indexes
#
#  index_networks_on_school_id  (school_id)
#
# Foreign Keys
#
#  fk_rails_...  (school_id => schools.id)
#
require "test_helper"

class NetworkTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
