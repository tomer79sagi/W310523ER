// Top-most class in the app
// This class includes all GENERIC methods and properties that can be use by all entities in the system
export default class Entity {

    updateField(fieldName, value) {
        // The following static method checks if a 'fieldName' exists (declared), if so, set the value to it
        if (Object.hasOwnProperty.call(this, fieldName))
            this[fieldName] = value;
    }

    generateUID() {
        this.id = Math.floor(Math.random() * 1000000);
    }
}