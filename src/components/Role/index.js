import Player from '../Player'
import './Role.css'

const Role = (props) => {
    const css = {backgroundColor: props.secondColor}
    
    return (
        (props.players.length > 0) ? <section className='role' style={css}>
            <h3 style={{ borderColor: props.firstColor}}>{props.nickname}</h3>
            <div className='player'>
                {props.players.map(player => <Player backgroudColorPlayer={props.firstColor} key={player.nickname} nickname={player.nickname} operator={player.operator} imagem={player.image}/>)}
            </div>
        </section>
        : ''
    )
}

export default Role