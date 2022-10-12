function receivesAFunction(fun){
    return fun();
};
function returnsANamedFunction (){
    let name;
    return function name(){
        console.log(`function ${name}`)
    };
};
function returnsAnAnonymousFunction (){
    let name;
    return function (){
        console.log(`function ${name}`)
    };
};