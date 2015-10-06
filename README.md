# crc32hex
A javascript CRC32 that returns as hex, rather than a 32bit unsigned int

* return values match php's crc() function, 
* an instance of this object will cache crc operations for performance

## useage

module is supports AMD (requirejs), CommonJS (npm) and Globals export modes.

### AMD
coming soon

### CommonJS
coming soon

### Globals
coming soon

#### disable caching

If you are doing thousands of different crc operations on strings that you are certain will be different each time, you will want to disable cacheing

```js
crc32hex.config( {useCache:false} );
```
