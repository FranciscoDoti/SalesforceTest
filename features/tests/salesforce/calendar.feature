Feature: Calendar


    Scenario: Verify that a new event is added successfully
        Given I open the page "salesforce"
        And I read data from "salesforce"
        And I populate the field "UserName" with "franciscodotitexeira-gwml@force.com"
        And I populate the field "Password" with "Yosoyyo123!"
        And I click on "BtnLogin"
        And I click on "Manage"
        And I click on "View Calendar"
        And I click on "New Event"
        And I populate the following fields 
        | Subject | testSubject|
        | Location| Argentina  |
        | Description | this is an event added by an Automation test|
        And I click on "SaveNewEvent"
        And Verifico que el campo "ToastNewEventSaved" contenga el texto "was created."
