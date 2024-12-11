
document.getElementById('firstElement').addEventListener('click', function() {
    this.classList.toggle('first-clicked');
});

document.querySelector('.secondElement').addEventListener('click', function() {
    this.classList.toggle('second-clicked');
});


let img = document.getElementById('cityImage');

document.getElementById('addImageBtn').addEventListener('click', function() {
    if (!document.getElementById('cityImage')) {
        let newImg = document.createElement('img');
        newImg.src = 'images/Kiyiv.jpg';
        newImg.alt = 'Київ';
        newImg.height = 500;
        newImg.id = 'cityImage';
        
        // Знайти div з кнопками і вставити перед ним
        let buttonContainer = document.querySelector('div');
        document.body.insertBefore(newImg, buttonContainer);
        
        img = newImg; // оновлюємо посилання на зображення
    }
});


// Збільшити зображення
document.getElementById('increaseImageBtn').addEventListener('click', function() {
    if (img) { // перевіряємо, чи є зображення
        let currentHeight = img.height;
        img.height = currentHeight + 50; // збільшити на 50 пікселів
    }
});

// Зменшити зображення
document.getElementById('decreaseImageBtn').addEventListener('click', function() {
    if (img) { // перевіряємо, чи є зображення
        let currentHeight = img.height;
        if (currentHeight > 50) {
            img.height = currentHeight - 50; // зменшити на 50 пікселів
        }
    }
});

// Видалити зображення
document.getElementById('removeImageBtn').addEventListener('click', function() {
    if (img) { // перевіряємо, чи є зображення
        img.remove();
        img = null; // очищаємо посилання на зображення після видалення
    }
});
