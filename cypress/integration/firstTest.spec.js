describe('Our Test Suite', () => {

	it('FirstTest', () => {

            //Navigate to Testing Area - User Input Forms
            cy.visit('/')
            cy.contains('Forms').click()
            cy.contains('Form Layouts').click()

			//By Tag Name
			cy.get('input');
			
			//By ID
			cy.get('#inputEmail1')
			
			//By ClassName
			cy.get('.input-full-width')
			
			//By Attribute Name
			cy.get('[placeholder]')
			
			//By Attribute Name and Value
			cy.get('[placeholder="Email"]')
			
			//By Class Value
			cy.get('[class="input-full-width size-medium shape-rectangle"]')
			
			//By Tag Name and Attribute with Value
			cy.get('input[placeholder="Email"]')
			
			//By Two Different Attributes (you can add more)
			cy.get('[placeholder="Email"][type="email"]')
			
			//By Tag Name, Attribute with Value, ID and ClassName
			cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')
			
			//The Most Recommended way By Cypress - By data-cy
			cy.get('[data-cy="imputEmail1"]')
	})

})