describe('CT09-CT16', () => {

  describe('CT09', ()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

    it('Quando seleciono a opcao de "Sort by newness"', () => {
      cy.visit('https://practice.automationtesting.in/shop/')

      //Seleciona a opcao "Sort by newness"
      cy.get('select[name="orderby"].orderby').select('date')
    })

    it('Entao o livro "HTML5 WebApp Develpment" deve ser o primeiro', () => {
      cy.visit('https://practice.automationtesting.in/shop/')

      cy.get('select[name="orderby"].orderby').select('date')

      //Verifica se "HTML5 WebApp Develpment" vem primeiro
      cy.get('ul.products.masonry-done li:first-child h3')
        .should('have.text', 'HTML5 WebApp Develpment')
    })

    it('Entao o livro "Selenium Ruby" deve ser o ultimo', () => {
      cy.visit('https://practice.automationtesting.in/shop/')

      cy.get('select[name="orderby"].orderby').select('date')

      //Verifica se "Selenium Ruby" vem por ultimo
      cy.get('ul.products.masonry-done li:last-child h3')
        .should('have.text', 'Selenium Ruby')
    })
  })

  describe('CT10', ()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

    it('Quando seleciono a opcao de "Sort by price: low to high"', () => {
      cy.visit('https://practice.automationtesting.in/shop/')

      //Seleciona a opcao "Sort by price: low to high"
      cy.get('select[name="orderby"].orderby').select('price')
    })

    it('Entao o preco deve estar na ordem crescente', () => {
      cy.visit('https://practice.automationtesting.in/shop/')

      cy.get('select[name="orderby"].orderby').select('price')

      cy.get('.price .woocommerce-Price-amount').invoke('text').then(pricesString => {
        //Converte sting em array
        const numericPrices = pricesString.split('\n').map(price => parseFloat(price.replace('₹', '').trim()))
  
        //Verifica se esta em ordem crescente
        const isSorted = numericPrices.every((price, index, array) => index === 0 || price >= array[index - 1])
        expect(isSorted).to.be.true
      })
    })
  })

  describe('CT11', ()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

    it('Quando seleciono a opcao de "Sort by price: high to low"', () => {
      cy.visit('https://practice.automationtesting.in/shop/')

      //Seleciona a opcao "Sort by price: high to low"
      cy.get('select[name="orderby"].orderby').select('price-desc')
    })

    it('Entao o preco deve estar na ordem decrescente', () => {
      cy.visit('https://practice.automationtesting.in/shop/')

      cy.get('select[name="orderby"].orderby').select('price-desc')

      cy.get('.price .woocommerce-Price-amount').invoke('text').then(pricesString => {
        const numericPrices = pricesString.split('\n').map(price => parseFloat(price.replace('₹', '').trim()))

        //Verifica se esta em ordem decrescente
        const isSorted = numericPrices.every((price, index, array) => index === 0 || price <= array[index - 1])
        expect(isSorted).to.be.true
      })
    })
  })

  describe('CT12', ()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

    it('Dado que desejo comprar um livro na promocao', () => {
      cy.visit('https://practice.automationtesting.in/shop/')

      //Validaa existencia produtos em promocao
      cy.get('.onsale')
    })

    it('Quando inicio a compra desse item', () => {
      cy.visit('https://practice.automationtesting.in/shop/')

      //Verifico se o produto "Thinking in HTML" existe
      cy.get('.post-163')

      //Verifica se o produto estah em promocao
      cy.get('.post-163 > .woocommerce-LoopProduct-link > .onsale').should('have.text', 'Sale!')

      //Faco o evento de clique
      cy.get('.post-163').click()

      //Verifica se foi para o site do produto
      cy.get('.woocommerce-breadcrumb').contains('Home / HTML / Thinking in HTML')

      //Verifica se a imagem estah quebrada
      cy.get('.images img').should('be.visible').then($img => {
        expect($img[0].naturalWidth).to.be.greaterThan(0)
      })
    })

    it('Entao devo ver a promocao do produto', () => {
      cy.visit('https://practice.automationtesting.in/shop/')

      cy.get('.post-163').click()
      cy.get('.woocommerce-breadcrumb').contains('Home / HTML / Thinking in HTML')
      cy.get('.images img').should('be.visible').then($img => {
        expect($img[0].naturalWidth).to.be.greaterThan(0)
      })

      //Verifica se existe um preco antigo
      cy.get('del > .woocommerce-Price-amount')

      //Verifica se existe um preco novo
      cy.get('ins > .woocommerce-Price-amount')

      //Verifica se o valor riscado eh mais caro que o valor atual
      cy.get('.price del .woocommerce-Price-amount, .price ins .woocommerce-Price-amount')
        .then($elements => {
        const valor_antigo = parseFloat($elements.first().text().replace('₹', '').trim())
        const valor_promocionalr = parseFloat($elements.last().text().replace('₹', '').trim())
  
        expect(valor_antigo).to.be.greaterThan(valor_promocionalr)
      })
    })
  })

  describe('CT13', ()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

    it('Dado que desejo comprar o livro "Mastering JavaScript"', () => {
      cy.visit('https://practice.automationtesting.in/shop/')

      cy.get('.post-165').click()
      cy.get('.woocommerce-breadcrumb').contains('Home / JavaScript / Mastering JavaScript')
    })

    it('Dado que esse produto custa ₹ 350.00', () => {
      cy.visit('https://practice.automationtesting.in/shop/')

      cy.get('.post-165').click()
      cy.get('.woocommerce-breadcrumb').contains('Home / JavaScript / Mastering JavaScript')
      cy.get('.images img').should('be.visible').then($img => {
        expect($img[0].naturalWidth).to.be.greaterThan(0)
      })
      cy.get('[itemprop="offers"] > .price > .woocommerce-Price-amount').then($elements => {
        const preco = parseFloat($elements.text().replace('₹', '').trim())
        //Verificando se serah igual a 350
        expect(preco).to.be.equal(350)
      })
    })

    it('Dado que o imposto custa 2% do produto', () => {
      cy.visit('https://practice.automationtesting.in/shop/')

      cy.get('.post-165').click()
      cy.get('.woocommerce-breadcrumb').contains('Home / JavaScript / Mastering JavaScript')

      //Adiciona ao carrinho
      cy.get('.single_add_to_cart_button').click()

      //Valida mensagem
      cy.get('.woocommerce-message')
        .should('have.text', 'View Basket “Mastering JavaScript” has been added to your basket.')

      //Entra no carrinho
      cy.get('.woocommerce-message > .button').click()

      cy.get('.cart-subtotal > td > .woocommerce-Price-amount, .tax-rate > td > .woocommerce-Price-amount')
        .then($elements => {
        const preco = parseFloat($elements.first().text().replace('₹', '').trim())
        const imposto = parseFloat($elements.last().text().replace('₹', '').trim())
        //O imposto eh 2 por cento do produto
        const valor_com_imposto = preco * 0.02

        //Verifica se o valor do imposto foi cobrado corretamente
        expect(imposto).to.be.equal(valor_com_imposto)
      })
    })

    it('Entao devo ver a pagina de carrinho com os detalhes do produto', () => {
      cy.visit('https://practice.automationtesting.in/shop/')

      cy.get('.post-165').click()
      cy.get('.woocommerce-breadcrumb').contains('Home / JavaScript / Mastering JavaScript')
      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message')
        .should('have.text', 'View Basket “Mastering JavaScript” has been added to your basket.')
      cy.get('.woocommerce-message > .button').click()

      //Deve ter o nome do livro
      cy.get('.product-name > a').should('have.text', 'Mastering JavaScript')

      //Deve ter o preco do livro
      cy.get('.product-price > .woocommerce-Price-amount').should('have.text', '₹350.00')

      //Deve ter apenas uma quantidade
      cy.get('.quantity > .input-text').get('[value="1"]')
    })

    it('Entao o valor total da compra deve ser de ₹ 357.00', () => {
      cy.visit('https://practice.automationtesting.in/shop/')

      cy.get('.post-165').click()
      cy.get('.woocommerce-breadcrumb').contains('Home / JavaScript / Mastering JavaScript')
      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message')
        .should('have.text', 'View Basket “Mastering JavaScript” has been added to your basket.')
      cy.get('.woocommerce-message > .button').click()
      cy.get('.product-name > a').should('have.text', 'Mastering JavaScript')
      cy.get('.product-price > .woocommerce-Price-amount').should('have.text', '₹350.00')
      cy.get('.quantity > .input-text').get('[value="1"]')

      //Valida o subtotal
      cy.get('.cart-subtotal > td > .woocommerce-Price-amount').should('have.text', '₹350.00')

      //Valida valor do imposto
      cy.get('.tax-rate > td > .woocommerce-Price-amount').should('have.text', '₹7.00')

      //Valida valor total da compra
      cy.get('.cart-subtotal > td > .woocommerce-Price-amount, .tax-rate > td > .woocommerce-Price-amount')
        .then($elements => {
        const preco = parseFloat($elements.first().text().replace('₹', '').trim())
        const imposto = parseFloat($elements.last().text().replace('₹', '').trim())
        const valor_total = 357

        //Verifica se o valor do imposto foi cobrado corretamente
        expect(preco + imposto).to.be.equal(valor_total)

        cy.get('strong > .woocommerce-Price-amount').should('have.text', `₹${valor_total}.00`)
      })
    })
  })

  describe('CT14', ()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

    it('Dado que estou na pagina do produto "Selenium Ruby"', () => {
      cy.visit('https://practice.automationtesting.in/product/selenium-ruby/')

      cy.get('.woocommerce-breadcrumb').contains('Home / selenium / Selenium Ruby')
      cy.get('.product_title').should('have.text', 'Selenium Ruby')
    })

    it('Dado que desejo ver a descricao do livro', () => {
      cy.visit('https://practice.automationtesting.in/product/selenium-ruby/')

      cy.get('.woocommerce-breadcrumb').contains('Home / selenium / Selenium Ruby')
      cy.get('.product_title').should('have.text', 'Selenium Ruby')

      cy.get('.description_tab > a')
    })

    it('Quando clico em "DESCRIPTION"', () => {
      cy.visit('https://practice.automationtesting.in/product/selenium-ruby/')

      cy.get('.woocommerce-breadcrumb').contains('Home / selenium / Selenium Ruby')
      cy.get('.product_title').should('have.text', 'Selenium Ruby')

      //Clica em descricao
      cy.get('.description_tab > a').click()
    })

    it('Entao devo ver um texto descrevendo o produto', () => {
      cy.visit('https://practice.automationtesting.in/product/selenium-ruby/')

      cy.get('.woocommerce-breadcrumb').contains('Home / selenium / Selenium Ruby')
      cy.get('.product_title').should('have.text', 'Selenium Ruby')
      cy.get('.description_tab > a').click()

      //Confere se existe texto de descricao
      cy.get('#tab-description > p')
    })
  })

  describe('CT15', ()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

    it('Dado que estou na pagina do produto "HTML5 Forms"', () => {
      cy.visit('https://practice.automationtesting.in/product/html5-forms/')

      cy.get('.woocommerce-breadcrumb').contains('Home / HTML / HTML5 Forms')
      cy.get('.product_title').should('have.text', 'HTML5 Forms')
    })

    it('E que desejo ver as criticas do livro', () => {
      cy.visit('https://practice.automationtesting.in/product/html5-forms/')

      cy.get('.woocommerce-breadcrumb').contains('Home / HTML / HTML5 Forms')
      cy.get('.product_title').should('have.text', 'HTML5 Forms')

      cy.get('.reviews_tab > a')
    })

    it('Quando clico em "REVIEWS"', () => {
      cy.visit('https://practice.automationtesting.in/product/html5-forms/')

      cy.get('.woocommerce-breadcrumb').contains('Home / HTML / HTML5 Forms')
      cy.get('.product_title').should('have.text', 'HTML5 Forms')

      //Clica em reviews
      cy.get('.reviews_tab > a').click()
    })

    it('Entao devo ver o texto "There are no reviews yet."', () => {
      cy.visit('https://practice.automationtesting.in/product/html5-forms/')

      cy.get('.woocommerce-breadcrumb').contains('Home / HTML / HTML5 Forms')
      cy.get('.product_title').should('have.text', 'HTML5 Forms')
      cy.get('.reviews_tab > a').click()

      //Confere o texto do campo de review
      cy.get('.woocommerce-noreviews').should('have.text', 'There are no reviews yet.')
    })
  })

  describe('CT16', ()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

    it('Dado que estou na pagina do produto "Android Quick Start Guide"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.woocommerce-breadcrumb').contains('Home / Android / Android Quick Start Guide')
      cy.get('.product_title').should('have.text', 'Android Quick Start Guide')
    })

    it('Dado que desejo criticar o livro', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.woocommerce-breadcrumb').contains('Home / Android / Android Quick Start Guide')
      cy.get('.product_title').should('have.text', 'Android Quick Start Guide')

      cy.get('.reviews_tab > a')
    })

    it('Quando clico em "REVIEWS"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.woocommerce-breadcrumb').contains('Home / Android / Android Quick Start Guide')
      cy.get('.product_title').should('have.text', 'Android Quick Start Guide')

      //Clica em reviews
      cy.get('.reviews_tab > a').click()
    })

    it('Quando Preencho so campos "Your Rating", "Your Review", "Name" e "Email"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.woocommerce-breadcrumb').contains('Home / Android / Android Quick Start Guide')
      cy.get('.product_title').should('have.text', 'Android Quick Start Guide')
      cy.get('.reviews_tab > a').click()

      //Da 3 estrelas
      cy.get('.star-3').click()

      //Dando meu review
      cy.get('#comment').type('Na SideMind, acreditamos na sinergia entre pensamento estratégico e tecnologia inovadora. Explore conosco um mundo onde sua visão ganha vida, impulsionada pela complementaridade de mentes dedicadas a potencializar o crescimento do seu negócio. Conecte-se à inovação, conecte-se à SideMind.')

      //Nome
      cy.get('#author').type('Nicolas Kumabe')

      //Email
      cy.get('#email').type('nicolas.kumabe@sidemind.com')
    })

    it('E clico no botao "SUBMIT"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.woocommerce-breadcrumb').contains('Home / Android / Android Quick Start Guide')
      cy.get('.product_title').should('have.text', 'Android Quick Start Guide')
      cy.get('.reviews_tab > a').click()
      cy.get('.star-3').click()
      cy.get('#comment').type('Na SideMind, acreditamos na sinergia entre pensamento estratégico e tecnologia inovadora. Explore conosco um mundo onde sua visão ganha vida, impulsionada pela complementaridade de mentes dedicadas a potencializar o crescimento do seu negócio. Conecte-se à inovação, conecte-se à SideMind.')
      cy.get('#author').type('Nicolas Kumabe')
      cy.get('#email').type('nicolas.kumabe@sidemind.com')

      //Evento de click no botao Submit
      cy.get('#submit').click(2)
    })

    it('Entao devo ver um esboco da review', () => {
      const frase = 'Potencializando Seu Pensamento.'

      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.woocommerce-breadcrumb').contains('Home / Android / Android Quick Start Guide')
      cy.get('.product_title').should('have.text', 'Android Quick Start Guide')
      cy.get('.reviews_tab > a').click()
      cy.get('.star-3').click()
      cy.get('#comment').type(`${frase}`)
      cy.get('#author').type('Nicolas Kumabe')
      cy.get('#email').type('nicolas.kumabe@sidemind.com')
      cy.get('#submit').click(2)

      //Esboco da review
      cy.get('.commentlist').contains(`${frase}`)
    })

    it('E ver a mensagem "Your comment is awaiting approval"', () => {
      const frase = 'Esta é nossa característica distintiva.'

      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.woocommerce-breadcrumb').contains('Home / Android / Android Quick Start Guide')
      cy.get('.product_title').should('have.text', 'Android Quick Start Guide')
      cy.get('.reviews_tab > a').click()
      cy.get('.star-3').click()
      cy.get('#comment').type(`${frase}`)
      cy.get('#author').type('Nicolas Kumabe')
      cy.get('#email').type('nicolas.kumabe@sidemind.com')
      cy.get('#submit').click(2)
      cy.get('.commentlist').contains(`${frase}`)

      //Mensagem de espera de aprovacao
      cy.get('em').contains('Your comment is awaiting approval')
    })
  })
})
