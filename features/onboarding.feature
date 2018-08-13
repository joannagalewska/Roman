Feature: Onboarding flow

Scenario: ED treatment is only available to men
  Given I want to be a Roman user
    And I provide my personal details
  When I set my biological sex to "Female"
  Then I am informed that ED treatment is currently only available to men

Scenario: ED treatment is only available to people over 18yo
  Given I want to be a Roman user
  When I set my date of birth to 16 years
  Then I am informed that ED treatment is not available to people under 18

Scenario: User's area is not served
  Given I want to be a Roman user
  When I provide my zip code "00014"
  Then I am informed that Roman is not serving people in my area yet
    And I can provide my email address to be notified in the future
