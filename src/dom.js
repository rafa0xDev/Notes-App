// src/dom.js

function renderNotes(notes, onDelete, onToggleStar) {
  const container = document.querySelector('.notes-container');
  container.innerHTML = ''; // Kosongkan dulu

  if (notes.length === 0) {
    container.innerHTML = '<p class="empty">No notes available. Add a note to get started!</p>';
    return;
  }

  notes.forEach(note => {
    const noteElement = createNoteElement(note, onDelete, onToggleStar);
    container.classList.add('note-card');

    noteElement.innerHTML = `
    <h3>${note.title}</h3>
      <p>${note.content}</p>
      <div class="note-footer">
        <span class="note-date">${formatDate(note.createdAt)}</span>
        <button class="star-btn">
          <ion-icon name="${note.starred ? 'star' : 'star-outline'}"></ion-icon>
        </button>
      </div>`;
      container.appendChild(noteElement);
  });


}

function formatDate(isoString) {
    const date = new Date(isoString);
    return date.toLocaleDateString('en-US', { day: '2-digit', month: 'short' });
}

function createNoteElement(note, onDelete, onToggleStar) {
  // Buat <article> dengan semua isinya
  // Tambahkan event ke tombol bintang dan hapus
  // Kembalikan elemen
}