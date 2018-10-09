require('dotenv').config();
const { Client } = require('klasa');


new Client({
    clientOptions: {
        fetchAllMembers: false
    },
    prefix: 't.',
    cmdEditing: true,
    typing: true,
    readyMessage: (client) => `${client.user.tag}, Ready to serve ${client.guilds.size} guilds and ${client.users.size} users lol xd neovim is cool`
}).login(process.env.TOKEN);
