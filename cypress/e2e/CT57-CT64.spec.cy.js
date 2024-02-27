describe('CT57-CT64', () => {

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
