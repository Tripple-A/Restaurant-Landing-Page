import Logo from './logo-restaurant.png';

const component = () => {
  const element = document.createElement('div');
  const heading = document.createElement('div');
  const heading2 = document.createElement('div');
  heading.innerHTML = 'TEAM 54 RESTAURANT';
  heading2.innerHTML = 'The Place To Code, Build, Innovate And Test While You Eat';
  heading.classList.add('heading');
  heading2.classList.add('heading2');
  const myIcon = new Image();
  myIcon.src = Logo;
  myIcon.classList.add('logo');

  element.appendChild(myIcon);
  element.appendChild(heading);
  element.appendChild(heading2);
  return element;
};


export { component };