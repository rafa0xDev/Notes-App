// Ambil elemen DOM saat dibutuhkan (lazy access)
function getAddBtn() {
  return document.getElementById('addNoteBtn');
}

function getNotesContainer() {
  return document.getElementById('notesContainer');
}

// Buat form input catatan
function createForm() {
  const form = document.createElement('form');
  form.classList.add('note-form');
  form.innerHTML = `
    <input type="text" class="note-title" placeholder="Judul catatan" required />
    <textarea class="note-input" placeholder="Tulis catatanmu di sini..." required></textarea>
    <button type="submit" class="save-btn">Tambah catatan</button>
  `;

  const container = getNotesContainer();
  container.appendChild(form);

  return {
    element: form,
    titleInput: form.querySelector('.note-title'),
    descInput: form.querySelector('.note-input'),
    saveBtn: form.querySelector('.save-btn')
  };
}

// Hapus form dari DOM
function removeForm() {
  const form = document.querySelector('.note-form');
  if (form) {
    form.remove();
  }
}

// Export semua fungsi
export { getAddBtn, getNotesContainer, createForm, removeForm };