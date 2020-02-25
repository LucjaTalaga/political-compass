import React, {Component} from 'react';
import {Redirect } from "react-router-dom";
import redDot from '../Basic_red_dot.png'

class Results extends Component {
    constructor(props) {
        super(props);
        this.coords = React.createRef();
        this.img = <img src={redDot}/>;

    }
    //funkcja rysująca układ współrzędnych
    drawCoordinates = () => {
        const img = this.img.current;
        const coords = this.coords.current;
        const ctxX = coords.getContext("2d");
        ctxX.moveTo(0,130);
        ctxX.lineTo(260,130);
        ctxX.stroke();
        ctxX.moveTo(130,0);
        ctxX.lineTo(130,260);
        ctxX.stroke();
    };
    componentDidMount() {
        this.drawCoordinates();
    }

    render() {
        let dotPosition = {
            top: '50%',
            left: '50%',
            marginLeft:'-2.5%',
            marginTop: '-2.5%'
        };
        let {economicScore,socialScore} = this.props;
        return (
            <section className='main flex-box'>
                <div className='startBox'>
                    <h2>Wynik ekonomiczny = {economicScore}  <br/> wynik społeczny = {socialScore} </h2>
                    <div className='results flex-box'>
                        <span>konserwatyzm społeczny</span>
                        <div className='coordsBox flex-box'>
                            <span>kontrola gospodarcza</span>
                            <div className='withCanvas'>
                                <canvas ref={this.coords} className='coordinates' width='260' height='260'></canvas>
                                <span className='resultDot' style={dotPosition}></span>
                            </div>
                            <span>wolność gospodarcza</span>
                        </div>
                        <span>liberalizm społeczny</span>
                    </div>
                </div>
            </section>
        )
    }
}

export default Results;