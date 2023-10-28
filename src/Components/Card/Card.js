import './Card.css';
import breakoutpng from '../../Images/breakoutpng.png';
import breakoutgif from '../../Images/breakoutgif.gif';
import wip from '../../Images/test.jpg';
import { useState } from 'react';

const Card = (
     
) => {
    const [over, setOver] = useState(false);
    return (
        <>
            <div className='card'>
                <div className='card-content' onMouseOver={() => setOver(true)} onMouseOut={() => setOver(false)}>
                    <a href='/breakout'><img src={over ? breakoutgif : breakoutpng} alt=''></img></a>
                </div>
                <h3>Breakout</h3>
            </div>
            <div className='card'>
                <div className='card-content'>  
                    <a href='/tic-tac-toe'>
                        <img src={wip} alt=''></img>
                    </a>
                </div>
                <h3>Tic-Tac-Toe</h3>
            </div>
            <div className='card'>
                <div className='card-content'>
                    <a href='/snake'><img src={wip} alt=''></img></a>
                </div>
                <h3>Snake</h3>
            </div>
            <div className='card'>
                <div className='card-content'>
                    <a href='/fighting'><img src={wip} alt=''></img></a>
                </div>
                <h3>Fighting</h3>
            </div>
            <div className='card'>
                <div className='card-content'>
                    <a href='/redpanda-maze'><img src={wip} alt=''></img></a>
                </div>
                <h3>RedPanda Maze</h3>
            </div>
            <div className='card'>
                <div className='card-content'>
                    <a href='/space-fight'><img src={wip} alt=''></img></a>
                </div>
                <h3>Space Fight</h3>
            </div>
        </>
    )
}

export default Card;