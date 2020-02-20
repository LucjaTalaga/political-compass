import React from 'react';
import './scss/main.scss';
import Header from './components/Header';
import MainStart from "./components/MainStart";
import Footer from "./components/Footer";
import MainInfo from "./components/MainInfo";
import MainQuiz from "./components/MainQuiz";

import {
    HashRouter,
    Route,
    Switch,
} from 'react-router-dom';

function App() {
  return (
      <HashRouter>
        <>
            <Header/>
            <Switch>
                <Route exact path='/' component={MainStart}/>
                <Route path='/info' component={MainInfo}/>
                <Route path='/quiz' component={MainQuiz}/>
            </Switch>
            <Footer/>
        </>
      </HashRouter>
  );
}

export default App;
