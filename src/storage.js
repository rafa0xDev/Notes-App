// src/storage.js

function saveToStorage(key, data) {
  // Gunakan localStorage.setItem()
  // Jangan lupa JSON.stringify()
}

function loadFromStorage(key) {
  // Gunakan localStorage.getItem()
  // Jangan lupa JSON.parse(), dan handle jika null
}

export { saveToStorage, loadFromStorage };