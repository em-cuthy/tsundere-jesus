//die flugel der freiheit

/* 
 * file: index.js
 * author: Emelia_Cuthbertson
 * purpose: this is my hello world application
 * history: 7/17/2017 - file created
 * 
*/

console.log('Wohlan Freund! ');
console.log('Jezt hier ist ein Sieg.');

var msg1 = 'fur den ';
var msg2 = 'nachsten kampf. ';

//include var msg1 + msg2 at the end

msg1.concat(msg2);

function concat(msg1, msg2) {
    var smushed = msg1.concat(msg2);
    return smushed;
}

console.log('Dies ist der erste Gloria. ');


var msg3 = 'pigs can flyyyy';
var msg4 = 'O, mein Freund! ';

function checkForpigs(message) {
    if (message.includes('pigs')) {
        return 'O, mein Freund! ';
    } else {
        return 'Feiren wir deisen sieg, '
    
    }
}

console.log(checkForpigs(msg3));
console.log(checkForpigs(msg4));

console.log(msg1.concat(msg2))