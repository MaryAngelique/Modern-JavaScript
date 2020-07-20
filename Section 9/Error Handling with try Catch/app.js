const use = {email: 'example@email.com'};

try {
    // Produce a Reference Error
    // myFunction();

    // Produc a TypeError
    //null.myFunction();

    // Will produce SyntaxError
    // eval('Hello World');

    // Will produce a URIError
    // decodeURIComponent('%');

    if(!URLSearchParams.name) {
        // throw 'User has no name';
        throw new SyntaxError('User has no name');
    }

} catch(e) {
    console.log(`User Error: ${e.message}`);
    // console.log(e);
    // console.log(e.message);
    // console.log(e.name);
    // console.log(e instanceof TypeError);
} finally {
    console.log('Finally runs reguardless of result...');
}

console.log('Program continues...');