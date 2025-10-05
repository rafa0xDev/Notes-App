function saveNotes(notes){
    localStorage.setItem('notes', JSON.stringify(notes));
}

function loadNotes(){
    const data = localStorage.getItem('notes');
    if(data) {
        return JSON.parse(data);
    }
    return [];
}

export { saveNotes, loadNotes };