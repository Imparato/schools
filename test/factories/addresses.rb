# == Schema Information
#
# Table name: addresses
#
#  id                 :bigint           not null, primary key
#  address            :string
#  address_complement :string
#  city               :string
#  details            :text
#  phone              :string
#  published          :boolean
#  zipcode            :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  school_id          :bigint           not null
#
# Indexes
#
#  index_addresses_on_school_id  (school_id)
#
# Foreign Keys
#
#  fk_rails_...  (school_id => schools.id)
#
FactoryBot.define do
  factory :address do
    published {false}
    address {"12 rue du test"}
    address_complement {nil}
    city {"Marseille"}
    zipcode {"13000"}
    details {nil}
    phone {"0612121212"}
    school
  end
end
