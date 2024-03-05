import Clock from './clocks/Clock';
import ClockFC from './clocks/ClockFC';
import PersonalDetails from './PersonalDetails';
import PersonalDetailsProps from './PersonalDetailsProps';
import PersonalDetailsPropsObject from './PersonalDetailsPropsObject';
import ThreeClocks from './clocks/ThreeClocks';
import EventHandlingFC from './EventHandlingFC';
import EventHandlingCC from './EventHandlingCC';

const Learning = () => {
  let a = new Date();
  a.setHours(a.getHours() + 8);

  return (
    <div>
      <h3>Learning</h3>

      <h4>Clock</h4>
      <Clock date={ new Date() }/>

      <h4>Personal Details</h4>
      <PersonalDetails/>

      <PersonalDetailsProps name="Tomer Sagi"/>

      <PersonalDetailsPropsObject person={ { name: 'Tomer Sagi', phone: '0528684411', email: 'me@tomersagi.com' } }/>
    
      <ClockFC date={ a }/>

      <ThreeClocks/>

      <EventHandlingFC/>
      <EventHandlingCC/>
    </div>
  )
}

export default Learning;
