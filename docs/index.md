# ECIES
Ravencore implements [Elliptic Curve Integrated Encryption Scheme (ECIES)](http://en.wikipedia.org/wiki/Integrated_Encryption_Scheme), which is a public key encryption system that performs bulk encryption on data using a symmetric cipher and a random key.

For more information refer to the [ravencore-ecies](https://github.com/underdarkskies/ravencore-ecies) github repo.

## Installation
ECIES is implemented as a separate module and you must add it to your dependencies:

For node projects:

```bash
npm install ravencore-ecies --save
```

For client-side projects:

```bash
bower install ravencore-ecies --save
```

## Example

```javascript
var ravencore = require('ravencore-lib');
var ECIES = require('ravencore-ecies');

var alicePrivateKey = new ravencore.PrivateKey();
var bobPrivateKey = new ravencore.PrivateKey();

var data = new Buffer('The is a raw data example');

// Encrypt data
var cypher1 = ECIES.privateKey(alicePrivateKey).publicKey(bobPrivateKey.publicKey);
var encrypted = cypher1.encrypt(data);

// Decrypt data
var cypher2 = ECIES.privateKey(bobPrivateKey).publicKey(alicePrivateKey.publicKey);
var decrypted = cypher2.decrypt(encrypted);

assert(data.toString(), decrypted.toString());
```
