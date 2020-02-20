import React from 'react';
import {
    Link,
} from 'react-router-dom';

function MainInfo() {
    return(
        <section className='main info'>
            <h1>Tu będą informacje na temat tegoż kompasu</h1>
            <Link to="/quiz">Przejdź do testu</Link>
        </section>
    )
}

export default MainInfo;