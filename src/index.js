import './style.css';
import menu from './menu';
import contact from './contact';

import component from './pageload';

const content = document.getElementById('content');
content.appendChild(component());
function tabs() {
  const tabDiv = document.createElement('div');
  const menuTab = document.createElement('button');
  menuTab.innerHTML = 'MENU';
  menuTab.classList.add('tabs');
  menuTab.addEventListener('click', () => {
    const contact1 = document.querySelector('.contact');
    if (content.contains(contact1)) { content.removeChild(contact1); }
    content.appendChild(menu());
  });
  const contactTab = document.createElement('button');
  contactTab.innerHTML = 'CONTACT US';
  contactTab.classList.add('tabs');
  contactTab.addEventListener('click', () => {
    const menu1 = document.querySelector('.menu');
    if (content.contains(menu1)) { content.removeChild(menu1); }
    content.appendChild(contact());
  });
  tabDiv.appendChild(menuTab);
  tabDiv.appendChild(contactTab);
  return tabDiv;
}

content.appendChild(tabs());
