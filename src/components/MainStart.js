import React, {Component} from 'react';
import {
    Link,
} from 'react-router-dom';


class MainStart extends Component {
    render() {
        return (
            <section className='main start'>
                <h1>Witaj na stronie, gdzie możesz sprawdzić swoje poglądy polityczne</h1>
                <Link to="/info">Start</Link>
            </section>
        )
    }
}

export default MainStart;