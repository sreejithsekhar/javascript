## Welcome to the PatientPing take home application

This application was started with create-react-app. The basic start can be done by the command `npm start` after running `npm install`. The [original cra README](./CRA-README.md) is in this repo and you can refer to that for details of how to run the application.

## What to do

Run the app for all the details of what to do, it will show up in the browser. As a summary this is a simple application that interacts with the Massachusetts Bay Transportation Authority (MBTA) api. While we are interested in the code that you write what is at least as important are the conversations that we can have about what is done. Do what you need to do to achieve the requirements, examples of urls to use the api are in the file 'api examnples.txt', you are welcome to install whatever libraries you would like.

## Things not to do:

- Don't spend more than 2 hours on this
- Don't share this or post it online

## If you're stuck, or have a question

Go ahead and make any reasonable assumption to move ahead and complete the exercise. When you submit your solution, include some brief notes describing any assumptions you based your implementation on.
If you have a question that you'd really like to get an answer on, then reach back out to the recruiter who sent you this exercise, and they will try and get you an answer.

## What to do

Fix the bugs and implement the feature. They can be done in any order though the first bug is preventing the application from working.

# Bug 1

The routes are not loading into the application, the network request happens but the routes do not show. There is a `routes` prop in the Home component where the routes will be written to the page once that contains the routes from the service.

# Bug 2

The height of the container does not grow with the content.

# Bug 3

There is supposed to be a hover on the route names.

# Bug 4

After navigating away from the home page and then coming back the route that was selected is not preserved, it should be.

# Feature 1

Implement a new route '/stop-detail' that recieves lists all the the facility details for that stop. (the endpoint to hit to get this information can be gotten directly from the results of the stops endpoint so I don't think we should say this specifically)

# Note

See the video of a demonstration of the [working application](./mbta.mp4).
