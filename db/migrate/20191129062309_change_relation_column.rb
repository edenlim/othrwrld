class ChangeRelationColumn < ActiveRecord::Migration[6.0]
  def change
    rename_column :relationships, :relationship, :affiliation
  end
end