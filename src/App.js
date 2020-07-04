import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightMode, darkMode } from './themes/theme';
import { GlobalStyles } from './themes/global';

function App() {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light');
    }
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightMode : darkMode}>
      <>
        <GlobalStyles />
        <button onClick={toggleTheme}>Toggle mode</button>
        <h1>Light mode</h1>
        <footer>          
        </footer>
      </>
    </ThemeProvider>
  );
}

export default App;
