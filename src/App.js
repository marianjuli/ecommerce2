import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Products from './components/pages/Products';
import Anteojos from './components/pages/Anteojos';
import Bolsos from './components/pages/Bolsos';
import Perfumes from './components/pages/Perfumes';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import Home from './components/pages/Home';

function App() {
  return (
   <Router>
      <Navbar/>
      <Switch>
        <Route path= '/' exact component ={Home}/> 
        <Route path= '/products' exact component ={Products}/>
        <Route path= '/anteojos' exact component ={Anteojos}/>
        <Route path= '/bolsos' exact component ={Bolsos}/>
        <Route path= '/perfumes' exact component ={Perfumes}/>
        <Route path= '/contact-us' exact component ={ContactUs}/>
        <Route path= '/sign-up' exact component ={SignUp}/>
      </Switch>
   </Router>
  );
}

export default App;
