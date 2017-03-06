
const clc = require('cli-color');

module.exports = async () => {
    const [hashes] = await multiExecAsync(client, multi => {
        multi.hgetall(config.key);
    });
    console.log(clc.bold('hgetall'), clc.cyan.bold(config.key));
    if (hashes) {
        Object.keys(hashes).forEach(key => {
            console.log(clc.white(key), clc.cyan(hashes[key]));
        });
    }
}
