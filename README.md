# Click Game

## Description

The objective of this game is to select images that you have not already selected.

There are 12 images that are rearranged each time you select on image.

The challenge is to remember what images you already selected and not select them again

You can play the game at https://fathomless-waters-77786.herokuapp.com/ or install it locally per the Installation instructions below.

## Using the Application

1. The application consist of 1 page.
1. Select an image.
1. If the image has not yet been selected, your current score will increase by 1
1. If you select an image a second time, the current game ends and the high score is updated if needed.
1. Each time you select an image, the images are redisplayed randomly.

![Home](/homepage.png?raw=true "Home Page")

## Technical Details

The application was built using React.

There are no API's, routes or a database.

## Dependancies

    "react": "^16.4.1",
    "react-bootstrap": "^0.32.1",
    "react-dom": "^16.4.1",
    "react-scripts": "1.1.4"

## Installation

1. Clone repository clickgame from git@github.com:remrobem/clickgame.git
1. Open a terminal session for the directory where the application was cloned to
1. Run `yarn install` to initialize the application. This only needs to be one time.
1. Run `yarn start` to start the application
1. The game will open in your default browser

## Database

1. This application does not use a database