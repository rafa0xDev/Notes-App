function createNotesApp() {
  let notes = []; // data privat berkat closure

  function addNote(title, content, category = "General") {
    // Buat objek catatan baru dengan id unik
    // Tambahkan ke array `notes`
    // Kembalikan catatan yang ditambahkan
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