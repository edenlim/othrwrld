class ChangeRelationColumn2 < ActiveRecord::Migration[6.0]
  def change
    rename_column :relationships, :character1, :character_id
  end
end