const chalk = require('chalk')
const note = require('./notes.js')
const yargs = require('yargs')


// create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: ' Add Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        note.addNote(argv.title, argv.body);
    }
})

// create remove command

yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {
        note.removeNote(argv.title)
    }
})


// create list command
yargs.command({
    command: 'list',
    describe: 'listing the note',
    handler() {
        note.listNotes();
    }
})

// create read command

yargs.command({
    command: 'read',
    describe: 'read a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {
        note.readNote(argv.title)
    }
})

yargs.argv;
