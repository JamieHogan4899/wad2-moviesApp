let tvShows;   

// Utility functions
const filterByTitle = (showList, string) =>
  showList.filter((m) => s.name.toLowerCase().search(string) !== -1);

const filterByGenre = (showList, genreId) =>
  showList.filter((m) => s.genre_ids.includes(genreId));

  describe("Tv Show Page ", () => {
    before(() => {
      // Get movies from TMDB and store in movies variable.
      cy.request(
        `https://api.themoviedb.org/3/tv/popular?api_key=${Cypress.env("TMDB_KEY")}&language=en-US&include_adult=false&include_video=false&page=1`
        )
        .its("body")    // Take the body of HTTP response from TMDB
        .then((response) => {
          tvShows = response.results
        })
    })

    beforeEach(() => {
        cy.visit("/shows/tvShowsPage")
      });


      
      describe("Page test", () => {
        it("displays page header", () => {
          cy.get("h3").contains("TV Shows");
          cy.get("h1").contains("Filter the Shows");
        });
      });   


      describe("Navagation Tests", () => {  


        before(() => {
            cy.request(
              `https://api.themoviedb.org/3/tv/popular?api_key=${Cypress.env("TMDB_KEY")}&language=en-US&include_adult=false&include_video=false&page=1`
      
            )
            .its("body")
            .then((response) => {
              tvShows = response.results;
            });
          });


          
          beforeEach(() => {
            cy.visit("/shows/tvShowsPage")
          });

          it("Navagation Between Home Page and Tv Show Page", () => {
            cy.wait(1500);

            cy.get("header").find(".MuiToolbar-root").find("button").eq(2).click();  //go back home using header
            cy.get("h3").contains("Discover Movies"); //check my page is home

            cy.get("button[aria-label='go back'").click();  //use back button to go back to trending 
            cy.get("h3").contains("TV Shows"); //check page is Tv Shows Page
            cy.wait(1500);

            cy.get("button[aria-label='go forward'").click();  //use forword button to go back home
            cy.get("h3").contains("Discover Movies");  //check im back home
});

            it("Testing to check the more info button works and can navigate back to TvShow page", () => {

            cy.wait(500)   //wait to go back to Tv show page    

            cy.get(".MuiCardActions-root").eq(0).contains("More Info").click(); //Click on card 1 more info button 
            cy.url().should("include", `/shows/${tvShows[0].id}`); //check url is new one 

            
            cy.get("header").find(".MuiToolbar-root").find("button").eq(6).click();  //use header to go to TvShows Page
            cy.get("h3").contains("TV Shows");  //check page is favourites 

});
            it("Testing to check can user see reviews", () => {

            cy.get(".MuiCardActions-root").eq(0).contains("More Info").click(); //Click on card 1 more info button 
            cy.url().should("include", `/shows/${tvShows[0].id}`); //check url is new one 

            cy.wait(2500);
            cy.get(".MuiButtonBase-root").eq(10).contains("Reviews").click(); //Get the review button and click 

            cy.get(".MuiTableCell-root").contains("Author"); //Check Review Drop Menu pops down

});
});

          describe("Filtering Tests", () => { 
  
          beforeEach(() => {
          cy.visit("/shows/tvShowsPage")
           });

           
          it("Check to see if user can change genre for Tv Shows", () => { 
          const selectedGenreText = "Comedy";
          const backToAll = "All";

          cy.get("#Tvgenre-select").click(); //click genre drop down menu 
          cy.get("li").contains(selectedGenreText).click();  //use selectedGenreText to select comedy
       
          cy.wait(400);
      
          cy.get("#Tvgenre-select").click(); //click genre drop down menu 
          cy.get("li").contains(backToAll).click();  //use selectedGenreText to select All

});

          it("search for shows with the letter A", () => { 
          let searchString = "b"; 
          cy.get("#filled-search").clear().type(searchString); // Enter b in text box
          });

          it("testing filterting and searching together", () => { 
          const selectedGenreText = "Comedy";
          let searchString = "r"; 

          cy.get("#Tvgenre-select").click(); //click genre drop down menu 
          cy.get("li").contains(selectedGenreText).click();  //use selectedGenreText to select comedy

          cy.get("#filled-search").clear().type(searchString); // Enter b in text box
  
});

});


            describe("Tv Favorite Testing", () => {    
              it("Add a Favourite Tv Show", () => { 
              cy.get("header").find(".MuiToolbar-root").find("button").eq(6).click();  //use header to go to Tv Shows
              cy.get("h3").contains("TV Shows");  //check page 

              cy.get("button[aria-label='add to favorites']").eq(0).click();  //get 1st card favourite button and click it 
              cy.get("header").find(".MuiToolbar-root").find("button").eq(7).click(); //check favourites page to see if its there 

              cy.get(".MuiCardActions-root").eq(0)
            });

            it("Unfavouriting a show", () => { 
              cy.get("header").find(".MuiToolbar-root").find("button").eq(6).click();  //use header to go to Tv Shows
              cy.get("h3").contains("TV Shows");  //check page 

              cy.get("button[aria-label='add to favorites']").eq(0).click();  //get 1st card favourite button and click it 
              cy.get("header").find(".MuiToolbar-root").find("button").eq(7).click(); //tv favourites Page
               
              cy.get("button[aria-label='remove from favorites']").eq(0).click(); //click the unfavourite button
});

              it("Favourite Tv Shows Filters (searching)", () => {      
                let searchString = "e"; 
                
                cy.get("#filled-search").clear().type(searchString); // Enter b in text box
  
                cy.get("button[aria-label='add to favorites']").eq(0).click();  //get 1st card favourite button and click it 

                cy.get("header").find(".MuiToolbar-root").find("button").eq(7).click(); //tv favourites Page
                cy.wait(400)
             
                cy.get("#filled-search").clear().type(searchString); // Enter b in text box
                cy.get(".MuiCardActions-root").eq(0)

});




});
});

