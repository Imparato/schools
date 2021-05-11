
# User.create!(email: "seryl@test.com", password: "password")

# School.create!(
#   name: "Le Parvis des arts",
#   published: true,
#   description: "est une bonne adresse pour suivre des cours de création. Vous pouvez aussi vous y souscrire pour participer à cours de danse ou de théâtre. Il s’agit également d’un établissement dédié aux stages pour les tout-petits, marmots et adultes.",
#   email: "contact@parvisdesarts.com",
#   website: "https://www.orchestra-studio.com",
#   blog_default: ,
#   user: User.last
# )
# Provider.create!(name: "facebook")
# Network.create!(school: School.last, provider: Provider.last, url: "https://www.facebook.com/ParvisDesArts/")
# Address.create!(
#   published: true,
#   school: School.last,
#   address: "17, rue Pierre Dupré",
#   address_complement: "",
#   city: "Marseille",
#   zipcode: "13008",
#   details: ,
#   phone: "0484255024", 
# )
# Course.create!(
#   published: true,
#   address: Address.last,
#   price: ""
# )