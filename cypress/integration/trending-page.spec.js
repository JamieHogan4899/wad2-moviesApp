let movies;    // List of movies from TMDB

// Utility functions
const filterByTitle = (movieList, string) =>
  movieList.filter((m) => m.title.toLowerCase().search(string) !== -1);

const filterByGenre = (movieList, genreId) =>
  movieList.filter((m) => m.genre_ids.includes(genreId));

describe("Home Page ", () => {
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
    cy.visit("/movies/Trending")
  });

 
    describe("Page test", () => {
        it("displays page header", () => {
          cy.get("h3").contains("Trending Movies");
          cy.get("h1").contains("Filter the movies");
        });
      });


      
});

  describe("Navagation Tests", () => {     
    it("Navagation Between Home Page and Trending Page", () => {
      cy.get("header").find(".MuiToolbar-root").find("button").eq(3).click();
      cy.get("h3").contains("Trending Movies");
      cy.get("header").find(".MuiToolbar-root").find("button").eq(0).click();
      cy.get("h3").contains("Discover Movies");
      cy.get("button[aria-label='go back'").click();
      cy.get("h3").contains("Trending Movies");;
      cy.get("button[aria-label='go forward'").click();
      cy.get("h3").contains("Discover Movies");;

     
     

       
  
    });

  });

