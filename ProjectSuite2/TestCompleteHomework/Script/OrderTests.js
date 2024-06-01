var orderAppSteps = require("OrderAppSteps");
var otherOrderAppSteps = require("OtherOrderAppSteps")

function test1(){
  orderAppSteps.openApp();
  
    otherOrderAppSteps.assertionThatIsVisible()
    .openOrderForm().addOrder1().clickOkButton()
    .openOrderForm().addOrder2().clickOkButton()
    .openOrderForm().addOrder3().clickOkButton();
     orderAppSteps.closeApp();
     otherOrderAppSteps.checkingThatWindowIsClosed();
}