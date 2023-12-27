class TimeUtil {
    clock;
    int;

    // 'tzIsraelOffset' determines the hour difference between israel and the desired timezone
    // Example, EST: 8 hours behind Israel
    constructor(tzIsraelOffsetHours) {
        console.log(`Created a new instance of 'TimeUtil'`);
        this.clock = new Date();
        this.clock.setMinutes(this.clock.getMinutes() + (tzIsraelOffsetHours * 60));
    }

    displayTimerInDiv(divID) {
        // Create an INTERVAL for continuous time updating
        this.int = setInterval(() => {
            // this.clock = new Date();
            this.clock.setSeconds(this.clock.getSeconds() + 1);

            const hours = this.clock.getHours().toString().padStart(2, '0');
            const minutes = this.clock.getMinutes().toString().padStart(2, '0');
            const seconds = this.clock.getSeconds().toString().padStart(2, '0');

            document.getElementById(divID).innerHTML = `${hours}:${minutes}:${seconds}`;
        }, 1000);
    }
}

export default TimeUtil;