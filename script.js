const place = document.getElementById('place'),
      education = document.querySelector('#education'),
      venezia = document.querySelector('img'),
      buttons = document.querySelectorAll('button');

place.addEventListener('click', (e) => {
    e.target.classList.toggle('color');
})

education.addEventListener('click', (e) => {
    e.target.classList.toggle('nextColor');
})

buttons.forEach(item => {
    item.addEventListener('click', (e) => {
       const target = e.target;
       const classes = ['add', 'reduce', 'zoom','remove'];
       venezia.classList.remove(...classes);
       switch (target.dataset.action) {
            case 'zoom':
                venezia.classList.add('zoom');
                break
            case 'reduce':
                venezia.classList.add('reduce');
                break
            case 'remove':
                venezia.remove();
                break
            case 'add':
                venezia.insertAdjacentHTML('afterend', '<img src="./src/assets/second.jpg" alt="">')
                break

       }
    })
})


