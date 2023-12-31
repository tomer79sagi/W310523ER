class User {
    static #users; // Undefined
    static #apiFieldsToShow = ['id', 'name', 'email', 'username', 'phone', 'website'];

    constructor() {}

    // #user Getter
    static async getUsers() {
        await User.#initUsersFromServer();
        return User.#users;
    }

    static async #initUsersFromServer() {
        if (!User.#users) {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            User.#users = await response.json();
        }
    }

    static async getUsersAsHTML() {
        await User.#initUsersFromServer();

        // 1. Create HTML with 'table' of the results
        let htmlContent = '<table>';

        htmlContent += `<thead>`;
        for (let i=0 ; i<User.#apiFieldsToShow.length ; i++) {
            let apiField = User.#apiFieldsToShow[i];
            htmlContent += `
                <th>
                    ${apiField.charAt(0).toUpperCase()}${apiField.substring(1)}
                </th>
            `;
        }
        htmlContent += `</thead>`;
  
        // לולאה שעוברת על כל האיברים מהמערך שהתקבל מהתשובה של השרת
        for (let user of User.#users) {
            htmlContent += `<tr>`;
            for (let i=0 ; i<User.#apiFieldsToShow.length ; i++) {
                htmlContent += `
                    <td>
                        ${user[User.#apiFieldsToShow[i]]}
                    </td>
                `;
            }
            htmlContent += `</tr>`;
        };

        htmlContent += '</table>';

        // 3. Return the HTML
        return htmlContent;
    }
}

export default User;