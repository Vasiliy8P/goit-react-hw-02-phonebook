import { Component } from "react";
import { nanoid } from 'nanoid';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';


export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  }

  addContact = ({ name, number }) => {
    const contactItem = {
      id: nanoid(),
      name,
      number,
    };

    (this.setState(prevState => ({
      contacts: [contactItem, ...prevState.contacts]
    })))

    // this.state.contacts.map(contact =>
    //   contactItem.name !== contact.name
    //     ? (this.setState(prevState => ({
    //         contacts: [contactItem, ...prevState.contacts]
    //       })))
    //     : alert(`${contactItem.name} is already in contacts`)
    // )    
  };

  changeFilterContacts = (evt) => {
    this.setState({
      filter: evt.target.value
    })
  }

  getFilterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter))
  }

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact =>
        contact.id !== contactId
        )
    }))
  }

  render() {
    const filterContacts = this.getFilterContacts();

    return(
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 18,
          color: '#010101'
        }}
      >
        <div>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.addContact} />

          <h2>Contacts</h2>
          <Filter
            onChangeFilter={this.changeFilterContacts}
            value={this.state.filter}
          />
          <ContactList
            contacts={filterContacts}
            onDeleteContact={this.deleteContact}
          />
        </div>
      </div>
    );
  }
};
