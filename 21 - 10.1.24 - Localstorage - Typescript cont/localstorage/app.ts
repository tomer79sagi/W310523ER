function getOrShowData(dataKey: string) {
    let data: string | null;
    const storedAge = localStorage.getItem(dataKey);

    // Check if there is a value in 'localStorage' with key 'age'
    // If there is NOT a value --> prompt and save to localStorage
    if (storedAge == null) {
        data = prompt(`Please enter your ${dataKey}: `);

        // Save to 'localstorage' - DB
        localStorage.setItem(dataKey, data as string);

    // Else (i.e., there IS a value in 'localStorage') --> alert it
    } else {
        alert(`Your saved age is: ${storedAge}`);
    }
}

function removeItem() {
    localStorage.removeItem('age'); // Removes ONLY the key provided
    // localStorage.clear(); // Clear the ENTIRE storage, remove everything
}

document.getElementById('btnStart')?.addEventListener('click', () => {
    getOrShowData('age');
    getOrShowData('name');
    getOrShowData('address');
});


// Define an array of type 'number'
function addGrade() {
    const grade: string = prompt('Add your grade') as string;

    // 1. Get array from LS
    let strFromLS: string = localStorage.getItem('grades') as string;
    let arrGrades: string[] = JSON.parse(strFromLS);
    console.log(arrGrades);

    // 1.1 Check if arr is null (i.e. FIRST TIME)
    // If so, create an empty array
    if (arrGrades == null) {
        arrGrades = [];
    }

    // 2. Push the new value to LS
    arrGrades.push(grade);

    // 3. Save the array back into LS
    let strToLS: string = JSON.stringify(arrGrades);
    localStorage.setItem('grades', strToLS);
}

function displayArray() {

}

// Handling potential NULL values
// Option 1
let btn = document.getElementById('btnAddGrade') as HTMLButtonElement;
if (btn != null)
    btn.addEventListener('click', addGrade);
else
    alert(`Couldn't find the button`);

// Option 2
try {
    document.getElementById('btnAddGrade')?.addEventListener('click', addGrade);
} catch (err) {
    // Handle NULL case
    alert(`Couldn't find the button`);   
}