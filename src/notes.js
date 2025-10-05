const warna = [
  "#FFB6C1", 
  "#FFA07A", 
  "#98FB98", 
  "#87CEFA", 
  "#DDA0DD", 
  "#F0E68C", 
  "#FFD700", 
  "#FF6347"
];

function getRandomWarna() {
  const randomIndex = Math.floor(Math.random() * warna.length);
  return warna[randomIndex];
}

function createNoteElement(title, desc) {
  const date = new Date().toLocaleDateString('id-ID');
  const getColor = getRandomWarna();
  const note = document.createElement('div');
  note.classList.add('note-item');
  note.style.backgroundColor = getColor;
  note.innerHTML =  `
    <div class="note-header">
      <span class="note-date">${date}</span>
      <ion-icon name="trash-outline" class="delete-btn"></ion-icon>
      <ion-icon name="star-outline"></ion-icon>
    </div>
    <h3>${title}</h3>
    <p>${desc}</p>
  `;
  const noteId = Date.now().toString();
  note.setAttribute('data-id', noteId); 
  return note;
}

export { createNoteElement };