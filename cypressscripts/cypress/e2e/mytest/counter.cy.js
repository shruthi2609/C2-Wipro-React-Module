it("inital value of count",()=>{
    cy.visit("http://localhost:3000")
    cy.get("h3").should("have.text","0")
    cy.contains('+').click()
    cy.contains('+').click()
    cy.contains('+').click()
    cy.contains('+').click()
    cy.contains('+').click()
    cy.contains('+').click()
    cy.contains('+').click()
    cy.get("h3").should("have.text","7")

})