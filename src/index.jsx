import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './routes'
import { AuthProvider } from './context/authContext'
import { RoutingProvider } from './context/routingContext'
import { UsersProvider } from './context/usersContext'
import { ToastProvider } from './context/toastContext'

import './index.css';

function App() {
  return (
    <RoutingProvider>
      <AuthProvider>
        <UsersProvider>
          
              <ToastProvider>
                <Routes/>
              </ToastProvider>
            
        </UsersProvider>
      </AuthProvider>
    </RoutingProvider>
  );
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
