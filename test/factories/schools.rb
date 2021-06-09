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
FactoryBot.define do
  factory :school do
    name { "Ecole dramatique"}
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
