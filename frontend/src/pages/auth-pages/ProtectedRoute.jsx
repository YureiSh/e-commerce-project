import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProtectedRoute = ({
  component: Component,
  message = "Before creating order login as with your information",
  ...rest
}) => {
  const {user} = useSelector((store)=> store.client);
  const isAuthenticated = user?.roleId || user?.role_id != null;
  if(!isAuthenticated) toast.info(message);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated
          ? <Component {...props} />
          : <Redirect to="/login" />
      }
    />
  );
};
export default ProtectedRoute;