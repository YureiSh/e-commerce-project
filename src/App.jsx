import './App.css'
import { useSelector } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ContactPage from './pages/ContactPage';
import TeamPage from './pages/TeamPage';
import AboutUsPage from './pages/AboutUsPage';
import ProductPage from './pages/ProductPage';
import RegisterPage from './pages/auth-pages/RegisterPage';
import LoginPage from './pages/auth-pages/LoginPage';
import CustomSpinner from './components/CustomSpinner';
import { useAuthVerification } from './utils/useAuthVerification';

function App() {
  const user = useSelector((store) => store.client.user);

  const { authLoading } = useAuthVerification();

  if (authLoading) return <CustomSpinner />;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route path="/shop/:gender/:categoryName/:categoryId" component={ShopPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/team" component={TeamPage} />
        <Route path="/aboutus" component={AboutUsPage} />
        <Route path="/product/:id" component={ProductPage} />
        <Route path="/signup" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />

      </Switch>
    </BrowserRouter>
  )
}

export default App