class Course < ApplicationRecord
  belongs_to :address
  has_many :attributes
  has_many :teachings

end
