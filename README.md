# Notes_in_node


Create / view / delete notes from Terminal or Command Line.

<h3>Usage</h3>

from Terminal go to note-app directory, install dependencies with <code>npm install</code> </br>
run with <code>node app.js</code> to see a list of commands supported, or: </br>

<h3>Supported Commands</h3>

<ul>
<li><code>node app.js add --title "note_title" --body "note_body"</code> to Create New note</li>
<li><code>node app.js list</code> to view all saved notes</li>
<li><code>node app.js read --title "note_title"</code> to open specific note by it's title</li>
<li><code>node app.js remove --title "note_title"</code> to delete specific note</li>
</ul>
<h4>Technologies used</h4>

<ul>
<li>nodeJS</li>
<li>lodash</li>
<li>yargs</li>
</ul>
