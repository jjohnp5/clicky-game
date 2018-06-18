import React, {Component} from 'react';
import {shuffleImages} from '../helpers/Shuffler';
import './Game.css';


class Game extends Component{
    state = {
        clicked: -1,
        topScore: 0,
        images: [
            {
                url: 'http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Jinx.png',
                id: 1
            },{
                url: 'http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Heimerdinger.png',
                id: 2
            },{
                url: 'http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Leona.png',
                id: 3
            },{
                url: 'http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Ashe.png',
                id: 4
            },{
                url: 'http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Aatrox.png',
                id: 5
            },{
                url: 'http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Rakan.png',
                id: 6
            },{
                url: 'http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Xayah.png',
                id: 7
            },{
                url: 'http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Taric.png',
                id: 8
            },{
                url: 'http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Azir.png',
                id: 9
            },{
                url: 'http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Amumu.png',
                id: 10
            },{
                url: 'http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Nocturne.png',
                id: 11
            },{
                url: 'http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Zed.png',
                id: 12
            }
        ],
        score: 0
    }
    handleClick = (id) => {
        let shuffleArray = [...this.state.images]
        let shuffled = shuffleImages(shuffleArray)
        if(this.state.clicked === id){
            
            this.setState({score: 0, clicked: -1, images: shuffled});
        }else{
            let currentScore = this.state.score + 1
            this.setState({score: currentScore, clicked: id, images: shuffled, topScore: currentScore >= this.state.topScore ? currentScore: this.state.topScore})
        }
    }
    
    render(){
        return(
            <React.Fragment>
            <div className="row">
                <h3>Top Score: {this.state.topScore}  </h3>  
                
            </div>
            <div className="row">
            <h4>Score: {this.state.score}</h4>
            </div>
            <div className="row">
                {
                    this.state.images.map((im, i, arr) =>{
                        return <div className={"item col-" + arr.length/3}>
                            <img className="img-fluid img-thumbnail" src={im.url} onClick={()=> this.handleClick(im.id)} alt={"champion image " + i}/>

                        </div>
                    })
                }
            </div>
            </React.Fragment>
        )
    }
}

export default Game;
