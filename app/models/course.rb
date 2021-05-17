class Course < ApplicationRecord
  belongs_to :address
  has_many :properties, dependent: :destroy
  has_many :teachings, dependent: :destroy
  has_many :teachers, through: :teachings
  has_many :tags, through: :properties
end
