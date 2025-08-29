function createNotesApp() {
  let notes = []; // data privat berkat closure

  function addNote(title, content, category = "General") {
    // Buat objek catatan baru dengan id unik
    const note = {
      id: Date.now(),
      title,
      content,
      category,
      starred: false,
      createdAt: new Date().toISOString()
    };
    // Tambahkan ke array `notes`
    notes.push(note);
    // Kembalikan catatan yang ditambahkan
    return note
  }

  function deleteNote(id) {
    // Hapus catatan berdasarkan id
  }

  function toggleStar(id) {
    // Ubah status `starred` (bintang)
  }

  function getAllNotes() {
    return notes;
  }

  function getNotesByCategory(category) {
    // Filter catatan berdasarkan kategori
  }

  // Kembalikan fungsi-fungsi publik
  return {
    addNote,
    deleteNote,
    toggleStar,
    getAllNotes,
    getNotesByCategory
  };
}

export { createNotesApp }