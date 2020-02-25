import React, {Component} from 'react';
import data from '../questions';
import Question from "./Question";
import {Redirect} from "react-router-dom";

let questions = data.questions;

class MainQuiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentQuestion: 1,
            redirect: null
        }
    }
    //funkcja, która zmienia pytanie, przy którym jesteśmy, a jeśli przekroczymy dostępną liczbę pytań, to przekieruje nas na stronę z wynikami
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
                                                 setScore={this.props.setScore} questionNumber={questionNumber}
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