import React, { useState } from 'react';


import ashe from '../assets/ashe.mp4'

import bet from '../assets/bet.mp4'
import lee from '../assets/lee.mp4'
import { H, S, Header, Login, Me,Signup,SearchClass,SingleClass,AllTraits} from '../components';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const pages = ['H', 'S', ];
// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
const Main = () => {
  const [dataUpdated, setDataUpdated] = useState(false);
  const [currentPage, setCurrentPage] = useState('H');
    const [currentLegend, setCurrentLegend] = useState('');
    const [currentClass, setCurrentClass] = useState('');



  return (
    <ApolloProvider client={client}>
      <Router>
    <div>
      
      <div className="overlay"></div>
       <video id="vid" src={lee} autoPlay loop muted></video><video id="vid" src={bet} autoPlay loop muted></video><video id="vid" src={ashe} autoPlay loop muted></video>

       
      {/* <video id="vid" src={skull} autoPlay loop muted></video>
        <video id="vid" src={ren} autoPlay loop muted></video>
        <video id="vid" src={red} autoPlay loop muted></video> */}
       
        
        
    
     
    
            <div className="content">
              <div className='content2'> <Header /></div>
              <Routes>
                <Route
                 path="/"
                 element={<H setCurrentPage={setCurrentPage} setCurrentLegend={setCurrentLegend} setCurrentClass={setCurrentClass} />}
                />
                <Route
                  path="/Single"
                  element={<S currentLegend={currentLegend} setCurrentPage={setCurrentPage} setDataUpdated={setDataUpdated}/>}
                />
                <Route
                  path="/login"
                  element={<Login />}
                />
                <Route
                  path="/me"
                  element={<Me setCurrentLegend={setCurrentLegend} dataUpdated={dataUpdated}/>}
                />
                 <Route
                  path="/signup"
                  element={<Signup />}
                />
                <Route
                  path="/SearchClass"
                  element={<SearchClass setCurrentClass={setCurrentClass}/>}
                />
                  <Route
                  path="/SingleClass"
                  element={<SingleClass currentClass={currentClass} setCurrentLegend={setCurrentLegend}/>}
                />
                <Route
                  path="/AllTraits"
                  element={<AllTraits setCurrentClass={setCurrentClass} />}
                />
                
                </Routes>
         
      </div>
    </div>
    </Router></ApolloProvider>
  );
};

export default Main;
