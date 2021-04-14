describe("My First Test", function()
{
    it('verify title of the page',function()
    {
     cy.visit('https://sportspark.online/')
     cy.title().should ('eq', 'Home - Sports Park')
     cy.get('.mvp-stand-title').click()
     cy.get('.mvp-nav-soc-head').should ('have.text' , 'Connect with us').should ('be.visible')
     cy.get('.author-name').click()
     cy.get('.mvp-nav-search-but').click()
     cy.get('#s').click()
     cy.get('#s').type('cricket news').type('{enter}')
     cy.get('#s').type('{enter}')
     cy.get('#mvp-top-nav-logo').click()
    
    })
})
