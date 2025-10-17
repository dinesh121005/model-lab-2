import { useState, useEffect } from 'react'
import ContactForm from './ContactForm'
import ContactList from './ContactList'
import './App.css'

function App() {
  const [contacts, setContacts] = useState([])
  const [editingContact, setEditingContact] = useState(null)

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts')
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  const addContact = (contact) => {
    const newContact = { ...contact, id: Date.now() }
    setContacts([...contacts, newContact])
  }

  const updateContact = (updatedContact) => {
    setContacts(contacts.map(contact =>
      contact.id === editingContact.id ? { ...updatedContact, id: contact.id } : contact
    ))
    setEditingContact(null)
  }

  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id))
  }

  const handleSave = (contact) => {
    if (editingContact) {
      updateContact(contact)
    } else {
      addContact(contact)
    }
  }

  const handleEdit = (contact) => {
    setEditingContact(contact)
  }

  const handleCancel = () => {
    setEditingContact(null)
  }

  return (
    <div className="app">
      <h1>Contact Application</h1>
      <ContactForm
        onSave={handleSave}
        editingContact={editingContact}
        onCancel={handleCancel}
      />
      <ContactList
        contacts={contacts}
        onEdit={handleEdit}
        onDelete={deleteContact}
      />
    </div>
  )
}

export default App
