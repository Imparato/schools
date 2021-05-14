class AddColumnBlogDefaultDaysToSchool < ActiveRecord::Migration[6.1]
  def change
    add_column :schools, :blog_default_days, :string
  end
end
