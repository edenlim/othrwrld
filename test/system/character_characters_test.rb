require "application_system_test_case"

class CharacterCharactersTest < ApplicationSystemTestCase
  setup do
    @character_character = character_characters(:one)
  end

  test "visiting the index" do
    visit character_characters_url
    assert_selector "h1", text: "Character Characters"
  end

  test "creating a Character character" do
    visit character_characters_url
    click_on "New Character Character"

    fill_in "Relationship", with: @character_character.relationship
    fill_in "User1", with: @character_character.user1
    fill_in "User2", with: @character_character.user2
    click_on "Create Character character"

    assert_text "Character character was successfully created"
    click_on "Back"
  end

  test "updating a Character character" do
    visit character_characters_url
    click_on "Edit", match: :first

    fill_in "Relationship", with: @character_character.relationship
    fill_in "User1", with: @character_character.user1
    fill_in "User2", with: @character_character.user2
    click_on "Update Character character"

    assert_text "Character character was successfully updated"
    click_on "Back"
  end

  test "destroying a Character character" do
    visit character_characters_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Character character was successfully destroyed"
  end
end
