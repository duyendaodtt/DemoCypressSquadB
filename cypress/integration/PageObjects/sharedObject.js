/// <reference types = "Cypress"/>

class SharedObject{
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

    
}

export default SharedObject