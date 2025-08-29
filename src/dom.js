// src/dom.js

function renderNotes(notes, onDelete, onToggleStar) {
  const container = document.querySelector('.notes-container');
  container.innerHTML = ''; // Kosongkan dulu

  notes.forEach(note => {
    const noteElement = createNoteElement(note, onDelete, onToggleStar);
    container.appendChild(noteElement);
  });
}

function createNoteElement(note, onDelete, onToggleStar) {
  // Buat <article> dengan semua isinya
  // Tambahkan event ke tombol bintang dan hapus
  // Kembalikan elemen
}