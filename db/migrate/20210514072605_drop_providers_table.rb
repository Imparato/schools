class DropProvidersTable < ActiveRecord::Migration[6.1]
  def up
    drop_table :providers
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end

