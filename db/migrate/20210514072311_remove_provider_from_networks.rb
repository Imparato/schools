class RemoveProviderFromNetworks < ActiveRecord::Migration[6.1]
  def change
    remove_column :networks, :provider_id
  end
end
