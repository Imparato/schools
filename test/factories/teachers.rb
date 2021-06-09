# == Schema Information
#
# Table name: teachers
#
#  id         :bigint           not null, primary key
#  first_name :string
#  last_name  :string
#  bio        :text
#  phone      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  school_id  :bigint
#  email      :string
#
FactoryBot.define do
  factory :teacher do
    first_name { "Toto"}
    last_name { "Tata"}
    bio { "Lorem ipsum..."}
    phone { "0612345678"}
    email { "test@test.io" }
    school
  end
end
