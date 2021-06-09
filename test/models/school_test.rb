# == Schema Information
#
# Table name: schools
#
#  id                 :bigint           not null, primary key
#  name               :string
#  published          :boolean
#  description        :text
#  email              :string
#  website            :string
#  blog_default       :text
#  user_id            :bigint           not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  imparato_blog_link :string
#  city               :string
#  blog_default_days  :string
#  blog_order         :integer          default(0)
#
require "test_helper"

class SchoolTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
