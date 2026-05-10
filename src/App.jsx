import './App.css'
import { useSelector } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ContactPage from './pages/ContactPage';
import TeamPage from './pages/TeamPage';
import AboutUsPage from './pages/AboutUsPage';
import ProductPage from './pages/ProductPage';

function App() {
  const user = useSelector((store) => store.user);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/team" component={TeamPage} />
        <Route path="/aboutus" component={AboutUsPage} />
        <Route path="/product/:id" component={ProductPage} />
        
      </Switch>
    </BrowserRouter>
  )
}

export default App