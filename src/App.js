import Aboutus from "./pages/Aboutus"
import GlobalStyle from "./components/GlobalStyle"
import Nav from './components/Nav'
import ContactUs from "./pages/ContactUs";
import OurWork from './pages/OurWork';
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch >
      <Route path="/" exact >
           <Aboutus/>
      </Route>
      <Route path="/work" >
          <OurWork/>
      </Route>

      <Route path="/contact" >
         <ContactUs/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
