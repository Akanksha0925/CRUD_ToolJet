//describe('CURD operations', () => {
  //const itemName= 'Test Item'
  //const updatedItemName= 'Updated Test Item'

 // beforeEach(() => {
   // cy.visit('https://cetestsystem.tooljet.com/testcypress')
 // })

  describe('ToolJet E2E Login Flow', () => {
    
    it('logs in successfully and lands on the dashboard', () => {
      cy.visit('https://cetestsystem.tooljet.com/testcypress')
      cy.get("[class='form-input__field']").type("type email address")
      cy.get("[class='password-input__field']").type("Password")
      cy.get("[class='tj-base-btn tj-large-btn  tj-primary-btn submit-button']").click()

      //create app click

      cy.get("[class='create-new-app-button col-11  btn btn-primary']").click()

      //enter text

      cy.get("[class='form-control ']").type("CRUD")

      //CLICK on create app

      cy.get("[class='tj-base-btn tj-large-btn  tj-primary-btn undefined']").click()

      //drG AND Drop

      const dragAndDrop = (['#component-image-wrapper'], ['#col-md-4 dotted-cont']) ; {
        cy.get(dragLocator)
          .realMouseDown({ button: 'left', position: 'center' })
          .realMouseMove(0, 10, { position: 'center' })
          .wait(200);
        cy.get(dropLocator)
          .realMouseMove(0, 0, { position: 'center' })
          .realMouseUp();
      };

      //enter name

      cy.get("[class='tj-text-input-widget  validation-without-icon']").type("New")

      //enter age
      cy.get("[class='tj-text-input-widget  validation-without-icon']").type("34")

      //delete form

      cy.get("[class='moveable-box ele-eeb1d5b1-d495-477a-a279-58dc62b7ef27 target widget-target target1 widget-eeb1d5b1-d495-477a-a279-58dc62b7ef27 nested-target active-target']").clear()


  
     
    });
  });
  



  //CREATE
  //it('should create a new item', ()=>{
    //cy.get('#create-new-app-license-wrapper').click()
  //})

//})