class School < ApplicationRecord
  belongs_to :user
  has_many :networks, :dependent => :destroy
  has_many :addresses, :dependent => :destroy
  has_many :teachers, :dependent => :destroy


  validates_uniqueness_of :name, :scope => [:city]
  validates_uniqueness_of :blog_order, :scope => [:city]
  before_validation :check_order

  private

  def check_order
      # renumbering cascade if collision
      if will_save_change_to_blog_order?
        to_move = School.where(city: self.city, blog_order: self.blog_order).first
        to_move.update!(blog_order: to_move.blog_order+1) if to_move
      end
  end
end
