const router = require('express').Router();
const fs = require('fs');

function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notesArray }, null, 2)
    );
    return note;
}


router.get("/api/notes", function (req, res) {
    return res.json(JSON.parse(fs.readFileSync("./db/db.json")));
});

router.post("/api/notes", function (req, res) {
    // req.body is JSON post sent from UI
    req.body.id = notes.length.toString();

    const notes = createNewNote(req.body, notes);
    res.json(notes);

});