import React, { useContext } from 'react';
import ThemeContext from '../../../contexts/ThemeContext';

const ThemedButtonHookSetter = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  return (
    <div>
      <button style={{background: theme}}
        onClick={() => setTheme(theme === 'green' ? 'yellow' : 'green')}>Click Me</button>
    </div>
  )
}

export default ThemedButtonHookSetter;
