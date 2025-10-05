const warna = [
  "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
  "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
  "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)",
  "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)",
  "linear-gradient(135deg, #fddb92 0%, #d1fdff 100%)"
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
      <span class="note-actions">
        <ion-icon name="trash-outline" class="delete-btn"></ion-icon>
        <ion-icon name="star-outline"></ion-icon>
      </span>
    </div>
    <h3>${title}</h3>
    <p>${desc}</p>
  `;
  const noteId = Date.now().toString();
  note.setAttribute('data-id', noteId); 
  return note;
}

export { createNoteElement };