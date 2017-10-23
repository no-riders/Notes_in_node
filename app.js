//jshint esnext: true
console.log('-=Notes in Node=-');
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

//to work with commands in terminal
const argv = yargs.argv;
let command = argv._[0];
//console.log('Yarg: ', argv);
console.log('Command: ', command || 'type one of the command listed bellow. Eg app.js list');

//all types of supported commands
if (command === 'add') {
    notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    notes.getNote(argv.title);
} else if (command === 'remove') {
    notes.removeNote(argv.title);
} else {
    //console.log('**********');
    console.log('**********\nTo create note, type: "add --title "your_title" --body "body_of_your_note""\nTo view all saved notes: "list"\nTo get specific note by title: "read --title "note_title""\nTo delete specific note: "remove --title "note_title""\n**********');
    //console.log('**********');
}