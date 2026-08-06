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
import { useAuthVerification } from './utils/useAuthVerification';
import CustomGsapSpinner from './components/Spinner-components/CustomGsapSpinner';
import CartPage from './pages/CartPage';
import OrderPage from './pages/OrderPage';
import ProtectedRoute from './pages/auth-pages/ProtectedRoute';
import OrderFinished from './pages/page-components/OrderPage/OrderFinished';

function App() {
  const user = useSelector((store) => store.client.user);

  const { authLoading } = useAuthVerification();

  if (authLoading) return <CustomGsapSpinner />;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/shop/:gender/:categoryName/:categoryId/:productNameSlug/:productId" component={ProductPage} />
        <Route exact path="/shop/:productNameSlug/:productId" component={ProductPage} />
        <Route exact path="/shop/:gender/:categoryName/:categoryId" component={ShopPage} />
        <Route exact path="/shop/:gender" component={ShopPage} />
        
        <Route path="/contact" component={ContactPage} />
        <Route path="/team" component={TeamPage} />
        <Route path="/aboutus" component={AboutUsPage} />
        
        <Route path="/product/:id" component={ProductPage} />
        <Route path="/signup" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />

        <ProtectedRoute exact path="/cart/order" component={OrderPage} />
        <Route path="/cart" component={CartPage} />
        
        <Route exact path="/congrats" component={OrderFinished} />

      </Switch>
    </BrowserRouter>
  )
}

export default App