class User {
    #users; // Undefined

    constructor() {

    }

    // #user Getter
    async getUsers() {
        this.#users = await this.#getUsersFromServer();
        return this.#users;
    }

    // #user Setter
    setUsers(users) {
        this.#users = users;
    }

    async #getUsersFromServer() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        return await response.json();
    }

    async getUsersAsHTML() {
        // 1. Check if #users is populated, if not, call '#getUsersFromServer'
        // if (this.#users == undefined) // Option 1: Check if undefined explicitly (ספציפית, באופן מדויק)
        if (!this.#users) { // Option 2: Check if undefined implicitly (מרומז)
            this.#users = await this.#getUsersFromServer();
        }

        // 2. Create HTML with 'table' of the results
        let htmlContent = '<table>';

        htmlContent += `
            <thead>
                <th>ID</th>
                <th>Name</th>
                <th>Username</th>
                <th>Phone</th>
                <th>Website</th>
            </thead>
        `;
  
        // לולאה שעוברת על כל האיברים מהמערך שהתקבל מהתשובה של השרת
        for (let user of this.#users) {
          htmlContent += `
            <tr>
              <td>${user.id}</td>
              <td>${user.name}</td>
              <td>${user.username}</td>
              <td>${user.phone}</td>
              <td>${user.website}</td>
            </tr>
          `;
        };

        htmlContent += '</table>';

        // 3. Return the HTML
        return htmlContent;
    }
}

export default User;