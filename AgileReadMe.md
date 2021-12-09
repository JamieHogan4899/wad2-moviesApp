# Assignment 1 - ReactJS app.

Name: Jamie Hogan

## Overview.
In this repo is my movies app. The files also includes cypress tests made for the pages in the movies app. 

### Features.
 
+ Login Button Tests on all pages
+ Upcoming Page added, new features tested
+ Trending Page added, new features tested
+ Popular Tv S?how Page added, new page tested 
+ User can see details and reviews on tv shows, these features also tested
+ User can select a Favourite TV show, this feature tested

## API endpoints.
Get trending movies for that day - trending/movie/day
Get popular Tv shows -/tv/popular
Get tv show imaages for display on more info page- tv/${id}/images
When user clicks more info on tv show card, get the infomation for that - tv/${id}
Get the tv gernes for the filter card - tv/${id}
Get the reviews for a tv show - tv/${id}

##ÙI Design
![image](https://user-images.githubusercontent.com/78024990/145415226-e74c10be-c0fd-4b87-85ec-0fa1d28443ec.png)
Upcoming movies very simaler to home page, more info and review buttons work the exact same way as Home page also. The add to playlist button works, see console see functionality. 
Add to playlist button tested, but because the button has no functionality the test has no "check".

![image](https://user-images.githubusercontent.com/78024990/145415484-d52920b4-2dda-4105-a5d8-da9a373734ae.png)
Trending movies page, again works simaler to the home page, more info and reviews work the same again. User can add a favourite movie here also and can see it in the favourite movies tab. More info and Favourite Buttons both tested.

![image](https://user-images.githubusercontent.com/78024990/145416190-983b0c9f-ab60-426c-9157-37cc0bf317f9.png)
Tv shows page, looks simaler to the Home page, however new card and template page made to use the tv show API. Filter card also changed to use tv genres. Can add a favourite tv show. New card tested, along with new filter card, seaching and favourites. 

![image](https://user-images.githubusercontent.com/78024990/145416402-285e06f0-a34e-4600-b0c9-03f55afff16f.png)
Tests also done to check user can see the more info page and reviews.

##Routing
![image](https://user-images.githubusercontent.com/78024990/145416581-6689af6a-5db9-48ae-bbdf-d7e24d7419ec.png)
/movies/Trending - shows trending movies for that day /movies/upcoming - shows upcoming movies /shows/tvShowsPage - shows popular tv shows /shows/TvShowFavPage - shows what tv shows the user has favourite /shows/:id - shows more info on whatever the show the user clicked on /tvreviews/:id - shows the reviews if any for a tv show

Independent learning (If relevant).



