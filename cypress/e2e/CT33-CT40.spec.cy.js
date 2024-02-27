describe('CT33-CT40', () => {

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
      cy.wait(2000)
      cy.get('#reg_password').type('s')
      cy.wait(2000)
      cy.get('#reg_password').type('i')
      cy.wait(2000)
      cy.get('#reg_password').type('d')
      cy.wait(2000)
      cy.get('#reg_password').type('e')
      // cy.get('.woocomerce-FormRow > .woocommerce-Button').click()

      //Mensagem de seguranca
      cy.get('.woocommerce-password-strength')
        .should('have.text', 'Very weak - Please enter a stronger password.')
    })

    it('E o botao "Register" deve ser bloqueado', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
      cy.get('#reg_email').type('nicolas@sidemind.com')
      cy.wait(2000)
      cy.get('#reg_password').type('s')
      cy.wait(2000)
      cy.get('#reg_password').type('i')
      cy.wait(2000)
      cy.get('#reg_password').type('d')
      cy.wait(2000)
      cy.get('#reg_password').type('e')
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

      cy.get('#reg_password').type('si')
      cy.wait(2000)
      cy.get('#reg_password').type('de')
      cy.wait(2000)
      cy.get('#reg_password').type('mi')
      cy.wait(2000)
      cy.get('#reg_password').type('nd')
    })

    it('Entao devo ver o aviso: "Weak - Please enter a stronger password."', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
      cy.get('#reg_email').type('nicolas@sidemind.com')
      cy.get('#reg_password').type('si')
      cy.wait(2000)
      cy.get('#reg_password').type('de')
      cy.wait(2000)
      cy.get('#reg_password').type('mi')
      cy.wait(2000)
      cy.get('#reg_password').type('nd')
      // cy.get('.woocomerce-FormRow > .woocommerce-Button').click()

      //Mensagem de seguranca
      cy.get('.woocommerce-password-strength')
        .should('have.text', 'Weak - Please enter a stronger password.')
    })

    it('E o botao "Register" deve ser bloqueado', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
      cy.get('#reg_email').type('nicolas@sidemind.com')
      cy.get('#reg_password').type('si')
      cy.wait(2000)
      cy.get('#reg_password').type('de')
      cy.wait(2000)
      cy.get('#reg_password').type('mi')
      cy.wait(2000)
      cy.get('#reg_password').type('nd')
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

      cy.get('#reg_password').type('#')
      cy.wait(2000)
      cy.get('#reg_password').type('Side')
      cy.wait(2000)
      cy.get('#reg_password').type('Mind')
      cy.wait(2000)
      cy.get('#reg_password').type('!')
    })

    it('Entao devo ver o aviso: "Medium"', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
      cy.get('#reg_email').type('nicolas@sidemind.com')
      cy.get('#reg_password').type('#')
      cy.wait(2000)
      cy.get('#reg_password').type('Side')
      cy.wait(2000)
      cy.get('#reg_password').type('Mind')
      cy.wait(2000)
      cy.get('#reg_password').type('!')
      // cy.get('.woocomerce-FormRow > .woocommerce-Button').click()

      //Mensagem de seguranca
      cy.get('.woocommerce-password-strength')
        .should('have.text', 'Medium')
    })

    it('E o botao "Register" deve ser desbloqueado', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
      cy.get('#reg_email').type('nicolas@sidemind.com')
      cy.get('#reg_password').type('#')
      cy.wait(2000)
      cy.get('#reg_password').type('Side')
      cy.wait(2000)
      cy.get('#reg_password').type('Mind')
      cy.wait(2000)
      cy.get('#reg_password').type('!')
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

      cy.get('#reg_password').type('#')
      cy.wait(2000)
      cy.get('#reg_password').type('Side')
      cy.wait(2000)
      cy.get('#reg_password').type('Mind2024')
      cy.wait(2000)
      cy.get('#reg_password').type('!')
    })

    it('Entao devo ver o aviso: "Strong"', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
      cy.get('#reg_email').type('nicolas@sidemind.com')
      cy.get('#reg_password').type('#')
      cy.wait(2000)
      cy.get('#reg_password').type('Side')
      cy.wait(2000)
      cy.get('#reg_password').type('Mind2024')
      cy.wait(2000)
      cy.get('#reg_password').type('!')
      // cy.get('.woocomerce-FormRow > .woocommerce-Button').click()

      //Mensagem de seguranca
      cy.get('.woocommerce-password-strength')
        .should('have.text', 'Strong')
    })

    it('E o botao "Register" deve ser desbloqueado', () => {
      cy.visit('https://practice.automationtesting.in/my-account/')

      cy.get('.u-column2 > h2')
      cy.get('#reg_email').type('nicolas@sidemind.com')
      cy.get('#reg_password').type('#')
      cy.wait(2000)
      cy.get('#reg_password').type('Side')
      cy.wait(2000)
      cy.get('#reg_password').type('Mind2024')
      cy.wait(2000)
      cy.get('#reg_password').type('!')
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
})
