define(['js-crc32'],function (crc32) {
    return {
        crcCache: {},
        str: function (str = "") {
            // check crc already cached
            if(this.crcCache[str] !== undefined) var crc = this.crcCache[str];
            else {
                var crc = crc32.str(str);                    //get crc from sheetjs crc32
                if (crc < 0) crc += 4294967296;              //convert unsigned 32-bit integer to signed?
                crc = crc.toString(16).toUpperCase();        //convert to hex and uppercase
                crc = ( "00000000" + crc ).slice(-8);        //zero pad
                this.crcCache[str] = crc;                    //cache
            }
            return crc;
        }
    };
});