import './Player.css'

const Player = ({nickname, imagem, operator, backgroudColorPlayer}) => {
    return (<div className='player'>
        <div className='header' style={{backgroundColor:backgroudColorPlayer}}>
            <img src={imagem} alt={nickname}/>
        </div>

        <div className='footer'>
            <h4>{nickname}</h4>
            <h5>{operator}</h5>
        </div>

    </div>)
}

export default Player