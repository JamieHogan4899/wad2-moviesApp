let movies;
const movieId =  335983; // The movie Venom id
let reviews;

describe("Navigation", () => {
  before(() => {
    cy.request(
      `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .its("body")
      .then((response) => {
        movies = response.results;
      });
    // Get movie reviews
    cy.request(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${Cypress.env(
        "TMDB_KEY"
      )}`
    )
      .its("body")
      .then((response) => {
        // console.log(response);
        reviews = response.results;
      });
  });
 
  beforeEach(() => {
    describe("Go to page and login", () => {
    cy.visit("/") // go to home page

    cy.get("h1").contains("Please login to continue"); //check to see if being asked for a login

    let username = "user1";
    const password = "test1";

    cy.get("#username").clear().type(username); // Enter username in text box
    cy.get("#password").clear().type(password);

    cy.get("#login-button").click()



    });
  });



  describe("From the home page", () => {
    it("should navigate to the movie details page and change browser URL", () => {
      cy.get(".MuiCardActions-root").eq(0).contains("More Info").click();
      cy.url().should("include", `/movies/${movies[0].id}`);
      cy.get("h3").contains(movies[0].title);
    });

    describe("The site header", () => {
        describe("when the viewport is desktop scale", () => {
          it("should allow navigation to the Favourites page from the link", () => {
            cy.get("header").find(".MuiToolbar-root").find("button").eq(2).click().click();
            cy.url().should("include", `/favorites`);
            cy.get("h3").contains("Favorite Movies");
          });
        });
        // describe(
        //   "when the viewport is a mobile",
        //   {
        //     viewportHeight: 896,
        //     viewportWidth: 414,
        //   },
        //   () => {
        //     it("should allow navigation to the Favourites page from the dropdown menu", () => {
        //       cy.get("header").find("button").click();
        //       cy.get("li").eq(3).click();
        //       cy.url().should("include", `/favorites`);
        //       cy.get("h3").contains("Favorite Movies");
        //     });
        //   });
      });
      describe("From the Favorites page", () => {
        beforeEach(() => {
          cy.get("button[aria-label='add to favorites']").eq(0).click();
          cy.get("button[aria-label='add to favorites']").eq(1).click();
          cy.get("header").find(".MuiToolbar-root").find("button").eq(1).click();
        });
        it("should navigate to the movies detail page and change the browser URL", () => {
          cy.get(".MuiCardActions-root").eq(0).contains("More Info").click();
          cy.url().should("include", `/movies/${movies[0].id}`);
          cy.get("h3").contains(movies[0].title);
        });
      });
      describe("The forward/backward links", () => {
        beforeEach(() => {
          cy.get(".MuiCardActions-root").eq(0).contains("More Info").click();
        });
        it("should navigate backward and forward between the movies detail page and the Discover page.", () => {
          cy.get("button[aria-label='go back'").click();
          cy.get("h3").contains("Discover Movies");
          cy.url().should("not.include", `/movies/${movies[0].id}`);
          cy.get("button[aria-label='go forward'").click();
          cy.url().should("include", `/movies/${movies[0].id}`);
          cy.get("h3").contains(movies[0].title);
        });
      });
      describe("The forward/backward links", () => {
        beforeEach(() => {
            cy.get(".MuiCardActions-root").eq(0).contains("More Info").click();
            cy.get("header").find(".MuiToolbar-root").find("button").eq(2).click();
    });
          it("navigation works between the Favorite movies page and the movie details page", () => {
            cy.get("button[aria-label='go back'").click();
            cy.get("h3").contains("Overview");;
            cy.get("button[aria-label='go forward'").click();
            cy.get("h3").contains("Favorite");;
        
    });
    });
    });
});

           