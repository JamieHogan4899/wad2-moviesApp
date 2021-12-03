let movies;    // List of movies from TMDB
let Upcoming;

// Utility functions
const filterByTitle = (movieList, string) =>
  movieList.filter((m) => m.title.toLowerCase().search(string) !== -1);

const filterByGenre = (movieList, genreId) =>
  movieList.filter((m) => m.genre_ids.includes(genreId));

  describe("trending Tests ", () => {
    before(() => {
      // Get movies from TMDB and store in movies variable.
      cy.request(
        `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
          "TMDB_KEY"
        )}&language=en-US&include_adult=false&include_video=false&page=1`
      )
        .its("body")    // Take the body of HTTP response from TMDB
        .then((response) => {
          movies = response.results
        })
    })
    beforeEach(() => {
        cy.visit("/movies/Upcoming")
      });
    
     
        describe("Page test", () => {
            it("displays page header", () => {
              cy.get("h3").contains("Upcoming Movies");
              cy.get("h1").contains("Filter the movies");
            });
          });
      
    });

    describe("Navagation Tests", () => {     

        before(() => {
          cy.request(
            `https://api.themoviedb.org/3/trending/movie/day?api_key=${Cypress.env(
              "TMDB_KEY"
            )}&language=en-US&include_adult=false&include_video=false&page=1`
    
          )
            .its("body")
            .then((response) => {
              Upcoming = response.results;
            });
          });
    
            
      beforeEach(() => {
        cy.visit("/movies/Upcoming")
      });
    
        
    

          it("Navagation Between Home Page and Upcoming Page", () => {
            
            cy.get("header").find(".MuiToolbar-root").find("button").eq(0).click();  //go back home using header
            cy.get("h3").contains("Discover Movies"); //check my page is home
      
            cy.get("button[aria-label='go back'").click();  //use back button to go back to trending 
            cy.get("h3").contains("Upcoming Movies");; //check page is trending 
      
            cy.get("button[aria-label='go forward'").click();  //use forword button to go back home
            cy.get("h3").contains("Discover Movies");;  //check im back home
          });
      
        

        });