// -- VIEW --
// Responsible for updating the UI with data
// אחראי על עדכון הממשק משתמש באמצעות דאטה שהוא מקבל כקלט לפונקציה
function updateUI(data) {
    // משתנה שישמור את התוכן של הטבלה שיתעדכן בכל איטרציה של הלולאה
    let htmlContent = '';
    
    // לולאה שעוברת על כל האיברים מהמערך שהתקבל מהתשובה של השרת
    for (let post of data) {
      htmlContent += `
        <tr>
          <td>${post.userId}</td>
          <td>${post.id}</td>
          <td>${post.title}</td>
          <td>${post.body}</td>
        </tr>
      `;
    }
  
    document.getElementById('output').innerHTML = `<table>${htmlContent}</table>`;
}

export default updateUI;