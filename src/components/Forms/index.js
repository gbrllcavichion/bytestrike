import Field from '../Field'
import Dropdown from '../Dropdown'
import Button from '../Button'
import './Forms.css'
import { useState } from 'react'

const Forms = (props) => {

    const [nickname, setNickname] = useState('')
    const [operator, setOperator] = useState('')
    const [image, setImage] = useState('')
    const [role, setRole] = useState('In Game Leader')

    const whenSave = (events) => {
        events.preventDefault()
        props.whenPlayerSubmitted({
            nickname,
            operator,
            image,
            role
        })
        setNickname('')
        setOperator('')
        setImage('')
        setRole('')
    }

    return (
        <section className='forms'>
            <form onSubmit={whenSave}>
                <h2>Fill in the fields to create your player card</h2>
                <Field 
                    mandatory={true} 
                    label="Nickname" 
                    placeholder="Enter your nickname"
                    value={nickname}
                    whenChanged={value => setNickname(value)}
                    />
                <Field 
                    mandatory={true} 
                    label="Operator" 
                    placeholder="Enter your operator"
                    value={operator}
                    whenChanged={value => setOperator(value)}
                    />
                <Field 
                    mandatory={true} 
                    label="Image" 
                    placeholder="Enter the image address"
                    value={image}
                    whenChanged={value => setImage(value)}
                    />
                <Dropdown 
                    mandatory={true} 
                    label="Role" 
                    itens={props.roles}
                    value={role}
                    whenChanged={value => setRole(value)}
                    />
                <Button>
                    Submit
                </Button>
            </form>
        </section>
    )
}

export default Forms