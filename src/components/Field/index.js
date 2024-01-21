import './Field.css'

const Field = (props) => {

    const changedPlaceholder = `${props.placeholder}...` 

    const whenTyped = (events) => {
        props.whenChanged(events.target.value)
    }

    return (
        <div className='text-field'>
            <label>
                {props.label}
            </label>
            <input value={props.value} onChange={whenTyped} required={props.mandatory} placeholder={props.changedPlaceholder}/>
        </div>
    )
}

export default Field