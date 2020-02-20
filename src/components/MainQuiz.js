import React, {Component} from 'react';
import data from '../questions';


class MainQuiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            economicScore: 0,
            socialScore: 0,
            current: 1
        }
    }
    render() {
        return (
            <section className='main quiz'>
                <h1>Tu będzie ten quiz</h1>
            </section>
        )
    }
}

export default MainQuiz