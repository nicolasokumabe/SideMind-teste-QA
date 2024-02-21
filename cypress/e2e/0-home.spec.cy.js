describe('home page', () => {

  // liberando o script do AT para o cypress
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  it('Dado que estou na pagina principal da AT', () => {
    // visita o site AT
    cy.visit('https://practice.automationtesting.in/shop/')
  })

  it('Entao devo ver uma lista de livros disponiveis', () => {
    cy.visit('https://practice.automationtesting.in/shop/')

    // Mostra a "estante de livros"
    cy.get('[class="products masonry-done"]')

    // Valida o texto Home / Shop
    cy.get('[class="woocommerce-breadcrumb"]').contains('Home / Shop')

    // Confirma que ha 0 produtos no carrinho
    cy.get('.cartcontents').contains('0')
})
})