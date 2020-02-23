import React from 'react';
import {
    Link,
} from 'react-router-dom';

function MainInfo() {
    return (
        <section className='main flex-box'>
            <div className='startBox'>
                <h1>Tu będą informacje na temat tegoż kompasu</h1>
                <p><Link to="/quiz" className='link'>Przejdź do testu</Link></p>
            </div>
        </section>
    )
}

export default MainInfo;