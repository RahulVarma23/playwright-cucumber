 Feature: Login feature
 
     As a QA 
     I want to login into application

    Scenario Outline: Verify if user is able to login to application
      Given I open the application
      And I click on form authentication
      And I fill the login form using "<Username>" and "<Password>"
      Then I should be navigated to home page
      Then I logout from application
     Examples:
      | Username   | Password             |
      | tomsmith   | SuperSecretPassword! |
      | tomsmith   | SecretPassword!      |