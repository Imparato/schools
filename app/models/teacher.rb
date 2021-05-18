class Teacher < ApplicationRecord
  has_many :teachings, dependent: :destroy
  belongs_to :school


  def full_name
    return self.first_name + " " + self.last_name
  end

end
