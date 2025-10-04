import { getAddBtn } from "./dom";
import { getNotesContainer } from "./dom";  
import { createForm } from "./dom";
import { removeForm } from "./dom";
import { createNoteElement } from "./notes";

let isFormOpen = false;

getAddBtn().addEventListener('click', (e) => {
  if(isFormOpen) return; // Cegah multiple form
  isFormOpen = true;
  const { element, titleInput, descInput, saveBtn } = createForm();
  titleInput.focus();

  saveBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const title = titleInput.value.trim();
    const desc = descInput.value.trim();
    if(!title || !desc) {
      alert('Judul dan catatan tidak boleh kosong!')
      return;
    }
    const elementNote = createNoteElement(title, desc);
    const container = getNotesContainer();
    container.prepend(elementNote);
    removeForm();
    isFormOpen = false;
  });
});

