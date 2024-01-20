import Field from '../Field'
import Dropdown from '../Dropdown'
import Button from '../Button'
import './Forms.css'

const Forms = () => {

    const roles = [
      'In Game Leader',
      'Entry Fragger',
      'Flank Watcher',
      'Support Roles',
      'Anchor',
      'Roamers'
    ]

    const whenSave = (events) => {
        events.preventDefault()
        console.log('Form has been submitted')
    }

    return (
        <section className='forms'>
            <form onSubmit={whenSave}>
                <h2>Fill in the fields to create your player card</h2>
                <Field mandatory={true} label="Nickname" placeholder="Enter your nickname"></Field>
                <Field mandatory={true} label="Operator" placeholder="Enter your operator"></Field>
                <Field mandatory={true} label="Image" placeholder="Enter the image address"></Field>
                <Dropdown mandatory={true} label="Role" itens={roles}/>
                <Button>
                    Submit
                </Button>
            </form>
        </section>
    )
}

export default Forms