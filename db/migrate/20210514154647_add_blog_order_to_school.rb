class AddBlogOrderToSchool < ActiveRecord::Migration[6.1]
  def change
    add_column :schools, :blog_order, :integer, default: 0
  end
end
