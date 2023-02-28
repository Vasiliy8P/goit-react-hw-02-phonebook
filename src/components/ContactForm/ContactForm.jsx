import { Component } from "react";
import './ContactForm.css';


class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    }

    handleSubmitForm = (evt) => {
        
    }

    handleChange = () => {
        this.setState(prevState => ({
            
        }))
    }

    render() {
        return (
            <form className="ContactForm" onSubmit={this.handleSubmitForm()}>
                <label>
                    Name
                    <br />
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={this.state.name}
                        onChange={() => (this.handleChange())}
                        />
                </label>
                <button className="ContactForm__btn">Add contact</button>
            </form>
        )
    }
}

export default ContactForm;