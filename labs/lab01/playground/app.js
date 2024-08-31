const yargs = require('yargs');
const userModule = require('./user');

yargs
    .command({
        command: 'add',
        describe: 'Add a new programming language',
        builder: {
            title: {
                describe: 'Language title',
                demandOption: true,
                type: 'string',
            },
            level: {
                describe: 'Language level',
                demandOption: true,
                type: 'string',
            },
        },
        handler: (argv) => {
            userModule.addUser(argv.title, argv.level);
        },
    })
    .command({
        command: 'remove',
        describe: 'Remove a programming language',
        builder: {
            title: {
                describe: 'Language title',
                demandOption: true,
                type: 'string',
            },
        },
        handler: (argv) => {
            userModule.removeUser(argv.title);
        },
    })
    .command({
        command: 'list',
        describe: 'List all programming languages',
        handler: () => {
            userModule.listUsers();
        },
    })
    .command({
        command: 'read',
        describe: 'Read details about a programming language',
        builder: {
            title: {
                describe: 'Language title',
                demandOption: true,
                type: 'string',
            },
        },
        handler: (argv) => {
            userModule.readUser(argv.title);
        },
    })
    .parse();