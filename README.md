# AirportLabs-Test - Cicas Daniel

## Project description
A bit of background. I have more experience in automation with Selenium, Java, cucumber and Serenity BDD.  This project proved challenging for me because I had no experience in Cypress and JS. So I ended up learning as much as needed to get it to the finish line.

## Challenges faced
Due to the short time allocated to this test, my filosofy was to make it as fast as possible, with very limited knowledge of how Cypress functions.
My Biggest challenge was verifying that the social links redirect properly. There were several issues I encountered: 

1. Here my lack of knowledge of cypress showed as i did not know  that Cypress can't handle multiple tabs.To work around this, I removed the attribute target, forcing it to open in the same tab.  

2. For facebook specifically when opening the tab, there is a problem loading the page. I assume facebook blocks the 'spec-bridge' or the cypress user agent (also I did not implement login features so maybe thats the reason?)

3. For Facebook, Instagram and LinkedIn there is something weird happening that is causing my tests to fail. I left them to fail just to show how they fail, even though they clutter the test suite.
In the viewport (?) I can clearly see that the url has changed to facebook/instagram/linkedin but when using cy.log(cy.url)  it returns the airportlabs url even after visually changing. I honestly don't know what happens here and  I dont have enought time to figure it out. But would love to know whats happening under the hood.

4. There is a chance that the most expensive TV on emag might be sold out before you will view this test. In which case the test will fail.

## Things to improve
1. As I understood it cypress has awaits built into almost every method but when working on eMag the implicit awaits where fulfilled but the element was still loading. So a more elegant solution would be required here.

2. I would have like to at least use the alias feature. I really prefer the POM approach as its more organised and I would have liked to create this test with POM.

3. Create a more future proof method for buying the most expensive TV.

## Setup

Have node.js (version 20.13.1) and npm (version 10.5.2) installed.

Install cypress by using this command in your CLI `npm install cypress --save-dev` 

Download my project in a folder locally.

## Running

To run my tests, open a terminal in the root directory of the project and run the following commands:

npx cypress open

Select E2E.

selesct the spec file.

