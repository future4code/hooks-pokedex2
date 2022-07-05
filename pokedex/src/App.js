import './App.css';
import Router from "./routes/Routes";
import { ThemeProvider } from 'styled-components'
import {theme} from './theme/theme'
import { GlobalStyle } from './styles';
import GlobalState from './GlobalStateContext/GlobalState';


function App() {

  return (
    <div>
      <GlobalState>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Router/>
        </ThemeProvider>
      </GlobalState>
    </div>
  );
}

export default App;
