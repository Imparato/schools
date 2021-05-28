class Teacher < ApplicationRecord
  has_many :teachings, dependent: :destroy
  belongs_to :school

  has_rich_text :bio

  validates_presence_of :first_name, message: "Veuillez préciser le nom de votre profésseur"
  validates :email, format: {with: /\A[^@\s]+@[^@\s]+\z/, message: "L'email n'est pas valide"}
  def full_name
    return "#{first_name} #{last_name}"
  end
end
