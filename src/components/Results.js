import React, {Component} from 'react';
import {Redirect } from "react-router-dom";

class Results extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        let {id} = this.props;
        //let socialScore = this.props.location.state.socialScore;
        return (
            <section className='main flex-box'>
                <div className='startBox'>
                    <p>Wynik ekonomiczny = {id} <br/> wynik społeczny </p>
                </div>
            </section>
        )
    }
}

export default Results;