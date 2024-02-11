var GRANT_STATUS;
(function (GRANT_STATUS) {
    GRANT_STATUS["OPENED"] = "Opened";
    GRANT_STATUS["APPLIED"] = "Applied";
    GRANT_STATUS["IN_PROCESS"] = "In Process";
    GRANT_STATUS["REJECTED"] = "Rejected";
    GRANT_STATUS["APPROVED"] = "Approved";
})(GRANT_STATUS || (GRANT_STATUS = {}));
export default class GrantApplication {
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
