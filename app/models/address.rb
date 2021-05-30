class Address < ApplicationRecord
  belongs_to :school
  has_many :courses, dependent: :destroy
  has_rich_text :details

  validates :address, presence: true
  # validates :phone, format: { with: /\A(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}/, message: "Le numero de téléphone ne semble pas correct" }
  validates :zipcode, format: {with: /\A(?:[0-8]\d|9[0-8])\d{3}/, message: "Veuillez entrer un code postal valide"}
  
  def to_s
    return address
  end
end
