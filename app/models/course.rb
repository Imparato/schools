# == Schema Information
#
# Table name: courses
#
#  id           :bigint           not null, primary key
#  description  :text
#  price        :float
#  price_period :string
#  published    :boolean
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
class Course < ApplicationRecord
  belongs_to :address
  has_many :properties, dependent: :destroy
  has_many :teachings, dependent: :destroy
  has_many :teachers, through: :teachings
  has_many :tags, through: :properties

  has_rich_text :description

  validates_presence_of :address, message: "Veuillez choisir une addresse pour votre cours"
  validates_format_of :start_time, with: /\A\d{2}[:]\d{2}/, message: "l'heure de début est invalide"
  validates_format_of :end_time, with: /\A\d{2}[:]\d{2}/, message: "l'heure de fin est invalide"
  
  # Active admin nested ressources
  accepts_nested_attributes_for :properties, allow_destroy: true
  accepts_nested_attributes_for :teachings, allow_destroy: true
end
