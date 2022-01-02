# Assignment 1 - ReactJS app.

Name: Jamie Hogan

## Overview.

CA 1 web development movies app

### Features. 
+ Upcoming Movies Page
+ Add to playlist button, no functionality just prints to console
+ Trending Movies page
+ Can add trending movies to favorites movies
+ Tv shows listing page added
+ Can see more info and reviews about these tv shows
+ Can add a favourite tv show 
+ Site header updated to inclue login button

## API endpoints.
+ Get trending movies for that day - trending/movie/day
+ Get popular Tv shows -/tv/popular
+ Get tv show imaages for display on more info page- tv/${id}/images
+ When user clicks more info on tv show card, get the infomation for that - tv/${id}
+ Get the tv gernes for the filter card - tv/${id}
+ Get the reviews for a tv show - tv/${id}

## ÙI Design
![image](https://user-images.githubusercontent.com/78024990/145207541-5fed1c56-26f4-49b8-a95e-3a8854dddc61.png)
Upcoming movies very simaler to home page, more info and review buttons work the exact same way as Home page also. The add to playlist button works, see console see functionality

![image](https://user-images.githubusercontent.com/78024990/145208175-99ca1235-206e-475a-b0e3-39797da36d82.png)
Trending movies page, again works simaler to the home page, more info and review work the same again. User can add a favourite movie here also and can see it in the favourite movies tab. 

![image](https://user-images.githubusercontent.com/78024990/145208508-e36a14d8-3576-4fe6-8d20-fa51d6685a58.png)
Tv shows page, looks simaler to the Home page, however new card and template page made to use the tv show API. Filter card also changed to use tv genres. Can add a favourite tv show.

![image](https://user-images.githubusercontent.com/78024990/145209156-f9cf21e1-a426-4176-8a9a-d26917ae447d.png)
New template more info page, to work with tv show infomation. Lookswise very simaler to more info on movies page, however infomation shown is more suited to tv shows. 

![image](https://user-images.githubusercontent.com/78024990/145209784-0f459c6f-b610-4979-8491-56d9961ac14c.png)
Again the reviews look simaler to movies for continuity, created from scrath to be more suited to tv shows. 

![image](https://user-images.githubusercontent.com/78024990/145210108-9d33c5f2-756c-4f86-84ef-1eeb61026f94.png)
Tv shows favourites page created from scratch, using new context to allow user to see favourited tv shows and unfavouite them. More info button brings you to tv show details page

## Routing
![image](https://user-images.githubusercontent.com/78024990/145210712-acde8ee5-cc97-4e5a-ad2c-2cffbcd5c4bf.png)

/movies/Trending - shows trending movies for that day 
/movies/upcoming - shows upcoming movies
/shows/tvShowsPage - shows popular tv shows
/shows/TvShowFavPage - shows what tv shows the user has favourite 
/shows/:id - shows more info on whatever the show the user clicked on
/tvreviews/:id - shows the reviews if any for a tv show

## Independent learning (If relevant).
Bug fix for filter card : https://stackoverflow.com/questions/8217419/how-to-determine-if-javascript-array-contains-an-object-with-an-attribute-that-e
Login button 






