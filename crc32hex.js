define(['js-crc32'], function (crc32) {
    "use strict";
    return {

        options: {
            useCache: true
        },
        crcCache: {},

        config: function (options) {
            options = options || {};

            //merge incoming options and this.options, but does not 'merge' subkeys
            if (Object.keys(options).length !== 0) {
                //for(var k in options) {
                //    this.options[k] = options[k];
                //}
                Object.keys(options).forEach(function (k) {
                    this.options[k] = options[k];
                });
            }

        },

        str: function (str) {
            str = str || "";

            //force input to be string
            str = str.toString();

            // check crc already cached
            var crc;
            if (this.crcCache[str] !== undefined) {
                crc = this.crcCache[str];
            } else {

                //get crc from sheetjs crc32
                crc = crc32.str(str);

                //convert unsigned 32-bit integer
                if (crc < 0) {
                    crc += 4294967296;
                }

                //convert to hex and uppercase
                crc = crc.toString(16).toUpperCase();

                //zero pad
                crc = ("00000000" + crc).slice(-8);

                //cache
                if (this.options.useCache) {
                    this.crcCache[str] = crc;
                }

            }
            return crc;
        }

    };

});