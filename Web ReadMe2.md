# Assignment 2 - Web API.

Name: Jamie Hogan

## Features.
 + Feature 1 - Login Feature added + validation
 + Feature 2 -  Logout Feature added
 + Feature 3 -  PrivateRoutes added so user must sign in to acess site
 + Feature 4 - Updated API link so discover, upcoming, trendind, tvShows, and genres now no longer contact TMDB directly and use my own API (anything containing an id still works as before)
 + Feature 5 - Swagger Documentation for API. 

## Installation Requirements

Swagger Documentation: -npm install -g swagger
                       -swagger project edit   
                       
React App: npm install 

## API Configuration
REACT_APP_TMDB_KEY=....
FAST_REFRESH=false

## API Design

Documentation: https://app.swaggerhub.com/apis/20084469/movies-api/1.1.0

## Security and Authentication
All Routes Protected bar login and sign up so user needs to sing in before moving into the site

## Integrating with React App

I migrated each api call 1 by 1 to point to my api which then points to tmdb. I used proxy so my react app knew where to look for the api calls.
export const getUpcomingMovies = () => {
    return fetch(
       'api/movies/tmdb/upcoming',{headers: {
            'Authorization': window.localStorage.getItem('token')
        }
        }
        ).then(res => res.json());
    };

## Extra features

. . Briefly explain any non-standard features, functional or non-functional, developed for the app.  

## Independent learning

Swagger documentation was new to so i used 3 different refernces to understand how to use it:
https://swagger.io/docs/specification/basic-structure/
https://editor.swagger.io/
https://www.youtube.com/watch?v=mViFmjcDOoA

