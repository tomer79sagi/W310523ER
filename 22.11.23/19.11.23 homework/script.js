// function handleUserName(firstName, lastName) { // Function decleration
const handleUserName = function(firstName, lastName) { // Function expression
    // 1. Line by line
    // ---------------------------
    // let ch = firstName.charAt(0); // ch = first character of firstName
    // ch = ch.toUpperCase(); // ch = first character of firstName in upper case
    
    // // Construct new string using the new uppercase character + the rest of the string
    // const newSUserName = ch + firstName.slice(1);

    
    // 2. One-line
    // ---------------------------
    const newFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1); // If an ending index is not provided, reach the end of the string
    const newLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);

    return newFirstName + ' ' + newLastName;
}

// Asks the user to enter a first name and last name,
// capitalize the first letter of each name
// and and alerts it together with the string 'Hi welcome back to the race!'
function getUser() {
    const firstName = prompt('Please enter your first name');
    const lastName = prompt('Please enter your last name');
    
    const quickHandleName = (firstName, lastName) => {
        const newFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1); // If an ending index is not provided, reach the end of the string
        const newLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
        return newFirstName + ' ' + newLastName;
    };

    // const s = handleUserName(firstName, lastName);
    const s = quickHandleName(firstName, lastName);
    alert('Hi ' + s + ', welcome back to the race!');
}

getUser();