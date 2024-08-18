import React, { useEffect, useState } from 'react'
import "../styles/Header.css"
const Header = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const storedMode = localStorage.getItem('darkMode');
    return storedMode ? JSON.parse(storedMode) : false;
  });

  useEffect(() => {
    const moonIcon = document.getElementById('dark');
    const themename = document.querySelector('.themename');

    if (darkMode) {
      moonIcon.classList.remove('fa-moon');
      moonIcon.classList.add('fa-sun');
      document.body.style.backgroundColor = "#202C37";
      document.body.style.color = "white";
      themename.innerHTML = "Light Mode";

      document.querySelectorAll('.content-container').forEach(card => {
        card.style.backgroundColor = "#2B3945";
        card.style.color = "white";
      });

      // Update other specific elements
      const container = document.querySelector('.container');
      container.style.backgroundColor = "#2B3945";
      container.style.color = "white";

      const input = document.querySelector('input');
      if (input) {
        input.style.backgroundColor = "#2B3945";
        input.style.color = "white";
      }

      const select = document.querySelector('select');
      if (select) {
        select.style.backgroundColor = "#2B3945";
        select.style.color = "white";
      }

      const left = document.querySelector('.left');
      if (left) {
        left.style.backgroundColor = "#2B3945";
      }

      const maincontainer = document.querySelector('.main-container');
      if (maincontainer) {
        maincontainer.style.backgroundColor = "#202C37";
      }

    } else {
      moonIcon.classList.remove('fa-sun');
      moonIcon.classList.add('fa-moon');
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      themename.innerHTML = "Dark Mode";

      document.querySelectorAll('.content-container').forEach(card => {
        card.style.backgroundColor = "#fff";
        card.style.color = "black";
      });

      const container = document.querySelector('.container');
      container.style.backgroundColor = "#fff";
      container.style.color = "black";

      const input = document.querySelector('input');
      if (input) {
        input.style.backgroundColor = "#fff";
        input.style.color = "black";
      }

      const select = document.querySelector('select');
      if (select) {
        select.style.backgroundColor = "#fff";
        select.style.color = "black";
      }

      const left = document.querySelector('.left');
      if (left) {
        left.style.backgroundColor = "#fff";
      }

      const maincontainer = document.querySelector('.main-container');
      if (maincontainer) {
        maincontainer.style.backgroundColor = "#fff";
      }
    }

    // Save the darkMode state to localStorage
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <>
   <header>       
  <div className="container">
    <h3 className="fi">Where in the world?</h3>
    {/* </div> */}
    <div className="right">
      {/* <i class="fa-solid fa-sun" id="sun"></i> */}
      <i className="fa-solid fa-moon" id="dark" onClick={toggleDarkMode} />
      &nbsp; &nbsp;
      <p className="themename" id>Dark Mode</p>
    </div>
  </div>
</header>

    </>
  )
}

export default Header