
module.exports = pkg => ({
    description: pkg.description,
    env: {
        key: {
            description: 'the hashes key to hgetall and print',
        },
        host: {
            description: 'the Redis host',
            default: 'localhost'
        },
        port: {
            description: 'the Redis port',
            default: 6379
        }
    }
});
