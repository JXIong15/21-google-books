# 21-google-books
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Table of Contents
* [Introduction](#introduction)
* [Functionality](#functionality)
* [Tasks Completed](#tasks-completed)
* [Technologies Used](#technologies-used)
* [Installations](#installations)
* [Demo](#demo)
* [Known Issues](#known-issues)
* [Future Ideas](#future-ideas)
* [Sources](#sources)
* [License](#license)


 ## Introduction
An online portfolio developed using ReactJS. The portfolio contains a biography, work page with current coding projects, and a contact page with a submittable email form.
* Deployed App: https://jxiong15.github.io/20-react-portfolio/
* GitHub: https://github.com/JXIong15/20-react-portfolio
<p align="center"><img src="./public/Assets/react.png" width="100%" stylealt="homepage/bio page"/></p>


## Functionality
* When the user loads the page, they are shown a biography of the portfolio.
* Clicking on the `navtabs` at the top allow for page changes.
* In the `My Work` section, there are two buttons. Clicking on either button will display either `Group Projcts` or `Individual Work`.
  * Each project's image is clickable to the deployed app.
  * The title is clickable to the GitHub Repo.
* In the `Contact Page`, the contact information is clickable.
  * The `Formspree` form can be filled out to send out inquiries.


## Tasks Completed
* Dowloaded necessary NPM packages with `npm install` on the Command Line
* Created `src` and necessary folders for development
* Created a `React-Router nav bar` to display different pages.
* Created a header, footer, and body using React.
* In the work page, GitHub profile is clickable.
* Created arrays for Homework and Group Projects. Set these arrays as states in the `Body.js`. 
  * Passed this state as a ProjectList prop through `Work.js` to `Project.js`. Passed the HWList prop to the `Homework.js` file.
  * Mapped over the `ProjectList` arrays to the `IndividualProject` component, displaying all projects using the same component.
  * Since the `Individual Work` is displayed in two columns, had to create another array with each place in the array containing two of the homework assignments.
    * Mapped over this array by passing each homework pair to `IndividualHW`.
    * In `Individual Homework`, assigned each homework array to it's own constant. Pulled out needed data from each array to display in the return method as a row of two hw.
* On the contact page, links are clickable.
  * Form is created by Formspree and will send emails once submitted.

<p align="center"><img src="./public/Assets/contact.png" width="100%" stylealt="contact page with contact form"/>Contact Page</p>


## Technologies Used
* GitHub Pages
* React
* Props-States
* NavLinks/Routers
* FormSpree


## Installations
* FormSpree React
* React-Router-Dom
* React
* GH-Pages


## Demo
* App Demo:
<p align="center"><img src="./public/Assets/demo.gif" width="100% height="100%" stylealt="app demo"/></p>

* Mobile Images:
<p align="center">
  <img src="./public/Assets/mobile-abt.png" width="30% height="100%" stylealt="app mobile demo"/>
  <img src="./public/Assets/mobile-individual-work.png" width="30% height="100%" stylealt="app mobile demo"/>
  <img src="./public/Assets/20-mobile-contact.png" width="30% height="100%" stylealt="app mobile demo"/>
</p>


## Known Issues
* On Saved page, couldn't remove `\` (backslashes) from author(s)


## Future Ideas
* allow for more than 10 search results by clicking on "See More" button at the bottom of results.


## Sources
* NPM Packages: https://www.npmjs.com/
* GitHub Pages: https://pages.github.com/
* FormSpree: https://formspree.io/
* React: https://reactjs.org/


## License
Licensed under the [MIT License](LICENSE).

<p align="center">© 2021 Trilogy, Northwestern Coding Bootcamp</p>