class CreateUniverseNotes < ActiveRecord::Migration[6.0]
  def change
    create_table :universe_notes do |t|
      t.references :universe
      t.string :description

      t.timestamps
    end
  end
end