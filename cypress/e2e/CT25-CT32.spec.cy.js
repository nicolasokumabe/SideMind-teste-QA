describe('CT25-CT32', () => {

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
      cy.get('.woocomerce-FormRow > .woocommerce-Button').click()({ force: true })
    })

    it('Entao sou redirecionado para o Dashboard', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
      cy.get('#reg_email').type('nkumabe@sidemind.com')
      cy.get('#reg_password').type('#SideMind2024')
      cy.wait(2000)
      cy.get('#reg_password').type('!')
      cy.get('.woocomerce-FormRow > .woocommerce-Button').click()({ force: true })

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
      cy.get('.woocomerce-FormRow > .woocommerce-Button').click()({ force: true })
    })

    it('Entao recebo a mensagem de erro: "Error: Please provide a valid email address."', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
      cy.get('#reg_email').type('nicolas')
      cy.get('#reg_password').type('#SideMind2024')
      cy.wait(2000)
      cy.get('#reg_password').type('!')
      cy.get('.woocomerce-FormRow > .woocommerce-Button').click()({ force: true })

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
      cy.get('.woocomerce-FormRow > .woocommerce-Button').click()({ force: true })
    })

    it('Entao devo ver a seguinte mensagem do navegador: "Please include an @ in the email addres. nicolas is missing an @."', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
      // cy.get('#reg_email').type('nkumabe@sidemind.com')
      cy.get('#reg_password').type('#SideMind2024')
      cy.wait(2000)
      cy.get('#reg_password').type('!')
      cy.get('.woocomerce-FormRow > .woocommerce-Button').click()({ force: true })

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
      cy.get('.woocomerce-FormRow > .woocommerce-Button').click()({ force: true })
    })

    it('Entao devo ver a seguinte mensagem do navegador: "Please enter a part following @. nicolas@ is incomplete."', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
      cy.get('#reg_email').type('nicolas@')
      cy.get('#reg_password').type('#SideMind2024')
      cy.wait(2000)
      cy.get('#reg_password').type('!')
      cy.get('.woocomerce-FormRow > .woocommerce-Button').click()({ force: true })

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
      cy.get('.woocomerce-FormRow > .woocommerce-Button').click()({ force: true })
    })

    it('Entao devo ver a mensagem de erro: "Error: Please enter a valid email address."', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
      cy.get('#reg_email').type('nicolas@sidemind')
      cy.get('#reg_password').type('#SideMind2024')
      cy.wait(2000)
      cy.get('#reg_password').type('!')
      cy.get('.woocomerce-FormRow > .woocommerce-Button').click()({ force: true })

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
      cy.get('.woocomerce-FormRow > .woocommerce-Button').click()({ force: true })
    })

    it('Entao o botao "Register" deve ser bloqueado', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
      cy.get('#reg_email').type('nicolas@sidemind.com')
      // cy.get('#reg_password').type('#SideMind2024')
      // cy.wait(2000)
      // cy.get('#reg_password').type('!')
      cy.get('.woocomerce-FormRow > .woocommerce-Button').click()({ force: true })

      //Devo ver o botao register bloqueado

      //Mensagem de erro
      cy.get('.woocommerce-error > li')
        .should('have.text', 'Error: Please enter an account password.')
    })
  })
})
