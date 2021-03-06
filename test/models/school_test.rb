# == Schema Information
#
# Table name: schools
#
#  id                 :bigint           not null, primary key
#  blog_default       :text
#  blog_default_days  :string
#  blog_order         :integer          default(0)
#  city               :string
#  description        :text
#  email              :string
#  imparato_blog_link :string
#  name               :string
#  published          :boolean
#  website            :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  user_id            :bigint           not null
#
# Indexes
#
#  index_schools_on_user_id  (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#
require "test_helper"

class SchoolTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
  test "blog order must be the last + 1" do
    10.times { create(:school) }
    school = create(:school)
    assert_equal 10, school.blog_order
  end
end
