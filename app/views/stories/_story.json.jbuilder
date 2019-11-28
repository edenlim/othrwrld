json.extract! story, :id, :name, :universe_id, :genre, :summary, :user_id, :created_at, :updated_at
json.url story_url(story, format: :json)
