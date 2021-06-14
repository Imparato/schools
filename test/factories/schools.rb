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
FactoryBot.define do
  factory :school do
    sequence :name do |n|
      "Ecole dramatique#{n}"
    end
    published { true }
    description { "Lorem ipsum"}
    email { "school@ecole.io"}
    website { nil }
    blog_default { nil }
    user
    imparato_blog_link { nil }
    city { "Marseille"}
    blog_default_days { nil }
    blog_order { 0 }
  end
end
