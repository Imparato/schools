class AddColumnToAutoUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :auto_users, :key, :string
  end
end
