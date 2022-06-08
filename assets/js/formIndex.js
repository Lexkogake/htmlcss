const telefone = document.querySelector('#telefone');
let people;
function teste(e) {
  e.preventDefault();
  let peopleRaw = localStorage.getItem('people');
  if (peopleRaw != null) {
    people = JSON.parse(peopleRaw);
  } else {
    people = [];
  }

  if (e.target.elements['telefone'].value.length < 15) {
    alert('Quantidade de caracteres inválido');
    return false;
  }

  if (id !== null) {
    people[id] = {
      name: e.target.elements['name'].value,
      telefone: e.target.elements['telefone'].value,
      xp: e.target.elements['xp'].value == 'true'
    };
  } else {
    people.push({
      name: e.target.elements['name'].value,
      telefone: e.target.elements['telefone'].value,
      xp: e.target.elements['xp'].value == 'true'
    });
  }

  localStorage.setItem('people', JSON.stringify(people));
  console.log(people);

  window.location.href = '/index.html';
}

let urlPrincipal = new URL(window.location.href);
let id = urlPrincipal.searchParams.get('person');
if (id !== null) {
  let peopleRaw = localStorage.getItem('people');
  if (peopleRaw != null) {
    people = JSON.parse(peopleRaw);
  } else {
    people = [];
  }
  document.getElementById('name').value = people[id].name;
  document.getElementById('telefone').value = people[id].telefone;
  if (people[id].xp) {
    document.getElementById('xp-yes').checked = true;
  } else {
    document.getElementById('xp-no').checked = true;
  }
}

function testNumberTel(el) {
  el.preventDefault();
  // if (/[0-9]/g.test(el.key && el.target.value < 15)) {
  //   el.target.value += el.key;
  // }
  if (el.target.value < 15) {
    // alert('oi');
  }
}

const mask = {
  phone(value) {
    return value
      .replace(/\D/g, '')
      .replace(/^(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d{4})/, '$1-$2')
      .replace(/(\d{5}-\d{4})\d+?$/, '$1');
  }
};

telefone.addEventListener(
  'input',
  e => {
    e.target.value = mask.phone(e.target.value);
  },
  false
);
