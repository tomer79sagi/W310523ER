import { Component } from 'react';
import './PersonalDetails.css';

class PersonalDetails extends Component {
    render() {
        return (
            <div className="personal_details">
                <div>Tomer Sagi</div>
                <div>0528684411</div>
                <div>me@tomersagi.com</div>
            </div>
        )
    }
}

export default PersonalDetails;