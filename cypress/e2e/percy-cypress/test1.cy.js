describe('', () => {
    describe('teste de regressao visual', () => {
        it('Check homepage', () => {
            cy.visit('http://localhost:3000/')
            cy.percySnapshot('Homepage responsive test')
        })
    })
})