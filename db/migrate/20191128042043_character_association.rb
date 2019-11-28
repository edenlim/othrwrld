class CharacterAssociation < ActiveRecord::Migration[6.0]
  def change
    create_table :relationships do |t|
      t.integer :character1
      t.integer :character2
      t.string :relationship

      t.timestamps
    end
  end
end