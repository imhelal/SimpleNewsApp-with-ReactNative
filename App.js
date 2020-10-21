/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,Text
} from 'react-native';
import  Header  from './components/Header';
import Home from './components/Home'


const App = () => {
  return (
    <>
      <Header/>
       <Home/>
    </>
  );
};

const styles = StyleSheet.create({
  
  
});

export default App;
