import Clock from './clocks/Clock';
import ClockFC from './clocks/ClockFC';
import PersonalDetails from './PersonalDetails';
import PersonalDetailsProps from './PersonalDetailsProps';
import PersonalDetailsPropsObject from './PersonalDetailsPropsObject';
import ThreeClocks from './clocks/ThreeClocks';
import EventHandlingFC from './EventHandlingFC';
import EventHandlingCC from './EventHandlingCC';
import Counter from './counter-exercise/Counter';
import CounterHookTest from './counter-hook/CounterHookTest';

const Learning = () => {
  let a = new Date();
  a.setHours(a.getHours() + 8);

  return (
    <div>
      <h3>Learning</h3>

      <hr style={{marginTop: '15px'}}/>
      <CounterHookTest/>

      <hr style={{marginTop: '15px'}}/>
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

      <Counter/>
    </div>
  )
}

export default Learning;
