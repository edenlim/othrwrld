class AddUserIdRelationship < ActiveRecord::Migration[6.0]
  def change
    add_reference :relationships, :user, index: true
  end
end