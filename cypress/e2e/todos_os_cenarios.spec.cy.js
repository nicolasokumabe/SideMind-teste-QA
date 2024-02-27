describe('todos_os_cenarios', () => {

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

  describe('CT03', ()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
 
    it('Dado que desejo filtrar a categoria "Android"', () => {
      cy.visit('https://practice.automationtesting.in/shop/')
      
      //verifica a existencia do campo "Product Categories"
      cy.get('#woocommerce_product_categories-2').contains('Product Categories')

      //Verifica a existencia da categoria "Android"
      cy.get('.cat-item-24 > a').should('have.text', 'Android')

      //Verifica a quantidade de livros da categoria "Android"
      cy.get('.cat-item-24 > .count').contains(1)
    })

    it('Quando clico na categoria "Android"', () => {
      cy.visit('https://practice.automationtesting.in/shop/')
      
      //Clique em "Android"
      cy.get('.cat-item-24 > a').click()
    })

    it('Entao devo ver apenas livros da categoria "Android"', () => {
      cy.visit('https://practice.automationtesting.in/shop/')
      
      cy.get('.cat-item-24 > a').click()

      //Verificando os livros mostrados
      cy.get('ul.products.masonry-done').within(() => {

        //Verificando se todos os livros sao da classe "Android"
        cy.get('.product').each(($product) => {
            cy.wrap($product).should('have.class', 'product_tag-android')
        })
      })
    })
  })

  describe('CT04', ()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

    it('Dado que desejo filtrar a categoria "HTML"', () => {
      cy.visit('https://practice.automationtesting.in/shop/')

      //Verifica a existencia da categoria "HTML"
      cy.get('.cat-item-19 > a').should('have.text', 'HTML')

      //Verifica a quantidade de livros da categoria "HTML"
      cy.get('.cat-item-19 > .count').contains(3)
    })

    it('Quando clico na categoria "HTML"', () => {
      cy.visit('https://practice.automationtesting.in/shop/')
      
      //Clique em "HTML"
      cy.get('.cat-item-19 > a').click()
    })

    it('Entao devo ver apenas livros da categoria "HTML"', () => {
      cy.visit('https://practice.automationtesting.in/shop/')
      
      cy.get('.cat-item-19 > a').click()
      cy.get('ul.products.masonry-done').within(() => {

        //Verificando se todos os livros sao da classe "HTML"
        cy.get('.product').each(($product) => {
            cy.wrap($product).should('have.class', 'product_tag-html')
        })
      })
    })
  })

  describe('CT05', ()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

    it('Dado que desejo filtrar a categoria "JavaScript"', () => {
      cy.visit('https://practice.automationtesting.in/shop/')

      //Verifica a existencia da categoria "JavaScript"
      cy.get('.cat-item-21 > a').should('have.text', 'JavaScript')

      //Verifica a quantidade de livros da categoria "JavaScript"
      cy.get('.cat-item-21 > .count').contains(3)
    })

    it('Quando clico na categoria "JavaScript"', () => {
      cy.visit('https://practice.automationtesting.in/shop/')
      
      //Clique em "JavaScript"
      cy.get('.cat-item-21 > a').click()
    })

    it('Entao devo ver apenas livros da categoria "JavaScript"', () => {
      cy.visit('https://practice.automationtesting.in/shop/')

      cy.get('.cat-item-21 > a').click()
      cy.get('ul.products.masonry-done').within(() => {

        //Verificando se todos os livros sao da classe "JavaScript"
        cy.get('.product').each(($product) => {
            cy.wrap($product).should('have.class', 'product_tag-javascript')
        })
      })
    })
  })

  describe('CT06', ()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

    it('Dado que desejo filtrar a categoria "selenium"', () => {
      cy.visit('https://practice.automationtesting.in/shop/')

      //Verifica a existencia da categoria "selenium"
      cy.get('.cat-item-17 > a').should('have.text', 'selenium')

      //Verifica a quantidade de livros da categoria "selenium"
      cy.get('.cat-item-17 > .count').contains(1)
    })

    it('Quando clico na categoria "selenium"', () => {
      cy.visit('https://practice.automationtesting.in/shop/')
      
      //Clique em "selenium"
      cy.get('.cat-item-17 > a').click()
    })

    it('Entao devo ver apenas livros da categoria "selenium"', () => {
      cy.visit('https://practice.automationtesting.in/shop/')

      cy.get('.cat-item-17 > a').click()
      cy.get('ul.products.masonry-done').within(() => {

        //Verificando se todos os livros sao da classe "selenium"
        cy.get('.product').each(($product) => {
            cy.wrap($product).should('have.class', 'product_tag-selenium')
        })
      })
    })
  })

  describe('CT07', ()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

    it('Dado que desejo organizar a lista de livros por popularidade', () => {
      cy.visit('https://practice.automationtesting.in/shop/')

      //Verifica se existe a opcao de organizar os livros
      cy.get('.orderby')
    })

    it('Quando seleciono a opcao de "Sort by popularity"', () => {
      cy.visit('https://practice.automationtesting.in/shop/')

      //Seleciona a opcao "Sort by popularity"
      cy.get('select[name="orderby"].orderby').select('popularity')
    })

    it('Entao o livro "Android Quick Start Guide" deve ser o primeiro', () => {
      cy.visit('https://practice.automationtesting.in/shop/')

      cy.get('select[name="orderby"].orderby').select('popularity')

      //Verifica se "Android Quick Start Guide" vem primeiro
      cy.get('ul.products.masonry-done li:first-child h3')
        .should('have.text', 'Android Quick Start Guide')
    })

    it('Entao o livro "JS Data Structures and Algorithm" deve ser o ultimo', () => {
      cy.visit('https://practice.automationtesting.in/shop/')

      cy.get('select[name="orderby"].orderby').select('popularity')

      //Verifica se "JS Data Structures and Algorithm" vem por ultimo
      cy.get('ul.products.masonry-done li:last-child h3')
        .should('have.text', 'JS Data Structures and Algorithm')
    })
  })

  describe('CT08', ()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

    it('Quando seleciono a opcao de "Sort by average rating"', () => {
      cy.visit('https://practice.automationtesting.in/shop/')

      //Seleciona a opcao "Sort by average rating"
      cy.get('select[name="orderby"].orderby').select('rating')
    })

    it('Entao o livro "Selenium Ruby" deve ser o primeiro', () => {
      cy.visit('https://practice.automationtesting.in/shop/')

      cy.get('select[name="orderby"].orderby').select('rating')

      //Verifica se "Selenium Ruby" vem primeiro
      cy.get('ul.products.masonry-done li:first-child h3')
        .should('have.text', 'Selenium Ruby')
    })

    it('Entao o livro "HTML5 WebApp Develpment" deve ser o ultimo', () => {
      cy.visit('https://practice.automationtesting.in/shop/')

      cy.get('select[name="orderby"].orderby').select('rating')

      //Verifica se "HTML5 WebApp Develpment" vem por ultimo
      cy.get('ul.products.masonry-done li:last-child h3')
        .should('have.text', 'HTML5 WebApp Develpment')
    })
  })

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
      const frase = 'Potencializando Seu Pensamento, Elevando Seu Negócio.'

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
      const frase = 'Esta é nossa característica distintiva, fundamental para o êxito de nosso empreendimento'

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

  describe('CT17', ()=>{
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
      cy.get('.reviews_tab > a').click()
    })

    it('E Preencho so campos "Your Review", "Name" e "Email"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.woocommerce-breadcrumb').contains('Home / Android / Android Quick Start Guide')
      cy.get('.product_title').should('have.text', 'Android Quick Start Guide')
      cy.get('.reviews_tab > a').click()
      cy.get('#comment').type('Na SideMind, acreditamos na sinergia entre pensamento estratégico e tecnologia inovadora. Explore conosco um mundo onde sua visão ganha vida, impulsionada pela complementaridade de mentes dedicadas a potencializar o crescimento do seu negócio. Conecte-se à inovação, conecte-se à SideMind.')
      cy.get('#author').type('Nicolas Kumabe')
      cy.get('#email').type('nicolas.kumabe@sidemind.com')
    })

    it('E clico no botao "SUBMIT"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.woocommerce-breadcrumb').contains('Home / Android / Android Quick Start Guide')
      cy.get('.product_title').should('have.text', 'Android Quick Start Guide')
      cy.get('.reviews_tab > a').click()
      cy.get('#comment').type('Na SideMind, acreditamos na sinergia entre pensamento estratégico e tecnologia inovadora. Explore conosco um mundo onde sua visão ganha vida, impulsionada pela complementaridade de mentes dedicadas a potencializar o crescimento do seu negócio. Conecte-se à inovação, conecte-se à SideMind.')
      cy.get('#author').type('Nicolas Kumabe')
      cy.get('#email').type('nicolas.kumabe@sidemind.com')
      cy.get('#submit').click(2)
    })

    it('Entao devo ver um popup com a mensagem "Please select a rating"', () => {
      const frase = 'Vislumbramos um futuro onde a SideMind seja reconhecida como líder em inovação tecnológica.'

      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.woocommerce-breadcrumb').contains('Home / Android / Android Quick Start Guide')
      cy.get('.product_title').should('have.text', 'Android Quick Start Guide')
      cy.get('.reviews_tab > a').click()
      cy.get('#comment').type(`${frase}`)
      cy.get('#author').type('Nicolas Kumabe')
      cy.get('#email').type('nicolas.kumabe@sidemind.com')
      cy.get('#submit').click(2)

      //O navegador mostra o popup e nao pode ser identificado pelo cypress
    })
  })

  describe('CT18', ()=>{
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
      cy.get('.reviews_tab > a').click()
    })

    it('E Preencho so campos "Your Rating", "Name" e "Email"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.woocommerce-breadcrumb').contains('Home / Android / Android Quick Start Guide')
      cy.get('.product_title').should('have.text', 'Android Quick Start Guide')
      cy.get('.reviews_tab > a').click()
      cy.get('.star-3').click()
      // cy.get('#comment').type('Catalisando o progresso de empresas em diversos setores. Enxergamos um cenário onde a excelência.')
      cy.get('#author').type('Nicolas Kumabe')
      cy.get('#email').type('nicolas.kumabe@sidemind.com')
    })

    it('E clico no botao "SUBMIT"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.woocommerce-breadcrumb').contains('Home / Android / Android Quick Start Guide')
      cy.get('.product_title').should('have.text', 'Android Quick Start Guide')
      cy.get('.reviews_tab > a').click()
      cy.get('.star-3').click()
      // cy.get('#comment').type('Catalisando o progresso de empresas em diversos setores. Enxergamos um cenário onde a excelência.')
      cy.get('#author').type('Nicolas Kumabe')
      cy.get('#email').type('nicolas.kumabe@sidemind.com')
      cy.get('#submit').click(2)
    })

    it('Entao devo ver a seguinte mensagem do navegador: "Please fill out this field"', () => {
      // const frase = 'A ética e a colaboração definem nossa jornada.'

      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.woocommerce-breadcrumb').contains('Home / Android / Android Quick Start Guide')
      cy.get('.product_title').should('have.text', 'Android Quick Start Guide')
      cy.get('.reviews_tab > a').click()
      cy.get('.star-3').click()
      // cy.get('#comment').type(`${frase}`)
      cy.get('#author').type('Nicolas Kumabe')
      cy.get('#email').type('nicolas.kumabe@sidemind.com')
      cy.get('#submit').click(2)

      //O navegador a mensagem de erro "Please fill out this field"
    })
  })

  describe('CT19', ()=>{
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
      cy.get('.reviews_tab > a').click()
    })

    it('E Preencho so campos "Your Rating", "Your Review" e "Email"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.woocommerce-breadcrumb').contains('Home / Android / Android Quick Start Guide')
      cy.get('.product_title').should('have.text', 'Android Quick Start Guide')
      cy.get('.reviews_tab > a').click()
      cy.get('.star-3').click()
      cy.get('#comment').type('Catalisando o progresso de empresas em diversos setores. Enxergamos um cenário onde a excelência.')
      // cy.get('#author').type('Nicolas Kumabe')
      cy.get('#email').type('nicolas.kumabe@sidemind.com')
    })

    it('E clico no botao "SUBMIT"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.woocommerce-breadcrumb').contains('Home / Android / Android Quick Start Guide')
      cy.get('.product_title').should('have.text', 'Android Quick Start Guide')
      cy.get('.reviews_tab > a').click()
      cy.get('.star-3').click()
      cy.get('#comment').type('Catalisando o progresso de empresas em diversos setores. Enxergamos um cenário onde a excelência.')
      // cy.get('#author').type('Nicolas Kumabe')
      cy.get('#email').type('nicolas.kumabe@sidemind.com')
      cy.get('#submit').click(2)
    })

    it('Entao devo ver a seguinte mensagem do navegador: "Please fill out this field"', () => {
      const frase = 'A ética e a colaboração definem nossa jornada.'

      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.woocommerce-breadcrumb').contains('Home / Android / Android Quick Start Guide')
      cy.get('.product_title').should('have.text', 'Android Quick Start Guide')
      cy.get('.reviews_tab > a').click()
      cy.get('.star-3').click()
      cy.get('#comment').type(`${frase}`)
      // cy.get('#author').type('Nicolas Kumabe')
      cy.get('#email').type('nicolas.kumabe@sidemind.com')
      cy.get('#submit').click(2)

      //O navegador a mensagem de erro "Please fill out this field"
    })
  })

  describe('CT20', ()=>{
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
      cy.get('.reviews_tab > a').click()
    })

    it('E Preencho so campos "Your Rating", "Your Review" e "Name"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.woocommerce-breadcrumb').contains('Home / Android / Android Quick Start Guide')
      cy.get('.product_title').should('have.text', 'Android Quick Start Guide')
      cy.get('.reviews_tab > a').click()
      cy.get('.star-3').click()
      cy.get('#comment').type('Catalisando o progresso de empresas em diversos setores. Enxergamos um cenário onde a excelência.')
      cy.get('#author').type('Nicolas Kumabe')
      // cy.get('#email').type('nicolas.kumabe@sidemind.com')
    })

    it('E clico no botao "SUBMIT"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.woocommerce-breadcrumb').contains('Home / Android / Android Quick Start Guide')
      cy.get('.product_title').should('have.text', 'Android Quick Start Guide')
      cy.get('.reviews_tab > a').click()
      cy.get('.star-3').click()
      cy.get('#comment').type('Catalisando o progresso de empresas em diversos setores. Enxergamos um cenário onde a excelência.')
      cy.get('#author').type('Nicolas Kumabe')
      // cy.get('#email').type('nicolas.kumabe@sidemind.com')
      cy.get('#submit').click(2)
    })

    it('Entao devo ver a seguinte mensagem do navegador: "Please fill out this field"', () => {
      const frase = 'A ética e a colaboração definem nossa jornada.'

      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.woocommerce-breadcrumb').contains('Home / Android / Android Quick Start Guide')
      cy.get('.product_title').should('have.text', 'Android Quick Start Guide')
      cy.get('.reviews_tab > a').click()
      cy.get('.star-3').click()
      cy.get('#comment').type(`${frase}`)
      cy.get('#author').type('Nicolas Kumabe')
      // cy.get('#email').type('nicolas.kumabe@sidemind.com')
      cy.get('#submit').click(2)

      //O navegador a mensagem de erro "Please fill out this field"
    })
  })

  describe('CT21', ()=>{
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
      cy.get('.reviews_tab > a').click()
    })

    it('E Preencho so campos "Your Rating", "Your Review", "Name" e "Email"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.woocommerce-breadcrumb').contains('Home / Android / Android Quick Start Guide')
      cy.get('.product_title').should('have.text', 'Android Quick Start Guide')
      cy.get('.reviews_tab > a').click()
      cy.get('.star-3').click()
      cy.get('#comment').type('Catalisando o progresso de empresas em diversos setores. Enxergamos um cenário onde a excelência.')
      cy.get('#author').type('Nicolas Kumabe')
      cy.get('#email').type('nicolas.kumabe@sidemind.com')
    })

    it('Mas digito apenas "nicolas" no campo Email', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.woocommerce-breadcrumb').contains('Home / Android / Android Quick Start Guide')
      cy.get('.product_title').should('have.text', 'Android Quick Start Guide')
      cy.get('.reviews_tab > a').click()
      cy.get('.star-3').click()
      cy.get('#comment').type('Catalisando o progresso de empresas em diversos setores. Enxergamos um cenário onde a excelência.')
      cy.get('#author').type('Nicolas Kumabe')
      cy.get('#email').type('nicolas')
    })

    it('E clico no botao "SUBMIT"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.woocommerce-breadcrumb').contains('Home / Android / Android Quick Start Guide')
      cy.get('.product_title').should('have.text', 'Android Quick Start Guide')
      cy.get('.reviews_tab > a').click()
      cy.get('.star-3').click()
      cy.get('#comment').type('Catalisando o progresso de empresas em diversos setores. Enxergamos um cenário onde a excelência.')
      cy.get('#author').type('Nicolas Kumabe')
      cy.get('#email').type('nicolas')
      cy.get('#submit').click(2)
    })

    it('Entao devo ver a seguinte mensagem do navegador: "Please include an @ in the email addres. nicolas is missing an @."', () => {
      const frase = 'A ética e a colaboração definem nossa jornada.'

      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.woocommerce-breadcrumb').contains('Home / Android / Android Quick Start Guide')
      cy.get('.product_title').should('have.text', 'Android Quick Start Guide')
      cy.get('.reviews_tab > a').click()
      cy.get('.star-3').click()
      cy.get('#comment').type(`${frase}`)
      cy.get('#author').type('Nicolas Kumabe')
      cy.get('#email').type('nicolas')
      cy.get('#submit').click(2)

      //O navegador a mensagem de erro "Please include an '@' in the email addres. 'nicolas' is missing an '@'."
    })
  })

  describe('CT22', ()=>{
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
      cy.get('.reviews_tab > a').click()
    })

    it('E Preencho so campos "Your Rating", "Your Review", "Name" e "Email"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.woocommerce-breadcrumb').contains('Home / Android / Android Quick Start Guide')
      cy.get('.product_title').should('have.text', 'Android Quick Start Guide')
      cy.get('.reviews_tab > a').click()
      cy.get('.star-3').click()
      cy.get('#comment').type('Catalisando o progresso de empresas em diversos setores. Enxergamos um cenário onde a excelência.')
      cy.get('#author').type('Nicolas Kumabe')
      cy.get('#email').type('nicolas.kumabe@sidemind.com')
    })

    it('Mas digito apenas "nicolas@" no campo Email', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.woocommerce-breadcrumb').contains('Home / Android / Android Quick Start Guide')
      cy.get('.product_title').should('have.text', 'Android Quick Start Guide')
      cy.get('.reviews_tab > a').click()
      cy.get('.star-3').click()
      cy.get('#comment').type('Catalisando o progresso de empresas em diversos setores. Enxergamos um cenário onde a excelência.')
      cy.get('#author').type('Nicolas Kumabe')
      cy.get('#email').type('nicolas@')
    })

    it('E clico no botao "SUBMIT"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.woocommerce-breadcrumb').contains('Home / Android / Android Quick Start Guide')
      cy.get('.product_title').should('have.text', 'Android Quick Start Guide')
      cy.get('.reviews_tab > a').click()
      cy.get('.star-3').click()
      cy.get('#comment').type('Catalisando o progresso de empresas em diversos setores. Enxergamos um cenário onde a excelência.')
      cy.get('#author').type('Nicolas Kumabe')
      cy.get('#email').type('nicolas@')
      cy.get('#submit').click(2)
    })

    it('Entao devo ver a seguinte mensagem do navegador: "Please enter a part following @. nicolas@ is incomplete."', () => {
      const frase = 'A ética e a colaboração definem nossa jornada.'

      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.woocommerce-breadcrumb').contains('Home / Android / Android Quick Start Guide')
      cy.get('.product_title').should('have.text', 'Android Quick Start Guide')
      cy.get('.reviews_tab > a').click()
      cy.get('.star-3').click()
      cy.get('#comment').type(`${frase}`)
      cy.get('#author').type('Nicolas Kumabe')
      cy.get('#email').type('nicolas@')
      cy.get('#submit').click(2)

      //O navegador a mensagem de erro "Please enter a part following '@'. 'nicolas@' is incomplete."
    })
  })

  describe('CT23', ()=>{
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
      cy.get('.reviews_tab > a').click()
    })

    it('E Preencho so campos "Your Rating", "Your Review", "Name" e "Email"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.woocommerce-breadcrumb').contains('Home / Android / Android Quick Start Guide')
      cy.get('.product_title').should('have.text', 'Android Quick Start Guide')
      cy.get('.reviews_tab > a').click()
      cy.get('.star-3').click()
      cy.get('#comment').type('Catalisando o progresso de empresas em diversos setores. Enxergamos um cenário onde a excelência.')
      cy.get('#author').type('Nicolas Kumabe')
      cy.get('#email').type('nicolas.kumabe@sidemind.com')
    })

    it('Mas digito apenas "nicolas@sidemind" no campo Email', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.woocommerce-breadcrumb').contains('Home / Android / Android Quick Start Guide')
      cy.get('.product_title').should('have.text', 'Android Quick Start Guide')
      cy.get('.reviews_tab > a').click()
      cy.get('.star-3').click()
      cy.get('#comment').type('Catalisando o progresso de empresas em diversos setores. Enxergamos um cenário onde a excelência.')
      cy.get('#author').type('Nicolas Kumabe')
      cy.get('#email').type('nicolas@sidemind')
    })

    it('E clico no botao "SUBMIT"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.woocommerce-breadcrumb').contains('Home / Android / Android Quick Start Guide')
      cy.get('.product_title').should('have.text', 'Android Quick Start Guide')
      cy.get('.reviews_tab > a').click()
      cy.get('.star-3').click()
      cy.get('#comment').type('Catalisando o progresso de empresas em diversos setores. Enxergamos um cenário onde a excelência.')
      cy.get('#author').type('Nicolas Kumabe')
      cy.get('#email').type('nicolas@sidemind')
      cy.get('#submit').click(2)
    })

    it('Entao devo ver a mensagem de erro: "Error: Please enter a valid email address."', () => {
      const frase = 'A ética e a colaboração definem nossa jornada.'

      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.woocommerce-breadcrumb').contains('Home / Android / Android Quick Start Guide')
      cy.get('.product_title').should('have.text', 'Android Quick Start Guide')
      cy.get('.reviews_tab > a').click()
      cy.get('.star-3').click()
      cy.get('#comment').type(`${frase}`)
      cy.get('#author').type('Nicolas Kumabe')
      cy.get('#email').type('nicolas@sidemind')
      cy.get('#submit').click(2)

      //Devo a mensagem de erro "Error: Please enter a valid email address."
      cy.get('.wp-die-message > p').contains('Error: Please enter a valid email address.')
    })
  })

  describe('CT24', ()=>{
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
      cy.get('.reviews_tab > a').click()
    })

    it('E Preencho so campos "Your Rating", "Your Review", "Name" e "Email"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.woocommerce-breadcrumb').contains('Home / Android / Android Quick Start Guide')
      cy.get('.product_title').should('have.text', 'Android Quick Start Guide')
      cy.get('.reviews_tab > a').click()
      cy.get('.star-3').click()
      cy.get('#comment').type('Catalisando o progresso de empresas em diversos setores. Enxergamos um cenário onde a excelência.')
      cy.get('#author').type('Nicolas Kumabe')
      cy.get('#email').type('nicolas.kumabe@sidemind.com')
    })

    it('E clico no checkbox "Save my name, email, and website in this browser for the next time I comment."', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.woocommerce-breadcrumb').contains('Home / Android / Android Quick Start Guide')
      cy.get('.product_title').should('have.text', 'Android Quick Start Guide')
      cy.get('.reviews_tab > a').click()
      cy.get('.star-3').click()
      cy.get('#comment').type('Catalisando o progresso de empresas em diversos setores. Enxergamos um cenário onde a excelência.')
      cy.get('#author').type('Nicolas Kumabe')
      cy.get('#email').type('nicolas@sidemind.com')

      //Clica no checkbox
      cy.get('#wp-comment-cookies-consent').click()
    })

    it('E clico no botao "SUBMIT"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.woocommerce-breadcrumb').contains('Home / Android / Android Quick Start Guide')
      cy.get('.product_title').should('have.text', 'Android Quick Start Guide')
      cy.get('.reviews_tab > a').click()
      cy.get('.star-3').click()
      cy.get('#comment').type('Catalisando o progresso de empresas em diversos setores. Enxergamos um cenário onde a excelência.')
      cy.get('#author').type('Nicolas Kumabe')
      cy.get('#email').type('nicolas@sidemind.com')
      cy.get('#wp-comment-cookies-consent').click()
      cy.get('#submit').click(2)
    })

    it('Entao os campos "Name" e  "Email" devem ser salvos', () => {
      const frase = 'A ética e a colaboração definem nossa jornada..'
      const nome = 'Nicolas Kumabe'
      const email= 'nicolas@sidemind.com'

      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.woocommerce-breadcrumb').contains('Home / Android / Android Quick Start Guide')
      cy.get('.product_title').should('have.text', 'Android Quick Start Guide')
      cy.get('.reviews_tab > a').click()
      cy.get('.star-3').click()
      cy.get('#comment').type(`${frase}`)
      cy.get('#author').type(`${nome}`)
      cy.get('#email').type(`${email}`)
      cy.get('#wp-comment-cookies-consent').click()
      cy.get('#submit').click(2)

      //Entao os campos "Name" e "Email" devem ser salvos
      cy.get('#author').should('have.value', `${nome}`)
      cy.get('#email').should('have.value', `${email}`)
    })
  })

  describe('CT25', ()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

    it('Dado que estou na pagina do produto "Android Quick Start Guide"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.woocommerce-breadcrumb').contains('Home / Android / Android Quick Start Guide')
      cy.get('.product_title').should('have.text', 'Android Quick Start Guide')
    })

    it('E que desejo aumentar a quantidade do livro no carrinho', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.woocommerce-breadcrumb').contains('Home / Android / Android Quick Start Guide')
      cy.get('.product_title').should('have.text', 'Android Quick Start Guide')
      cy.get('.input-text')
    })

    it('Quando mudo a quantidade para 3', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.woocommerce-breadcrumb').contains('Home / Android / Android Quick Start Guide')
      cy.get('.product_title').should('have.text', 'Android Quick Start Guide')

      //Limpa a quantidade padrao
      cy.get('.input-text').clear()

      //Insere a quantidade "3"
      cy.get('.input-text').type('3')
    })

    it('E clico no botao "Add to basket"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.woocommerce-breadcrumb').contains('Home / Android / Android Quick Start Guide')
      cy.get('.product_title').should('have.text', 'Android Quick Start Guide')
      cy.get('.input-text').clear()
      cy.get('.input-text').type('3')
      cy.get('.single_add_to_cart_button').click()
    })

    it('Entao o carrinho deve mostrar 3 livros', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.woocommerce-breadcrumb').contains('Home / Android / Android Quick Start Guide')
      cy.get('.product_title').should('have.text', 'Android Quick Start Guide')
      cy.get('.input-text').clear()
      cy.get('.input-text').type('3')
      cy.get('.single_add_to_cart_button').click()

      //Valida quantidade que estah no carrinho
      cy.get('.cartcontents').contains('3')
    })

  })

  describe('CT26', ()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

    it('Dado que estou na pagina do produto "Selenium Ruby"', () => {
      cy.visit('https://practice.automationtesting.in/product/selenium-ruby/')

      cy.get('.woocommerce-breadcrumb').contains('Home / selenium / Selenium Ruby')
      cy.get('.product_title').should('have.text', 'Selenium Ruby')
    })

    it('Quando clico no botao "Add to basket"', () => {
      cy.visit('https://practice.automationtesting.in/product/selenium-ruby/')

      cy.get('.woocommerce-breadcrumb').contains('Home / selenium / Selenium Ruby')
      cy.get('.product_title').should('have.text', 'Selenium Ruby')
      cy.get('.single_add_to_cart_button').click()
    })

    it('E clico no botao "View Basket"', () => {
      cy.visit('https://practice.automationtesting.in/product/selenium-ruby/')

      cy.get('.woocommerce-breadcrumb').contains('Home / selenium / Selenium Ruby')
      cy.get('.product_title').should('have.text', 'Selenium Ruby')
      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
    })

    it('E digito o cupom errado: "sidemind"', () => {
      cy.visit('https://practice.automationtesting.in/product/selenium-ruby/')

      cy.get('.woocommerce-breadcrumb').contains('Home / selenium / Selenium Ruby')
      cy.get('.product_title').should('have.text', 'Selenium Ruby')
      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()

      //Digita o cupom "sidemind"
      cy.get('#coupon_code').type('sidemind')
    })

    it('E clico no botao "Apply Coupon"', () => {
      cy.visit('https://practice.automationtesting.in/product/selenium-ruby/')

      cy.get('.woocommerce-breadcrumb').contains('Home / selenium / Selenium Ruby')
      cy.get('.product_title').should('have.text', 'Selenium Ruby')
      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('#coupon_code').type('sidemind')
      cy.get('.coupon > .button').click()

    })

    it('Entao recebo a mensagem de erro: "Coupon "sidemind" does not exist!"', () => {
      cy.visit('https://practice.automationtesting.in/product/selenium-ruby/')

      cy.get('.woocommerce-breadcrumb').contains('Home / selenium / Selenium Ruby')
      cy.get('.product_title').should('have.text', 'Selenium Ruby')
      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('#coupon_code').type('sidemind')
      cy.get('.coupon > .button').click()
      cy.get('.woocommerce-error > li').should('have.text', 'Coupon "sidemind" does not exist!')
    })
  })

  describe('CT27', ()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

    it('Dado que acesso a tela de cadastro', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
    })

    it('Quando informo email "nicolas.kumabe@sidemind.com" com senha valida', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')

      //Preenchedo campo email
      cy.get('#reg_email').type('nicolas.kumabe@sidemind.com')

      //Preenchedo campo senha
      cy.get('#reg_password').type('#SideMind2024!')
    })

    it('E clico no botao "Register"', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
      cy.get('#reg_email').type('nicolaskumabe@sidemind.com')
      cy.get('#reg_password').type('#SideMind2024')
      cy.wait(2000)
      cy.get('#reg_password').type('!')
      cy.get('.woocomerce-FormRow > .woocommerce-Button').click()
    })

    it('Entao sou redirecionado para o Dashboard', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
      cy.get('#reg_email').type('nkumabe@sidemind.com')
      cy.get('#reg_password').type('#SideMind2024')
      cy.wait(2000)
      cy.get('#reg_password').type('!')
      cy.get('.woocomerce-FormRow > .woocommerce-Button').click()

      //Confirma que estou no Dashboard
      cy.get('.woocommerce-MyAccount-navigation-link--dashboard > a')
    })
  })

  describe('CT28', ()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

    it('Dado que acesso a tela de cadastro', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
    })

    it('Quando informo a senha sem o campo email', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
      // cy.get('#reg_email').type('nicolas.kumabe@sidemind.com')

      //Preenchedo campo senha
      cy.get('#reg_password').type('#SideMind2024!')
    })

    it('E clico no botao "Register"', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
      // cy.get('#reg_email').type('nicolaskumabe@sidemind.com')
      cy.get('#reg_password').type('#SideMind2024')
      cy.wait(2000)
      cy.get('#reg_password').type('!')
      cy.get('.woocomerce-FormRow > .woocommerce-Button').click()
    })

    it('Entao recebo a mensagem de erro: "Error: Please provide a valid email address."', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
      cy.get('#reg_email').type('nicolas')
      cy.get('#reg_password').type('#SideMind2024')
      cy.wait(2000)
      cy.get('#reg_password').type('!')
      cy.get('.woocomerce-FormRow > .woocommerce-Button').click()

      //Recebo mensagem "Error: Please provide a valid email address."
      cy.get('.woocommerce-error > li').should('have.text', 'Error: Please provide a valid email address.')
    })
  })

  describe('CT29', ()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

    it('Dado que acesso a tela de cadastro', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
    })

    it('Quando informo a senha com email "nicolas"', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
      cy.get('#reg_email').type('nicolas')

      //Preenchedo campo senha
      cy.get('#reg_password').type('#SideMind2024!')
    })

    it('E clico no botao "Register"', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
      cy.get('#reg_email').type('nicolas')
      cy.get('#reg_password').type('#SideMind2024')
      cy.wait(2000)
      cy.get('#reg_password').type('!')
      cy.get('.woocomerce-FormRow > .woocommerce-Button').click()
    })

    it('Entao devo ver a seguinte mensagem do navegador: "Please include an @ in the email addres. nicolas is missing an @."', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
      // cy.get('#reg_email').type('nkumabe@sidemind.com')
      cy.get('#reg_password').type('#SideMind2024')
      cy.wait(2000)
      cy.get('#reg_password').type('!')
      cy.get('.woocomerce-FormRow > .woocommerce-Button').click()

      //Devo ver a seguinte mensagem do navegador: "Please include an '@' in the email addres. 'nicolas' is missing D
    })
  })

  describe('CT30', ()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

    it('Dado que acesso a tela de cadastro', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
    })

    it('Quando informo a senha com o email "nicolas@"', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
      cy.get('#reg_email').type('nicolas@')

      //Preenchedo campo senha
      cy.get('#reg_password').type('#SideMind2024!')
    })

    it('E clico no botao "Register"', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
      cy.get('#reg_email').type('nicolas@')
      cy.get('#reg_password').type('#SideMind2024')
      cy.wait(2000)
      cy.get('#reg_password').type('!')
      cy.get('.woocomerce-FormRow > .woocommerce-Button').click()
    })

    it('Entao devo ver a seguinte mensagem do navegador: "Please enter a part following @. nicolas@ is incomplete."', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
      cy.get('#reg_email').type('nicolas@')
      cy.get('#reg_password').type('#SideMind2024')
      cy.wait(2000)
      cy.get('#reg_password').type('!')
      cy.get('.woocomerce-FormRow > .woocommerce-Button').click()

      //Devo ver a seguinte mensagem do navegador: "Please enter a part following '@'. 'nicolas@' is incomplete."
    })
  })

  describe('CT31', ()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

    it('Dado que acesso a tela de cadastro', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
    })

    it('Quando informo a senha com o email "nicolas@sidemind"', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
      cy.get('#reg_email').type('nicolas@sidemind')

      //Preenchedo campo senha
      cy.get('#reg_password').type('#SideMind2024!')
    })

    it('E clico no botao "Register"', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
      cy.get('#reg_email').type('nicolas@sidemind')
      cy.get('#reg_password').type('#SideMind2024')
      cy.wait(2000)
      cy.get('#reg_password').type('!')
      cy.get('.woocomerce-FormRow > .woocommerce-Button').click()
    })

    it('Entao devo ver a mensagem de erro: "Error: Please enter a valid email address."', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
      cy.get('#reg_email').type('nicolas@sidemind')
      cy.get('#reg_password').type('#SideMind2024')
      cy.wait(2000)
      cy.get('#reg_password').type('!')
      cy.get('.woocomerce-FormRow > .woocommerce-Button').click()

      //Devo ver a mensagem de erro: "Error: Please enter a valid email address."
    })
  })

  describe('CT32', ()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

    it('Dado que acesso a tela de cadastro', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
    })

    it('Quando informo o email sem o campo senha', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
      cy.get('#reg_email').type('nicolas@sidemind.com')

      // cy.get('#reg_password').type('#SideMind2024!')
    })

    it('E clico no botao "Register"', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
      cy.get('#reg_email').type('nicolas@sidemind.com')
      // cy.get('#reg_password').type('#SideMind2024')
      // cy.wait(2000)
      // cy.get('#reg_password').type('!')
      cy.get('.woocomerce-FormRow > .woocommerce-Button').click()
    })

    it('Entao o botao "Register" deve ser bloqueado', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
      cy.get('#reg_email').type('nicolas@sidemind.com')
      // cy.get('#reg_password').type('#SideMind2024')
      // cy.wait(2000)
      // cy.get('#reg_password').type('!')
      cy.get('.woocomerce-FormRow > .woocommerce-Button').click()

      //Devo ver o botao register bloqueado

      //Mensagem de erro
      cy.get('.woocommerce-error > li')
        .should('have.text', 'Error: Please enter an account password.')
    })
  })

  describe('CT33', ()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

    it('Dado que acesso a tela de cadastro', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
    })

    it('Quando informo meu email com a senha "side"', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
      cy.get('#reg_email').type('nicolas@sidemind.com')

      cy.get('#reg_password').type('side')
    })

    it('Entao devo ver o aviso: "Very weak - Please enter a stronger password."', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
      cy.get('#reg_email').type('nicolas@sidemind.com')
      cy.get('#reg_password').type('si')
      cy.wait(2000)
      cy.get('#reg_password').type('de')
      // cy.get('.woocomerce-FormRow > .woocommerce-Button').click()

      //Mensagem de seguranca
      cy.get('.woocommerce-password-strength')
        .should('have.text', 'Very weak - Please enter a stronger password.')
    })

    it('E o botao "Register" deve ser bloqueado', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
      cy.get('#reg_email').type('nicolas@sidemind.com')
      cy.get('#reg_password').type('si')
      cy.wait(2000)
      cy.get('#reg_password').type('de')
      // cy.get('.woocomerce-FormRow > .woocommerce-Button').click()

      //Mensagem de seguranca
      cy.get('.woocommerce-password-strength')
        .should('have.text', 'Very weak - Please enter a stronger password.')

      //Devo ver o botao register bloqueado
    })
  })

  describe('CT34', ()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

    it('Dado que acesso a tela de cadastro', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
    })

    it('Quando informo meu email com a senha "sidemind"', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
      cy.get('#reg_email').type('nicolas@sidemind.com')

      cy.get('#reg_password').type('side')
      cy.wait(2000)
      cy.get('#reg_password').type('mind')
    })

    it('Entao devo ver o aviso: "Weak - Please enter a stronger password."', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
      cy.get('#reg_email').type('nicolas@sidemind.com')
      cy.get('#reg_password').type('side')
      cy.wait(2000)
      cy.get('#reg_password').type('mind')
      // cy.get('.woocomerce-FormRow > .woocommerce-Button').click()

      //Mensagem de seguranca
      cy.get('.woocommerce-password-strength')
        .should('have.text', 'Weak - Please enter a stronger password.')
    })

    it('E o botao "Register" deve ser bloqueado', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
      cy.get('#reg_email').type('nicolas@sidemind.com')
      cy.get('#reg_password').type('side')
      cy.wait(2000)
      cy.get('#reg_password').type('mind')
      // cy.get('.woocomerce-FormRow > .woocommerce-Button').click()

      //Mensagem de seguranca
      cy.get('.woocommerce-password-strength')
        .should('have.text', 'Weak - Please enter a stronger password.')

      //Devo ver o botao register bloqueado
    })
  })

  describe('CT35', ()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

    it('Dado que acesso a tela de cadastro', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
    })

    it('Quando informo meu email com a senha "#SideMind!"', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
      cy.get('#reg_email').type('nicolas@sidemind.com')

      cy.get('#reg_password').type('#Side')
      cy.wait(2000)
      cy.get('#reg_password').type('Mind!')
    })

    it('Entao devo ver o aviso: "Medium"', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
      cy.get('#reg_email').type('nicolas@sidemind.com')
      cy.get('#reg_password').type('#Side')
      cy.wait(2000)
      cy.get('#reg_password').type('Mind!')
      // cy.get('.woocomerce-FormRow > .woocommerce-Button').click()

      //Mensagem de seguranca
      cy.get('.woocommerce-password-strength')
        .should('have.text', 'Medium')
    })

    it('E o botao "Register" deve ser desbloqueado', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
      cy.get('#reg_email').type('nicolas@sidemind.com')
      cy.get('#reg_password').type('#Side')
      cy.wait(2000)
      cy.get('#reg_password').type('Mind!')
      // cy.get('.woocomerce-FormRow > .woocommerce-Button').click()

      //Mensagem de seguranca
      cy.get('.woocommerce-password-strength')
        .should('have.text', 'Medium')

      //Devo ver o botao register desbloqueado
    })
  })

  describe('CT36', ()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

    it('Dado que acesso a tela de cadastro', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
    })

    it('Quando informo meu email com a senha "#SideMind2024!"', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
      cy.get('#reg_email').type('nicolas@sidemind.com')

      cy.get('#reg_password').type('#Side')
      cy.wait(2000)
      cy.get('#reg_password').type('Mind2024!')
    })

    it('Entao devo ver o aviso: "Strong"', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
      cy.get('#reg_email').type('nicolas@sidemind.com')
      cy.get('#reg_password').type('#Side')
      cy.wait(2000)
      cy.get('#reg_password').type('Mind2024!')
      // cy.get('.woocomerce-FormRow > .woocommerce-Button').click()

      //Mensagem de seguranca
      cy.get('.woocommerce-password-strength')
        .should('have.text', 'Strong')
    })

    it('E o botao "Register" deve ser desbloqueado', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
      cy.get('#reg_email').type('nicolas@sidemind.com')
      cy.get('#reg_password').type('#Side')
      cy.wait(2000)
      cy.get('#reg_password').type('Mind2024!')
      // cy.get('.woocomerce-FormRow > .woocommerce-Button').click()

      //Mensagem de seguranca
      cy.get('.woocommerce-password-strength')
        .should('have.text', 'Strong')

      //Devo ver o botao register desbloqueado
    })
  })

  describe('CT37', ()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

    it('Dado que acesso a tela de cadastro', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
    })

    it('Quando informo meu email "side@mind.com" e senha correta', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
      cy.get('#username').type('side@mind.com')
      cy.get('#password').type('#Side')
      cy.wait(2000)
      cy.get('#password').type('Mind2024!')
    })

    it('E clico no botao "Login"', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
      cy.get('#username').type('side@mind.com')
      cy.get('#password').type('#Side')
      cy.wait(2000)
      cy.get('#password').type('Mind2024!')

      //Evento de clique "login"
      cy.get(':nth-child(3) > .woocommerce-Button').click()
    })
    
    it('Entao sou redirecionado para o Dashboard', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
      cy.get('#username').type('side@mind.com')
      cy.get('#password').type('#Side')
      cy.wait(2000)
      cy.get('#password').type('Mind2024!')
      cy.get(':nth-child(3) > .woocommerce-Button').click()

      //Dashboard
      cy.get('.woocommerce-MyAccount-navigation-link--dashboard > a')
    })
  })

  describe('CT38', ()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

    it('Dado que acesso a tela de cadastro', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
    })

    it('Quando informo minha senha sem o campo email', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
      // cy.get('#username').type('side@mind.com')
      cy.get('#password').type('#Side')
      cy.wait(2000)
      cy.get('#password').type('Mind2024!')
    })

    it('E clico no botao "Login"', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
      // cy.get('#username').type('side@mind.com')
      cy.get('#password').type('#Side')
      cy.wait(2000)
      cy.get('#password').type('Mind2024!')

      //Evento de clique "login"
      cy.get(':nth-child(3) > .woocommerce-Button').click()
    })
    
    it('Entao devo ver a mensagem de erro: "Error: Username is required."', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
      // cy.get('#username').type('side@mind.com')
      cy.get('#password').type('#Side')
      cy.wait(2000)
      cy.get('#password').type('Mind2024!')
      cy.get(':nth-child(3) > .woocommerce-Button').click()

      //Mensagem de erro: "Error: Username is required."
      cy.get('.woocommerce-error > li').should('have.text', 'Error: Username is required.')
    })
  })

  describe('CT39', ()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

    it('Dado que acesso a tela de cadastro', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
    })

    it('Quando informo minha senha com o email "contafake@sidemind.com"', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
      cy.get('#username').type('contafake@sidemind.com')
      cy.get('#password').type('#Side')
      cy.wait(2000)
      cy.get('#password').type('Mind2024!')
    })

    it('E clico no botao "Login"', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
      cy.get('#username').type('contafake@sidemind.com')
      cy.get('#password').type('#Side')
      cy.wait(2000)
      cy.get('#password').type('Mind2024!')

      //Evento de clique "login"
      cy.get(':nth-child(3) > .woocommerce-Button').click()
    })
    
    it('Entao devo ver a mensagem de erro: "Error: A user could not be found with this email address."', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
      cy.get('#username').type('contafake@sidemind.com')
      cy.get('#password').type('#Side')
      cy.wait(2000)
      cy.get('#password').type('Mind2024!')
      cy.get(':nth-child(3) > .woocommerce-Button').click()

      //Mensagem de erro: "Error: A user could not be found with this email address."
      cy.get('.woocommerce-error > li')
        .should('have.text', 'Error: A user could not be found with this email address.')
    })
  })

  describe('CT40', ()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

    it('Dado que acesso a tela de cadastro', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
    })

    it('Quando informo minha senha com o username "contafake"', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
      cy.get('#username').type('contafake')
      cy.get('#password').type('#Side')
      cy.wait(2000)
      cy.get('#password').type('Mind2024!')
    })

    it('E clico no botao "Login"', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
      cy.get('#username').type('contafake')
      cy.get('#password').type('#Side')
      cy.wait(2000)
      cy.get('#password').type('Mind2024!')

      //Evento de clique "login"
      cy.get(':nth-child(3) > .woocommerce-Button').click()
    })
    
    it('Entao devo ver a mensagem de erro: "Error: The username contafake is not registered on this site. If you are unsure of your username, try your email address instead."', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
      cy.get('#username').type('contafake')
      cy.get('#password').type('#Side')
      cy.wait(2000)
      cy.get('#password').type('Mind2024!')
      cy.get(':nth-child(3) > .woocommerce-Button').click()

      //Mensagem de erro: "Error: The username contafake is not registered on this site. If you are unsure of your username, try your email address instead."
      cy.get('.woocommerce-error > li')
        .should('have.text', 'Error: The username contafake is not registered on this site. If you are unsure of your username, try your email address instead.')
    })
  })

  describe('CT41', ()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

    it('Dado que acesso a tela de cadastro', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
    })

    it('Quando informo meu email sem o campo senha', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
      cy.get('#username').type('side@mind.com')
      // cy.get('#password').type('#Side')
      // cy.wait(2000)
      // cy.get('#password').type('Mind2024!')
    })

    it('E clico no botao "Login"', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
      cy.get('#username').type('side@mind.com')
      // cy.get('#password').type('#Side')
      // cy.wait(2000)
      // cy.get('#password').type('Mind2024!')

      //Evento de clique "login"
      cy.get(':nth-child(3) > .woocommerce-Button').click()
    })
    
    it('Entao devo ver a mensagem de erro: "Error: Password is required."', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
      cy.get('#username').type('side@mind.com')
      // cy.get('#password').type('#Side')
      // cy.wait(2000)
      // cy.get('#password').type('Mind2024!')
      cy.get(':nth-child(3) > .woocommerce-Button').click()

      //Mensagem de erro: "Error: Password is required."
      cy.get('.woocommerce-error > li')
        .should('have.text', 'Error: Password is required.')
    })
  })

  describe('CT42', ()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

    it('Dado que acesso a tela de cadastro', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
    })

    it('Quando informo meu email "side@mind.com" com senha incorreta', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
      cy.get('#username').type('side@mind.com')
      // cy.get('#password').type('#Side')
      // cy.wait(2000)
      cy.get('#password').type('Mind2024!')
    })

    it('E clico no botao "Login"', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
      cy.get('#username').type('side@mind.com')
      // cy.get('#password').type('#Side')
      // cy.wait(2000)
      cy.get('#password').type('Mind2024!')

      //Evento de clique "login"
      cy.get(':nth-child(3) > .woocommerce-Button').click()
    })
    
    it('Entao devo ver a mensagem de erro: "Error: The password you entered for the username side@mind.com is incorrect. Lost your password?"', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
      cy.get('#username').type('side@mind.com')
            // cy.get('#password').type('#Side')
      // cy.wait(2000)
      cy.get('#password').type('Mind2024!')
  +
      cy.get(':nth-child(3) > .woocommerce-Button').click()

      //Mensagem de erro: "Error: The password you entered for the username side@mind.com is incorrect. Lost your password?"
      cy.get('.woocommerce-error > li')
        .should('have.text', 'Error: The password you entered for the username side@mind.com is incorrect. Lost your password?')
    })
  })

  describe('CT43', ()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

    it('Dado que acesso a tela de cadastro', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
    })

    it('Quando clico em "Lost your password?"', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
      // cy.get('#username').type('side@mind.com')
      // cy.get('#password').type('#Side')
      // cy.wait(2000)
      // cy.get('#password').type('Mind2024!')
      cy.get('.woocommerce-LostPassword > a').click()
    })

    it('E digito o email "nicolas.kumabe@sidemind.com"', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
      // cy.get('#username').type('side@mind.com')
      // cy.get('#password').type('#Side')
      // cy.wait(2000)
      // cy.get('#password').type('Mind2024!')
      cy.get('.woocommerce-LostPassword > a').click()
      cy.get('#user_login').type('nicolas.kumabe@sidemind.com')
    })
    
    it('E clico no botao "Reset Password"', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
      // cy.get('#username').type('side@mind.com')
      // cy.get('#password').type('#Side')
      // cy.wait(2000)
      // cy.get('#password').type('Mind2024!')
      cy.get('.woocommerce-LostPassword > a').click()
      cy.get('#user_login').type('nicolas.kumabe@sidemind.com')
      cy.get('.woocommerce-Button').click()
    })

    it('Entao devo ver a mensagem: "Password reset email has been sent."', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
      // cy.get('#username').type('side@mind.com')
      // cy.get('#password').type('#Side')
      // cy.wait(2000)
      // cy.get('#password').type('Mind2024!')
      cy.get('.woocommerce-LostPassword > a').click()
      cy.get('#user_login').type('nicolas.kumabe@sidemind.com')
      cy.get('.woocommerce-Button').click()
      cy.get('.woocommerce-message').contains('Password reset email has been sent.')
    })
  })

  describe('CT44', ()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

    it('Dado que acesso a tela de cadastro', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
    })

    it('Quando clico em "Lost your password?"', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
      // cy.get('#username').type('side@mind.com')
      // cy.get('#password').type('#Side')
      // cy.wait(2000)
      // cy.get('#password').type('Mind2024!')
      cy.get('.woocommerce-LostPassword > a').click()
    })

    it('E digito o email "conta.inexistente@sidemind.com"', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
      // cy.get('#username').type('side@mind.com')
      // cy.get('#password').type('#Side')
      // cy.wait(2000)
      // cy.get('#password').type('Mind2024!')
      cy.get('.woocommerce-LostPassword > a').click()
      cy.get('#user_login').type('conta.inexistente@sidemind.com')
    })
    
    it('E clico no botao "Reset Password"', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
      // cy.get('#username').type('side@mind.com')
      // cy.get('#password').type('#Side')
      // cy.wait(2000)
      // cy.get('#password').type('Mind2024!')
      cy.get('.woocommerce-LostPassword > a').click()
      cy.get('#user_login').type('conta.inexistente@sidemind.com')
      cy.get('.woocommerce-Button').click()
    })

    it('Entao devo ver a mensagem de erro: "Invalid username or e-mail."', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
      // cy.get('#username').type('side@mind.com')
      // cy.get('#password').type('#Side')
      // cy.wait(2000)
      // cy.get('#password').type('Mind2024!')
      cy.get('.woocommerce-LostPassword > a').click()
      cy.get('#user_login').type('conta.inexistente@sidemind.com')
      cy.get('.woocommerce-Button').click()
      cy.get('.woocommerce-error > li').contains('Invalid username or e-mail.')
    })
  })

  describe('CT45', ()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

    it('Dado que estou na pagina do produto "Android Quick Start Guide"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      
    })

    it('Quando clico no botao "Add to basket"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
    })

    it('E clico no botao "View Basket"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
    })
    
    it('E clico no botao "Proceed to Checkout"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()
    })

    it('E preencho todos os campos corretamente', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()

      //Primeiro nome
      cy.get('#billing_first_name').type('Nicolas')
      //Ultimo nome
      cy.get('#billing_last_name').type('Kumabe')

      //Nome da Empresa (opcional)
      cy.get('#billing_company').type('SideMind')

      //Email
      cy.get('#billing_email').type('nicolas@sidemind.com')

      //Numero celilar
      cy.get('#billing_phone').type('+55 (31) 8588-5353')

      //Pais (Country)
      cy.get('#select2-chosen-1').click()
      cy.get('#s2id_autogen1_search').type('bra')
      cy.get('#select2-result-label-314').click()

      //Nome da rua e bairro
      cy.get('#billing_address_1').type('Av. Santa Rosa, 601 - São Luiz')

      //Cidade
      cy.get('#billing_city').type('Belo Horizonte')

      //Estado
      cy.get('#select2-chosen-2').click()
      cy.get('#s2id_autogen2_search').type('Minas')
      cy.get('#select2-result-label-355').click()

      //CEP
      cy.get('#billing_postcode').type('31275-260')
    })

    it('E clico no botao "Place order"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()

      //Primeiro nome
      cy.get('#billing_first_name').type('Nicolas')
      //Ultimo nome
      cy.get('#billing_last_name').type('Kumabe')

      //Nome da Empresa (opcional)
      cy.get('#billing_company').type('SideMind')

      //Email
      cy.get('#billing_email').type('nicolas@sidemind.com')

      //Numero celilar
      cy.get('#billing_phone').type('+55 (31) 8588-5353')

      //Pais (Country)
      cy.get('#select2-chosen-1').click()
      cy.get('#s2id_autogen1_search').type('bra')
      cy.get('#select2-result-label-314').click()

      //Nome da rua e bairro
      cy.get('#billing_address_1').type('Av. Santa Rosa, 601 - São Luiz')

      //Cidade
      cy.get('#billing_city').type('Belo Horizonte')

      //Estado
      cy.get('#select2-chosen-2').click()
      cy.get('#s2id_autogen2_search').type('Minas')
      cy.get('#select2-result-label-355').click()

      //CEP
      cy.get('#billing_postcode').type('31275-260')

      //Place order
      cy.get('#place_order').click()
    })

    it('Entao devo ver os detalhes do pedido', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()

      //Primeiro nome
      cy.get('#billing_first_name').type('Nicolas')
      //Ultimo nome
      cy.get('#billing_last_name').type('Kumabe')

      //Nome da Empresa (opcional)
      cy.get('#billing_company').type('SideMind')

      //Email
      cy.get('#billing_email').type('nicolas@sidemind.com')

      //Numero celilar
      cy.get('#billing_phone').type('+55 (31) 8588-5353')

      //Pais (Country)
      cy.get('#select2-chosen-1').click()
      cy.get('#s2id_autogen1_search').type('bra')
      cy.get('#select2-result-label-314').click()

      //Nome da rua e bairro
      cy.get('#billing_address_1').type('Av. Santa Rosa, 601 - São Luiz')

      //Cidade
      cy.get('#billing_city').type('Belo Horizonte')

      //Estado
      cy.get('#select2-chosen-2').click()
      cy.get('#s2id_autogen2_search').type('Minas')
      cy.get('#select2-result-label-355').click()

      //CEP
      cy.get('#billing_postcode').type('31275-260')

      //Place order
      cy.get('#place_order').click()

      //Detalhes do pedido
      cy.get('.woocommerce > :nth-child(7)')
    })
  })

  describe('CT46', ()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

    it('Dado que estou na pagina do produto "Android Quick Start Guide"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      
    })

    it('Quando clico no botao "Add to basket"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
    })

    it('E clico no botao "View Basket"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
    })
    
    it('E clico no botao "Proceed to Checkout"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()
    })

    it('E preencho todos os campos corretamente sem "First Name"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()

      //Primeiro nome
      // cy.get('#billing_first_name').type('Nicolas')
      //Ultimo nome
      cy.get('#billing_last_name').type('Kumabe')

      //Nome da Empresa (opcional)
      cy.get('#billing_company').type('SideMind')

      //Email
      cy.get('#billing_email').type('nicolas@sidemind.com')

      //Numero celilar
      cy.get('#billing_phone').type('+55 (31) 8588-5353')

      //Pais (Country)
      cy.get('#select2-chosen-1').click()
      cy.get('#s2id_autogen1_search').type('bra')
      cy.get('#select2-result-label-314').click()

      //Nome da rua e bairro
      cy.get('#billing_address_1').type('Av. Santa Rosa, 601 - São Luiz')

      //Cidade
      cy.get('#billing_city').type('Belo Horizonte')

      //Estado
      cy.get('#select2-chosen-2').click()
      cy.get('#s2id_autogen2_search').type('Minas')
      cy.get('#select2-result-label-355').click()

      //CEP
      cy.get('#billing_postcode').type('31275-260')
    })

    it('E clico no botao "Place order"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()

      //Primeiro nome
      // cy.get('#billing_first_name').type('Nicolas')
      //Ultimo nome
      cy.get('#billing_last_name').type('Kumabe')

      //Nome da Empresa (opcional)
      cy.get('#billing_company').type('SideMind')

      //Email
      cy.get('#billing_email').type('nicolas@sidemind.com')

      //Numero celilar
      cy.get('#billing_phone').type('+55 (31) 8588-5353')

      //Pais (Country)
      cy.get('#select2-chosen-1').click()
      cy.get('#s2id_autogen1_search').type('bra')
      cy.get('#select2-result-label-314').click()

      //Nome da rua e bairro
      cy.get('#billing_address_1').type('Av. Santa Rosa, 601 - São Luiz')

      //Cidade
      cy.get('#billing_city').type('Belo Horizonte')

      //Estado
      cy.get('#select2-chosen-2').click()
      cy.get('#s2id_autogen2_search').type('Minas')
      cy.get('#select2-result-label-355').click()

      //CEP
      cy.get('#billing_postcode').type('31275-260')

      //Place order
      cy.get('#place_order').click()
    })

    it('Entao devo ver a mensagem de erro "Billing First Name is a required field."', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()

      //Primeiro nome
      // cy.get('#billing_first_name').type('Nicolas')
      //Ultimo nome
      cy.get('#billing_last_name').type('Kumabe')

      //Nome da Empresa (opcional)
      cy.get('#billing_company').type('SideMind')

      //Email
      cy.get('#billing_email').type('nicolas@sidemind.com')

      //Numero celilar
      cy.get('#billing_phone').type('+55 (31) 8588-5353')

      //Pais (Country)
      cy.get('#select2-chosen-1').click()
      cy.get('#s2id_autogen1_search').type('bra')
      cy.get('#select2-result-label-314').click()

      //Nome da rua e bairro
      cy.get('#billing_address_1').type('Av. Santa Rosa, 601 - São Luiz')

      //Cidade
      cy.get('#billing_city').type('Belo Horizonte')

      //Estado
      cy.get('#select2-chosen-2').click()
      cy.get('#s2id_autogen2_search').type('Minas')
      cy.get('#select2-result-label-355').click()

      //CEP
      cy.get('#billing_postcode').type('31275-260')

      //Place order
      cy.get('#place_order').click()

      //mensagem de erro
      cy.get('.woocommerce-error').contains('Billing First Name is a required field.')
    })
  })

  describe('CT47', ()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

    it('Dado que estou na pagina do produto "Android Quick Start Guide"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      
    })

    it('Quando clico no botao "Add to basket"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
    })

    it('E clico no botao "View Basket"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
    })
    
    it('E clico no botao "Proceed to Checkout"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()
    })

    it('E preencho todos os campos corretamente sem "First Name"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()

      //Primeiro nome
      cy.get('#billing_first_name').type('Nicolas')
      //Ultimo nome
      // cy.get('#billing_last_name').type('Kumabe')

      //Nome da Empresa (opcional)
      cy.get('#billing_company').type('SideMind')

      //Email
      cy.get('#billing_email').type('nicolas@sidemind.com')

      //Numero celilar
      cy.get('#billing_phone').type('+55 (31) 8588-5353')

      //Pais (Country)
      cy.get('#select2-chosen-1').click()
      cy.get('#s2id_autogen1_search').type('bra')
      cy.get('#select2-result-label-314').click()

      //Nome da rua e bairro
      cy.get('#billing_address_1').type('Av. Santa Rosa, 601 - São Luiz')

      //Cidade
      cy.get('#billing_city').type('Belo Horizonte')

      //Estado
      cy.get('#select2-chosen-2').click()
      cy.get('#s2id_autogen2_search').type('Minas')
      cy.get('#select2-result-label-355').click()

      //CEP
      cy.get('#billing_postcode').type('31275-260')
    })

    it('E clico no botao "Place order"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()

      //Primeiro nome
      cy.get('#billing_first_name').type('Nicolas')
      //Ultimo nome
      // cy.get('#billing_last_name').type('Kumabe')

      //Nome da Empresa (opcional)
      cy.get('#billing_company').type('SideMind')

      //Email
      cy.get('#billing_email').type('nicolas@sidemind.com')

      //Numero celilar
      cy.get('#billing_phone').type('+55 (31) 8588-5353')

      //Pais (Country)
      cy.get('#select2-chosen-1').click()
      cy.get('#s2id_autogen1_search').type('bra')
      cy.get('#select2-result-label-314').click()

      //Nome da rua e bairro
      cy.get('#billing_address_1').type('Av. Santa Rosa, 601 - São Luiz')

      //Cidade
      cy.get('#billing_city').type('Belo Horizonte')

      //Estado
      cy.get('#select2-chosen-2').click()
      cy.get('#s2id_autogen2_search').type('Minas')
      cy.get('#select2-result-label-355').click()

      //CEP
      cy.get('#billing_postcode').type('31275-260')

      //Place order
      cy.get('#place_order').click()
    })

    it('Entao devo ver a mensagem de erro "Billing Last Name is a required field."', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()

      //Primeiro nome
      cy.get('#billing_first_name').type('Nicolas')
      //Ultimo nome
      // cy.get('#billing_last_name').type('Kumabe')

      //Nome da Empresa (opcional)
      cy.get('#billing_company').type('SideMind')

      //Email
      cy.get('#billing_email').type('nicolas@sidemind.com')

      //Numero celilar
      cy.get('#billing_phone').type('+55 (31) 8588-5353')

      //Pais (Country)
      cy.get('#select2-chosen-1').click()
      cy.get('#s2id_autogen1_search').type('bra')
      cy.get('#select2-result-label-314').click()

      //Nome da rua e bairro
      cy.get('#billing_address_1').type('Av. Santa Rosa, 601 - São Luiz')

      //Cidade
      cy.get('#billing_city').type('Belo Horizonte')

      //Estado
      cy.get('#select2-chosen-2').click()
      cy.get('#s2id_autogen2_search').type('Minas')
      cy.get('#select2-result-label-355').click()

      //CEP
      cy.get('#billing_postcode').type('31275-260')

      //Place order
      cy.get('#place_order').click()

      //mensagem de erro
      cy.get('.woocommerce-error').contains('Billing Last Name is a required field.')
    })
  })

  describe('CT48', ()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

    it('Dado que estou na pagina do produto "Android Quick Start Guide"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      
    })

    it('Quando clico no botao "Add to basket"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
    })

    it('E clico no botao "View Basket"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
    })
    
    it('E clico no botao "Proceed to Checkout"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()
    })

    it('E preencho todos os campos corretamente sem "Email Adress"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()

      //Primeiro nome
      cy.get('#billing_first_name').type('Nicolas')
      //Ultimo nome
      cy.get('#billing_last_name').type('Kumabe')

      //Nome da Empresa (opcional)
      cy.get('#billing_company').type('SideMind')

      //Email
      // cy.get('#billing_email').type('nicolas@sidemind.com')

      //Numero celilar
      cy.get('#billing_phone').type('+55 (31) 8588-5353')

      //Pais (Country)
      cy.get('#select2-chosen-1').click()
      cy.get('#s2id_autogen1_search').type('bra')
      cy.get('#select2-result-label-314').click()

      //Nome da rua e bairro
      cy.get('#billing_address_1').type('Av. Santa Rosa, 601 - São Luiz')

      //Cidade
      cy.get('#billing_city').type('Belo Horizonte')

      //Estado
      cy.get('#select2-chosen-2').click()
      cy.get('#s2id_autogen2_search').type('Minas')
      cy.get('#select2-result-label-355').click()

      //CEP
      cy.get('#billing_postcode').type('31275-260')
    })

    it('E clico no botao "Place order"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()

      //Primeiro nome
      cy.get('#billing_first_name').type('Nicolas')
      //Ultimo nome
      cy.get('#billing_last_name').type('Kumabe')

      //Nome da Empresa (opcional)
      cy.get('#billing_company').type('SideMind')

      //Email
      // cy.get('#billing_email').type('nicolas@sidemind.com')

      //Numero celilar
      cy.get('#billing_phone').type('+55 (31) 8588-5353')

      //Pais (Country)
      cy.get('#select2-chosen-1').click()
      cy.get('#s2id_autogen1_search').type('bra')
      cy.get('#select2-result-label-314').click()

      //Nome da rua e bairro
      cy.get('#billing_address_1').type('Av. Santa Rosa, 601 - São Luiz')

      //Cidade
      cy.get('#billing_city').type('Belo Horizonte')

      //Estado
      cy.get('#select2-chosen-2').click()
      cy.get('#s2id_autogen2_search').type('Minas')
      cy.get('#select2-result-label-355').click()

      //CEP
      cy.get('#billing_postcode').type('31275-260')

      //Place order
      cy.get('#place_order').click()
    })

    it('Entao devo ver a mensagem de erro "Billing Last Name is a required field."', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()

      //Primeiro nome
      cy.get('#billing_first_name').type('Nicolas')
      //Ultimo nome
      cy.get('#billing_last_name').type('Kumabe')

      //Nome da Empresa (opcional)
      cy.get('#billing_company').type('SideMind')

      //Email
      // cy.get('#billing_email').type('nicolas@sidemind.com')

      //Numero celilar
      cy.get('#billing_phone').type('+55 (31) 8588-5353')

      //Pais (Country)
      cy.get('#select2-chosen-1').click()
      cy.get('#s2id_autogen1_search').type('bra')
      cy.get('#select2-result-label-314').click()

      //Nome da rua e bairro
      cy.get('#billing_address_1').type('Av. Santa Rosa, 601 - São Luiz')

      //Cidade
      cy.get('#billing_city').type('Belo Horizonte')

      //Estado
      cy.get('#select2-chosen-2').click()
      cy.get('#s2id_autogen2_search').type('Minas')
      cy.get('#select2-result-label-355').click()

      //CEP
      cy.get('#billing_postcode').type('31275-260')

      //Place order
      cy.get('#place_order').click()

      //mensagem de erro
      cy.get('.woocommerce-error').contains('Billing Email Address is a required field.')
    })
  })

  describe('CT49', ()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

    it('Dado que estou na pagina do produto "Android Quick Start Guide"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      
    })

    it('Quando clico no botao "Add to basket"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
    })

    it('E clico no botao "View Basket"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
    })
    
    it('E clico no botao "Proceed to Checkout"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()
    })

    it('E preencho todos os campos corretamente com "Email Adress" preenchido com "nicolas"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()

      //Primeiro nome
      cy.get('#billing_first_name').type('Nicolas')
      //Ultimo nome
      cy.get('#billing_last_name').type('Kumabe')

      //Nome da Empresa (opcional)
      cy.get('#billing_company').type('SideMind')

      //Email
      cy.get('#billing_email').type('nicolas')

      //Numero celilar
      cy.get('#billing_phone').type('+55 (31) 8588-5353')

      //Pais (Country)
      cy.get('#select2-chosen-1').click()
      cy.get('#s2id_autogen1_search').type('bra')
      cy.get('#select2-result-label-314').click()

      //Nome da rua e bairro
      cy.get('#billing_address_1').type('Av. Santa Rosa, 601 - São Luiz')

      //Cidade
      cy.get('#billing_city').type('Belo Horizonte')

      //Estado
      cy.get('#select2-chosen-2').click()
      cy.get('#s2id_autogen2_search').type('Minas')
      cy.get('#select2-result-label-355').click()

      //CEP
      cy.get('#billing_postcode').type('31275-260')
    })

    it('E clico no botao "Place order"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()

      //Primeiro nome
      cy.get('#billing_first_name').type('Nicolas')
      //Ultimo nome
      cy.get('#billing_last_name').type('Kumabe')

      //Nome da Empresa (opcional)
      cy.get('#billing_company').type('SideMind')

      //Email
      cy.get('#billing_email').type('nicolas')

      //Numero celilar
      cy.get('#billing_phone').type('+55 (31) 8588-5353')

      //Pais (Country)
      cy.get('#select2-chosen-1').click()
      cy.get('#s2id_autogen1_search').type('bra')
      cy.get('#select2-result-label-314').click()

      //Nome da rua e bairro
      cy.get('#billing_address_1').type('Av. Santa Rosa, 601 - São Luiz')

      //Cidade
      cy.get('#billing_city').type('Belo Horizonte')

      //Estado
      cy.get('#select2-chosen-2').click()
      cy.get('#s2id_autogen2_search').type('Minas')
      cy.get('#select2-result-label-355').click()

      //CEP
      cy.get('#billing_postcode').type('31275-260')

      //Place order
      cy.get('#place_order').click()
    })

    it('Entao devo ver a seguinte mensagem do navegador: "Please include an @ in the email addres. nicolas is missing an @."', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()

      //Primeiro nome
      cy.get('#billing_first_name').type('Nicolas')
      //Ultimo nome
      cy.get('#billing_last_name').type('Kumabe')

      //Nome da Empresa (opcional)
      cy.get('#billing_company').type('SideMind')

      //Email
      cy.get('#billing_email').type('nicolas')

      //Numero celilar
      cy.get('#billing_phone').type('+55 (31) 8588-5353')

      //Pais (Country)
      cy.get('#select2-chosen-1').click()
      cy.get('#s2id_autogen1_search').type('bra')
      cy.get('#select2-result-label-314').click()

      //Nome da rua e bairro
      cy.get('#billing_address_1').type('Av. Santa Rosa, 601 - São Luiz')

      //Cidade
      cy.get('#billing_city').type('Belo Horizonte')

      //Estado
      cy.get('#select2-chosen-2').click()
      cy.get('#s2id_autogen2_search').type('Minas')
      cy.get('#select2-result-label-355').click()

      //CEP
      cy.get('#billing_postcode').type('31275-260')

      //Place order
      cy.get('#place_order').click()

      //Mensagem do navegador "Please include an '@' in the email addres. 'nicolas' is missing an '@'."
    })
  })

  describe('CT50', ()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

    it('Dado que estou na pagina do produto "Android Quick Start Guide"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      
    })

    it('Quando clico no botao "Add to basket"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
    })

    it('E clico no botao "View Basket"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
    })
    
    it('E clico no botao "Proceed to Checkout"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()
    })

    it('E preencho todos os campos corretamente com "Email Adress" preenchido com "nicolas@"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()

      //Primeiro nome
      cy.get('#billing_first_name').type('Nicolas')
      //Ultimo nome
      cy.get('#billing_last_name').type('Kumabe')

      //Nome da Empresa (opcional)
      cy.get('#billing_company').type('SideMind')

      //Email
      cy.get('#billing_email').type('nicolas@')

      //Numero celilar
      cy.get('#billing_phone').type('+55 (31) 8588-5353')

      //Pais (Country)
      cy.get('#select2-chosen-1').click()
      cy.get('#s2id_autogen1_search').type('bra')
      cy.get('#select2-result-label-314').click()

      //Nome da rua e bairro
      cy.get('#billing_address_1').type('Av. Santa Rosa, 601 - São Luiz')

      //Cidade
      cy.get('#billing_city').type('Belo Horizonte')

      //Estado
      cy.get('#select2-chosen-2').click()
      cy.get('#s2id_autogen2_search').type('Minas')
      cy.get('#select2-result-label-355').click()

      //CEP
      cy.get('#billing_postcode').type('31275-260')
    })

    it('E clico no botao "Place order"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()

      //Primeiro nome
      cy.get('#billing_first_name').type('Nicolas')
      //Ultimo nome
      cy.get('#billing_last_name').type('Kumabe')

      //Nome da Empresa (opcional)
      cy.get('#billing_company').type('SideMind')

      //Email
      cy.get('#billing_email').type('nicolas@')

      //Numero celilar
      cy.get('#billing_phone').type('+55 (31) 8588-5353')

      //Pais (Country)
      cy.get('#select2-chosen-1').click()
      cy.get('#s2id_autogen1_search').type('bra')
      cy.get('#select2-result-label-314').click()

      //Nome da rua e bairro
      cy.get('#billing_address_1').type('Av. Santa Rosa, 601 - São Luiz')

      //Cidade
      cy.get('#billing_city').type('Belo Horizonte')

      //Estado
      cy.get('#select2-chosen-2').click()
      cy.get('#s2id_autogen2_search').type('Minas')
      cy.get('#select2-result-label-355').click()

      //CEP
      cy.get('#billing_postcode').type('31275-260')

      //Place order
      cy.get('#place_order').click()
    })

    it('Entao devo ver a seguinte mensagem do navegador: "Please enter a part following @. nicolas@ is incomplete."', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()

      //Primeiro nome
      cy.get('#billing_first_name').type('Nicolas')
      //Ultimo nome
      cy.get('#billing_last_name').type('Kumabe')

      //Nome da Empresa (opcional)
      cy.get('#billing_company').type('SideMind')

      //Email
      cy.get('#billing_email').type('nicolas@')

      //Numero celilar
      cy.get('#billing_phone').type('+55 (31) 8588-5353')

      //Pais (Country)
      cy.get('#select2-chosen-1').click()
      cy.get('#s2id_autogen1_search').type('bra')
      cy.get('#select2-result-label-314').click()

      //Nome da rua e bairro
      cy.get('#billing_address_1').type('Av. Santa Rosa, 601 - São Luiz')

      //Cidade
      cy.get('#billing_city').type('Belo Horizonte')

      //Estado
      cy.get('#select2-chosen-2').click()
      cy.get('#s2id_autogen2_search').type('Minas')
      cy.get('#select2-result-label-355').click()

      //CEP
      cy.get('#billing_postcode').type('31275-260')

      //Place order
      cy.get('#place_order').click()

      //Mensagem do navegador "Please include an '@' in the email addres. 'nicolas' is missing an '@'."
    })
  })

  describe('CT51', ()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

    it('Dado que estou na pagina do produto "Android Quick Start Guide"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      
    })

    it('Quando clico no botao "Add to basket"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
    })

    it('E clico no botao "View Basket"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
    })
    
    it('E clico no botao "Proceed to Checkout"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()
    })

    it('E preencho todos os campos corretamente com "Email Adress" preenchido com "nicolas@sidemind"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()

      //Primeiro nome
      cy.get('#billing_first_name').type('Nicolas')
      //Ultimo nome
      cy.get('#billing_last_name').type('Kumabe')

      //Nome da Empresa (opcional)
      cy.get('#billing_company').type('SideMind')

      //Email
      cy.get('#billing_email').type('nicolas@sidemind')

      //Numero celilar
      cy.get('#billing_phone').type('+55 (31) 8588-5353')

      //Pais (Country)
      cy.get('#select2-chosen-1').click()
      cy.get('#s2id_autogen1_search').type('bra')
      cy.get('#select2-result-label-314').click()

      //Nome da rua e bairro
      cy.get('#billing_address_1').type('Av. Santa Rosa, 601 - São Luiz')

      //Cidade
      cy.get('#billing_city').type('Belo Horizonte')

      //Estado
      cy.get('#select2-chosen-2').click()
      cy.get('#s2id_autogen2_search').type('Minas')
      cy.get('#select2-result-label-355').click()

      //CEP
      cy.get('#billing_postcode').type('31275-260')
    })

    it('E clico no botao "Place order"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()

      //Primeiro nome
      cy.get('#billing_first_name').type('Nicolas')
      //Ultimo nome
      cy.get('#billing_last_name').type('Kumabe')

      //Nome da Empresa (opcional)
      cy.get('#billing_company').type('SideMind')

      //Email
      cy.get('#billing_email').type('nicolas@sidemind')

      //Numero celilar
      cy.get('#billing_phone').type('+55 (31) 8588-5353')

      //Pais (Country)
      cy.get('#select2-chosen-1').click()
      cy.get('#s2id_autogen1_search').type('bra')
      cy.get('#select2-result-label-314').click()

      //Nome da rua e bairro
      cy.get('#billing_address_1').type('Av. Santa Rosa, 601 - São Luiz')

      //Cidade
      cy.get('#billing_city').type('Belo Horizonte')

      //Estado
      cy.get('#select2-chosen-2').click()
      cy.get('#s2id_autogen2_search').type('Minas')
      cy.get('#select2-result-label-355').click()

      //CEP
      cy.get('#billing_postcode').type('31275-260')

      //Place order
      cy.get('#place_order').click()
    })

    it('Entao devo ver a mensagem de erro: "Email Address is not a valid email address."', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()

      //Primeiro nome
      cy.get('#billing_first_name').type('Nicolas')
      //Ultimo nome
      cy.get('#billing_last_name').type('Kumabe')

      //Nome da Empresa (opcional)
      cy.get('#billing_company').type('SideMind')

      //Email
      cy.get('#billing_email').type('nicolas@sidemind')

      //Numero celilar
      cy.get('#billing_phone').type('+55 (31) 8588-5353')

      //Pais (Country)
      cy.get('#select2-chosen-1').click()
      cy.get('#s2id_autogen1_search').type('bra')
      cy.get('#select2-result-label-314').click()

      //Nome da rua e bairro
      cy.get('#billing_address_1').type('Av. Santa Rosa, 601 - São Luiz')

      //Cidade
      cy.get('#billing_city').type('Belo Horizonte')

      //Estado
      cy.get('#select2-chosen-2').click()
      cy.get('#s2id_autogen2_search').type('Minas')
      cy.get('#select2-result-label-355').click()

      //CEP
      cy.get('#billing_postcode').type('31275-260')

      //Place order
      cy.get('#place_order').click()

      //Devo ver a mensagem de erro: "Email Address is not a valid email address."
      cy.get('.woocommerce-error > li').contains('Email Address is not a valid email address.')
    })
  })

  describe('CT52', ()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

    it('Dado que estou na pagina do produto "Android Quick Start Guide"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      
    })

    it('Quando clico no botao "Add to basket"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
    })

    it('E clico no botao "View Basket"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
    })
    
    it('E clico no botao "Proceed to Checkout"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()
    })

    it('E preencho todos os campos corretamente sem o campo "Phone"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()

      //Primeiro nome
      cy.get('#billing_first_name').type('Nicolas')
      //Ultimo nome
      cy.get('#billing_last_name').type('Kumabe')

      //Nome da Empresa (opcional)
      cy.get('#billing_company').type('SideMind')

      //Email
      cy.get('#billing_email').type('nicolas@sidemind.com')

      //Numero celilar
      // cy.get('#billing_phone').type('+55 (31) 8588-5353')

      //Pais (Country)
      cy.get('#select2-chosen-1').click()
      cy.get('#s2id_autogen1_search').type('bra')
      cy.get('#select2-result-label-314').click()

      //Nome da rua e bairro
      cy.get('#billing_address_1').type('Av. Santa Rosa, 601 - São Luiz')

      //Cidade
      cy.get('#billing_city').type('Belo Horizonte')

      //Estado
      cy.get('#select2-chosen-2').click()
      cy.get('#s2id_autogen2_search').type('Minas')
      cy.get('#select2-result-label-355').click()

      //CEP
      cy.get('#billing_postcode').type('31275-260')
    })

    it('E clico no botao "Place order"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()

      //Primeiro nome
      cy.get('#billing_first_name').type('Nicolas')
      //Ultimo nome
      cy.get('#billing_last_name').type('Kumabe')

      //Nome da Empresa (opcional)
      cy.get('#billing_company').type('SideMind')

      //Email
      cy.get('#billing_email').type('nicolas@sidemind.com')

      //Numero celilar
      // cy.get('#billing_phone').type('+55 (31) 8588-5353')

      //Pais (Country)
      cy.get('#select2-chosen-1').click()
      cy.get('#s2id_autogen1_search').type('bra')
      cy.get('#select2-result-label-314').click()

      //Nome da rua e bairro
      cy.get('#billing_address_1').type('Av. Santa Rosa, 601 - São Luiz')

      //Cidade
      cy.get('#billing_city').type('Belo Horizonte')

      //Estado
      cy.get('#select2-chosen-2').click()
      cy.get('#s2id_autogen2_search').type('Minas')
      cy.get('#select2-result-label-355').click()

      //CEP
      cy.get('#billing_postcode').type('31275-260')

      //Place order
      cy.get('#place_order').click()
    })

    it('Entao devo ver a mensagem de erro "Billing Phone is a required field."', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()

      //Primeiro nome
      cy.get('#billing_first_name').type('Nicolas')
      //Ultimo nome
      cy.get('#billing_last_name').type('Kumabe')

      //Nome da Empresa (opcional)
      cy.get('#billing_company').type('SideMind')

      //Email
      cy.get('#billing_email').type('nicolas@sidemind.com')

      //Numero celilar
      // cy.get('#billing_phone').type('+55 (31) 8588-5353')

      //Pais (Country)
      cy.get('#select2-chosen-1').click()
      cy.get('#s2id_autogen1_search').type('bra')
      cy.get('#select2-result-label-314').click()

      //Nome da rua e bairro
      cy.get('#billing_address_1').type('Av. Santa Rosa, 601 - São Luiz')

      //Cidade
      cy.get('#billing_city').type('Belo Horizonte')

      //Estado
      cy.get('#select2-chosen-2').click()
      cy.get('#s2id_autogen2_search').type('Minas')
      cy.get('#select2-result-label-355').click()

      //CEP
      cy.get('#billing_postcode').type('31275-260')

      //Place order
      cy.get('#place_order').click()

      //Devo ver a mensagem de erro: "Billing Phone is a required field."
      cy.get('.woocommerce-error > li').contains('Billing Phone is a required field.')
    })
  })

  describe('CT53', ()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

    it('Dado que estou na pagina do produto "Android Quick Start Guide"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      
    })

    it('Quando clico no botao "Add to basket"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
    })

    it('E clico no botao "View Basket"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
    })
    
    it('E clico no botao "Proceed to Checkout"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()
    })

    it('E preencho todos os campos corretamente com "Phone" tendo "sidemind100"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()

      //Primeiro nome
      cy.get('#billing_first_name').type('Nicolas')
      //Ultimo nome
      cy.get('#billing_last_name').type('Kumabe')

      //Nome da Empresa (opcional)
      cy.get('#billing_company').type('SideMind')

      //Email
      cy.get('#billing_email').type('nicolas@sidemind.com')

      //Numero celilar
      // cy.get('#billing_phone').type('+55 (31) 8588-5353')
      cy.get('#billing_phone').type('sidemind100')

      //Pais (Country)
      cy.get('#select2-chosen-1').click()
      cy.get('#s2id_autogen1_search').type('bra')
      cy.get('#select2-result-label-314').click()

      //Nome da rua e bairro
      cy.get('#billing_address_1').type('Av. Santa Rosa, 601 - São Luiz')

      //Cidade
      cy.get('#billing_city').type('Belo Horizonte')

      //Estado
      cy.get('#select2-chosen-2').click()
      cy.get('#s2id_autogen2_search').type('Minas')
      cy.get('#select2-result-label-355').click()

      //CEP
      cy.get('#billing_postcode').type('31275-260')
    })

    it('E clico no botao "Place order"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()

      //Primeiro nome
      cy.get('#billing_first_name').type('Nicolas')
      //Ultimo nome
      cy.get('#billing_last_name').type('Kumabe')

      //Nome da Empresa (opcional)
      cy.get('#billing_company').type('SideMind')

      //Email
      cy.get('#billing_email').type('nicolas@sidemind.com')

      //Numero celilar
      // cy.get('#billing_phone').type('+55 (31) 8588-5353')
      cy.get('#billing_phone').type('sidemind100')

      //Pais (Country)
      cy.get('#select2-chosen-1').click()
      cy.get('#s2id_autogen1_search').type('bra')
      cy.get('#select2-result-label-314').click()

      //Nome da rua e bairro
      cy.get('#billing_address_1').type('Av. Santa Rosa, 601 - São Luiz')

      //Cidade
      cy.get('#billing_city').type('Belo Horizonte')

      //Estado
      cy.get('#select2-chosen-2').click()
      cy.get('#s2id_autogen2_search').type('Minas')
      cy.get('#select2-result-label-355').click()

      //CEP
      cy.get('#billing_postcode').type('31275-260')

      //Place order
      cy.get('#place_order').click()
    })

    it('Entao devo ver a mensagem de erro "Phone is not a valid phone number."', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()

      //Primeiro nome
      cy.get('#billing_first_name').type('Nicolas')
      //Ultimo nome
      cy.get('#billing_last_name').type('Kumabe')

      //Nome da Empresa (opcional)
      cy.get('#billing_company').type('SideMind')

      //Email
      cy.get('#billing_email').type('nicolas@sidemind.com')

      //Numero celilar
      // cy.get('#billing_phone').type('+55 (31) 8588-5353')
      cy.get('#billing_phone').type('sidemind100')

      //Pais (Country)
      cy.get('#select2-chosen-1').click()
      cy.get('#s2id_autogen1_search').type('bra')
      cy.get('#select2-result-label-314').click()

      //Nome da rua e bairro
      cy.get('#billing_address_1').type('Av. Santa Rosa, 601 - São Luiz')

      //Cidade
      cy.get('#billing_city').type('Belo Horizonte')

      //Estado
      cy.get('#select2-chosen-2').click()
      cy.get('#s2id_autogen2_search').type('Minas')
      cy.get('#select2-result-label-355').click()

      //CEP
      cy.get('#billing_postcode').type('31275-260')

      //Place order
      cy.get('#place_order').click()

      //Devo ver a mensagem de erro: "Phone is not a valid phone number."
      cy.get('.woocommerce-error > li').contains('Phone is not a valid phone number.')
    })
  })

  describe('CT54', ()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

    it('Dado que estou na pagina do produto "Android Quick Start Guide"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      
    })

    it('Quando clico no botao "Add to basket"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
    })

    it('E clico no botao "View Basket"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
    })
    
    it('E clico no botao "Proceed to Checkout"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()
    })

    it('E preencho todos os campos corretamente sem o campo "Adress"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()

      //Primeiro nome
      cy.get('#billing_first_name').type('Nicolas')
      //Ultimo nome
      cy.get('#billing_last_name').type('Kumabe')

      //Nome da Empresa (opcional)
      cy.get('#billing_company').type('SideMind')

      //Email
      cy.get('#billing_email').type('nicolas@sidemind.com')

      //Numero celilar
      cy.get('#billing_phone').type('+55 (31) 8588-5353')

      //Pais (Country)
      cy.get('#select2-chosen-1').click()
      cy.get('#s2id_autogen1_search').type('bra')
      cy.get('#select2-result-label-314').click()

      //Nome da rua e bairro
      // cy.get('#billing_address_1').type('Av. Santa Rosa, 601 - São Luiz')

      //Cidade
      cy.get('#billing_city').type('Belo Horizonte')

      //Estado
      cy.get('#select2-chosen-2').click()
      cy.get('#s2id_autogen2_search').type('Minas')
      cy.get('#select2-result-label-355').click()

      //CEP
      cy.get('#billing_postcode').type('31275-260')
    })

    it('E clico no botao "Place order"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()

      //Primeiro nome
      cy.get('#billing_first_name').type('Nicolas')
      //Ultimo nome
      cy.get('#billing_last_name').type('Kumabe')

      //Nome da Empresa (opcional)
      cy.get('#billing_company').type('SideMind')

      //Email
      cy.get('#billing_email').type('nicolas@sidemind.com')

      //Numero celilar
      cy.get('#billing_phone').type('+55 (31) 8588-5353')

      //Pais (Country)
      cy.get('#select2-chosen-1').click()
      cy.get('#s2id_autogen1_search').type('bra')
      cy.get('#select2-result-label-314').click()

      //Nome da rua e bairro
      // cy.get('#billing_address_1').type('Av. Santa Rosa, 601 - São Luiz')

      //Cidade
      cy.get('#billing_city').type('Belo Horizonte')

      //Estado
      cy.get('#select2-chosen-2').click()
      cy.get('#s2id_autogen2_search').type('Minas')
      cy.get('#select2-result-label-355').click()

      //CEP
      cy.get('#billing_postcode').type('31275-260')

      //Place order
      cy.get('#place_order').click()
    })

    it('Entao devo ver a mensagem de erro "Billing Address is a required field."', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()

      //Primeiro nome
      cy.get('#billing_first_name').type('Nicolas')
      //Ultimo nome
      cy.get('#billing_last_name').type('Kumabe')

      //Nome da Empresa (opcional)
      cy.get('#billing_company').type('SideMind')

      //Email
      cy.get('#billing_email').type('nicolas@sidemind.com')

      //Numero celilar
      cy.get('#billing_phone').type('+55 (31) 8588-5353')

      //Pais (Country)
      cy.get('#select2-chosen-1').click()
      cy.get('#s2id_autogen1_search').type('bra')
      cy.get('#select2-result-label-314').click()

      //Nome da rua e bairro
      // cy.get('#billing_address_1').type('Av. Santa Rosa, 601 - São Luiz')

      //Cidade
      cy.get('#billing_city').type('Belo Horizonte')

      //Estado
      cy.get('#select2-chosen-2').click()
      cy.get('#s2id_autogen2_search').type('Minas')
      cy.get('#select2-result-label-355').click()

      //CEP
      cy.get('#billing_postcode').type('31275-260')

      //Place order
      cy.get('#place_order').click()

      //Devo ver a mensagem de erro: "Billing Address is a required field."
      cy.get('.woocommerce-error > li').contains('Billing Address is a required field.')
    })
  })

  describe('CT55', ()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

    it('Dado que estou na pagina do produto "Android Quick Start Guide"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      
    })

    it('Quando clico no botao "Add to basket"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
    })

    it('E clico no botao "View Basket"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
    })
    
    it('E clico no botao "Proceed to Checkout"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()
    })

    it('E preencho todos os campos corretamente sem o campo "Town / City"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()

      //Primeiro nome
      cy.get('#billing_first_name').type('Nicolas')
      //Ultimo nome
      cy.get('#billing_last_name').type('Kumabe')

      //Nome da Empresa (opcional)
      cy.get('#billing_company').type('SideMind')

      //Email
      cy.get('#billing_email').type('nicolas@sidemind.com')

      //Numero celilar
      cy.get('#billing_phone').type('+55 (31) 8588-5353')

      //Pais (Country)
      cy.get('#select2-chosen-1').click()
      cy.get('#s2id_autogen1_search').type('bra')
      cy.get('#select2-result-label-314').click()

      //Nome da rua e bairro
      cy.get('#billing_address_1').type('Av. Santa Rosa, 601 - São Luiz')

      //Cidade
      // cy.get('#billing_city').type('Belo Horizonte')

      //Estado
      cy.get('#select2-chosen-2').click()
      cy.get('#s2id_autogen2_search').type('Minas')
      cy.get('#select2-result-label-355').click()

      //CEP
      cy.get('#billing_postcode').type('31275-260')
    })

    it('E clico no botao "Place order"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()

      //Primeiro nome
      cy.get('#billing_first_name').type('Nicolas')
      //Ultimo nome
      cy.get('#billing_last_name').type('Kumabe')

      //Nome da Empresa (opcional)
      cy.get('#billing_company').type('SideMind')

      //Email
      cy.get('#billing_email').type('nicolas@sidemind.com')

      //Numero celilar
      cy.get('#billing_phone').type('+55 (31) 8588-5353')

      //Pais (Country)
      cy.get('#select2-chosen-1').click()
      cy.get('#s2id_autogen1_search').type('bra')
      cy.get('#select2-result-label-314').click()

      //Nome da rua e bairro
      cy.get('#billing_address_1').type('Av. Santa Rosa, 601 - São Luiz')

      //Cidade
      // cy.get('#billing_city').type('Belo Horizonte')

      //Estado
      cy.get('#select2-chosen-2').click()
      cy.get('#s2id_autogen2_search').type('Minas')
      cy.get('#select2-result-label-355').click()

      //CEP
      cy.get('#billing_postcode').type('31275-260')

      //Place order
      cy.get('#place_order').click()
    })

    it('Entao devo ver a mensagem de erro "Billing Town / City is a required field."', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()

      //Primeiro nome
      cy.get('#billing_first_name').type('Nicolas')
      //Ultimo nome
      cy.get('#billing_last_name').type('Kumabe')

      //Nome da Empresa (opcional)
      cy.get('#billing_company').type('SideMind')

      //Email
      cy.get('#billing_email').type('nicolas@sidemind.com')

      //Numero celilar
      cy.get('#billing_phone').type('+55 (31) 8588-5353')

      //Pais (Country)
      cy.get('#select2-chosen-1').click()
      cy.get('#s2id_autogen1_search').type('bra')
      cy.get('#select2-result-label-314').click()

      //Nome da rua e bairro
      cy.get('#billing_address_1').type('Av. Santa Rosa, 601 - São Luiz')

      //Cidade
      // cy.get('#billing_city').type('Belo Horizonte')

      //Estado
      cy.get('#select2-chosen-2').click()
      cy.get('#s2id_autogen2_search').type('Minas')
      cy.get('#select2-result-label-355').click()

      //CEP
      cy.get('#billing_postcode').type('31275-260')

      //Place order
      cy.get('#place_order').click()

      //Devo ver a mensagem de erro: "Billing Town / City is a required field."
      cy.get('.woocommerce-error > li').contains('Billing Town / City is a required field.')
    })
  })

  describe('CT56', ()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

    it('Dado que estou na pagina do produto "Android Quick Start Guide"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      
    })

    it('Quando clico no botao "Add to basket"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
    })

    it('E clico no botao "View Basket"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
    })
    
    it('E clico no botao "Proceed to Checkout"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()
    })

    it('E preencho todos os campos corretamente sem o campo "Postcode / ZIP', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()

      //Primeiro nome
      cy.get('#billing_first_name').type('Nicolas')
      //Ultimo nome
      cy.get('#billing_last_name').type('Kumabe')

      //Nome da Empresa (opcional)
      cy.get('#billing_company').type('SideMind')

      //Email
      cy.get('#billing_email').type('nicolas@sidemind.com')

      //Numero celilar
      cy.get('#billing_phone').type('+55 (31) 8588-5353')

      //Pais (Country)
      cy.get('#select2-chosen-1').click()
      cy.get('#s2id_autogen1_search').type('bra')
      cy.get('#select2-result-label-314').click()

      //Nome da rua e bairro
      cy.get('#billing_address_1').type('Av. Santa Rosa, 601 - São Luiz')

      //Cidade
      cy.get('#billing_city').type('Belo Horizonte')

      //Estado
      cy.get('#select2-chosen-2').click()
      cy.get('#s2id_autogen2_search').type('Minas')
      cy.get('#select2-result-label-355').click()

      //CEP
      // cy.get('#billing_postcode').type('31275-260')
    })

    it('E clico no botao "Place order"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()

      //Primeiro nome
      cy.get('#billing_first_name').type('Nicolas')
      //Ultimo nome
      cy.get('#billing_last_name').type('Kumabe')

      //Nome da Empresa (opcional)
      cy.get('#billing_company').type('SideMind')

      //Email
      cy.get('#billing_email').type('nicolas@sidemind.com')

      //Numero celilar
      cy.get('#billing_phone').type('+55 (31) 8588-5353')

      //Pais (Country)
      cy.get('#select2-chosen-1').click()
      cy.get('#s2id_autogen1_search').type('bra')
      cy.get('#select2-result-label-314').click()

      //Nome da rua e bairro
      cy.get('#billing_address_1').type('Av. Santa Rosa, 601 - São Luiz')

      //Cidade
      cy.get('#billing_city').type('Belo Horizonte')

      //Estado
      cy.get('#select2-chosen-2').click()
      cy.get('#s2id_autogen2_search').type('Minas')
      cy.get('#select2-result-label-355').click()

      //CEP
      // cy.get('#billing_postcode').type('31275-260')

      //Place order
      cy.get('#place_order').click()
    })

    it('Entao devo ver a mensagem de erro "Billing Postcode / ZIP is a required field."', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()

      //Primeiro nome
      cy.get('#billing_first_name').type('Nicolas')
      //Ultimo nome
      cy.get('#billing_last_name').type('Kumabe')

      //Nome da Empresa (opcional)
      cy.get('#billing_company').type('SideMind')

      //Email
      cy.get('#billing_email').type('nicolas@sidemind.com')

      //Numero celilar
      cy.get('#billing_phone').type('+55 (31) 8588-5353')

      //Pais (Country)
      cy.get('#select2-chosen-1').click()
      cy.get('#s2id_autogen1_search').type('bra')
      cy.get('#select2-result-label-314').click()

      //Nome da rua e bairro
      cy.get('#billing_address_1').type('Av. Santa Rosa, 601 - São Luiz')

      //Cidade
      cy.get('#billing_city').type('Belo Horizonte')

      //Estado
      cy.get('#select2-chosen-2').click()
      cy.get('#s2id_autogen2_search').type('Minas')
      cy.get('#select2-result-label-355').click()

      //CEP
      // cy.get('#billing_postcode').type('31275-260')

      //Place order
      cy.get('#place_order').click()

      //Devo ver a mensagem de erro: "Billing Postcode / ZIP is a required field."
      cy.get('.woocommerce-error > li').contains('Billing Postcode / ZIP is a required field.')
    })
  })

  describe('CT57', ()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

    it('Dado que estou na pagina do produto "Android Quick Start Guide"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      
    })

    it('Quando clico no botao "Add to basket"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
    })

    it('E clico no botao "View Basket"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
    })
    
    it('E clico no botao "Proceed to Checkout"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()
    })

    it('E preencho todos os campos corretamente', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()

      //Primeiro nome
      cy.get('#billing_first_name').type('Nicolas')
      //Ultimo nome
      cy.get('#billing_last_name').type('Kumabe')

      //Nome da Empresa (opcional)
      cy.get('#billing_company').type('SideMind')

      //Email
      cy.get('#billing_email').type('nicolas@sidemind.com')

      //Numero celilar
      cy.get('#billing_phone').type('+55 (31) 8588-5353')

      //Pais (Country)
      cy.get('#select2-chosen-1').click()
      cy.get('#s2id_autogen1_search').type('bra')
      cy.get('#select2-result-label-314').click()

      //Nome da rua e bairro
      cy.get('#billing_address_1').type('Av. Santa Rosa, 601 - São Luiz')

      //Cidade
      cy.get('#billing_city').type('Belo Horizonte')

      //Estado
      cy.get('#select2-chosen-2').click()
      cy.get('#s2id_autogen2_search').type('Minas')
      cy.get('#select2-result-label-355').click()

      //CEP
      cy.get('#billing_postcode').type('31275-260')
    })

    it('E seleciono a opcao de pagamento "Direct Bank Transfer"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()

      //Primeiro nome
      cy.get('#billing_first_name').type('Nicolas')
      //Ultimo nome
      cy.get('#billing_last_name').type('Kumabe')

      //Nome da Empresa (opcional)
      cy.get('#billing_company').type('SideMind')

      //Email
      cy.get('#billing_email').type('nicolas@sidemind.com')

      //Numero celilar
      cy.get('#billing_phone').type('+55 (31) 8588-5353')

      //Pais (Country)
      cy.get('#select2-chosen-1').click()
      cy.get('#s2id_autogen1_search').type('bra')
      cy.get('#select2-result-label-314').click()

      //Nome da rua e bairro
      cy.get('#billing_address_1').type('Av. Santa Rosa, 601 - São Luiz')

      //Cidade
      cy.get('#billing_city').type('Belo Horizonte')

      //Estado
      cy.get('#select2-chosen-2').click()
      cy.get('#s2id_autogen2_search').type('Minas')
      cy.get('#select2-result-label-355').click()

      //CEP
      cy.get('#billing_postcode').type('31275-260')

      //Direct Bank Transfer
      cy.get('#payment_method_bacs').click()

      //Place order
      // cy.get('#place_order').click()
    })

    it('Entao devo ver a mensagem "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account."', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()

      //Primeiro nome
      cy.get('#billing_first_name').type('Nicolas')
      //Ultimo nome
      cy.get('#billing_last_name').type('Kumabe')

      //Nome da Empresa (opcional)
      cy.get('#billing_company').type('SideMind')

      //Email
      cy.get('#billing_email').type('nicolas@sidemind.com')

      //Numero celilar
      cy.get('#billing_phone').type('+55 (31) 8588-5353')

      //Pais (Country)
      cy.get('#select2-chosen-1').click()
      cy.get('#s2id_autogen1_search').type('bra')
      cy.get('#select2-result-label-314').click()

      //Nome da rua e bairro
      cy.get('#billing_address_1').type('Av. Santa Rosa, 601 - São Luiz')

      //Cidade
      cy.get('#billing_city').type('Belo Horizonte')

      //Estado
      cy.get('#select2-chosen-2').click()
      cy.get('#s2id_autogen2_search').type('Minas')
      cy.get('#select2-result-label-355').click()

      //CEP
      cy.get('#billing_postcode').type('31275-260')

      //Direct Bank Transfer
      cy.get('#payment_method_bacs').click()

      //Verifica o texto
      cy.get('.wc_payment_method.payment_method_bacs > .payment_box > p')
        .contains('Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.')

      //Place order
      // cy.get('#place_order').click()
    })
  })

  describe('CT58', ()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

    it('Dado que estou na pagina do produto "Android Quick Start Guide"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      
    })

    it('Quando clico no botao "Add to basket"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
    })

    it('E clico no botao "View Basket"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
    })

    it('E clico no botao "Proceed to Checkout"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()
    })

    it('E preencho todos os campos corretamente', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()

      //Primeiro nome
      cy.get('#billing_first_name').type('Nicolas')
      //Ultimo nome
      cy.get('#billing_last_name').type('Kumabe')

      //Nome da Empresa (opcional)
      cy.get('#billing_company').type('SideMind')

      //Email
      cy.get('#billing_email').type('nicolas@sidemind.com')

      //Numero celilar
      cy.get('#billing_phone').type('+55 (31) 8588-5353')

      //Pais (Country)
      cy.get('#select2-chosen-1').click()
      cy.get('#s2id_autogen1_search').type('bra')
      cy.get('#select2-result-label-314').click()

      //Nome da rua e bairro
      cy.get('#billing_address_1').type('Av. Santa Rosa, 601 - São Luiz')

      //Cidade
      cy.get('#billing_city').type('Belo Horizonte')

      //Estado
      cy.get('#select2-chosen-2').click()
      cy.get('#s2id_autogen2_search').type('Minas')
      cy.get('#select2-result-label-355').click()

      //CEP
      cy.get('#billing_postcode').type('31275-260')
    })

    it('E seleciono a opcao de pagamento "Check Payments"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()

      //Primeiro nome
      cy.get('#billing_first_name').type('Nicolas')
      //Ultimo nome
      cy.get('#billing_last_name').type('Kumabe')

      //Nome da Empresa (opcional)
      cy.get('#billing_company').type('SideMind')

      //Email
      cy.get('#billing_email').type('nicolas@sidemind.com')

      //Numero celilar
      cy.get('#billing_phone').type('+55 (31) 8588-5353')

      //Pais (Country)
      cy.get('#select2-chosen-1').click()
      cy.get('#s2id_autogen1_search').type('bra')
      cy.get('#select2-result-label-314').click()

      //Nome da rua e bairro
      cy.get('#billing_address_1').type('Av. Santa Rosa, 601 - São Luiz')

      //Cidade
      cy.get('#billing_city').type('Belo Horizonte')

      //Estado
      cy.get('#select2-chosen-2').click()
      cy.get('#s2id_autogen2_search').type('Minas')
      cy.get('#select2-result-label-355').click()

      //CEP
      cy.get('#billing_postcode').type('31275-260')

      //Check Payments
      cy.get('#payment_method_cheque').click()

      //Place order
      // cy.get('#place_order').click()
    })

    it('Entao devo ver a mensagem "Please send a cheque to Store Name, Store Street, Store Town, Store State / County, Store Postcode."', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()

      //Primeiro nome
      cy.get('#billing_first_name').type('Nicolas')
      //Ultimo nome
      cy.get('#billing_last_name').type('Kumabe')

      //Nome da Empresa (opcional)
      cy.get('#billing_company').type('SideMind')

      //Email
      cy.get('#billing_email').type('nicolas@sidemind.com')

      //Numero celilar
      cy.get('#billing_phone').type('+55 (31) 8588-5353')

      //Pais (Country)
      cy.get('#select2-chosen-1').click()
      cy.get('#s2id_autogen1_search').type('bra')
      cy.get('#select2-result-label-314').click()

      //Nome da rua e bairro
      cy.get('#billing_address_1').type('Av. Santa Rosa, 601 - São Luiz')

      //Cidade
      cy.get('#billing_city').type('Belo Horizonte')

      //Estado
      cy.get('#select2-chosen-2').click()
      cy.get('#s2id_autogen2_search').type('Minas')
      cy.get('#select2-result-label-355').click()

      //CEP
      cy.get('#billing_postcode').type('31275-260')

      //Check Payments
      cy.get('#payment_method_cheque').click()

      //Verifica o texto
      cy.get('.wc_payment_method.payment_method_cheque > .payment_box > p')
        .contains('Please send a cheque to Store Name, Store Street, Store Town, Store State / County, Store Postcode.')

      //Place order
      // cy.get('#place_order').click()
    })
  })

  describe('CT59', ()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

    it('Dado que estou na pagina do produto "Android Quick Start Guide"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      
    })

    it('Quando clico no botao "Add to basket"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
    })

    it('E clico no botao "View Basket"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
    })

    it('E clico no botao "Proceed to Checkout"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()
    })

    it('E preencho todos os campos corretamente', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()

      //Primeiro nome
      cy.get('#billing_first_name').type('Nicolas')
      //Ultimo nome
      cy.get('#billing_last_name').type('Kumabe')

      //Nome da Empresa (opcional)
      cy.get('#billing_company').type('SideMind')

      //Email
      cy.get('#billing_email').type('nicolas@sidemind.com')

      //Numero celilar
      cy.get('#billing_phone').type('+55 (31) 8588-5353')

      //Pais (Country)
      cy.get('#select2-chosen-1').click()
      cy.get('#s2id_autogen1_search').type('bra')
      cy.get('#select2-result-label-314').click()

      //Nome da rua e bairro
      cy.get('#billing_address_1').type('Av. Santa Rosa, 601 - São Luiz')

      //Cidade
      cy.get('#billing_city').type('Belo Horizonte')

      //Estado
      cy.get('#select2-chosen-2').click()
      cy.get('#s2id_autogen2_search').type('Minas')
      cy.get('#select2-result-label-355').click()

      //CEP
      cy.get('#billing_postcode').type('31275-260')
    })

    it('E seleciono a opcao de pagamento "Cash on Delivery"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()

      //Primeiro nome
      cy.get('#billing_first_name').type('Nicolas')
      //Ultimo nome
      cy.get('#billing_last_name').type('Kumabe')

      //Nome da Empresa (opcional)
      cy.get('#billing_company').type('SideMind')

      //Email
      cy.get('#billing_email').type('nicolas@sidemind.com')

      //Numero celilar
      cy.get('#billing_phone').type('+55 (31) 8588-5353')

      //Pais (Country)
      cy.get('#select2-chosen-1').click()
      cy.get('#s2id_autogen1_search').type('bra')
      cy.get('#select2-result-label-314').click()

      //Nome da rua e bairro
      cy.get('#billing_address_1').type('Av. Santa Rosa, 601 - São Luiz')

      //Cidade
      cy.get('#billing_city').type('Belo Horizonte')

      //Estado
      cy.get('#select2-chosen-2').click()
      cy.get('#s2id_autogen2_search').type('Minas')
      cy.get('#select2-result-label-355').click()

      //CEP
      cy.get('#billing_postcode').type('31275-260')

      //Cash on Delivery
      cy.get('#payment_method_cod').click()

      //Place order
      // cy.get('#place_order').click()
    })

    it('Entao devo ver a mensagem "Pay with cash upon delivery.', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()

      //Primeiro nome
      cy.get('#billing_first_name').type('Nicolas')
      //Ultimo nome
      cy.get('#billing_last_name').type('Kumabe')

      //Nome da Empresa (opcional)
      cy.get('#billing_company').type('SideMind')

      //Email
      cy.get('#billing_email').type('nicolas@sidemind.com')

      //Numero celilar
      cy.get('#billing_phone').type('+55 (31) 8588-5353')

      //Pais (Country)
      cy.get('#select2-chosen-1').click()
      cy.get('#s2id_autogen1_search').type('bra')
      cy.get('#select2-result-label-314').click()

      //Nome da rua e bairro
      cy.get('#billing_address_1').type('Av. Santa Rosa, 601 - São Luiz')

      //Cidade
      cy.get('#billing_city').type('Belo Horizonte')

      //Estado
      cy.get('#select2-chosen-2').click()
      cy.get('#s2id_autogen2_search').type('Minas')
      cy.get('#select2-result-label-355').click()

      //CEP
      cy.get('#billing_postcode').type('31275-260')

      // Cash on Delivery
      cy.get('#payment_method_cod').click()

      //Verifica o texto
      cy.get('.wc_payment_method.payment_method_cod > .payment_box > p')
        .contains('Pay with cash upon delivery.')

      //Place order
      // cy.get('#place_order').click()
    })
  })

  describe('CT60', ()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

    it('Dado que estou na pagina do produto "Android Quick Start Guide"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      
    })

    it('Quando clico no botao "Add to basket"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
    })

    it('E clico no botao "View Basket"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
    })

    it('E clico no botao "Proceed to Checkout"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()
    })

    it('E preencho todos os campos corretamente', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()

      //Primeiro nome
      cy.get('#billing_first_name').type('Nicolas')
      //Ultimo nome
      cy.get('#billing_last_name').type('Kumabe')

      //Nome da Empresa (opcional)
      cy.get('#billing_company').type('SideMind')

      //Email
      cy.get('#billing_email').type('nicolas@sidemind.com')

      //Numero celilar
      cy.get('#billing_phone').type('+55 (31) 8588-5353')

      //Pais (Country)
      cy.get('#select2-chosen-1').click()
      cy.get('#s2id_autogen1_search').type('bra')
      cy.get('#select2-result-label-314').click()

      //Nome da rua e bairro
      cy.get('#billing_address_1').type('Av. Santa Rosa, 601 - São Luiz')

      //Cidade
      cy.get('#billing_city').type('Belo Horizonte')

      //Estado
      cy.get('#select2-chosen-2').click()
      cy.get('#s2id_autogen2_search').type('Minas')
      cy.get('#select2-result-label-355').click()

      //CEP
      cy.get('#billing_postcode').type('31275-260')
    })

    it('E seleciono a opcao de pagamento "PayPal Express Checkout"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()

      //Primeiro nome
      cy.get('#billing_first_name').type('Nicolas')
      //Ultimo nome
      cy.get('#billing_last_name').type('Kumabe')

      //Nome da Empresa (opcional)
      cy.get('#billing_company').type('SideMind')

      //Email
      cy.get('#billing_email').type('nicolas@sidemind.com')

      //Numero celilar
      cy.get('#billing_phone').type('+55 (31) 8588-5353')

      //Pais (Country)
      cy.get('#select2-chosen-1').click()
      cy.get('#s2id_autogen1_search').type('bra')
      cy.get('#select2-result-label-314').click()

      //Nome da rua e bairro
      cy.get('#billing_address_1').type('Av. Santa Rosa, 601 - São Luiz')

      //Cidade
      cy.get('#billing_city').type('Belo Horizonte')

      //Estado
      cy.get('#select2-chosen-2').click()
      cy.get('#s2id_autogen2_search').type('Minas')
      cy.get('#select2-result-label-355').click()

      //CEP
      cy.get('#billing_postcode').type('31275-260')

      //PayPal Express Checkout
      cy.get('#payment_method_ppec_paypal').click()

      //Place order
      // cy.get('#place_order').click()
    })

    it('Entao devo ver a mensagem "Pay using either your PayPal account or credit card. All credit card payments will be processed by PayPal."', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()

      //Primeiro nome
      cy.get('#billing_first_name').type('Nicolas')
      //Ultimo nome
      cy.get('#billing_last_name').type('Kumabe')

      //Nome da Empresa (opcional)
      cy.get('#billing_company').type('SideMind')

      //Email
      cy.get('#billing_email').type('nicolas@sidemind.com')

      //Numero celilar
      cy.get('#billing_phone').type('+55 (31) 8588-5353')

      //Pais (Country)
      cy.get('#select2-chosen-1').click()
      cy.get('#s2id_autogen1_search').type('bra')
      cy.get('#select2-result-label-314').click()

      //Nome da rua e bairro
      cy.get('#billing_address_1').type('Av. Santa Rosa, 601 - São Luiz')

      //Cidade
      cy.get('#billing_city').type('Belo Horizonte')

      //Estado
      cy.get('#select2-chosen-2').click()
      cy.get('#s2id_autogen2_search').type('Minas')
      cy.get('#select2-result-label-355').click()

      //CEP
      cy.get('#billing_postcode').type('31275-260')

      //PayPal Express Checkout
      cy.get('#payment_method_ppec_paypal').click()

      //Verifica o texto
      cy.get('.wc_payment_method.payment_method_ppec_paypal > .payment_box > p')
        .contains('Pay using either your PayPal account or credit card. All credit card payments will be processed by PayPal.')

      //Place order
      // cy.get('#place_order').click()
    })
  })

  describe('CT61', ()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

    it('Dado que estou na pagina do produto "Android Quick Start Guide"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      
    })

    it('Quando clico no botao "Add to basket"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
    })

    it('E clico no botao "View Basket"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
    })

    it('E clico no botao "Proceed to Checkout"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()
    })

    it('E preencho todos os campos corretamente', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()

      //Primeiro nome
      cy.get('#billing_first_name').type('Nicolas')
      //Ultimo nome
      cy.get('#billing_last_name').type('Kumabe')

      //Nome da Empresa (opcional)
      cy.get('#billing_company').type('SideMind')

      //Email
      cy.get('#billing_email').type('nicolas@sidemind.com')

      //Numero celilar
      cy.get('#billing_phone').type('+55 (31) 8588-5353')

      //Pais (Country)
      cy.get('#select2-chosen-1').click()
      cy.get('#s2id_autogen1_search').type('bra')
      cy.get('#select2-result-label-314').click()

      //Nome da rua e bairro
      cy.get('#billing_address_1').type('Av. Santa Rosa, 601 - São Luiz')

      //Cidade
      cy.get('#billing_city').type('Belo Horizonte')

      //Estado
      cy.get('#select2-chosen-2').click()
      cy.get('#s2id_autogen2_search').type('Minas')
      cy.get('#select2-result-label-355').click()

      //CEP
      cy.get('#billing_postcode').type('31275-260')
    })

    it('Entao o frete devera ser de ₹22.50', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()

      //Primeiro nome
      cy.get('#billing_first_name').type('Nicolas')
      //Ultimo nome
      cy.get('#billing_last_name').type('Kumabe')

      //Nome da Empresa (opcional)
      cy.get('#billing_company').type('SideMind')

      //Email
      cy.get('#billing_email').type('nicolas@sidemind.com')

      //Numero celilar
      cy.get('#billing_phone').type('+55 (31) 8588-5353')

      //Pais (Country)
      cy.get('#select2-chosen-1').click()
      cy.get('#s2id_autogen1_search').type('bra')
      cy.get('#select2-result-label-314').click()

      //Nome da rua e bairro
      cy.get('#billing_address_1').type('Av. Santa Rosa, 601 - São Luiz')

      //Cidade
      cy.get('#billing_city').type('Belo Horizonte')

      //Estado
      cy.get('#select2-chosen-2').click()
      cy.get('#s2id_autogen2_search').type('Minas')
      cy.get('#select2-result-label-355').click()

      //CEP
      cy.get('#billing_postcode').type('31275-260')

      //Valor do frete
      cy.get('.tax-rate > td > .woocommerce-Price-amount').invoke('text').then((text) => {
        const frete = parseFloat(text.replace('₹', ''))
        
        expect(frete).to.equal(22.50)
      })

      //PayPal Express Checkout
      // cy.get('#payment_method_ppec_paypal').click()

      //Place order
      // cy.get('#place_order').click()
    })

    it('E o valor total devera ser de ₹472.50', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()

      //Primeiro nome
      cy.get('#billing_first_name').type('Nicolas')
      //Ultimo nome
      cy.get('#billing_last_name').type('Kumabe')

      //Nome da Empresa (opcional)
      cy.get('#billing_company').type('SideMind')

      //Email
      cy.get('#billing_email').type('nicolas@sidemind.com')

      //Numero celilar
      cy.get('#billing_phone').type('+55 (31) 8588-5353')

      //Pais (Country)
      cy.get('#select2-chosen-1').click()
      cy.get('#s2id_autogen1_search').type('bra')
      cy.get('#select2-result-label-314').click()

      //Nome da rua e bairro
      cy.get('#billing_address_1').type('Av. Santa Rosa, 601 - São Luiz')

      //Cidade
      cy.get('#billing_city').type('Belo Horizonte')

      //Estado
      cy.get('#select2-chosen-2').click()
      cy.get('#s2id_autogen2_search').type('Minas')
      cy.get('#select2-result-label-355').click()

      //CEP
      cy.get('#billing_postcode').type('31275-260')

      //Valor do frete
      cy.get('.tax-rate > td > .woocommerce-Price-amount').invoke('text').then((text) => {
        const frete = parseFloat(text.replace('₹', ''))
        
        expect(frete).to.equal(22.50)
      })
      
      //Valida valor total da compra
      cy.get('.cart-subtotal > td > .woocommerce-Price-amount, .tax-rate > td > .woocommerce-Price-amount')
        .then($elements => {
        const preco = parseFloat($elements.first().text().replace('₹', '').trim())
        const imposto = parseFloat($elements.last().text().replace('₹', '').trim())
        const valor_total = 472.50

        expect(preco + imposto).to.be.equal(valor_total)

        const formatando = `${valor_total.toFixed(2)}`
        
        cy.get('strong > .woocommerce-Price-amount').should('have.text', `₹${formatando}`)
      })

      //PayPal Express Checkout
      // cy.get('#payment_method_ppec_paypal').click()

      //Verifica o texto
      // cy.get('.wc_payment_method.payment_method_ppec_paypal > .payment_box > p')
      //   .contains('Pay using either your PayPal account or credit card. All credit card payments will be processed by PayPal.')

      //Place order
      // cy.get('#place_order').click()
    })
  })

  describe('CT62', ()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

    it('Dado que estou na pagina do produto "Android Quick Start Guide"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      
    })

    it('Quando mudo a quantidade do livro para 8', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.input-text').clear()
      cy.get('.input-text').type('8')
    })

    it('E clico no botao "Add to basket"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.input-text').clear()
      cy.get('.input-text').type('8')
      cy.get('.single_add_to_cart_button').click()
    })

    it('E clico no botao "View Basket"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.input-text').clear()
      cy.get('.input-text').type('8')
      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
    })

    it('E mudo a quantidade para 7', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.input-text').clear()
      cy.get('.input-text').type('8')
      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.input-text').clear()
      cy.get('.quantity > .input-text').type('7')
    })

    it('E clico no botao "Update Basket"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.input-text').clear()
      cy.get('.input-text').type('8')
      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.input-text').clear()
      cy.get('.quantity > .input-text').type('7')
      cy.get('[name="update_cart"]').click()
    })

    it('Entao o valor deve atualizar para o de 7 livros', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.input-text').clear()
      cy.get('.input-text').type('8')
      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.input-text').clear()
      cy.get('.quantity > .input-text').type('7')
      cy.get('[name="update_cart"]').click()
      cy.get('.product-subtotal > .woocommerce-Price-amount').should('have.text', '₹3,150.00')
    })
  })

  describe('CT63', ()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

    it('Dado que estou na pagina do produto "Android Quick Start Guide"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      
    })

    it('E clico no botao "Add to basket"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
    })

    it('E vou para a pagina do livro "Selenium Ruby""', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()

      cy.visit('https://practice.automationtesting.in/product/selenium-ruby/')
    })

    it('E clico no botao "Add to basket"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()

      cy.visit('https://practice.automationtesting.in/product/selenium-ruby/')

      cy.get('.single_add_to_cart_button').click()
    })

    it('E clico no botao "View Basket"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()

      cy.visit('https://practice.automationtesting.in/product/selenium-ruby/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
    })

    it('Quando eu removo o livro "Selenium Ruby"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()

      cy.visit('https://practice.automationtesting.in/product/selenium-ruby/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()

      //Removo o livro Selenium Ruby
      cy.get(':nth-child(2) > .product-remove > .remove').click()
    })

    it('Entao devo ver a mensagem "Selenium Ruby removed. Undo?"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()

      cy.visit('https://practice.automationtesting.in/product/selenium-ruby/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get(':nth-child(2) > .product-remove > .remove').click()

      //Mensagem
      cy.get('.woocommerce-message').contains('Selenium Ruby removed. Undo?')
    })
  })

  describe('CT64', ()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

    it('Dado que estou na pagina do produto "Android Quick Start Guide"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      
    })

    it('E clico no botao "Add to basket"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()
    })

    it('E vou para a pagina do livro "Selenium Ruby""', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()

      cy.visit('https://practice.automationtesting.in/product/selenium-ruby/')
    })

    it('E clico no botao "Add to basket"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()

      cy.visit('https://practice.automationtesting.in/product/selenium-ruby/')

      cy.get('.single_add_to_cart_button').click()
    })

    it('E clico no botao "View Basket"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()

      cy.visit('https://practice.automationtesting.in/product/selenium-ruby/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
    })

    it('Quando eu removo o livro "Selenium Ruby"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()

      cy.visit('https://practice.automationtesting.in/product/selenium-ruby/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()

      //Removo o livro Selenium Ruby
      cy.get(':nth-child(2) > .product-remove > .remove').click()
    })

    it('Quando eu clicar no link "Undo?"', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()

      cy.visit('https://practice.automationtesting.in/product/selenium-ruby/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get(':nth-child(2) > .product-remove > .remove').click()

      //Desfazer
      cy.get('.woocommerce-message > a').click()
    })

    it('Entao devo o livro "Selenium Ruby" deve retornar ao carrinho', () => {
      cy.visit('https://practice.automationtesting.in/product/android-quick-start-guide/')

      cy.get('.single_add_to_cart_button').click()

      cy.visit('https://practice.automationtesting.in/product/selenium-ruby/')

      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get(':nth-child(2) > .product-remove > .remove').click()
      cy.get('.woocommerce-message > a').click()

      //Validar se o livro voltou
      cy.get(':nth-child(2) > .product-name > a').contains('Selenium Ruby')
    })
  })
})
