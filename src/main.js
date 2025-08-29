// src/main.js

import { createNotesApp } from './notes.js';
import { loadFromStorage, saveToStorage } from './storage.js';
import { renderNotes } from './dom.js';

// Muat data dari localStorage
const saved = loadFromStorage('notes');
const notesApp = createNotesApp();

// Jika ada data simpan, isi ke aplikasi
if (saved) {
  saved.forEach(note => notesApp.addNote(note.title, note.content, note.category));
}

// Render awal
renderNotes(notesApp.getAllNotes());

// Saat ada perubahan, simpan dan render ulang
function refresh() {
  saveToStorage('notes', notesApp.getAllNotes());
  renderNotes(notesApp.getAllNotes(), deleteNote, toggleStar);
}

function addNote(title, content, category) {
  notesApp.addNote(title, content, category);
  refresh();
}

function deleteNote(id) {
  notesApp.deleteNote(id);
  refresh();
}

function toggleStar(id) {
  notesApp.toggleStar(id);
  refresh();
}