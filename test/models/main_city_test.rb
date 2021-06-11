# == Schema Information
#
# Table name: main_cities
#
#  id              :bigint           not null, primary key
#  city            :string
#  country_code    :string
#  blog_title      :text
#  blog_slug       :string
#  blog_map_iframe :string
#  blog_important  :boolean
#  blog_intro      :text
#  blog_voir_aussi :text
#  dedicated_host  :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
require "test_helper"

class MainCityTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
