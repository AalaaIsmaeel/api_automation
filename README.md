# Solution

### Task 1:

#### Where would you start? What would be your first steps?
  Will start with Team allocation, assigning tasks to them based on the experience.
  First step: get the documentation of the project and start doing exploratory testing to get overview about the system. 


#### Which process would you establish around testing new functionality? How would you want the features to be tested?

 1- start with requirements analysis and finds business gaps and impacted areas. <br />
 2- When the requirements are clear and covered all cases, List all impacted areas in the system and include them in the testcases to increase the coverage. <br />
 3- Design the test cases and link them with the story. <br />
 4- Prepare Test date. <br />
 5- Generate the Testplan with all the testcases. <br />
 6- When the development is done, Start executing the test cases and report bugs. <br />
 7- Follow up on fixing the bugs till all listed bugs are closed. <br />
 8- Send status report for the all team to keep them updated. <br />

#### If you would do test automation which techniques or best practices would you use?

1- Start with the tool selection based on project need and team experience. <br />
2- Prepare a test plan with all high priority and critical modules in the system to be automated. <br />
3- Set Up The Test Environment. <br />
4- Use the Page Object Model Design and BDD for readability. <br />
5- Make the code compatible for different OS and browsers. <br />
5- Set up configuration for remote execution (for example: Github Actions). <br />
6- Integrate the framework with a good reporting framework. <br />


---


###Task 2:

#### Picked Movies (Game Of Thrones) apis, Add character, Get all listed characters and Get specific character by ID. 

TestCases: 
Scenario 1: Verify that Add new Character api is working properly. <br />
Scenario 2: Verify that user will not be able to Add new character using invalid data. <br />
Scenario 3: Verify that User can list all characters successfully. <br />
Scenario 4: Verify the displayed error message when user search for not exist character. <br />
Scenario 5: Verify that User can get specific character. <br />
Scenario 6: Verify that user can get all Continents successfully. <br />
Scenario 7: Verify that user can get specific Continent by ID. <br />
Scenario 8: Verify the displayed error message when user search for not exist Continent. <br />

#### How to improve:

1- add more coverage for the testcases and different API responses. <br />
2- Make E2E scenarios for a whole flow. <br />
3- integrate the test cases with ci cd pipeline. <br />

### Proof of success

![](../Screen Shot 2022-10-18 at 8.58.28 PM.png)