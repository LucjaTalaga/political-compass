import React, {Component} from 'react';
import {
    Link,
} from 'react-router-dom';


class MainStart extends Component {
    render() {
        return (
            <section className='main startInfo flex-box'>
                <div className='startBox '>
                    <h1>Witaj na stronie Kompas Polityczny, gdzie możesz sprawdzić swoje poglądy polityczne. <br/> Aby to
                    zrobić przejdź do następnej sekcji i weź udział w teście</h1>
                    <p><Link to="/info" className='link'>Start</Link></p>
                </div>
            </section>
        )
    }
}

export default MainStart;