import React, {Component} from 'react';
import data from '../questions';
import Question from "./Question";
import {Redirect} from "react-router-dom";

let questions = data.questions;

class MainQuiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            economicScore: 0,
            socialScore: 0,
            currentQuestion: 1,
            redirect: null
        }
    }

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

    setCurrentQuestion = (id) => {
        if (id > questions.length) {
            this.setState({
                redirect: "/results"
            });
        }
        else {
            this.setState({
                currentQuestion: id
            });
        }
    };

    render() {
        let questionNumber = questions.length;
        if (this.state.redirect) {
            return <Redirect to={{
                pathname: `${this.state.redirect}`,
                state: { id: '123' }
            }} />
        }
        else {
            return (
                <section className='main flex-box'>
                    <div className='startBox'>
                        {questions.map(question => {
                            if (this.state.currentQuestion === question.id) {
                                return <Question question={question} currentQuestion={this.state.currentQuestion}
                                                 setScore={this.setScore} questionNumber={questionNumber}
                                                 setCurrentQuestion={this.setCurrentQuestion}/>
                            }
                        })}
                    </div>
                </section>
            )
        }
    }
}

export default MainQuiz