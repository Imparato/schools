class Teacher < ApplicationRecord
  has_many :teachings, dependent: :destroy
  belongs_to :school

   has_rich_text :bio

  def full_name
    return "#{first_name} #{last_name}"
  end
end
