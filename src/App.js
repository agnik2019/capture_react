import Aboutus from "./pages/Aboutus"
import GlobalStyle from "./components/GlobalStyle"
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
     <Aboutus/>
    </div>
  );
}

export default App;
