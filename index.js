document.addEventListener('DOMContentLoaded', function() {
    const usernameInput = document.getElementById('usernameInput');

    usernameInput.addEventListener('input', function(event) {
        const inputText = event.target.value;
        let filteredText = '';

        for (let i = 0; i < inputText.length; i++) {
            const char = inputText[i];
            if (!isNaN(char)) { // Проверка, является ли символ цифрой
                continue; // Если цифра, пропускаем её
            }
            filteredText += char; // Добавляем ненумерический символ к отфильтрованному тексту
        }

        event.target.value = filteredText; // Обновляем 
    });
});


// Получаем ссылки на кнопку и модальное окно
var openModalBtn = document.getElementById('openModalBtn');
var modal = document.getElementById('myModal');
var closeBtn = document.getElementsByClassName('close')[0];

openModalBtn.onclick = function() {
  modal.style.display = 'block';
}

closeBtn.onclick = function() {
  modal.style.display = 'none';
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}


//lighter
var lights = document.querySelectorAll('.light');
var toggleBtn = document.getElementById('toggleBtn');
var activeIndex = 0;
function toggleLights() {
    for (var i = 0; i < lights.length; i++) {
      lights[i].classList.add('grey');
    }

    lights[activeIndex].classList.remove('grey');
    activeIndex = (activeIndex + 1) % lights.length;
  }
toggleBtn.addEventListener('click', toggleLights);

var books = document.querySelectorAll('.book');

  // Додаємо обробник подій для кожної книги
  books.forEach(function(book) {
    book.addEventListener('click', function() {
      // Видаляємо клас 'selected' з усіх книг
      books.forEach(function(book) {
        book.classList.remove('selected');
      });
      // Додаємо клас 'selected' до поточної книги
      book.classList.add('selected');
    });
  });