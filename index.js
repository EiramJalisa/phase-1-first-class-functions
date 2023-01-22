const chai = "chai";
const spies = "chai-spies";
chai.use(spies);
const spy = chai.spy();

function receivesAFunction(receivesAFunction){
    
    receivesAFunction(spy);
    
}

function returnsANamedFunction(){
    var fn = returnsANamedFunction;
    return fn;
}
function returnsAnAnonymousFunction(){
    return function() {
        
    }
}  
    
