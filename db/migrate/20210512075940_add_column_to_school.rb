class AddColumnToSchool < ActiveRecord::Migration[6.1]
  def change
    add_column :schools, :imparato_blog_link, :string
  end
end
