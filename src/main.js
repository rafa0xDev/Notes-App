import { getAddBtn } from "./dom.js";
import { getNotesContainer } from "./dom.js";  
import { createForm } from "./dom.js";
import { removeForm } from "./dom.js";
import { createNoteElement } from "./notes.js";

let isFormOpen = false;
let outsideClickHandler = null; // simpan handler agar bisa dihapus

const container = getNotesContainer();

// Hapus note
container.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete-btn')) {
    const noteItem = e.target.closest('.note-item');
    noteItem.remove();
  }
});

getAddBtn().addEventListener('click', (e) => {
  // Cegah multiple form
  if (isFormOpen) return;
  isFormOpen = true;

  const { element, titleInput, descInput, saveBtn } = createForm();
  titleInput.focus();

  // Fungsi untuk menangani klik luar form
  outsideClickHandler = (event) => {
    const addBtn = getAddBtn();
    if (isFormOpen && !element.contains(event.target) && event.target !== addBtn) {
      removeForm();
      document.removeEventListener('click', outsideClickHandler);
      isFormOpen = false;
    }
  };

  // Pasang event listener global
  document.addEventListener('click', outsideClickHandler);

  // Handle tombol simpan
  saveBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const title = titleInput.value.trim();
    const desc = descInput.value.trim();

    if (!title || !desc) {
      alert('Judul dan catatan tidak boleh kosong!');
      return;
    }

    const elementNote = createNoteElement(title, desc);
    container.prepend(elementNote);

    removeForm();
    document.removeEventListener('click', outsideClickHandler);
    isFormOpen = false;
  });
});
