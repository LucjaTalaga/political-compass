import React, {Component} from 'react';
import {
    Link,
} from 'react-router-dom';

class MainInfo extends Component{
    componentDidMount() {
        this.props.clearScore();
    }

    render() {
        return (
            <section className='main startInfo flex-box'>
                <div className='startBox '>
                    <h1>Tu będą informacje na temat tegoż kompasu</h1>
                    <p><Link to="/quiz" className='link'>Przejdź do testu</Link></p>
                </div>
            </section>
        )
    }
}

export default MainInfo;