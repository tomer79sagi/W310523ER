enum GRANT_STATUS {
    OPENED = "Opened",
    APPLIED = "Applied",
    IN_PROCESS = "In Process",
    REJECTED = "Rejected",
    APPROVED = "Approved"
}

export default class GrantApplication {
    grantValue: number;
    status: GRANT_STATUS;

    constructor(grantValue: number) {
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