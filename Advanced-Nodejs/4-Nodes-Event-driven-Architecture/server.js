const EventEmitter = require('events');

class Server extends EventEmitter {
    constructor(client) {
        super();
        this.tasks = {};
        this.taskId = 1;
        process.nextTick(() => {
            this.emit('response', 'Type a command(help/add/ls/delete)')
        })
        // 这么做this.emit无法识别
        // this.commands = {
        //     'help': this.help,
        //     'add': this.add,
        //     'ls': this.ls,
        //     'delete': this.delete,
        // }
        client.on('command', (command, args) => {
            if (this[command]) {
                this[command](args)
            } else {
                this.emit('response', 'Unknown command...')
            }

        })
    }

    tasksString() {
        return Object.keys(this.tasks).map(key => {
            return `${key}: ${this.tasks[key]}`;
        }).join('\n');
    }

    help() {
        this.emit('response', `Available Commands:
        add task
        ls
        delete :id`);
    }

    add(args) {
        this.tasks[this.taskId] = args.join(' ');
        this.emit('response', `Added task ${this.taskId}`);
        this.taskId++;
    }

    ls() {
        this.emit('response', `Tasks:\n${this.tasksString()}`);
    }

    delete(args) {
        delete(this.tasks[args[0]]);
        this.emit('response', `Deleted task ${args[0]}`);
    }
}

module.exports = (client) => new Server(client);
