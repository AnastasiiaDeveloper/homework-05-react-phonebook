import React, { Component } from 'react'

import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group'


class ContactList extends Component {
    removeContact(id) {
      this.props.removeContact(this.props.contacts, id)
    }
  
    render() {
      return (
        <ul>
          <TransitionGroup>
            {this.props.contacts.map(contact  =>
              <CSSTransition
                timeout={250}
                classNames="fade"
              >
                <li>
                  {contact.name}: {contact.number}
                  <button className="delete-icon" onClick={() => this.removeContact(contact.id)}>
                    &times;
                  </button>
                </li>
              </CSSTransition>
            )}
          </TransitionGroup>
        </ul>
      )
    }
  }
  
  export default ContactList