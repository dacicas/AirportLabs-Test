


describe('Testing AirportLabs Website', () => {
  it('Checks the style of AirportLabs in the Press title', () => {
    cy.visit('https://airportlabs.com')
    cy.xpath('/html/body/div[4]/div[11]/div[1]/div[1]/h1')
    .should('contain', "AirportLabs in the Press")
    .should('have.css', 'font-size', '40px')
    .should('have.css', 'font-family', 'Satoshi, sans-serif')
    .and('be.visible')

  })
  it('Checks if the years in industry stat is correct', () =>{
    cy.visit('https://airportlabs.com')
    cy.xpath('/html/body/div[4]/div[9]/div[2]/div[1]/h2')
    .should('be.visible')
    .should('contain', '17+')
    .should('have.css','font-size', '40px' )
    .should('have.css', 'font-family', 'Satoshi, sans-serif')
    cy.xpath('/html/body/div[4]/div[9]/div[2]/div[1]/h4')
    .should('contain', 'of Industry Experience')
  })
  it('Check if facebook social link redirects properly', () =>{
    cy.visit('https://airportlabs.com')
    cy.get('a[href*="https://www.facebook.com/AirportLabs"]').invoke('removeAttr', 'target').click()
    cy.wait(500)
    cy.log(cy.url())// for whatever reason this returns the current location as still airportlabs, not facebook
    cy.url().should('include', 'facebook')
  })
  it('Check if Instagram social link redirects properly', () =>{
    cy.visit('https://airportlabs.com')
    cy.get('a[href*="https://www.instagram.com/airportlabspeople/"]').invoke('removeAttr', 'target').click()
    cy.log(cy.location()) // for whatever reason this returns the current location as still airportlabs, not instagram

    //More information on these issues will be in the readme file
    //Please read it for a full account of this 'adventure'


    //I also tried it with this method, it returned can't read property null to include airportlabs
    cy.location('https://www.instagram.com/airportlabspeople/').should('eq','instagram')
    cy.location().should((loc) =>{
    expect(loc.href).to.include('airportlabspeople/')
    
  })
})
  it('Check if LinkedIn social link redirects properly', () =>{
    cy.visit('https://airportlabs.com')
    cy.get('a[href*="https://www.linkedin.com/company/airportlabs/"]').invoke('removeAttr', 'target').click()
    cy.wait(1500)
    cy.log(cy.location()) // for whatever reason this returns the current location as still airportlabs, not linkedin 
  })
  it('Verify that the AirportLabs logo exists', () => {
    cy.visit('https://airportlabs.com')
    cy.xpath('/html/body/section/div/div[1]/div[1]/nav/a[1]/img')
    //.should('be.visible')
    .should('have.css','width', '140px')
    .should('have.css', 'height', '39.60000228881836px')
    //.should('have.attr', 'style')
    //.and('include', 'width: 140px')
    //.and('include', 'height: 28px')
  })

})
describe('Testing buying a TV with accessories', () =>{
  it('Verify that you can buy a TV with accessories from Emag', () =>{
    cy.visit('https://www.emag.ro/')
    cy.get('body > div.main-container-outer > div.megamenu-container.megamenu-always-open > div > div.megamenu-list-container > ul > li:nth-child(4) > a > span',).click()
    //sometimes the pop-up does not load. A more elegant solution is required.
    //explained in more details in readme file
    cy.wait(1500)
    cy.get('[data-id=5470]').click()
    cy.get('[data-id=6415]').click()
    cy.get('[data-id=42]').click()
    cy.get('[class="gc-modal-footer-show-results fw-bold gtm_zsertyhtnc"]').click()
    cy.get('[class="btn btn-sm btn-outline-secondary sort-control-btn gtm_ejaugtrtnc"]').click()
    cy.contains('Pret descrescator').click({force:true})
    //cy.get('[data-pnk="DWKVS6MBM"]').click()
    cy.wait(1000)
    cy.xpath('//*[@id="card_grid"]/div[2]/div/div/div[4]/div[2]/form/button').click()
    cy.get('[class="em em-close d-none d-sm-block gtm_6046yfqs"]').click()
    cy.get('a[href*="/telecomenzi/c?ref=search_menu_category"]').click()
    //cy.get('[data-id=6415]').click()
    cy.get('[data-ref="quick_filter_lst_6415_,top_panel_filters_6415_"]').click()
    cy.get('[data-id=42]').click()
    cy.get('[class="gc-modal-footer-show-results fw-bold gtm_zsertyhtnc"]').click()
    cy.get('[class="btn btn-sm btn-outline-secondary sort-control-btn gtm_ejaugtrtnc"]').click()
    cy.contains('Pret crescator').click({force:true})
    cy.wait(1000)
    cy.xpath('//*[@id="card_grid"]/div[1]/div/div/div[4]/div[2]/form/button').click()
    cy.get('[id="my_cart"]').click()
  })
})