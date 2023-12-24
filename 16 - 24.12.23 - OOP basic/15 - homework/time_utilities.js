class TimeUtil {
    constructor() {
        console.log(`Created a new instance of 'TimeUtil'`);
    }

    createTimer(divID) {
        let counter = 1;

        // Create an INTERVAL for continuous time updating
        setInterval(() => {
            const myDate = new Date();

            const hours = myDate.getHours().toString().padStart(2, '0');
            const minutes = myDate.getMinutes().toString().padStart(2, '0');
            const seconds = myDate.getSeconds().toString().padStart(2, '0');

            document.getElementById(divID).innerHTML = `${hours}:${minutes}:${seconds}`;
        }, 1000);
    }
}

function print() {
    console.log('Hey, how are you?');
}

export default TimeUtil;

export {
    print
}