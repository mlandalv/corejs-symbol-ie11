// This iterator example code is taken from ImmutableJS v3.8.2. Code not needed for the IE 11 crash to occurr are stripped away.
// https://github.com/immutable-js/immutable-js/blob/v3.8.2/src/Iterator.js
const ITERATOR_SYMBOL = Symbol.iterator;

function Iterator(next) {
    this.next = next;
}

Iterator.prototype[ITERATOR_SYMBOL] = function () {
    return this;
};

// Simplified from https://github.com/immutable-js/immutable-js/blob/v3.8.2/src/utils/mixin.js
function mixin(ctor, methods) {
    Object.getOwnPropertySymbols(methods).forEach(function (key) {
        ctor.prototype[key] = methods[key];
    });

    return ctor;
}

function Dummy() {
}

// This call makes IE 11 crash, original source: https://github.com/immutable-js/immutable-js/blob/v3.8.2/src/IterableImpl.js#L674
mixin(Dummy, Iterator.prototype);
