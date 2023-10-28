import { Rating } from '@mui/material';
import './Breakout.css';
import Board from './Components/game/Board';
import BasicTable from './Components/Leaderbord';

const Breakout = () => {
    return (
        <div className='breakout'>
            <Board />
            <div className='description-container'>
                <div className='title'>
                    <h2>Breakout</h2>
                    <Rating />
                </div>
                <br></br>
                <div className='description'>
                    <span>Breakout is an arcade video game developed and published by Atari, Inc. and released on May 13, 1976. It was designed by Steve Wozniak, based on conceptualization from Nolan Bushnell and Steve Bristow, who were influenced by the seminal 1972 Atari arcade game Pong. In Breakout, a layer of bricks lines the top third of the screen and the goal is to destroy them all by repeatedly bouncing a ball off a paddle into them. The arcade game was released in Japan by Namco. Breakout was a worldwide commercial success, among the top five highest-grossing arcade video games of 1976 in both the United States and Japan and then among the top three highest-grossing arcade video games of 1977 in the US and Japan. The 1978 Atari VCS port uses color graphics instead of a monochrome screen with colored overlay.</span>
                </div>
            </div>
            <div className='challenges'>

            </div>
            <div className='leaderboard'>
                    <h2>Leaderbord</h2>
                    <BasicTable />
            </div>
        </div>
    )
}

export default Breakout;