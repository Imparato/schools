class Teacher < ApplicationRecord
  has_many :teachings, dependent: :destroy
  belongs_to :school
end
