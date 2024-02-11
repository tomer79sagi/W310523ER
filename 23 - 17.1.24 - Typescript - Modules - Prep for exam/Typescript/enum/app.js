"use strict";
var GRANT_STATUS;
(function (GRANT_STATUS) {
    GRANT_STATUS["OPENED"] = "Opened";
    GRANT_STATUS["APPLIED"] = "Applied";
    GRANT_STATUS["IN_PROCESS"] = "In Process";
    GRANT_STATUS["REJECTED"] = "Rejected";
    GRANT_STATUS["APPROVED"] = "Approved";
})(GRANT_STATUS || (GRANT_STATUS = {}));
class GrantApplication {
    constructor(grantValue) {
        this.grantValue = grantValue;
        this.status = GRANT_STATUS.OPENED;
    }
    printStatus() {
        console.log(this.status);
    }
    moveToNextStage() {
        if (this.status == GRANT_STATUS.OPENED) {
            this.status = GRANT_STATUS.APPLIED;
        }
    }
}
const myGrant = new GrantApplication(4000);
myGrant.printStatus(); // --> Opened
myGrant.moveToNextStage();
myGrant.printStatus(); // --> Applied
