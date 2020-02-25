import React, {Component} from 'react';
// komponent, który wyświetla pojedyncze pytanie, możliwe odpowiedzi oraz zapewnia obsługę odpowiedzi na pytanie.
class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedValue: null,
        }
    }

    handleChange = (e) => {
        this.setState({
            selectedValue: e.target.value
        });
    };

    handleSubmit = (e, selectedValue) => {
        e.preventDefault();
        let {question, currentQuestion, setScore, setCurrentQuestion, questionNumber} = this.props;
        setScore(question.typeOfQuestion, question.orientation, this.state.selectedValue);
        this.setState({
            selectedValue: null
        });
        setCurrentQuestion(currentQuestion + 1);
    };

    render() {
        let {selectedValue, redirect} = this.state;
        let {question} = this.props;
        return (
            <section>
                <h1> {question.question}</h1>
                <form onSubmit={e => this.handleSubmit(e, selectedValue)}>
                    <div className='formContainer flex-box'>
                        <label className='answers'>
                            <input type='radio' name='answers' value='2' onChange={this.handleChange}/>
                            <span className="answersCheckmark">Zupełnie się zgadzam</span>
                        </label>
                        <label className='answers'>
                            <input type='radio' name='answers' value='1' onChange={this.handleChange}/>
                            <span className="answersCheckmark">Raczej się zgadzam</span>
                        </label>
                        <label className='answers'>
                            <input type='radio' name='answers' value='0' onChange={this.handleChange}/>
                            <span className="answersCheckmark">Nie mam zdania </span>
                        </label>
                        <label className='answers'>
                            <input type='radio' name='answers' value='-1' onChange={this.handleChange}/>
                            <span className="answersCheckmark">Raczej się nie zgadzam</span>
                        </label>
                        <label className='answers'>
                            <input type='radio' name='answers' value='-2' onChange={this.handleChange}/>
                            <span className="answersCheckmark">Zupełnie się nie zgadzam</span>
                        </label>
                    </div>
                    <button disabled={selectedValue === null}
                            className={selectedValue === null ? 'formButton disabled' : 'formButton'}>Dalej
                    </button>
                </form>
            </section>
        )
    }
}

export default Question;