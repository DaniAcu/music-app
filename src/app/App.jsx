import React from 'react';
import { Provider } from 'react-redux';
import Store from 'src/store';
import Routes from 'src/routes/components/Routes';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body {
        background-color: #1f2637;
        color: white;
        font-family: 'Raleway', sans-serif;
        margin: 0;
        padding: 0;

        #root {
            max-width: 430px;
            margin: 0 auto;
        }
    }
`;

const App = () => (
  <React.Fragment>
    <GlobalStyles />
    <Provider store={Store}>
      <Routes />
    </Provider>
  </React.Fragment>
);

export default App;
