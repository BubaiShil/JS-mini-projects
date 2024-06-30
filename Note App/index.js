const textEl = document.getElementById("app");
const btn = document.getElementById("btn");



function createNote(id,context){
    const elements = document.createElement("textarea")
    elements.classList.add("note")
    elements.placeholder = "Empty Note"
    elements.value = context


    elements.addEventListener("dblclick", () => {
        const warning = confirm("Do you want to delete this note?");
        if (warning) {
          deleteNote(id, elements);
        }
      });
    
    textEl.addEventListener("input",()=>{
        updateNote(id,elements.value)
    })


    return elements;
}


function deleteNote(id, element) {
    const notes = getNotes().filter((note)=>note.id != id)
    saveNotes(notes)
    textEl.removeChild(element)
}

function updateNote(id,context){
    const notes = getNotes()
    const target = notes.filter((note) => note.id == id)[0]    
    target.context = context                 ///Updates the content of an existing note.
    saveNotes(notes)
}




function addNote() {
    const notes = getNotes();
    const noteObj = {
      id: Math.floor(Math.random() * 100000),
      context: "",
    };                                   /// Adds a new note to the application.
    const noteEl = createNote(noteObj.id ,noteObj.context)
    textEl.insertBefore(noteEl,btn)

    notes.push(noteObj)

    saveNotes(notes)

}

function saveNotes(notes){
    localStorage.setItem("note-app",JSON.stringify(notes))
}

function getNotes(){
    return JSON.parse(localStorage.getItem("note-app") || "[]")
}


// Render existing notes on page load
getNotes().forEach(notes => {
    const noteEl = createNote(notes.id , notes.context)
    textEl.insertBefore(noteEl,btn)
});


btn.addEventListener("click",addNote)