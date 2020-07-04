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

  const toggleText = theme === 'light' ? 'Light' : 'Dark';



  return (
    <ThemeProvider theme={theme === 'light' ? lightMode : darkMode}>
      <>
        <GlobalStyles />
        <button onClick={toggleTheme}>Toggle mode</button>
        <h1>{toggleText} mode</h1>
        <footer>          
        </footer>
      </>
    </ThemeProvider>
  );
}

export default App;
