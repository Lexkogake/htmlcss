let peopleRaw = localStorage.getItem('people');
let people;
if (peopleRaw != null) {
  people = JSON.parse(peopleRaw);
} else {
  people = [];
}

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
    <a class='button' href='form.html?person=${person}'> Editar</a>
    <button class='button delete' onclick='deleteUser(${person})'>Excluir</button>
    </td>
  </tr>
`;
    }
  }
}

function deleteUser(params) {
  people.splice(params, 1);
  localStorage.setItem('people', JSON.stringify(people));
  desenhaTabela();
}

desenhaTabela();
