try {
    console.log('start');
    lalala;
    console.log('end');
} catch (err) {
    // variable representing an object of class 'Error', contains strings of the error
    // Can use 'err' variable
    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);
    // console.log(err);
} finally {
    console.log('Finished processing');
}