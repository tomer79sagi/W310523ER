import React from 'react';
import ThemeContext from '../../../contexts/ThemeContext';

const ThemedButton = () => {
  return (
    <div>
        <ThemeContext.Consumer>
            {theme => (
                <div>
                    The ThemeContext value is {theme}
                </div>
            )}
        </ThemeContext.Consumer>
    </div>
  )
}

export default ThemedButton;
