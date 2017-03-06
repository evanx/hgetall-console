
# hgetall-console

Containerized util to pretty print Redis hashes to the console.

<img src="https://raw.githubusercontent.com/evanx/hgetall-console/master/docs/readme/main.png"/>

## Build

We build a container image for this service:
```
docker build -t hgetall-console https://github.com/evanx/hgetall-console.git
```

## Usage

```
docker run --network=host -e key=person:1:h hgetall-console
```

This will `HGETALL` a Redis hashes key `person:1:h` and pretty print to the console.

## Test

See `bin/test.sh`

<hr>

https://twitter.com/@evanxsummers
