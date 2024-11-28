import React, {Component} from 'react';
import './scss/main.scss';
import Header from './components/Header';
import MainStart from "./components/MainStart";
import Footer from "./components/Footer";
import MainInfo from "./components/MainInfo";
import MainQuiz from "./components/MainQuiz";
import Results from "./components/Results";
 
import {
    HashRouter,
    Route,
    Switch,
} from 'react-router-dom';

class App extends Component {
    state = {
        economicScore: 0,
        socialScore: 0
    };
    // funkcja, zmieniająca uzyskany wynik, w zależności od odpowiedzi. Pierwszy argument określa, czy zmieniamy wynik dla poglądów
    // ekonomicznych, bądź społecznych. Drugi określa czy w zależności od odpowiedzi wynik ma rosnąć bądź maleć, a trzeci odpowiada wartości udzielonej odpowiedzi.
    setScore = (typeOfQuestion, orientation, answerValue) => {
        let scoreAddition = orientation * answerValue;
        if (typeOfQuestion === 'economic') {
            this.setState({
                economicScore: this.state.economicScore + scoreAddition
            });
        } else if (typeOfQuestion === 'social') {
            this.setState({
                socialScore: this.state.socialScore + scoreAddition
            });
        }
    };
    clearScore = () => {
        this.setState({
            economicScore: 0,
            socialScore: 0
        });
    };
    render() {
        return (
            <HashRouter>
                <>
                    <Header/>
                    <Switch>
                        <Route exact path='/' component={MainStart}/>
                        <Route path='/info' render={(props) => <MainInfo clearScore={this.clearScore} />}/>
                        <Route path='/quiz' render={(props) => <MainQuiz setScore={this.setScore} economicScore={this.state.economicScore} socialScore={this.state.socialScore} />}/>
                        <Route path="/results" render={(props) => <Results economicScore={this.state.economicScore} socialScore={this.state.socialScore}/>}/>
                    </Switch>
                    <Footer/>
                </>
            </HashRouter>
        );
    }
}
export default App;
