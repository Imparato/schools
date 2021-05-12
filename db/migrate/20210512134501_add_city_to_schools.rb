class AddCityToSchools < ActiveRecord::Migration[6.1]
  def change
    add_column :schools, :city, :string
  end
end
