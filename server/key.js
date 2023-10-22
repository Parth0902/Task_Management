const forge = require('node-forge');
const fs = require('fs');

// code to generate rs 256 public key and private key

const gen_Keys=()=>{
    const rsaKeyPair = forge.pki.rsa.generateKeyPair({ bits: 2048 });
    const privateKeyPem = forge.pki.privateKeyToPem(rsaKeyPair.privateKey);
    const publicKeyPem = forge.pki.publicKeyToPem(rsaKeyPair.publicKey);

    fs.writeFileSync('private_key.pem', privateKeyPem);
    fs.writeFileSync('public_key.pem', publicKeyPem);

    console.log('Private and public keys generated and saved.');
}

module.exports=gen_Keys;

