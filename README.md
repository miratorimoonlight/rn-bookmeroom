# Overview

I built this app to learn about styling, navigation, and how to use external libraries like Google Maps in React Native.

# Set up project

Run `yarn install`

## Set up .env for Google Maps API

1. Go to Google cloud console and Create a project.
2. Set up **billing account** and connect to the project.
3. Generate API key by going to **Credentials** -> **Create Credentials** -> **API Keys**
4. Enable Places API
5. Copy the API and paste in **.env** file

## Set up for iOS

1. run `cd ios; pod install` to install dependencies for ios app.
2. run `yarn start` to start Metro server
3. run `yarn ios` to build the app in dev mode

## Set up for android

1. run `yarn start`
2. run `yarn android`

# Features that I have built:
1. Tab Navigation
2. Search auto complete using Google Places API
3. Beautiful Styling:   
    a. Welcome screen  
    b. Location search screen  
    c. How many people? screen  
    d. Search result list screen  
    e. Map screen
