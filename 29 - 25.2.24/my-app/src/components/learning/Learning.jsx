import Clock from './Clock';
import PersonalDetails from './PersonalDetails';

const Learning = () => {
  return (
    <div>
      <h3>Learning</h3>

      <h4>Clock</h4>
      <Clock date={ new Date() } name='Tomer' phone='052'/>

      <h4>Personal Details</h4>
      <PersonalDetails/>
    </div>
  )
}

export default Learning;
