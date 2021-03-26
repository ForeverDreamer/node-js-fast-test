const repl = require('Advanced-Nodejs/2-Node!=JavaScript/repl');

const r = repl.start({
    ignoreUndefined: true,
    replMode: repl.REPL_MODE_STRICT
})

r.context.lodash = require('lodash');
