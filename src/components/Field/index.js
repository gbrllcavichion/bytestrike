import './Field.css'

const Field = (props) => {

    const whenTyped = (events) => {
        props.whenChanged(events.target.value)
    }

    return (
        <div className='text-field'>
            <label>{props.label}</label>
            <input value={props.value} onChange={whenTyped} required={props.mandatory} placeholder={props.placeholder}/>
        </div>
    )
}

export default Field