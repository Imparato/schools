class Teacher < ApplicationRecord
  has_many :teachings, dependent: :destroy
  belongs_to :school
  has_one_attached :photo
  has_rich_text :bio

  validates_presence_of :first_name, message: "Veuillez préciser le nom de votre profésseur"
  validates :email, format: {with: /\A[^@\s]+@[^@\s]+\z/, message: "L'email n'est pas valide"}
  validates :phone, format: { with: /\A(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}/, message: "Le numero de téléphone ne semble pas correct" }
  
  def full_name
    return "#{first_name} #{last_name}"
  end
end
