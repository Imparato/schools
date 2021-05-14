class ChangeColumnsInAutoUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :auto_users, :auto_str, :string
    remove_column :auto_users, :auto_password
    remove_column :auto_users, :key
  end
end
