/// <reference types = "Cypress"/>

class SharedObject{
    // Check header
    checkHeader(title) {
        cy.get('h1')
          .first()
          .should('have.text', title);
    }
    // check summary
    checkSummary(title) {
        cy.get('div')
          .should('contain.text',title);
        }
    //#region Author
    checkAuthor(title) {
      cy.contains('a',title)
    }

    checkPublishedDate(title) {
      cy.contains('p',title)
    }

    checkAuthorImage() {
        cy.get('img')
        .should('have.class','rounded-full object-cover w-48 h-48 text-sm font-semibold leading-7 text-sonic-silver')
    }
    //#endregion


    //#region Feature Image
    checkFeatureImage() {
      cy.get('img')
        .should('have.class','rounded w-full object-cover h-full')
    }
    
    //Check Alt text
    checkFeatureImageAltText(title){
        cy.get('img')
        .should('have.class','rounded w-full object-cover h-full')
        .and('have.text',title)
    }

    checkFeatureImageCaption(){
      cy.get('div').should('have.class','mt-12 text-base leading-5 text-sonic-silver')
    }
    //#endregion


    //#region Social Sharing
    checkShareFacebook()
    {
      cy.get('span').should('have.class','share-sns facebook')
    }

    checkShareLinkin()
    {
      cy.get('span').should('have.class','share-sns linkedin')
    }

    checkShareTwiter()
    {
      cy.get('span').should('have.class','share-sns twitter')
    }
    //#endregion


    //#region SEO

    checkMetaTitle(title)
    {
        cy.get('meta[name=title]').should('have.text',title)
    }

    checkMetaDescription(title)
    {
        cy.get('meta[name=description]').should('have.text',title)
    }

    checkMetaKeywords(title)
    {
        cy.get('meta[name=keywords]').should('have.text',title)
    }

    checkCanonicalURL(title)
    {
        cy.get('link[rel=canonical]').should('have.text',title)
    }

    checkHideFromSearchEngines(title)
    {
        cy.get('meta[content=noindex]').should('have.text',title)
    }

    //#endregion    

    checkKeyword(title) {
        cy.get('a[href*="/keywords/'+title+'"]')
      }

    //#region Category tags
      checkCategoryPrimary(categoryName){
          cy.get('a[href*="/'+categoryName+'"]')
      }
    //#endregion

    checkBreadcrumbs(){
        cy.get('a[href=/]')
    }

    //Sign me up block
    checkSignMeUpBlock(){
        cy.get('button').should('have.text','Sign me up')
    }


}

export default SharedObject