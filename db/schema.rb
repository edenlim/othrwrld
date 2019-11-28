# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_11_28_042043) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "character_stories", force: :cascade do |t|
    t.bigint "character_id"
    t.bigint "story_id"
    t.integer "importance"
    t.string "notes"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["character_id"], name: "index_character_stories_on_character_id"
    t.index ["story_id"], name: "index_character_stories_on_story_id"
  end

  create_table "characters", force: :cascade do |t|
    t.string "attribute"
    t.integer "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "relationships", force: :cascade do |t|
    t.integer "character1"
    t.integer "character2"
    t.string "relationship"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "sequence_notes", force: :cascade do |t|
    t.integer "story_sequence_id"
    t.string "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "stories", force: :cascade do |t|
    t.string "name"
    t.integer "universe_id"
    t.string "genre"
    t.string "summary"
    t.integer "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "stories_sequences", force: :cascade do |t|
    t.bigint "story_id"
    t.integer "chronology"
    t.string "title"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["story_id"], name: "index_stories_sequences_on_story_id"
  end

end
