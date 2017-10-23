//jshint esnext: true

const fs = require('fs');

//create note
let addNote = (title, body) => {
    let originalNote = {
        title: '',
        body: ''
    };
    let newNote = Object.create(originalNote);
    newNote.title = title;
    newNote.body = body;

    let originalNoteString = JSON.stringify(newNote);

    //write JSON value from originalNoteString to this folder
    fs.writeFileSync(`./notes/${title}.json`, originalNoteString);
    console.log(`**********\nNote '${title}' has been created\nTo view note use "read --title "note_title""\nTo delete use "remove --title "note_title""\n**********`);
};

//list all notes saved
let getAll = () => {
    //show content of the dir
    fs.readdir('./notes/', (err, files) => {
        if (err) throw err;
        console.log('**********\nSaved notes:');
        //check if notes presented
        if (files.length > 0) {
            files.forEach(item => {
                //remove file ext from each note and list notes
                let string = String(item);
                console.log(`-  ${string.slice(0, -5)}`);
            });
        } else {
            console.log('No notes found!\nTo create new note use: "add --title "your_title" --body "body_of_your_note""');
        }
        console.log('To view note use "read --title "note_title""\nTo delete use "remove --title "note_title""\n**********');
    });
};

//get note by title
let getNote = (title) => {
    console.log(`**********\nGetting '${title}'...`);
    console.log('The body of the note:');
    let noteString = fs.readFileSync(`./notes/${title}.json`);
    let note = JSON.parse(noteString);
    console.log(`${note.body}\n**********`);
};

//to delete note
let removeNote = (title) => {
    console.log(`**********\nNote '${title}' has been deleted.\n**********`);
    fs.unlink(`./notes/${title}.json`, (err) => {
        if (err) throw err;
    });
};

//to make all f() available for app.js
module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};