import React from "react";
import ContactList from "./components/ContactList";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
     {/* <Contact
        avatar="https://randomuser.me/api/portraits/women/83.jpg"
        name="Ana Shaw"
        online
      />

      <Contact
        name="Alex Day"
        avatar="https://randomuser.me/api/portraits/men/79.jpg"
      />

      <Contact
        name="Aubrey Howard"
        avatar="https://randomuser.me/api/portraits/women/18.jpg"
        online
     />*/}

      <ContactList />
    </div>
  );
}

export default App;
