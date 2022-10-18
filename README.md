###Task 1:

Where would you start? What would be your first steps?
  Will start with Team allocation, assigning tasks to them based on the experience.
  First step: get the documentation of the project and start doing exploratory testing to get overview about the system. 


Which process would you establish around testing new functionality? How would you want the features to be tested?

 1- start with requirements analysis and finds business gaps and impacted areas.
 2- When the requirements are clear and covered all cases, List all impacted areas in the system and include them in the testcases to increase the coverage
 3- Design the test cases and link them with the story
 4- Prepare Test date
 5- Generate the Testplan with all the testcases
 6- When the development is done, Start executing the test cases and report bugs
 7- Follow up on fixing the bugs till all listed bugs are closed.
 8- Send status report for the all team to keep them updated 

If you would do test automation which techniques or best practices would you use?

1- Start with the tool selection based on project need and team experience.
2- Prepare a test plan with all high priority and critical modules in the system to be automated
3- Set Up The Test Environment
4- Use the Page Object Model Design and BDD for readability.
5- Make the code compatible for different OS and browsers.
5- Set up configuration for remote execution (for example: Github Actions).
6- Integrate the framework with a good reporting framework.



###Task 2:

I picked Movies (Game Of Thrones) apis, Add character, Get all listed characters and Get specific character by ID. 

TestCases: 
Scenario 1: Verify that Add new Character api is working properly.
Scenario 2: Verify that user will not be able to Add new character using invalid data 
Scenario 3: Verify that User can list all characters successfully
Scenario 4: Verify the displayed error message when user search for not exist character
Scenario 5: Verify that User can get specific character
Scenario 6: Verify that user can get all Continents successfully
Scenario 7: Verify that user can get specific Continent by ID
Scenario 8: Verify the displayed error message when user search for not exist Continent

What I can make better

1- add more coverage for the testcases and different API responses
2- Make E2E scenarios for a whole flow.
3- integrate the test cases with ci cd pipeline