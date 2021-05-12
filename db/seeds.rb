# ------------------------------------------------- RESETTING SEEDS -----------------------------------------------------

Network.destroy_all
Property.destroy_all
Teaching.destroy_all
Teacher.destroy_all
Course.destroy_all
Address.destroy_all
School.destroy_all
User.destroy_all

# ------------------------------------------------- PREMIER TOUR -----------------------------------------------------

puts "Starting round 1..."

user1 = User.create!(
  email: "beryl@test.com",
  password: "password"
)
user1 ? "Created #{user1.email}" : "Not created !"

school1 = School.create!(
  name: "Cours Myriade",
  published: false,
  description: "L’école MYRIADE propose un Cours Professionnel, formation de 2 ans préparant au métier de comédien, ainsi qu’un Cours Junior, à destination des enfants/adolescents de 11 à 17 ans.",
  email: "contact@ecolemyriade.com",
  website: "https://www.ecolemyriade.com",
  blog_default: "",
  user: User.last,
  imparato_blog_link: "https://www.imparato.io/blog/les-meilleurs-cours-de-theatre-a-lyon"
)
school1 ? "Created #{school1.name}" : "Not created !"

# provider1 = Provider.create!(name: "facebook")
# provider1 ? "Created #{provider1.name}" : "Not created !"

network1 = Network.create!(
  school: School.last,
  provider: Provider.last,
  url: "https://www.facebook.com/CoursMyriade/"
)
network1 ? "Created network" : "Not created !"

address1 = Address.create!(
  published: false,
  school: School.last,
  address: "14 rue Pizay",
  address_complement: "Batiment B",
  city: "Lyon",
  zipcode: "69001",
  details: "En haut de l'escalier à droite",
  phone: "0456734544", 
)
address1 ? "Created #{address1.address}" : "Not created !"

address2 = Address.create!(
  published: false,
  school: School.last,
  address: "3 place Croix-Paquet",
  address_complement: "",
  city: "Lyon",
  zipcode: "69001",
  details: "Sonner au théâtre",
  phone: "+33456732222"
)
address2 ? "Created #{address2.address}" : "Not created !"

course1 = Course.create!(
  published: false,
  address: Address.last,
  price: 250,
  price_period:"trimestre",
  description: "Cours d'improvisation pour débutants"
)
course1 ? "Created #{course1.description}" : "Not created !"

course2 = Course.create!(
  published: false,
  address: Address.last,
  price: 180,
  price_period:"trimestre",
  description: "Cours pour enfants de 7 à 11 ans"
)
course2 ? "Created #{course2.description}" : "Not created !"

teacher1 = Teacher.create!(
  first_name: "Emeline",
  last_name: "Cascio",
  bio: "De 2010 à 2012, Emeline Cascio a abordé le théâtre en premier lieu par l’écriture, assistée par un coach privé à Genève (Suisse). En 2013, elle vend ses premières pièces, Demi-nuit et Interlude, puis fait ses premiers pas sur scène dans la pièce Lunatic, au théâtre de La Tarentule à Neuchâtel (Suisse).",
  phone: "+33456732222"
)
teacher1 ? "Created #{teacher1.first_name}" : "Not created !"

teaching1 = Teaching.create!(
  course: Course.last,
  teacher: Teacher.last
)
teaching1 ? "Created teaching" : "Not created !"

teacher2 = Teacher.create!(
  first_name: "Léonard",
  last_name: "Stefanica",
  bio: "On le retrouve également sur la scène musicale avec Tisiphone. Il improvise régulièrement pour la danse notamment avec Ennio Sammarco (Ramdam Théâtre) et compose également de la musique pour le théâtre et le cinéma.",
  phone: "+33456732222"
)
teacher2 ? "Created #{teacher2.first_name}" : "Not created !"

teaching2 = Teaching.create!(
  course: course1,
  teacher: Teacher.last
)
teaching2 ? "Created teaching" : "Not created !"

# tag1 = Tag.create!(
#   name: "improvisation",
#   category: "type de cours"
# )
# tag1 ? "Created #{tag1.name}" : "Not created !"

# tag2 = Tag.create!(
#   name: "enfants",
#   category: "type de cours"
# )
# tag2 ? "Created #{tag2.name}" : "Not created !"

property1 = Property.create!(
  course: course1,
  tag: Tag.last
)
property1 ? "Created property" : "Not created !"

property2 = Property.create!(
  course: course2,
  tag: Tag.first
)
property2 ? "Created property" : "Not created !"

puts "End of round 1"

# ------------------------------------------------- DEUXIEME TOUR -----------------------------------------------------

puts "Starting round 2..."

user2 = User.create!(
  email: "basile@test.com",
  password: "password"
)
user2 ? "Created #{user2.email}" : "Not created !"

school2 = School.create!(
  name: "Acting Studio",
  published: false,
  description: "L'Acting Studio enseigne le théâtre et le cinéma à un niveau professionnnel. Que vous preniez une formation en un, deux ou trois ans, vous serez ammené à travailler la mise en scène et le scénario. L'enseignement est principalement fondé sur la méthode anglo-saxonne, mais la culture française reste au coeur des leçons.",
  email: "contact@actingstudio.com",
  website: "https://www.actingstudio.com",
  blog_default: "",
  user: User.last,
  imparato_blog_link: "https://www.imparato.io/blog/les-meilleurs-cours-de-theatre-a-lyon"
)
school2 ? "Created #{school2.name}" : "Not created !"

# provider2 = Provider.create!(name: "instagram")
# provider2 ? "Created #{provider2.name}" : "Not created !"

network2 = Network.create!(
  school: School.last,
  provider: Provider.last,
  url: "https://www.instagram.com/ActingStudio/"
)
network2 ? "Created network" : "Not created !"

address3 = Address.create!(
  published: false,
  school: School.last,
  address: "1à rue Juiverie",
  address_complement: "",
  city: "Lyon",
  zipcode: "69005",
  details: "",
  phone: "0412345678", 
)
address3 ? "Created #{address3.address}" : "Not created !"

course3 = Course.create!(
  published: false,
  address: Address.last,
  price: 4800,
  price_period:"année",
  description: "Formation professionnelle 810 heures"
)
course3 ? "Created #{course3.description}" : "Not created !"

teacher3 = Teacher.create!(
  first_name: "Mathieu",
  last_name: "Duboclard",
  bio: "Mathieu joue de nombreuses pièces à Lyon et dans toute la France. Il tourne également pour la télévision et le cinéma.",
  phone: "+33456734444"
)
teacher3 ? "Created #{teacher3.first_name}" : "Not created !"
    
teaching3 = Teaching.create!(
  course: Course.last,
  teacher: Teacher.last
)
teaching3 ? "Created teaching" : "Not created !"
        
course4 = Course.create!(
  published: false,
  address: Address.last,
  price: 900,
  price_period:"année",
  description: "Atelier amateur le lundi soir"
)
course4 ? "Created #{course4.description}" : "Not created !"

teacher4 = Teacher.create!(
  first_name: "Margaux",
  last_name: "Peycelon",
  bio: "Elle travaille pour diverses troupes sur la région, notamment pour La compagnie des 4 murs dans laquelle elle intervient sur plusieurs spectacles en tant que comédienne ou metteuse en scène. En 2017, elle rejoint l'équipe d'enseignant de l'Acting Studio tout en continuant son activité de comédienne.",
  phone: "056732832"
)
teacher4 ? "Created #{teacher4.first_name}" : "Not created !"

teaching4 = Teaching.create!(
  course: Course.last,
  teacher: Teacher.last
)
teaching4 ? "Created teaching" : "Not created !"

# tag3 = Tag.create!(
#   name: "lundi",
#   category: "jour"
# )
# tag3 ? "Created #{tag3.name}" : "Not created !"

# tag4 = Tag.create!(
#   name: "professionnel",
#   category: "type de cours"
# )
# tag4 ? "Created #{tag4.name}" : "Not created !"

property3 = Property.create!(
  course: course4,
  tag: Tag.last
)
property3 ? "Created property" : "Not created !"

property4 = Property.create!(
  course: course3,
  tag: Tag.first
)
property4 ? "Created property" : "Not created !"

puts "End of round 2"

# ------------------------------------------------- TROISIEME TOUR -----------------------------------------------------

puts "Starting round 3..."

user3 = User.create!(
  email: "seryl@test.com",
  password: "password"
)
user3 ? "Created #{user3.email}" : "Not created !"

school3 = School.create!(
  name: "Le Parvis des arts",
  published: true,
  description: "est une bonne adresse pour suivre des cours de création. Vous pouvez aussi vous y souscrire pour participer à cours de danse ou de théâtre. Il s'agit également d'un établissement dédié aux stages pour les tout-petits, marmots et adultes.",
  email: "contact@parvisdesarts.com",
  website: "https://www.orchestra-studio.com",
  user: User.last,
  imparato_blog_link: "https://www.imparato.io/blog/les-meilleurs-cours-de-theatre-a-paris",
)
school3 ? "Created #{school3.name}" : "Not created !"

# provider3 = Provider.create!(name: "facebook")
# provider3 ? "Created #{provider3.name}" : "Not created !"

network3 = Network.create!(
  school: School.last,
  provider: Provider.last,
  url: "https://www.facebook.com/ParvisDesArts/"
)
network3 ? "Created network" : "Not created !"

address4 = Address.create!(
  published: true,
  school: School.last,
  address: "17, rue Pierre Dupré",
  address_complement: "",
  city: "Marseille",
  zipcode: "13008",
  phone: "0484255024", 
)
address4 ? "Created #{address4.address}" : "Not created !"

course5 = Course.create!(
  published: true,
  address: Address.last,
  price: 550,
  price_period: "Tarif annuel",
  description: "Adulte"
)
course5 ? "Created #{course5.description}" : "Not created !"

teacher5 = Teacher.create!(
  first_name: "Bernard",
  last_name: "Fructus",
  bio: "Comédien, Metteur en scène et, Dramaturge, Bernard Fructus connaît un grand succès dans le rôle du contrôleur fiscal Cheval dans « le Diner de Cons » en tournée et au théâtre des Variétés, dans « Un Monde Merveilleux » de Caron et Laborie, pendant plus d'un an à l'affiche à la Comédie de Paris et au Théâtre du Splendid. Il avait auparavant tenu le premier rôle dans « Les P'tits Vélos » de Danièle et Patrick Haudecoeur durant 350 représentations à la Comédie de Paris, et dans « Frou-Frou les Bains » (rôle principal) , Molière meilleur spectacle musical.",
  phone: "0612121212"
)
teacher5 ? "Created #{teacher5.first_name}" : "Not created !"

teaching5 = Teaching.create!(
  course: Course.last,
  teacher: Teacher.last
)
teaching5 ? "Created teaching" : "Not created !"

# Tag.create!(
#   name: "Théâtre comique ",
#   category: "Type de cours"
# )

property5 = Property.create!(
  course: Course.last,
  tag: Tag.last
)
property5 ? "Created property" : "Not created !"

course6 = Course.create!(
  published: true,
  address: Address.last,
  price: 350,
  price_period: "Tarif annuel",
  description: "Enfant"
)
course6 ? "Created #{course6.description}" : "Not created !"

teacher6 = Teacher.create!(
  first_name: "Marion",
  last_name: "Nguyen Thé",
  bio: "Comédienne et chanteuse",
  phone: "0612121212"
)
teacher6 ? "Created #{teacher6.first_name}" : "Not created !"

teaching6 = Teaching.create!(
  course: Course.last,
  teacher: Teacher.last
)
teaching6 ? "Created teaching" : "Not created !"

# Tag.create!(
#   name: "Mime",
#   category: "Type de cours"
# )

property6 = Property.create!(
  course: Course.last,
  tag: Tag.last
)
property6 ? "Created property" : "Not created !"

puts "End of round 3"


# ------------------------------------------------- QUATRIEME TOUR -----------------------------------------------------

puts "Starting round 4..."

user4 = User.create!(
  email: "fake@test.com",
  password: "password"
)
user4 ? "Created #{user4.email}" : "Not created !"

school4 = School.create!(
  name: "Théâtre du Carré Rond",
  published: true,
  description: "Durant le premier trimestre, chaque participant explore et développe son imagination, sa créativité, sa confiance en soi, sa relation aux autres, au travers d'exercices ludiques liés au travail d'acteur. Pas ou peu de théorie, de training pur, d'exercices de diction, mais une approche pratique, dans le plaisir, la rigueur, la richesse et le respect de chacun. Dés janvier, le travail s'oriente sur une création à partir d'un texte actuel adapté au groupe qui conduit, en fin d'année, à 3 représentations en conditions professionnelles, au théâtre du Têtard (Marseille, 5ème).",
  email: "contact@lecarrerond.com",
  website: "http://lecarrerond.fr",
  user: User.last,
  imparato_blog_link: "https://www.imparato.io/blog/les-meilleurs-cours-de-theatre-a-paris",
)
school4 ? "Created #{school4.name}" : "Not created !"

# Provider.create!(name: "facebook")

network4 = Network.create!(
  school: School.last,
  provider: Provider.last,
  url: "https://www.facebook.com/lecarrerondmarseille"
)
network4 ? "Created network" : "Not created !"

# Provider.create!(name: "twitter")

network5 = Network.create!(
  school: School.last,
  provider: Provider.last,
  url: "https://twitter.com/lecarrerond"
)
network5 ? "Created network" : "Not created !"

address5 = Address.create!(
  published: true,
  school: School.last,
  address: "71 rue Sylvabelle",
  city: "Marseille",
  zipcode: "13006",
  phone: "0674369753", 
)
address5 ? "Created #{address5.address}" : "Not created !"

address6 = Address.create!(
  published: true,
  school: School.last,
  address: "23 rue Falque",
  address_complement: "",
  city: "Marseille",
  zipcode: "13006",
  phone: "0674369753", 
)
address6 ? "Created #{address6.address}" : "Not created !"

course7 = Course.create!(
  published: true,
  address: Address.last,
  price: 55,
  price_period: "Tarif mensuel",
  description: "Cours pour adulte, lundi, mercredi et vendredi soir de 19h à 21h"
)
course7 ? "Created #{course7.description}" : "Not created !"

teacher7 = Teacher.create!(
  first_name: "Isabelle",
  last_name: "Genot",
  bio: "comédienne, metteur en scène et directrice artistique de la compagnie. Formée au théâtre classique et moderne au Cours Florent, où elle eut notamment comme professeur Francis Huster.",
  phone: "0612121212"
)
teacher7 ? "Created #{teacher7.first_name}" : "Not created !"

teaching7 = Teaching.create!(
  course: Course.last,
  teacher: Teacher.last
)
teaching7 ? "Created teaching" : "Not created !"

# Tag.create!(
#   name: "Improvisation",
#   category: "Type de cours"
# )

property7 = Property.create!(
  course: Course.last,
  tag: Tag.last
)
property7 ? "Created property" : "Not created !"

course8 = Course.create!(
  published: true,
  address: Address.last,
  price: 35,
  price_period: "Tarif mensuel",
  description: "Cours pour les enfants à partir de 10 ans. Mardi, Mercredi et Vendredi de 18h30 à 20h"
)
course8 ? "Created #{course8.description}" : "Not created !"

teacher8 = Teacher.create!(
  first_name: "Frederic",
  last_name: "Bocquet",
  bio: "Frédéric Bocquet est un acteur connu pour Priceless (2006), Le nouveau protocole (2008) et Zonama (2020).",
  phone: "0612121212"
)
teacher8 ? "Created #{teacher8.first_name}" : "Not created !"

teaching8 = Teaching.create!(
  course: Course.last,
  teacher: Teacher.last
)
teaching8 ? "Created teaching" : "Not created !"

puts "End of round 4"

