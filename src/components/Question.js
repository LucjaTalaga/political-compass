import React, {Component} from 'react';

class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedValue: null
        }
    }

    handleChange = (e) => {
        this.setState({
            selectedValue: e.target.value
        });
    };

    handleSubmit = (e, selectedValue) => {
        e.preventDefault();
        let {question, currentQuestion, setScore, setCurrentQuestion} = this.props;
        setScore(question.typeOfQuestion, question.orientation, this.state.selectedValue);
        this.setState({
            selectedValue: null
        });
        setCurrentQuestion(currentQuestion+1);
    };

    render() {
        let {selectedValue} = this.state;
        let {question} = this.props;
        return (
            <section>
                <h2> {question.question}</h2>
                <form onSubmit={e => this.handleSubmit(e, selectedValue)}>
                    <label className='answers'>
                        <input type='radio'name='answers' value='2' onChange={this.handleChange}/>
                        <span className="answersCheckmark"></span>
                        Zupełnie się zgadzam
                    </label>
                    <label className='answers'>
                        <input type='radio'name='answers' value='1' onChange={this.handleChange}/>
                        <span className="answersCheckmark"></span>
                        Raczej się zgadzam
                    </label>
                    <label className='answers'>
                        <input type='radio'name='answers' value='0' onChange={this.handleChange}/>
                        <span className="answersCheckmark"></span>
                        Nie mam zdania
                    </label>
                    <label className='answers'>
                        <input type='radio'name='answers' value='-1' onChange={this.handleChange}/>
                        <span className="answersCheckmark"></span>
                        Raczej się nie zgadzam
                    </label>
                    <label className='answers'>
                        <input type='radio'name='answers' value='-2' onChange={this.handleChange}/>
                        <span className="answersCheckmark"></span>
                        Zupełnie się nie zgadzam
                    </label>
                    <button disabled={selectedValue===null}>Dalej</button>
                </form>
            </section>
        )
    }
}

export default Question;