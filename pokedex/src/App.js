import './App.css';
import Router from "./routes/Routes";
import { ThemeProvider } from 'styled-components'
import {theme} from './theme/theme'
import { GlobalStyle } from './styles';


function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router/>
      </ThemeProvider>
    </div>
  );
}

export default App;
