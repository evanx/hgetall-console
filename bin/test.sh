
  redis-cli keys 'test:hgetall-console:*' | xargs -r -n 1 redis-cli del
  key='test:hgetall-console:person:1:h'
  redis-cli hset $key name 'Richard Feynman'
  redis-cli hset $key about 'https://en.wikipedia.org/wiki/Richard_Feynman'
  redis-cli hset $key born '1918-05-11'
  redis-cli hset $key died '1988-02-15'
  key=$key npm start
