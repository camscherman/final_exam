class RenameColumnPasswordDigestInUsers < ActiveRecord::Migration[5.1]
  def change
    change_table :users do |t|
      t.rename :passwordDigest, :password_digest
    end
  end
end
