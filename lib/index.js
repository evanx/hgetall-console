
require('redis-app')(
    require('../package'),
    require('./spec'),
    () => require('./app')
).catch(console.error);
