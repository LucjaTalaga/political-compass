import React, {Component} from 'react';
import {
    Link,
} from 'react-router-dom';


class MainStart extends Component {
    render() {
        return (
            <section className='main flex-box'>
                <div className='startBox'>
                    <h1>Witaj na stronie, gdzie możesz sprawdzić swoje poglądy polityczne</h1>
                    <p><Link to="/info" className='link'>Start</Link></p>
                </div>
            </section>
        )
    }
}

export default MainStart;