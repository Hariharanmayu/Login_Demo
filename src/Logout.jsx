import React from 'react';
import {useAuth} from './Auth';
import Button from '@material-ui/core/Button';

function Logout(props) {
    const { setAuthTokens } = useAuth();
  
    function logOut() {
      setAuthTokens();
      localStorage.removeItem('token');
    }
  
    return (
      <div >
        <Button onClick={logOut}>Log Out</Button>
      </div>
    );
  }
  
  export default Logout;