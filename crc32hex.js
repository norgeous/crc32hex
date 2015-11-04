import CRC32 from 'sheetjs/js-crc32';

export class crc32hex {
	
	constructor() {
		this.options={useCache: true};
		this.crcCache={};
	}

	str(str) {

		str = str || "";

		//force input to be string
		str = str.toString();

		let crc = "";

		// check crc already cached
		if (this.crcCache[str] !== undefined) {

			//recall from cache
			crc = this.crcCache[str];

		} else {

			//get crc from sheetjs crc32
			crc = CRC32.str(str);

			//convert unsigned 32-bit integer
			if (crc < 0) {crc += 4294967296;}

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

} 
