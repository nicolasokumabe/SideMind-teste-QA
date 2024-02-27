describe('CT49-CT56', () => {

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
})
