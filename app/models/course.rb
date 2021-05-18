class Course < ApplicationRecord
  belongs_to :address
  has_many :properties, dependent: :destroy
  has_many :teachings, dependent: :destroy
  has_many :teachers, through: :teachings
  has_many :tags, through: :properties
  
  # Active admin nested ressources
  accepts_nested_attributes_for :properties, allow_destroy: true
  accepts_nested_attributes_for :teachings, allow_destroy: true
end
