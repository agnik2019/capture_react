import Aboutus from "./pages/Aboutus"
import GlobalStyle from "./components/GlobalStyle"
import Nav from './components/Nav'
import ContactUs from "./pages/ContactUs";
import OurWork from './pages/OurWork';
import { Switch, Route } from 'react-router-dom';
import MovieDetail from "./pages/MovieDetail"

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch >
      <Route path="/" exact >
           <Aboutus/>
      </Route>
      <Route path="/work" exact>
          <OurWork/>
      </Route>
    <Route path="/work/:id" >
      <MovieDetail />
    </Route>
      <Route path="/contact" >
         <ContactUs/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
