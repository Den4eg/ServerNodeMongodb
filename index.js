/*connecting to database module*/
const config = require('./config');
const app = require('./app');
const database = require('./database');

database()
    .then(info => {
        console.log(
            `Database connected to ${info.host}:${info.port}/${info.name}`
        );
        app.listen(config.PORT, () => {
            console.log('Server run on port:' + ' ' + config.PORT);
        });
    })
    .catch(() => {
        console.error('Unable connect to database');
        global.process.exit(1);
    });
