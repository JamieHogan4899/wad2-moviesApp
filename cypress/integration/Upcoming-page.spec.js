let movies;    // List of movies from TMDB
let Upcoming;

// Utility functions
const filterByTitle = (movieList, string) =>
  movieList.filter((m) => m.title.toLowerCase().search(string) !== -1);

const filterByGenre = (movieList, genreId) =>
  movieList.filter((m) => m.genre_ids.includes(genreId));

  describe("Upcoming Tests ", () => {

   

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

      cy.get("h1").contains("Please login to continue"); //check to see if being asked for a login

    let username = "user1";
    const password = "test1";

    cy.get("#username").clear().type(username); // Enter username in text box
    cy.get("#password").clear().type(password);

    cy.get("#login-button").click()

    cy.get("header").find(".MuiToolbar-root").find("button").eq(3).click().click();  //use header to go to Upcoming


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
              `https://api.themoviedb.org/3/movie/upcoming?api_key=${Cypress.env("TMDB_KEY")}&language=en-US&include_adult=false&include_video=false&page=1`
      
            )
            .its("body")
            .then((response) => {
              Upcoming = response.results;
            });
          });

       
         
          it("Navagation Between Home Page and Upcoming Page", () => {
            cy.get("header").find(".MuiToolbar-root").find("button").eq(1).click();  //go back home using header
            cy.get("h3").contains("Discover Movies"); //check my page is home

            cy.get("button[aria-label='go back'").click();  //use back button to go back to trending 
            cy.get("h3").contains("Upcoming Movies");; //check page is trending 
      
            cy.get("button[aria-label='go forward'").click();  //use forword button to go back home
            cy.get("h3").contains("Discover Movies");;  //check im back home

    });

    it("Testing to check the more info button on upcoming page", () => {

     cy.wait(100)   //wait to go back to Upcoming page
        
      cy.get(".MuiCardActions-root").eq(0).contains("More Info").click(); //Click on card 1 more info button 
      cy.url().should("include", `/movies/${Upcoming[0].id}`); //check url is new one 
   
      
      cy.get("header").find(".MuiToolbar-root").find("button").eq(3).click();  //use header to go to Upcoming
      cy.get("h3").contains("Upcoming Movies");  //check page is favourites 
});
});

describe("Filtering Tests", () => { 
  
  
    it("Check to see if user can change genre on upcoming page", () => { 
        const selectedGenreText = "Comedy";
        const backToAll = "All";

    cy.get("#genre-select").click(); //click genre drop down menu 
    cy.get("li").contains(selectedGenreText).click();  //use selectedGenreText to select comedy

      
    cy.wait(400);

    cy.get("#genre-select").click(); //click genre drop down menu 
    cy.get("li").contains(backToAll).click();  //use selectedGenreText to select All
    });

    it("search for movies with the letter A", () => { 
        let searchString = "b"; 
        cy.get("#filled-search").clear().type(searchString); // Enter b in text box
      });
    
      it("testing filterting and searching together", () => { 
        const selectedGenreText = "Comedy";
        let searchString = "r"; 
    
        cy.get("#genre-select").click(); //click genre drop down menu 
        cy.get("li").contains(selectedGenreText).click();  //use selectedGenreText to select comedy
    
        cy.get("#filled-search").clear().type(searchString); // Enter b in text box
        
    });


    describe("Login button Test ", () => {
      it("Testing the login button", () => {
        cy.get("header").find(".MuiToolbar-root").find("button").eq(0).click(); //click login button
        cy.get("header").find(".MuiToolbar-root").find("button").eq(0).contains("Logout") //check button changed 
        cy.get("header").find(".MuiToolbar-root").find("button").eq(0).click(); //click login button
        cy.get("header").find(".MuiToolbar-root").find("button").eq(0).contains("Login") //check button changed 
      });
    });
    
  });


  //feature 1 finised 
