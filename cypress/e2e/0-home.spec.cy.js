describe('home page', () => {

  describe('CT01', ()=>{
   //liberando o script do AT para o cypress
   Cypress.on('uncaught:exception', (err, runnable) => {
     return false
   })

   it('Dado que estou na pagina principal da AT', () => {
     //visita o site AT
     cy.visit('https://practice.automationtesting.in/shop/')
   })

   it('Entao devo ver uma lista de livros disponiveis', () => {
     cy.visit('https://practice.automationtesting.in/shop/')

     //Mostra a "estante de livros"
     cy.get('[class="products masonry-done"]')

     //Valida o texto Home / Shop
     cy.get('[class="woocommerce-breadcrumb"]').contains('Home / Shop')

     //Confirma que ha 0 produtos no carrinho
     cy.get('.cartcontents').contains('0')
   })
  })

  describe('CT02', ()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

    it('Dado que desejo filtrar o preço para no maximo ₹ 350.00', () => {
      cy.visit('https://practice.automationtesting.in/shop/')

      //Verifica existencia de filtro pro preco
      cy.get('[id="woocommerce_price_filter-2"]').contains('Filter by price')

      //Verifica se ha um slider
      cy.get('[class="price_slider_wrapper"]')

      //Verifica se o valor esta em 500 (maximo)
      cy.get('.to').contains('₹500')
    })

    it('Dado que desejo filtrar o preço para no minimo ₹ 250.00', () => {
      cy.visit('https://practice.automationtesting.in/shop/')

      //Verifica se o valor esta em 150 (minimo)
      cy.get('.from').contains('₹150')
    })

    it('Quando faco a regulagem dos precos', () => {
      cy.visit('https://practice.automationtesting.in/shop/')

      const valor_inicial_min = cy.get('.from').contains('₹150')
      const valor_inicial_max = cy.get('.to').contains('₹500')

      //Clia no botao de maximo
      cy.get('[style="left: 100%;"]').click()

      //Arrasta para a esquerda ate 350
      cy.get('body').type('{leftarrow}'.repeat(150))
      //for (let i = 0; i < 150; i++) {
      //  cy.get('body').type('{leftarrow}')
      //}

      //Clica no botao de minimo
      cy.get('[style="left: 0%;"]').click()

      //Arrasta para a direita ate 250
      cy.get('body').type('{rightarrow}'.repeat(100))

      //Verifica o novo valor
      const valor_final_min = cy.get('.from').contains('₹250')
      const valor_final_max = cy.get('.to').contains('₹350')

      //Verifica se o valor mudou
      valor_inicial_min != valor_final_min
      valor_inicial_max != valor_final_max
    })

    it('Quando clico em "FILTER"', () => {
      cy.visit('https://practice.automationtesting.in/shop/')

      cy.get('[style="left: 100%;"]').click()
      cy.get('body').type('{leftarrow}'.repeat(150))
      cy.get('[style="left: 0%;"]').click()
      cy.get('body').type('{rightarrow}'.repeat(100))

      //Clique em FILTER
      cy.get('.price_slider_amount > .button').click()
    })

    it('Entao nao devera haver livros acima de ₹ 350.00', () => {
      cy.visit('https://practice.automationtesting.in/shop/')

      cy.get('[style="left: 100%;"]').click()
      cy.get('body').type('{leftarrow}'.repeat(150))
      cy.get('[style="left: 0%;"]').click()
      cy.get('body').type('{rightarrow}'.repeat(100))
      cy.get('.price_slider_amount > .button').click()

      //Pega todos os precos dos livros que aparecem como resultado na tela
      cy.get('.woocommerce-Price-amount.amount').then(($element) => {
        //Pega o texto dos elementos, tira o simbolo e transforma em numeros
        const price = parseFloat($element.text().replace('₹', '').trim())

        //Verifica se o preco estah entre 250 e 350
        expect(price).to.be.gte(250.00)
        expect(price).to.be.lte(350.00)
      })
    })
  })
})