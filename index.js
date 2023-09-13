
let notes = [];

// creat a function to add a new note 
function addNote() {
    const noteText = document.getElementById("noteInput").value;
    if (noteText !== "") {
        const note = { text: noteText };
        // push new notes to our array 
        notes.push(note);/// creat a new array 
        displayNotes();
        document.getElementById("noteInput").value = "";
        console.log(notes)
    }
}

// creat a function to display notes 
function displayNotes() {
    const noteList = document.getElementById("noteList");
    noteList.innerHTML = "";
    notes.forEach((note, index) => {
        const noteDiv = document.createElement("div");
        noteDiv.className = "note";
        noteDiv.innerHTML = `
            ${note.text}
            <button onclick="editNote(${index})">Update</button>
            <button onclick="deleteNote(${index})">Delet</button>
        `;
        noteList.appendChild(noteDiv);
    });
}

/// creat a function to update notes 
function editNote(index) {
    const updatedNoteText = prompt("Update notes :", notes[index].text);
    if (updatedNoteText !== null) {
        notes[index].text = updatedNoteText;
       
        displayNotes();
       console.log(notes)
    }
}

// creat a function to delete note by index 
function deleteNote(index) {
    notes.splice(index, 1);
    displayNotes();
}

// dispaly notes 
displayNotes();

