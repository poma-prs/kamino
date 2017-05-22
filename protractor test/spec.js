// spec.js
describe('Kamino Demo App', function() {
// var firstNumber = element(by.model('first'));
// var secondNumber = element(by.model('second'));
// var goButton = element(by.id('gobutton'));
// var latestResult = element(by.binding('latest'));
// var history = element.all(by.repeater('result in memory'));

/*var ptor = protractor.getInstance();
var home = element(by.id('home-link'));
var promotion = element(by.id('promotion-link'));
var menu = element(by.id('menu-link'));
var aboutUs = element(by.id('about-link'));
var kitchen = element(by.id('kitchen-link'));
var receipt = element(by.id('receipt-link'));
var payment = element(by.id('payment-link'));
var login = element(by.id('login-link'));
*/
//  function add(a, b) {
//  firstNumber.sendKeys(a);
//  secondNumber.sendKeys(b);
//    goButton.click();
  

  beforeEach(function() {
    browser.get('http://localhost:3000/');
  });
    
    it('should have a title', function(){
        expect(browser.getTitle()).toEqual('MeWL');
    });

   /*it('should route to homepage', function() {
      home.click();
        ptor.waitForAngular();
      expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/');
    });
    
    it('should route to promotion', function() {
        promotion.click();
        ptor.waitForAngular();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/promotion');
    });
      
    it('should route to menu', function(){
        menu.click();
        ptor.waitForAngular();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/menu');
    });
    
    it('should route to about', function(){
        aboutUs.click();
        ptor.waitForAngular();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/about');
    });
    
    it('should route to kitchen', function(){
        kitchen.click();
        ptor.waitForAngular();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/kitchen');
    });
    
    it('should route to receipt', function(){
        receipt.click();
        ptor.waitForAngular();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/receipt');
    });
    
    it('should route to payment', function(){
        payment.click();
        ptor.waitForAngular();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/payment');
    });
          
    it('should route to login', function(){
        login.click();
        ptor.waitForAngular();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/login');
    });
    
    //add(1, 2);
    //add(3, 4);
    
    //expect(history.count()).toEqual(2);

    //add(5, 6);

    //expect(history.count()).toEqual(0); // This is wrong!
      */
 });
