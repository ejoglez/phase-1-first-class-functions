function receivesAFunction(callback){
    callback();
}
const returnsANamedFunction = () => {
    function named(){}
    return named
}

function returnsAnAnonymousFunction(){
    return function(){ }
}