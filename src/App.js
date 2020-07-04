import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightMode, darkMode } from './themes/theme';
import { GlobalStyles } from './themes/global';


function App() {
  return (
    <themeProvider theme={lightMode}>
      <>
        <GlobalStyles />
        <button>Toggle mode</button>
        <h1>Light mode</h1>
        <footer>          
        </footer>
      </>
    </themeProvider>
  );
}

export default App;
