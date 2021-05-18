class Address < ApplicationRecord
  belongs_to :school
  has_many :courses, dependent: :destroy

  def to_s
    return self.address
  end
end
