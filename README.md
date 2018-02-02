# CLSG Demo Site
This is the repository for the demo site I have prepared, which can be found [here](https://clsg-vcgvjsvxgm.now.sh/).

## Overview
The site is built with Node.js and Express. I used GulpJS for task management (primarily processing SASS), and EJS for the templating language. 

There are three routes - one for home, one for the simulations list, and one for individual simulations. 

The information for each of the simulations is coming from a sample data.json file I created.

I also used Tiny Slider, a vanilla javascript library for creating the carousel functionality.  

The demo site is deployed on Now (Zeit).

## Installation
1. Must have node installed
2. Clone this repository into your local machine `git clone CLONEURL`
3. CD to the folder `cd FOLDERNAME`
4. Run `npm install` to install the project dependencies
5. Run `gulp` to start server
