import CRC32 from 'sheetjs/js-crc32';

export class crc32hex {
	
	constructor(config = {}) {

		// extend default options
		this.options = Object.assign({
			useCache: true
		}, config);

		// create empty cache
		this.crcCache = {};
	}

	str(str = "", config = {}) {

		// extend class options with incoming
		let options = Object.assign({}, this.options, config);

		// force string
		str = str.toString();

		// check crc already cached
		if (this.crcCache[str] !== undefined) {

			// recall from cache
			return this.crcCache[str];

		} else {

			// get crc from sheetjs crc32
			let crc = CRC32.str(str);

			// convert unsigned 32-bit integer
			if (crc < 0) {crc += 4294967296;}

			// convert to hex and uppercase
			crc = crc.toString(16).toUpperCase();

			// zero pad
			crc = ("00000000" + crc).slice(-8);

			// cache crc
			if (options.useCache === true) {
				this.crcCache[str] = crc;
			}

			// return crc (may or may not have been cached)
			return crc;
		}

	}

} 
