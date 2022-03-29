//const { format } = require("core-js/core/date")

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

	it('secondTest', () => {

	//Navigate to Testing Area - User Input Forms
	cy.visit('/')
	cy.contains('Forms').click()
	cy.contains('Form Layouts').click()


	//Get the 'Sign in' button for the 'Using the Grid' Form
	cy.contains('nb-card', 'Using the Grid').find('button').should('contain', 'Sign in')


	//Get the 'Sign in' button for the 'Horizontal' Form (Traverse DOM method)
	cy.get('#inputEmail3')
		.parents('form')
		.find('button')
		.should('contain', 'Sign in')
		.parents('form')
		.find('nb-checkbox').click({force: true})
	})


	it('savingSubjectOfCommand', () => {
		cy.visit('/')
		cy.contains('Forms').click()
		cy.contains('Form Layouts').click()

		//For the 'Using the Grid' Form
		//cy.contains('nb-card', 'Using the Grid').find('[for="inputEmail1"]').should('contain', 'Email')
		//cy.contains('nb-card', 'Using the Grid').find('[for="inputPassword2"]').should('contain', 'Password')

		//For the 'Basic' Form
		//cy.contains('nb-card', 'Basic Form').find('[for="exampleInputEmail1"]').should('contain', 'Email address')
		//cy.contains('nb-card', 'Basic Form').find('[for="exampleInputPassword1"]').should('contain', 'Email address')


		//Selenium Way
		// const firstForm = cy.contains('nb-card', 'Using the Grid')
		// const secondForm = cy.contains('nb-card', 'Basic Form')

		// firstForm.find('[for="inputEmail1"]').should('contain', 'Email')
		// firstForm.find('[for="inputPassword2"]').should('contain', 'Password')

		// secondForm.find('[for="exampleInputEmail1"]').should('contain', 'Email address')
		// secondForm.find('[for="exampleInputPassword1"]').should('contain', 'Email address')

		cy.contains('nb-card', 'Using the Grid').then((firstForm) => {
			const emailLabelFirst = firstForm.find('[for="inputEmail1"]').text()
			const passwordLabelFirst = firstForm.find('[for="inputPassword2"]').text()
			expect(emailLabelFirst).to.equal('Email')
			expect(passwordLabelFirst).to.equal('Password')

			//Check that the label for password is the same in both forms
			cy.contains('nb-card', 'Basic form').then((secondForm) => {
				const passwordLabelSecond = secondForm.find('[for="exampleInputPassword1"]').text();
				expect(passwordLabelSecond).to.equal(passwordLabelFirst);
				//The below is if we wanted to test via cypress methods
				cy.wrap(secondForm).find('[for="exampleInputPassword1"]').should('have.text', 'Password')
			})
		})
	})

	it.only('Invoke Command', () => {
		cy.visit('/')
		cy.contains('Forms').click()
		cy.contains('Form Layouts').click()




		//Invoke Command Example 1

		//There are many ways to get the 'Email address' label on the from 'Using the grid', ill show you 3 ways

	    //1 - Using an attribute + should assertion
		cy.get('[for="exampleInputEmail1"]').should('contain', 'Email address')

		//2 - Using .then() + expect assertion
		cy.get('[for="exampleInputEmail1"]').then(label => {
			expect(label.text()).to.equal('Email address')
		})

		//3 - Using invoke() + .then() + expect() assertion
		cy.get('[for="exampleInputEmail1"]').invoke('text').then(text => {
			expect(text).to.equal('Email address')
		})





		//Invoke Command Example 2

		//We can use the Invoke command to verify if a class has a 'Checked' value or not
		//Key - Only keep 1 of the 2 below because when i click it to check the checkbox, the next time i click
		//it will uncheck the checkbox and fail the second test.

		//1 - Using invoke + should

		// cy.contains('nb-card', 'Basic form')
		// 	.find('nb-checkbox')
		// 	.click()
		// 	.find('.custom-checkbox')
		// 	.invoke('attr', 'class')
		// 	.should('contain', 'checked')

		//2 - Using invoke + then

		cy.contains('nb-card', 'Basic form')
			.find('nb-checkbox')
			.click()
			.find('.custom-checkbox')
			.invoke('attr', 'class')
			.then(classValue => {
				expect(classValue).to.contain('checked')
			})

		


			
		//Invoke Command Example 3 - FINISH THIS OFF
		//We will use the invoke command to verify that the date inside our date input is correct via properties

		cy.contains('Datepicker').click()

		cy.get('[placeholder="Form Picker"]').click({force: true})

	



	})

})