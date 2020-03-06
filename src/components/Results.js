import React, {Component} from 'react';
import data from '../questions';

let howManyQuestions = data.questions.length;

class Results extends Component {
    constructor(props) {
        super(props);
        this.coords = React.createRef();

    }

    //funkcja rysująca układ współrzędnych
    drawCoordinates = () => {
        const coords = this.coords.current;
        const ctxX = coords.getContext("2d");
        ctxX.moveTo(0, 140);
        ctxX.lineTo(280, 140);
        ctxX.stroke();
        ctxX.moveTo(140, 0);
        ctxX.lineTo(140, 280);
        ctxX.stroke();
    };
    // funkcja wypisująca wyniki, jakie uzyskał użytkownik. Pierwszy parametr określa rodzaj wyniku (ekonomiczny, społeczny), drugi określa wynik.
    printResults = (scoreType, score) => {
        let {economicScore, socialScore} = this.props;
        let percentageEconomicScore = Math.abs((economicScore*100)/howManyQuestions).toFixed(0);
        let percentageSocialScore = Math.abs((socialScore*100)/howManyQuestions).toFixed(0);
        let result = '';
        if(scoreType === 'economic'){
            if(economicScore>0){
                result = `Ekonomiczna prawica: ${percentageEconomicScore}%`;
            }
            if(economicScore<0){
                result = `Ekonomiczna lewica: ${percentageEconomicScore}%`;
            }
            if(economicScore===0){
                result = 'Ekonomiczne centrum';
            }
        }
        if(scoreType === 'social'){
            if(socialScore>0){
                result = `Społeczny konserwatyzm: ${percentageSocialScore}%`;
            }
            if(socialScore<0){
                result = `Społeczny liberalizm: ${percentageSocialScore}%`;
            }
            if(socialScore===0){
                result = 'Społeczne centrum';
            }
        }
        return result;
    };

    componentDidMount() {
        this.drawCoordinates();
    }

    render() {
        let {economicScore, socialScore} = this.props;
        let dotPositionX = 50 + ((economicScore * 50) / howManyQuestions);
        let dotPositionY = 50 - ((socialScore * 50) / howManyQuestions);
        let dotPosition = {
            top: `${dotPositionY}%`,
            left: `${dotPositionX}%`,
            marginLeft: '-2.5%',
            marginTop: '-2.5%'
        };
        return (
            <section className='main flex-box'>
                <div className='startBox'>
                    <h1 id='results'> Wyniki</h1>
                    <div className='resultsBox flex-box'>
                        <div className='results flex-box'>
                            <span>konserwatyzm społeczny</span>
                            <div className='coordsBox flex-box'>
                                <span>lewica gospodarcza</span>
                                <div className='withCanvas'>
                                    <canvas ref={this.coords} className='coordinates' width='280' height='280'></canvas>
                                    <span className='resultDot' style={dotPosition}></span>
                                </div>
                                <span>prawica gospodarcza</span>
                            </div>
                            <span>liberalizm społeczny</span>
                        </div>
                        <div className='resultsInfo flex-box'>
                            <p>{this.printResults('economic',economicScore)}</p>
                            <p>{this.printResults('social',socialScore)} </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Results;