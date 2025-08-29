// src/storage.js

function saveToStorage(key, data) {
  // Gunakan localStorage.setItem()
  localStorage.setItem(key, JSON.stringify(data));
  // Jangan lupa JSON.stringify()
}

function loadFromStorage(key) {
  // Gunakan localStorage.getItem()
  const data = localStorage.getItem(key);
  // Jangan lupa JSON.parse(), dan handle jika null
  return data ? JSON.parse(data) : null;
}

export { saveToStorage, loadFromStorage };