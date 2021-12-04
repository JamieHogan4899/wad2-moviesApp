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
            cy.get("header").find(".MuiToolbar-root").find("button").eq(2).click();  //go back home using header
            cy.get("h3").contains("Discover Movies"); //check my page is home

            cy.get("button[aria-label='go back'").click();  //use back button to go back to trending 
            cy.get("h3").contains("TV Shows");; //check page is Tv Shows Page

            cy.get("button[aria-label='go forward'").click();  //use forword button to go back home
            cy.get("h3").contains("Discover Movies");;  //check im back home
});

            it("Testing to check the more info button works and can navigate back to TvShow page", () => {

            cy.wait(100)   //wait to go back to Tv show page    

            cy.get(".MuiCardActions-root").eq(0).contains("More Info").click(); //Click on card 1 more info button 
            cy.url().should("include", `/shows/${tvShows[0].id}`); //check url is new one 

            
            cy.get("header").find(".MuiToolbar-root").find("button").eq(6).click();  //use header to go to Upcoming
            cy.get("h3").contains("TV Shows");  //check page is favourites 

});
});
});




