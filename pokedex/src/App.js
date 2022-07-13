import './App.css';
import Router from "./routes/Routes";
import { GlobalStyle } from './styles';
import GlobalState from './GlobalStateContext/GlobalState';


function App() {

  return (
    <div>
      <GlobalState>
          <GlobalStyle />
          <Router/>
      </GlobalState>
    </div>
  );
}

export default App;
