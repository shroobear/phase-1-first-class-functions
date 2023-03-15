function receivesAFunction(thing) {
    return thing();
}

function returnsANamedFunction() {
    return receivesAFunction
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log('You just lost the game')
    }
}