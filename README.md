# crc32hex
A javascript CRC32 that returns hex, rather than a 32bit unsigned int

* return values match php's crc() function, 
* an instance of this class will cache crc operations for performance

## usage

[WIP]

#### disable caching

If you are doing thousands of different crc operations on strings that you are certain will be different each time, you will want to disable cacheing

```js
crc32hex.config( {useCache:false} );
```
