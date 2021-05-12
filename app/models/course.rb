class Course < ApplicationRecord
  belongs_to :address
  has_many :properties, :dependent => :destroy
  has_many :teachings, :dependent => :destroy

end
