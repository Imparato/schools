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
