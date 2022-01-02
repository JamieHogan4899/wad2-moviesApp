let movieId = 335983; // The movie Venom
let movie;
let reviews;


  beforeEach(() => {
    cy.visit(`/`);



    cy.get("h1").contains("Please login to continue"); //check to see if being asked for a login

    let username = "user1";
    const password = "test1";

    cy.get("#username").clear().type(username); // Enter username in text box
    cy.get("#password").clear().type(password);

    cy.get("#login-button").click()

    cy.get(".MuiCardActions-root").eq(0).contains("More Info").click(); //Click on card 1 more info button 


  });








  describe("Base tests", () => {
    it("should display movie title in the page header", () => {
        cy.get("h3").contains("Spider-Man:");
    });

    it("should display the movie's details", () => {
      cy.get("h3").contains("Overview");

          });
       
  
    it("Movies Posters should be displayed", () => {
      cy.get("img").should('have.css', 'text-align', 'left')
    });
   
  });
    describe("Login button Test ", () => {
      it("Testing the login button", () => {
        cy.get("header").find(".MuiToolbar-root").find("button").eq(0).click(); //click login button
        cy.get("header").find(".MuiToolbar-root").find("button").eq(0).contains("Logout") //check button changed 
        cy.get("header").find(".MuiToolbar-root").find("button").eq(0).click(); //click login button
        cy.get("header").find(".MuiToolbar-root").find("button").eq(0).contains("Login") //check button changed 
      });


});
  