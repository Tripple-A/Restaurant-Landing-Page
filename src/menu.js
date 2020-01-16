const menu = () => {
   const menu = document.createElement('div')
   menu.innerHTML = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque commodi eos voluptatem numquam pariatur deleniti repellat fugiat eligendi nulla molestiae sunt praesentium vero sequi distinctio error quibusdam maiores natus magnam, explicabo hic sed alias dolores, quis eum! Reprehenderit atque cupiditate dolorum? Saepe, doloribus veniam? Nulla!'
    menu.classList.add('menu')
    content.appendChild(menu)
    return menu
}

export {menu}