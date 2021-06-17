# == Schema Information
#
# Table name: teachers
#
#  id         :bigint           not null, primary key
#  bio        :text
#  email      :string
#  first_name :string
#  last_name  :string
#  phone      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  school_id  :bigint
#
# Indexes
#
#  index_teachers_on_school_id  (school_id)
#
# Foreign Keys
#
#  fk_rails_...  (school_id => schools.id)
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
