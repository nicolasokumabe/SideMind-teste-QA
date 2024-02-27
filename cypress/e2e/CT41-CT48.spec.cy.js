describe('CT41-CT48', () => {

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
})
