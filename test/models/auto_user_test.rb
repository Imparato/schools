# == Schema Information
#
# Table name: auto_users
#
#  id         :bigint           not null, primary key
#  email      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  auto_str   :string
#
require "test_helper"

class AutoUserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
