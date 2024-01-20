import Field from '../Field'
import './Forms.css'

const Forms = () => {
    return (
        <section className='forms'>
            <form>
                <h2>Fill in the fields to create your player card</h2>
                <Field label="Nickname" placeholder="Enter your nickname"></Field>
                <Field label="Operator" placeholder="Enter your operator"></Field>
                <Field label="Image" placeholder="Enter the image address"></Field>
            </form>
        </section>
    )
}

export default Forms