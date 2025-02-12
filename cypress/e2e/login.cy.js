describe("Home page", () => {
  it("should log in a user", () => {
    cy.visit("/");
    cy.contains("Kitchen Sink").should("be.visible");
  });
});
