
# hgetall-console

Containerized util to pretty print Redis hashes to the console.

<img src="https://raw.githubusercontent.com/evanx/hgetall-console/master/docs/readme/main.png"/>

## Build

We build a container image for this service:
```
docker build -t hgetall-console https://github.com/evanx/hgetall-console.git
```

See `Dockerfile` https://github.com/evanx/hgetall-console/blob/master/Dockerfile


## Usage

```
docker run --network=host -e key=person:1:h hgetall-console
```

This will `HGETALL` a Redis hashes key `person:1:h` and pretty print to the console.

## Test

See `bin/test.sh` https://github.com/evanx/hgetall-console/blob/master/bin/test.sh
```javascript
redis-cli hset $key name 'Richard Feyman'
redis-cli hset $key about 'https://en.wikipedia.org/wiki/Richard_Feynman'
redis-cli hset $key born '1918-05-11'
redis-cli hset $key died '1988-02-15'
key=$key npm start
```

## Implementation

See `lib/app.js` https://github.com/evanx/hgetall-console/blob/master/lib/app.js
```javascript
    const [hashes] = await multiExecAsync(client, multi => {
        multi.hgetall(config.key);
    });
    console.log(clc.bold('hgetall'), clc.cyan.bold(config.key));
    if (hashes) {
        Object.keys(hashes).forEach(key => {
             console.log(clc.white(key), clc.cyan(hashes[key]));
        });
    }
```

Uses application archetype: https://github.com/evanx/redis-app

<hr>

https://twitter.com/@evanxsummers
