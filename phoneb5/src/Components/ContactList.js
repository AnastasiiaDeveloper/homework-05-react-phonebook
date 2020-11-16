import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Container, ListGroup, Button } from "react-bootstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
// import uuid from 'uuid';//

import "./style.css";

const ContactList = ({ contacts, removeContact }) => {
  // console.log(contacts);
  // const removeContact1 = (id) = {
  //   removeContact(contacts, id)
  // }
  return (
    <Container style={{ marginTop: "1rem", width: "340px" }}>
      <TransitionGroup className="todo-list">
        <ul class="list-group">
          {contacts.map(({ name, number, id }) => (
            <CSSTransition key={id} timeout={500} classNames="item">
              <li class="list-group-item endS">
                {name} : {number}
                <button
                  className="btn btn-danger"
                  onClick={() => removeContact(contacts, id)}
                >
                  &times;
                </button>
              </li>
            </CSSTransition>
          ))}
        </ul>
      </TransitionGroup>
    </Container>
  );
};
export default ContactList;
// import React, { Component } from 'react'

// import {
//   CSSTransition,
//   TransitionGroup,
// } from 'react-transition-group'

// class ContactList extends Component {
//     removeContact(id) {
//       this.props.removeContact(this.props.contacts, id)
//     }

//     render() {
//       return (
//         <ul>
//           <TransitionGroup>
//             {this.props.contacts.map(contact  =>
//               <CSSTransition
//                 timeout={250}
//                 classNames="fade"
//               >
//                 <li>
//                   {contact.name}: {contact.number}
//                   <button className="delete-icon" onClick={() => this.removeContact(contact.id)}>
//                     &times;
//                   </button>
//                 </li>
//               </CSSTransition>
//             )}
//           </TransitionGroup>
//         </ul>
//       )
//     }
//   }

//   export default ContactList
