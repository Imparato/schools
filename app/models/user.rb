class User < ApplicationRecord
  validates :email, presence: true
  validates :password, presence: true
  has_many :schools
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
