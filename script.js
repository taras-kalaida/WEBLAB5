const inputs = document.querySelectorAll('input'),
      form = document.querySelector('form'),
      inputed = document.querySelector('.inputData'),
      hower = document.querySelector('.hower'),
      palette = document.querySelector('.palette'),
      row = document.querySelector('.row');


const regName = /^[А-ЯЄІ][а-яєі]{0,30}\s[А-Я]\.[А-Я]\.$/,
      regVar = /^\d{2}$/,
      regGroup = /[А-ЯЄІ]{2}-\d{2}$/,
      regTel = /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/,
      regCard = /^\w{2}\s№\d{6}$/;

const data = {
        name: ['П.І.Б:'],
        var: ['Варіант:'],
        group:['Група:'],
        tel:['Телефон:'],
        card:['ID-card:']};

let counter = 0;


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }


const regCheck = (reg, value, type, node) => {
    const status = value.match(reg);
    if(status) {
        data[type].push(value);
        counter++
    } else {
        node.classList.add('error')
    }
}

const inputValidation = (input) => {
    const value = input.value,
          type = input.dataset.type;
    switch (type) {
        case 'name':
            regCheck(regName,value, type, input )
            break
        case 'var':
            regCheck(regVar,value, type, input )
            break
        case 'group':
            regCheck(regGroup,value, type, input )
            break
        case 'tel':
            regCheck(regTel,value, type, input )
            break
        case 'card':
            regCheck(regCard,value, type, input )
            break
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(inputed)
    counter = 0
    inputs.forEach(item => {
        item.classList.remove('error');
        inputValidation(item);
        
    })
    console.log(data)
    if(counter === 5) {
        inputed.classList.remove('nonVision')
        for(key in data) {
            console.log(data[key])
            inputed.insertAdjacentHTML("beforeend", `<h3>${data[key][0]}<span>  ${data[key][1]}</span></h3>`);
        }
    }

})

hower.addEventListener('mouseover', (e) => {
    let red = getRandomInt(255),
        green = getRandomInt(255),
        blue = getRandomInt(255);
    e.target.style.backgroundColor = `rgb(${red},${green},${blue})`
});

hower.addEventListener('click', (e) => {
    const color = palette.value;
    e.target.style.backgroundColor = `${color}`
});

hower.addEventListener('dblclick', (e) => {
    const color = palette.value;
    row.style.backgroundColor = `${color}`
})

