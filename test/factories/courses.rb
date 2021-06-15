# == Schema Information
#
# Table name: courses
#
#  id           :bigint           not null, primary key
#  description  :text
#  end_time     :string
#  name         :string
#  price        :float
#  price_period :string
#  published    :boolean
#  start_time   :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  address_id   :bigint           not null
#
# Indexes
#
#  index_courses_on_address_id  (address_id)
#
# Foreign Keys
#
#  fk_rails_...  (address_id => addresses.id)
#
FactoryBot.define do
  factory :course do
    published {false}
    price {100}
    address
    price_period {"Par mois"}
  end
end
