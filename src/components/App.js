import React from "react";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import "./App.css";
function App() {
  const contacts = [
    {
      id: "1",
      name: "Aqib razaaa",
      email: "aqib96.ar@outlook.com",
    },
    {
      id: "2",
      name: "Raza",
      email: "aqib96.ar@gmail.com",
    },
    {
      id: "3",
      name: "cboy",
      email: "aqib98.ar@outlook.com",
    },
  ];
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
