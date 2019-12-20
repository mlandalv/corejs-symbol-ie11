// Ex1. Error when immutable is imported after the corejs line.
import 'core-js/stable';

// Without this import statement IE 11 doesn't crash.
import _Object$getOwnPropertySymbols from '@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols'; // core-js-pure/stable/object/get-own-property-symbols

import './crash'; // Removing this and instead using immutable results in the same error; import Immutable from 'immutable'; (immutable needs to be installed first)


document.getElementById('App').textContent = 'Great, it worked!';
