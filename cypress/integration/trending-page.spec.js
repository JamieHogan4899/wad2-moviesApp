let movies;    // List of movies from TMDB
let trending;

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

    before(() => {
      cy.request(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${Cypress.env(
          "TMDB_KEY"
        )}&language=en-US&include_adult=false&include_video=false&page=1`

      )
        .its("body")
        .then((response) => {
          trending = response.results;
        });
      });


    it("Navagation Between Home Page and Trending Page", () => {
      cy.get("header").find(".MuiToolbar-root").find("button").eq(3).click();  //use header to go to trending
      cy.get("h3").contains("Trending Movies");  //check page is trending

      cy.get("header").find(".MuiToolbar-root").find("button").eq(0).click();  //go back home using header
      cy.get("h3").contains("Discover Movies"); //check my page is home

      cy.get("button[aria-label='go back'").click();  //use back button to go back to trending 
      cy.get("h3").contains("Trending Movies");; //check page is trending 

      cy.get("button[aria-label='go forward'").click();  //use forword button to go back home
      cy.get("h3").contains("Discover Movies");;  //check im back home
    });


    it("Navagation between more info and favourites using trending", () => {
      cy.get("header").find(".MuiToolbar-root").find("button").eq(3).click();  //use header to go to trending
      cy.get("h3").contains("Trending Movies");  //check page is trending

      cy.get(".MuiCardActions-root").eq(0).contains("More Info").click(); //Click on card 1 more info button 
      cy.url().should("include", `/movies/${trending[0].id}`); //check url is new one 

      cy.get("header").find(".MuiToolbar-root").find("button").eq(1).click();  //use header to go to trending
      cy.get("h3").contains("Favorite Movies");  //check page is favourites 

      cy.get("button[aria-label='go back'").click();  //use back button to go back to more info
      cy.get("button[aria-label='go back'").click();  //use back button to go back to trending 
});
});

describe("Favorite Testing", () => {    
  it("Adding a favourite from trending page", () => { 

    cy.get("header").find(".MuiToolbar-root").find("button").eq(3).click();  //use header to go to trending
    cy.get("h3").contains("Trending Movies");  //check page is trending

    cy.get("button[aria-label='add to favorites']").eq(0).click();  //get 1st card favourite button and click it 
    cy.get("header").find(".MuiToolbar-root").find("button").eq(1).click(); //check favourites page to see if its there 
});
it("Unfavouriting a movie, favourited in trending page", () => { 




});
});

