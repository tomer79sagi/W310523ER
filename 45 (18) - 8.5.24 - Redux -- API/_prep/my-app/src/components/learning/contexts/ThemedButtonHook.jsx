import React, { useContext } from 'react';
import ThemeContext from '../../../contexts/ThemeContext';

const ThemedButtonHook = () => {
  const theme = useContext(ThemeContext);

  return (
    <div>
      The ThemeContext value is {theme}
    </div>
  )
}

export default ThemedButtonHook;
