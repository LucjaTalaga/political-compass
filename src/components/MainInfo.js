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
                    <h1 id='infoText'>Test składa się z pytań, dotyczących kwestii politycznych, z zakresu spraw społecznych lub gospodarczych.
                    Na każde pytanie udziel jedną z pięciu dostępnych odpowiedzi. Po ukończeniu testu swój wynik zobaczysz na układzie
                    współrzędnych, na którym jedna z osi obrazuje poglądy gospodarcze, a druga społeczne.</h1>
                    <p><Link to="/quiz" className='link'>Przejdź do testu</Link></p>
                </div>
            </section>
        )
    }
}

export default MainInfo;