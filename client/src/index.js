import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import store from './Redux/Store';
import {Provider} from 'react-redux'
import { ChakraProvider } from '@chakra-ui/react';
import theme from "./Theme"
ReactDOM.render(
  <React.StrictMode>
   
    <BrowserRouter>
    <ChakraProvider theme={theme}>
    <Provider store ={store} >
    <App  />
    </Provider>
    </ChakraProvider>
    </BrowserRouter>
    
  </React.StrictMode>
  ,
  document.getElementById('root')
);


