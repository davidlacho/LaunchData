# Launch Data (Finn AI Code Challenge)

## Product description

Launch Data is a small tool that lets users view upcoming space launch missions around the world, with some details about each one:

- Name of rocket being launched (e.g. "Falcon 9")
- Space agency responsible for the launch (e.g. "NASA")
- Launch location (e.g. "Cape Canaveral")
- Time of launch
- Wikipedia links for each launch, agency and rocket

### Technical Specifications

- Front-End: React, Material UI
- Back-End: NodeJS, Express, with data persisted in memory on server start from [LaunchLibrary](https://launchlibrary.net) API.

## Knowledge Demonstrated

Provide a link to your repo with a README file that has instructions on how to get the project running.
* ES6 Syntax
* Classes (React)
* Destructuring Assignment
* Promises (Axios)
* Modularization of API, Data Parsers

### Getting Started

-   Clone this repository
    `git clone https://github.com/fiveache/LaunchData.git`
-   In the root directory of this project, run `npm start`. It will install all necessary node modules for the client side.
-   Preview the project at <http://localhost:5000/>.

### API
- You can view all launch data at <http://localhost:5000/api/launch>
- You can view specific rocket launch data at <http://localhost:5000/api/launch/[RocketID]>.

### Screenshot

!["Screenshot"](https://github.com/fiveache/LaunchData/blob/master/docs/screenshot.png?raw=true)