import React, {Component} from 'react';
import data from '../questions';
import Question from "./Question";

let questions = data.questions;

class MainQuiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            economicScore: 0,
            socialScore: 0,
            currentQuestion: 1
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
        }
        else if (typeOfQuestion === 'social') {
            this.setState({
                socialScore: this.state.socialScore + scoreAddition
            });
        }
    };

    setCurrentQuestion = (id) =>{
        this.setState({
            currentQuestion: id
        });
    };
    render() {
        return (
            <section className='main quiz'>
                {questions.map(question => {
                    if (this.state.currentQuestion === question.id) {
                        return <Question question={question} currentQuestion={this.state.currentQuestion} setScore={this.setScore}
                                         setCurrentQuestion={this.setCurrentQuestion}/>
                    }
                })}
                <p>wynik ekonomiczny: {this.state.economicScore}, wynik społeczny: {this.state.socialScore}</p>
            </section>
        )
    }
}

export default MainQuiz