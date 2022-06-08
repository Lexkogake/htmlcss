// let people = localStorage.setItem('itens', JSON.stringify());
let peopleRaw = localStorage.getItem('people');
if (peopleRaw != null) {
  var people = JSON.parse(peopleRaw);
} else {
  var people = [];
}

// let people = [
//   { name: 'Alex', tel: 123465, xp: true },
//   { name: 'Yan', tel: 1234565, xp: true },
//   { name: 'João', tel: 8569, xp: false }
// ];

function desenhaTabela() {
  let currentLines = [...document.querySelectorAll('.contentbody')];
  currentLines.forEach(element => {
    element.remove();
  });

  for (const person in people) {
    if (Object.hasOwnProperty.call(people, person)) {
      document.querySelector('.lista').innerHTML += `
  <tr class='contentbody'>
    <td>${people[person].name}</td>
    <td>${people[person].telefone}</td>
    <td>${
      people[person].xp
        ? '<span class="xpsim">Sim</span>'
        : '<span class="xpnao">Não</span>'
    }</td>
    <td>
    <button class='button' onclick='deleteUser(${person})'>Excluir</button>
    <a class='button' href='form.html?person=${person}'> Editar</a>
    </td>
  </tr>
`;
    }
  }
}

function deleteUser(p) {
  people.splice(p, 1);
  localStorage.setItem('people', JSON.stringify(people));
  desenhaTabela();
}

desenhaTabela();
//teria o for of
// let list = (document.querySelector('.lista').innerHTML += `
//   <tr>
//     <td>${people[person].name}</td>
//     <td>${people[person].telefone}</td>
//     <td>${people[person].xp ? 'Sim' : 'Não'}</td>
//     <td><button>Alterar</button></td>
//   </tr>
// `);
