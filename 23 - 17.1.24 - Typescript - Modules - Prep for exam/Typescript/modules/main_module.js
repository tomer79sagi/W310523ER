import GrantApplication from './module_1.js';
const myGrant = new GrantApplication(4000);
myGrant.printStatus(); // --> Opened
myGrant.moveToNextStage();
myGrant.printStatus(); // --> Applied
