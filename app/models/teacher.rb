class Teacher < ApplicationRecord
  has_many :teachings, dependent: :destroy
  belongs_to :school

  def full_name
    return "#{first_name} #{last_name}"
  end
end
