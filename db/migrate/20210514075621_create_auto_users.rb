class CreateAutoUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :auto_users do |t|
      t.string :email
      t.string :auto_password

      t.timestamps
    end
  end
end
