class CreateUniverses < ActiveRecord::Migration[6.0]
  def change
    create_table :universes do |t|
      t.string :name
      t.string :description
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end