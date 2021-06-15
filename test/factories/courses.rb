FactoryBot.define do
  factory :course do
    published {false}
    price {100}
    address
    price_period {"Par mois"}
  end
end
