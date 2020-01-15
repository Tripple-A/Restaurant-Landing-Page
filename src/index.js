import './style.css';
import Logo from './restaurant-logo.jpg';

  function component() {
    const element = document.createElement('div');
const heading = document.getElementById("content")
    // Lodash, now imported by this script
    heading.innerHTML = 'TEAM 54 RESTAURANT'
    heading.classList.add('hello');
    const myIcon = new Image();
       myIcon.src = Logo;
       myIcon.classList.add("logo");
    
       element.appendChild(myIcon);
    
    return element;
  }

  document.body.appendChild(component());