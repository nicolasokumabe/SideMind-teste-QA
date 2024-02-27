describe('CT17-CT24', () => {


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
      const frase = 'A ética e a colaboração definem nossa jornada!'
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
})
