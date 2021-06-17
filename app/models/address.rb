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
class Address < ApplicationRecord
  belongs_to :school
  has_many :courses, dependent: :destroy
  has_rich_text :details

  validates_presence_of :address, message: "Veuillez entrer une addresse"
  validates_presence_of :city, message: "Veuillez entrer une ville"
  # validates :address, presence: true, message: "Veuillez entrer une addresse"
  # validates :city, presence: true, with_message: 'Veuillez entrer une ville'
  # validates_format_of :phone, with: /\A(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}/, message: "Le numero de téléphone ne semble pas correct"
  validates :zipcode, format: {with: /\A(((?:[0-8]\d|9[0-8])\d{3})|(QC )?\w\d\w \d\w\d|(CH-)?\d{4})/, message: "Veuillez entrer un code postal valide"}

  def to_s
    return address
  end

  def current_address
    return self
  end
end
