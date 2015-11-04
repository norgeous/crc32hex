# crc32hex
A javascript CRC32 that returns hex, rather than a 32bit unsigned int.

* ES6 module
* CRC operations are cached (for performance)

## Usage
This ES6 module can be used with JSPM.
Follow the tutorial at: https://github.com/jspm/demo-es6
then use the following command line to install:
```shell
jspm install github:norgeous/crc32hex
```
and then in your javascript somewhere:
```js
import { crc32hex } from 'norgeous/crc32hex';
```
```js
let mycrc = new crc32hex();
console.log(mycrc.str('hello'));
```
The console will log ```3610A686``` which is the crc32 of ```hello```.

The class instance ```mycrc``` contains the cache, so only initalise this once if you are using caching.


### Disable caching

If you are doing thousands of different crc operations on strings that you are certain will be different each time, you will want to disable caching, as it will never be used and the dictionary will take up some memory uneccessarily.

```js
let mycrc = new crc32hex({useCache:false});
```
*todo