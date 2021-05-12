class Address < ApplicationRecord
  belongs_to :school
  has_many :courses, :dependent => :destroy
end
