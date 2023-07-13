import { g as createCollectionToGlobResultMap, h as createGetCollection, i as mime, c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, b as addAttribute, o as objectType, j as arrayType, k as stringType, e as renderComponent, F as Fragment } from '../astro.16c43ff6.mjs';
import 'node:fs/promises';
import 'node:path';
import 'node:url';
import 'node:os';
import require$$0 from 'fs';
import path from 'path';
import require$$1 from 'events';
import 'node:stream';
/* empty css                         */import { $ as $$Container, a as $$Layout } from './404.astro.c402aae6.mjs';

function isOutputFormat(value) {
  return ["avif", "jpeg", "jpg", "png", "webp"].includes(value);
}
function isOutputFormatSupportsAlpha(value) {
  return ["avif", "png", "webp"].includes(value);
}
function isAspectRatioString(value) {
  return /^\d*:\d*$/.test(value);
}
function parseAspectRatio(aspectRatio) {
  if (!aspectRatio) {
    return void 0;
  }
  if (typeof aspectRatio === "number") {
    return aspectRatio;
  } else {
    const [width, height] = aspectRatio.split(":");
    return parseInt(width) / parseInt(height);
  }
}
function isSSRService(service) {
  return "transform" in service;
}
class BaseSSRService {
  async getImageAttributes(transform) {
    const { width, height, src, format, quality, aspectRatio, ...rest } = transform;
    return {
      ...rest,
      width,
      height
    };
  }
  serializeTransform(transform) {
    const searchParams = new URLSearchParams();
    if (transform.quality) {
      searchParams.append("q", transform.quality.toString());
    }
    if (transform.format) {
      searchParams.append("f", transform.format);
    }
    if (transform.width) {
      searchParams.append("w", transform.width.toString());
    }
    if (transform.height) {
      searchParams.append("h", transform.height.toString());
    }
    if (transform.aspectRatio) {
      searchParams.append("ar", transform.aspectRatio.toString());
    }
    if (transform.fit) {
      searchParams.append("fit", transform.fit);
    }
    if (transform.background) {
      searchParams.append("bg", transform.background);
    }
    if (transform.position) {
      searchParams.append("p", encodeURI(transform.position));
    }
    searchParams.append("href", transform.src);
    return { searchParams };
  }
  parseTransform(searchParams) {
    if (!searchParams.has("href")) {
      return void 0;
    }
    let transform = { src: searchParams.get("href") };
    if (searchParams.has("q")) {
      transform.quality = parseInt(searchParams.get("q"));
    }
    if (searchParams.has("f")) {
      const format = searchParams.get("f");
      if (isOutputFormat(format)) {
        transform.format = format;
      }
    }
    if (searchParams.has("w")) {
      transform.width = parseInt(searchParams.get("w"));
    }
    if (searchParams.has("h")) {
      transform.height = parseInt(searchParams.get("h"));
    }
    if (searchParams.has("ar")) {
      const ratio = searchParams.get("ar");
      if (isAspectRatioString(ratio)) {
        transform.aspectRatio = ratio;
      } else {
        transform.aspectRatio = parseFloat(ratio);
      }
    }
    if (searchParams.has("fit")) {
      transform.fit = searchParams.get("fit");
    }
    if (searchParams.has("p")) {
      transform.position = decodeURI(searchParams.get("p"));
    }
    if (searchParams.has("bg")) {
      transform.background = searchParams.get("bg");
    }
    return transform;
  }
}

function isRemoteImage(src) {
  return /^(https?:)?\/\//.test(src);
}
function removeQueryString(src) {
  const index = src.lastIndexOf("?");
  return index > 0 ? src.substring(0, index) : src;
}
function extname(src) {
  const base = basename(src);
  const index = base.lastIndexOf(".");
  if (index <= 0) {
    return "";
  }
  return base.substring(index);
}
function basename(src) {
  return removeQueryString(src.replace(/^.*[\\\/]/, ""));
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/projects/algorithms-playground.md": () => import('../algorithms-playground.117fcb6d.mjs'),"/src/content/projects/fishlog.md": () => import('../fishlog.5fa19af8.mjs'),"/src/content/projects/harvez.md": () => import('../harvez.56f83f4a.mjs'),"/src/content/projects/transform-obj.md": () => import('../transform-obj.d375c495.mjs')

});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({

});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"projects":{"type":"content","entries":{"algorithms-playground":"/src/content/projects/algorithms-playground.md","fishlog":"/src/content/projects/fishlog.md","harvez":"/src/content/projects/harvez.md","transform-obj":"/src/content/projects/transform-obj.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/projects/algorithms-playground.md": () => import('../algorithms-playground.700d734e.mjs'),"/src/content/projects/fishlog.md": () => import('../fishlog.5b9af6d8.mjs'),"/src/content/projects/harvez.md": () => import('../harvez.958a1a56.mjs'),"/src/content/projects/transform-obj.md": () => import('../transform-obj.22d0fe79.mjs')

});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
const intToChar = new Uint8Array(64); // 64 possible chars.
const charToInt = new Uint8Array(128); // z is 122 in ASCII
for (let i = 0; i < chars.length; i++) {
    const c = chars.charCodeAt(i);
    intToChar[i] = c;
    charToInt[c] = i;
}

var dist = {exports: {}};

var queue = {exports: {}};

var inherits$1 = {exports: {}};

var inherits_browser = {exports: {}};

var hasRequiredInherits_browser;

function requireInherits_browser () {
	if (hasRequiredInherits_browser) return inherits_browser.exports;
	hasRequiredInherits_browser = 1;
	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  inherits_browser.exports = function inherits(ctor, superCtor) {
	    if (superCtor) {
	      ctor.super_ = superCtor;
	      ctor.prototype = Object.create(superCtor.prototype, {
	        constructor: {
	          value: ctor,
	          enumerable: false,
	          writable: true,
	          configurable: true
	        }
	      });
	    }
	  };
	} else {
	  // old school shim for old browsers
	  inherits_browser.exports = function inherits(ctor, superCtor) {
	    if (superCtor) {
	      ctor.super_ = superCtor;
	      var TempCtor = function () {};
	      TempCtor.prototype = superCtor.prototype;
	      ctor.prototype = new TempCtor();
	      ctor.prototype.constructor = ctor;
	    }
	  };
	}
	return inherits_browser.exports;
}

try {
  var util = require('util');
  /* istanbul ignore next */
  if (typeof util.inherits !== 'function') throw '';
  inherits$1.exports = util.inherits;
} catch (e) {
  /* istanbul ignore next */
  inherits$1.exports = requireInherits_browser();
}

var inheritsExports = inherits$1.exports;

var inherits = inheritsExports;
var EventEmitter = require$$1.EventEmitter;

queue.exports = Queue;
queue.exports.default = Queue;

function Queue (options) {
  if (!(this instanceof Queue)) {
    return new Queue(options)
  }

  EventEmitter.call(this);
  options = options || {};
  this.concurrency = options.concurrency || Infinity;
  this.timeout = options.timeout || 0;
  this.autostart = options.autostart || false;
  this.results = options.results || null;
  this.pending = 0;
  this.session = 0;
  this.running = false;
  this.jobs = [];
  this.timers = {};
}
inherits(Queue, EventEmitter);

var arrayMethods = [
  'pop',
  'shift',
  'indexOf',
  'lastIndexOf'
];

arrayMethods.forEach(function (method) {
  Queue.prototype[method] = function () {
    return Array.prototype[method].apply(this.jobs, arguments)
  };
});

Queue.prototype.slice = function (begin, end) {
  this.jobs = this.jobs.slice(begin, end);
  return this
};

Queue.prototype.reverse = function () {
  this.jobs.reverse();
  return this
};

var arrayAddMethods = [
  'push',
  'unshift',
  'splice'
];

arrayAddMethods.forEach(function (method) {
  Queue.prototype[method] = function () {
    var methodResult = Array.prototype[method].apply(this.jobs, arguments);
    if (this.autostart) {
      this.start();
    }
    return methodResult
  };
});

Object.defineProperty(Queue.prototype, 'length', {
  get: function () {
    return this.pending + this.jobs.length
  }
});

Queue.prototype.start = function (cb) {
  if (cb) {
    callOnErrorOrEnd.call(this, cb);
  }

  this.running = true;

  if (this.pending >= this.concurrency) {
    return
  }

  if (this.jobs.length === 0) {
    if (this.pending === 0) {
      done.call(this);
    }
    return
  }

  var self = this;
  var job = this.jobs.shift();
  var once = true;
  var session = this.session;
  var timeoutId = null;
  var didTimeout = false;
  var resultIndex = null;
  var timeout = job.hasOwnProperty('timeout') ? job.timeout : this.timeout;

  function next (err, result) {
    if (once && self.session === session) {
      once = false;
      self.pending--;
      if (timeoutId !== null) {
        delete self.timers[timeoutId];
        clearTimeout(timeoutId);
      }

      if (err) {
        self.emit('error', err, job);
      } else if (didTimeout === false) {
        if (resultIndex !== null) {
          self.results[resultIndex] = Array.prototype.slice.call(arguments, 1);
        }
        self.emit('success', result, job);
      }

      if (self.session === session) {
        if (self.pending === 0 && self.jobs.length === 0) {
          done.call(self);
        } else if (self.running) {
          self.start();
        }
      }
    }
  }

  if (timeout) {
    timeoutId = setTimeout(function () {
      didTimeout = true;
      if (self.listeners('timeout').length > 0) {
        self.emit('timeout', next, job);
      } else {
        next();
      }
    }, timeout);
    this.timers[timeoutId] = timeoutId;
  }

  if (this.results) {
    resultIndex = this.results.length;
    this.results[resultIndex] = null;
  }

  this.pending++;
  self.emit('start', job);
  var promise = job(next);
  if (promise && promise.then && typeof promise.then === 'function') {
    promise.then(function (result) {
      return next(null, result)
    }).catch(function (err) {
      return next(err || true)
    });
  }

  if (this.running && this.jobs.length > 0) {
    this.start();
  }
};

Queue.prototype.stop = function () {
  this.running = false;
};

Queue.prototype.end = function (err) {
  clearTimers.call(this);
  this.jobs.length = 0;
  this.pending = 0;
  done.call(this, err);
};

function clearTimers () {
  for (var key in this.timers) {
    var timeoutId = this.timers[key];
    delete this.timers[key];
    clearTimeout(timeoutId);
  }
}

function callOnErrorOrEnd (cb) {
  var self = this;
  this.on('error', onerror);
  this.on('end', onend);

  function onerror (err) { self.end(err); }
  function onend (err) {
    self.removeListener('error', onerror);
    self.removeListener('end', onend);
    cb(err, this.results);
  }
}

function done (err) {
  this.session++;
  this.running = false;
  this.emit('end', err);
}

var queueExports = queue.exports;

var types = {};

var bmp = {};

Object.defineProperty(bmp, "__esModule", { value: true });
bmp.BMP = void 0;
bmp.BMP = {
    validate(buffer) {
        return ('BM' === buffer.toString('ascii', 0, 2));
    },
    calculate(buffer) {
        return {
            height: Math.abs(buffer.readInt32LE(22)),
            width: buffer.readUInt32LE(18)
        };
    }
};

var cur = {};

var ico = {};

Object.defineProperty(ico, "__esModule", { value: true });
ico.ICO = void 0;
const TYPE_ICON = 1;
/**
 * ICON Header
 *
 * | Offset | Size | Purpose |
 * | 0	    | 2    | Reserved. Must always be 0.  |
 * | 2      | 2    | Image type: 1 for icon (.ICO) image, 2 for cursor (.CUR) image. Other values are invalid. |
 * | 4      | 2    | Number of images in the file. |
 *
 */
const SIZE_HEADER$1 = 2 + 2 + 2; // 6
/**
 * Image Entry
 *
 * | Offset | Size | Purpose |
 * | 0	    | 1    | Image width in pixels. Can be any number between 0 and 255. Value 0 means width is 256 pixels. |
 * | 1      | 1    | Image height in pixels. Can be any number between 0 and 255. Value 0 means height is 256 pixels. |
 * | 2      | 1    | Number of colors in the color palette. Should be 0 if the image does not use a color palette. |
 * | 3      | 1    | Reserved. Should be 0. |
 * | 4      | 2    | ICO format: Color planes. Should be 0 or 1. |
 * |        |      | CUR format: The horizontal coordinates of the hotspot in number of pixels from the left. |
 * | 6      | 2    | ICO format: Bits per pixel. |
 * |        |      | CUR format: The vertical coordinates of the hotspot in number of pixels from the top. |
 * | 8      | 4    | The size of the image's data in bytes |
 * | 12     | 4    | The offset of BMP or PNG data from the beginning of the ICO/CUR file |
 *
 */
const SIZE_IMAGE_ENTRY = 1 + 1 + 1 + 1 + 2 + 2 + 4 + 4; // 16
function getSizeFromOffset(buffer, offset) {
    const value = buffer.readUInt8(offset);
    return value === 0 ? 256 : value;
}
function getImageSize$1(buffer, imageIndex) {
    const offset = SIZE_HEADER$1 + (imageIndex * SIZE_IMAGE_ENTRY);
    return {
        height: getSizeFromOffset(buffer, offset + 1),
        width: getSizeFromOffset(buffer, offset)
    };
}
ico.ICO = {
    validate(buffer) {
        const reserved = buffer.readUInt16LE(0);
        const imageCount = buffer.readUInt16LE(4);
        if (reserved !== 0 || imageCount === 0) {
            return false;
        }
        const imageType = buffer.readUInt16LE(2);
        return imageType === TYPE_ICON;
    },
    calculate(buffer) {
        const nbImages = buffer.readUInt16LE(4);
        const imageSize = getImageSize$1(buffer, 0);
        if (nbImages === 1) {
            return imageSize;
        }
        const imgs = [imageSize];
        for (let imageIndex = 1; imageIndex < nbImages; imageIndex += 1) {
            imgs.push(getImageSize$1(buffer, imageIndex));
        }
        const result = {
            height: imageSize.height,
            images: imgs,
            width: imageSize.width
        };
        return result;
    }
};

Object.defineProperty(cur, "__esModule", { value: true });
cur.CUR = void 0;
const ico_1$1 = ico;
const TYPE_CURSOR = 2;
cur.CUR = {
    validate(buffer) {
        const reserved = buffer.readUInt16LE(0);
        const imageCount = buffer.readUInt16LE(4);
        if (reserved !== 0 || imageCount === 0) {
            return false;
        }
        const imageType = buffer.readUInt16LE(2);
        return imageType === TYPE_CURSOR;
    },
    calculate(buffer) {
        return ico_1$1.ICO.calculate(buffer);
    }
};

var dds = {};

Object.defineProperty(dds, "__esModule", { value: true });
dds.DDS = void 0;
dds.DDS = {
    validate(buffer) {
        return buffer.readUInt32LE(0) === 0x20534444;
    },
    calculate(buffer) {
        return {
            height: buffer.readUInt32LE(12),
            width: buffer.readUInt32LE(16)
        };
    }
};

var gif = {};

Object.defineProperty(gif, "__esModule", { value: true });
gif.GIF = void 0;
const gifRegexp = /^GIF8[79]a/;
gif.GIF = {
    validate(buffer) {
        const signature = buffer.toString('ascii', 0, 6);
        return (gifRegexp.test(signature));
    },
    calculate(buffer) {
        return {
            height: buffer.readUInt16LE(8),
            width: buffer.readUInt16LE(6)
        };
    }
};

var icns = {};

Object.defineProperty(icns, "__esModule", { value: true });
icns.ICNS = void 0;
/**
 * ICNS Header
 *
 * | Offset | Size | Purpose                                                |
 * | 0	    | 4    | Magic literal, must be "icns" (0x69, 0x63, 0x6e, 0x73) |
 * | 4      | 4    | Length of file, in bytes, msb first.                   |
 *
 */
const SIZE_HEADER = 4 + 4; // 8
const FILE_LENGTH_OFFSET = 4; // MSB => BIG ENDIAN
/**
 * Image Entry
 *
 * | Offset | Size | Purpose                                                          |
 * | 0	    | 4    | Icon type, see OSType below.                                     |
 * | 4      | 4    | Length of data, in bytes (including type and length), msb first. |
 * | 8      | n    | Icon data                                                        |
 */
const ENTRY_LENGTH_OFFSET = 4; // MSB => BIG ENDIAN
const ICON_TYPE_SIZE = {
    ICON: 32,
    'ICN#': 32,
    // m => 16 x 16
    'icm#': 16,
    icm4: 16,
    icm8: 16,
    // s => 16 x 16
    'ics#': 16,
    ics4: 16,
    ics8: 16,
    is32: 16,
    s8mk: 16,
    icp4: 16,
    // l => 32 x 32
    icl4: 32,
    icl8: 32,
    il32: 32,
    l8mk: 32,
    icp5: 32,
    ic11: 32,
    // h => 48 x 48
    ich4: 48,
    ich8: 48,
    ih32: 48,
    h8mk: 48,
    // . => 64 x 64
    icp6: 64,
    ic12: 32,
    // t => 128 x 128
    it32: 128,
    t8mk: 128,
    ic07: 128,
    // . => 256 x 256
    ic08: 256,
    ic13: 256,
    // . => 512 x 512
    ic09: 512,
    ic14: 512,
    // . => 1024 x 1024
    ic10: 1024,
};
function readImageHeader(buffer, imageOffset) {
    const imageLengthOffset = imageOffset + ENTRY_LENGTH_OFFSET;
    return [
        buffer.toString('ascii', imageOffset, imageLengthOffset),
        buffer.readUInt32BE(imageLengthOffset)
    ];
}
function getImageSize(type) {
    const size = ICON_TYPE_SIZE[type];
    return { width: size, height: size, type };
}
icns.ICNS = {
    validate(buffer) {
        return ('icns' === buffer.toString('ascii', 0, 4));
    },
    calculate(buffer) {
        const bufferLength = buffer.length;
        const fileLength = buffer.readUInt32BE(FILE_LENGTH_OFFSET);
        let imageOffset = SIZE_HEADER;
        let imageHeader = readImageHeader(buffer, imageOffset);
        let imageSize = getImageSize(imageHeader[0]);
        imageOffset += imageHeader[1];
        if (imageOffset === fileLength) {
            return imageSize;
        }
        const result = {
            height: imageSize.height,
            images: [imageSize],
            width: imageSize.width
        };
        while (imageOffset < fileLength && imageOffset < bufferLength) {
            imageHeader = readImageHeader(buffer, imageOffset);
            imageSize = getImageSize(imageHeader[0]);
            imageOffset += imageHeader[1];
            result.images.push(imageSize);
        }
        return result;
    }
};

var j2c = {};

Object.defineProperty(j2c, "__esModule", { value: true });
j2c.J2C = void 0;
j2c.J2C = {
    validate(buffer) {
        // TODO: this doesn't seem right. SIZ marker doesn't have to be right after the SOC
        return buffer.toString('hex', 0, 4) === 'ff4fff51';
    },
    calculate(buffer) {
        return {
            height: buffer.readUInt32BE(12),
            width: buffer.readUInt32BE(8),
        };
    }
};

var jp2 = {};

Object.defineProperty(jp2, "__esModule", { value: true });
jp2.JP2 = void 0;
const BoxTypes = {
    ftyp: '66747970',
    ihdr: '69686472',
    jp2h: '6a703268',
    jp__: '6a502020',
    rreq: '72726571',
    xml_: '786d6c20'
};
const calculateRREQLength = (box) => {
    const unit = box.readUInt8(0);
    let offset = 1 + (2 * unit);
    const numStdFlags = box.readUInt16BE(offset);
    const flagsLength = numStdFlags * (2 + unit);
    offset = offset + 2 + flagsLength;
    const numVendorFeatures = box.readUInt16BE(offset);
    const featuresLength = numVendorFeatures * (16 + unit);
    return offset + 2 + featuresLength;
};
const parseIHDR = (box) => {
    return {
        height: box.readUInt32BE(4),
        width: box.readUInt32BE(8),
    };
};
jp2.JP2 = {
    validate(buffer) {
        const signature = buffer.toString('hex', 4, 8);
        const signatureLength = buffer.readUInt32BE(0);
        if (signature !== BoxTypes.jp__ || signatureLength < 1) {
            return false;
        }
        const ftypeBoxStart = signatureLength + 4;
        const ftypBoxLength = buffer.readUInt32BE(signatureLength);
        const ftypBox = buffer.slice(ftypeBoxStart, ftypeBoxStart + ftypBoxLength);
        return ftypBox.toString('hex', 0, 4) === BoxTypes.ftyp;
    },
    calculate(buffer) {
        const signatureLength = buffer.readUInt32BE(0);
        const ftypBoxLength = buffer.readUInt16BE(signatureLength + 2);
        let offset = signatureLength + 4 + ftypBoxLength;
        const nextBoxType = buffer.toString('hex', offset, offset + 4);
        switch (nextBoxType) {
            case BoxTypes.rreq:
                // WHAT ARE THESE 4 BYTES?????
                // eslint-disable-next-line no-case-declarations
                const MAGIC = 4;
                offset = offset + 4 + MAGIC + calculateRREQLength(buffer.slice(offset + 4));
                return parseIHDR(buffer.slice(offset + 8, offset + 24));
            case BoxTypes.jp2h:
                return parseIHDR(buffer.slice(offset + 8, offset + 24));
            default:
                throw new TypeError('Unsupported header found: ' + buffer.toString('ascii', offset, offset + 4));
        }
    }
};

var jpg = {};

var readUInt$1 = {};

Object.defineProperty(readUInt$1, "__esModule", { value: true });
readUInt$1.readUInt = void 0;
// Abstract reading multi-byte unsigned integers
function readUInt(buffer, bits, offset, isBigEndian) {
    offset = offset || 0;
    const endian = isBigEndian ? 'BE' : 'LE';
    const methodName = ('readUInt' + bits + endian);
    return buffer[methodName].call(buffer, offset);
}
readUInt$1.readUInt = readUInt;

// NOTE: we only support baseline and progressive JPGs here
// due to the structure of the loader class, we only get a buffer
// with a maximum size of 4096 bytes. so if the SOF marker is outside
// if this range we can't detect the file size correctly.
Object.defineProperty(jpg, "__esModule", { value: true });
jpg.JPG = void 0;
const readUInt_1$1 = readUInt$1;
const EXIF_MARKER = '45786966';
const APP1_DATA_SIZE_BYTES = 2;
const EXIF_HEADER_BYTES = 6;
const TIFF_BYTE_ALIGN_BYTES = 2;
const BIG_ENDIAN_BYTE_ALIGN = '4d4d';
const LITTLE_ENDIAN_BYTE_ALIGN = '4949';
// Each entry is exactly 12 bytes
const IDF_ENTRY_BYTES = 12;
const NUM_DIRECTORY_ENTRIES_BYTES = 2;
function isEXIF(buffer) {
    return (buffer.toString('hex', 2, 6) === EXIF_MARKER);
}
function extractSize(buffer, index) {
    return {
        height: buffer.readUInt16BE(index),
        width: buffer.readUInt16BE(index + 2)
    };
}
function extractOrientation(exifBlock, isBigEndian) {
    // TODO: assert that this contains 0x002A
    // let STATIC_MOTOROLA_TIFF_HEADER_BYTES = 2
    // let TIFF_IMAGE_FILE_DIRECTORY_BYTES = 4
    // TODO: derive from TIFF_IMAGE_FILE_DIRECTORY_BYTES
    const idfOffset = 8;
    // IDF osset works from right after the header bytes
    // (so the offset includes the tiff byte align)
    const offset = EXIF_HEADER_BYTES + idfOffset;
    const idfDirectoryEntries = (0, readUInt_1$1.readUInt)(exifBlock, 16, offset, isBigEndian);
    for (let directoryEntryNumber = 0; directoryEntryNumber < idfDirectoryEntries; directoryEntryNumber++) {
        const start = offset + NUM_DIRECTORY_ENTRIES_BYTES + (directoryEntryNumber * IDF_ENTRY_BYTES);
        const end = start + IDF_ENTRY_BYTES;
        // Skip on corrupt EXIF blocks
        if (start > exifBlock.length) {
            return;
        }
        const block = exifBlock.slice(start, end);
        const tagNumber = (0, readUInt_1$1.readUInt)(block, 16, 0, isBigEndian);
        // 0x0112 (decimal: 274) is the `orientation` tag ID
        if (tagNumber === 274) {
            const dataFormat = (0, readUInt_1$1.readUInt)(block, 16, 2, isBigEndian);
            if (dataFormat !== 3) {
                return;
            }
            // unsinged int has 2 bytes per component
            // if there would more than 4 bytes in total it's a pointer
            const numberOfComponents = (0, readUInt_1$1.readUInt)(block, 32, 4, isBigEndian);
            if (numberOfComponents !== 1) {
                return;
            }
            return (0, readUInt_1$1.readUInt)(block, 16, 8, isBigEndian);
        }
    }
}
function validateExifBlock(buffer, index) {
    // Skip APP1 Data Size
    const exifBlock = buffer.slice(APP1_DATA_SIZE_BYTES, index);
    // Consider byte alignment
    const byteAlign = exifBlock.toString('hex', EXIF_HEADER_BYTES, EXIF_HEADER_BYTES + TIFF_BYTE_ALIGN_BYTES);
    // Ignore Empty EXIF. Validate byte alignment
    const isBigEndian = byteAlign === BIG_ENDIAN_BYTE_ALIGN;
    const isLittleEndian = byteAlign === LITTLE_ENDIAN_BYTE_ALIGN;
    if (isBigEndian || isLittleEndian) {
        return extractOrientation(exifBlock, isBigEndian);
    }
}
function validateBuffer(buffer, index) {
    // index should be within buffer limits
    if (index > buffer.length) {
        throw new TypeError('Corrupt JPG, exceeded buffer limits');
    }
    // Every JPEG block must begin with a 0xFF
    if (buffer[index] !== 0xFF) {
        throw new TypeError('Invalid JPG, marker table corrupted');
    }
}
jpg.JPG = {
    validate(buffer) {
        const SOIMarker = buffer.toString('hex', 0, 2);
        return ('ffd8' === SOIMarker);
    },
    calculate(buffer) {
        // Skip 4 chars, they are for signature
        buffer = buffer.slice(4);
        let orientation;
        let next;
        while (buffer.length) {
            // read length of the next block
            const i = buffer.readUInt16BE(0);
            if (isEXIF(buffer)) {
                orientation = validateExifBlock(buffer, i);
            }
            // ensure correct format
            validateBuffer(buffer, i);
            // 0xFFC0 is baseline standard(SOF)
            // 0xFFC1 is baseline optimized(SOF)
            // 0xFFC2 is progressive(SOF2)
            next = buffer[i + 1];
            if (next === 0xC0 || next === 0xC1 || next === 0xC2) {
                const size = extractSize(buffer, i + 5);
                // TODO: is orientation=0 a valid answer here?
                if (!orientation) {
                    return size;
                }
                return {
                    height: size.height,
                    orientation,
                    width: size.width
                };
            }
            // move to the next block
            buffer = buffer.slice(i + 2);
        }
        throw new TypeError('Invalid JPG, no size found');
    }
};

var ktx = {};

Object.defineProperty(ktx, "__esModule", { value: true });
ktx.KTX = void 0;
const SIGNATURE = 'KTX 11';
ktx.KTX = {
    validate(buffer) {
        return SIGNATURE === buffer.toString('ascii', 1, 7);
    },
    calculate(buffer) {
        return {
            height: buffer.readUInt32LE(40),
            width: buffer.readUInt32LE(36),
        };
    }
};

var png = {};

Object.defineProperty(png, "__esModule", { value: true });
png.PNG = void 0;
const pngSignature = 'PNG\r\n\x1a\n';
const pngImageHeaderChunkName = 'IHDR';
// Used to detect "fried" png's: http://www.jongware.com/pngdefry.html
const pngFriedChunkName = 'CgBI';
png.PNG = {
    validate(buffer) {
        if (pngSignature === buffer.toString('ascii', 1, 8)) {
            let chunkName = buffer.toString('ascii', 12, 16);
            if (chunkName === pngFriedChunkName) {
                chunkName = buffer.toString('ascii', 28, 32);
            }
            if (chunkName !== pngImageHeaderChunkName) {
                throw new TypeError('Invalid PNG');
            }
            return true;
        }
        return false;
    },
    calculate(buffer) {
        if (buffer.toString('ascii', 12, 16) === pngFriedChunkName) {
            return {
                height: buffer.readUInt32BE(36),
                width: buffer.readUInt32BE(32)
            };
        }
        return {
            height: buffer.readUInt32BE(20),
            width: buffer.readUInt32BE(16)
        };
    }
};

var pnm = {};

Object.defineProperty(pnm, "__esModule", { value: true });
pnm.PNM = void 0;
const PNMTypes = {
    P1: 'pbm/ascii',
    P2: 'pgm/ascii',
    P3: 'ppm/ascii',
    P4: 'pbm',
    P5: 'pgm',
    P6: 'ppm',
    P7: 'pam',
    PF: 'pfm'
};
const Signatures = Object.keys(PNMTypes);
const handlers = {
    default: (lines) => {
        let dimensions = [];
        while (lines.length > 0) {
            const line = lines.shift();
            if (line[0] === '#') {
                continue;
            }
            dimensions = line.split(' ');
            break;
        }
        if (dimensions.length === 2) {
            return {
                height: parseInt(dimensions[1], 10),
                width: parseInt(dimensions[0], 10),
            };
        }
        else {
            throw new TypeError('Invalid PNM');
        }
    },
    pam: (lines) => {
        const size = {};
        while (lines.length > 0) {
            const line = lines.shift();
            if (line.length > 16 || line.charCodeAt(0) > 128) {
                continue;
            }
            const [key, value] = line.split(' ');
            if (key && value) {
                size[key.toLowerCase()] = parseInt(value, 10);
            }
            if (size.height && size.width) {
                break;
            }
        }
        if (size.height && size.width) {
            return {
                height: size.height,
                width: size.width
            };
        }
        else {
            throw new TypeError('Invalid PAM');
        }
    }
};
pnm.PNM = {
    validate(buffer) {
        const signature = buffer.toString('ascii', 0, 2);
        return Signatures.includes(signature);
    },
    calculate(buffer) {
        const signature = buffer.toString('ascii', 0, 2);
        const type = PNMTypes[signature];
        // TODO: this probably generates garbage. move to a stream based parser
        const lines = buffer.toString('ascii', 3).split(/[\r\n]+/);
        const handler = handlers[type] || handlers.default;
        return handler(lines);
    }
};

var psd = {};

Object.defineProperty(psd, "__esModule", { value: true });
psd.PSD = void 0;
psd.PSD = {
    validate(buffer) {
        return ('8BPS' === buffer.toString('ascii', 0, 4));
    },
    calculate(buffer) {
        return {
            height: buffer.readUInt32BE(14),
            width: buffer.readUInt32BE(18)
        };
    }
};

var svg = {};

Object.defineProperty(svg, "__esModule", { value: true });
svg.SVG = void 0;
const svgReg = /<svg\s([^>"']|"[^"]*"|'[^']*')*>/;
const extractorRegExps = {
    height: /\sheight=(['"])([^%]+?)\1/,
    root: svgReg,
    viewbox: /\sviewBox=(['"])(.+?)\1/i,
    width: /\swidth=(['"])([^%]+?)\1/,
};
const INCH_CM = 2.54;
const units = {
    in: 96,
    cm: 96 / INCH_CM,
    em: 16,
    ex: 8,
    m: 96 / INCH_CM * 100,
    mm: 96 / INCH_CM / 10,
    pc: 96 / 72 / 12,
    pt: 96 / 72,
    px: 1
};
const unitsReg = new RegExp(`^([0-9.]+(?:e\\d+)?)(${Object.keys(units).join('|')})?$`);
function parseLength(len) {
    const m = unitsReg.exec(len);
    if (!m) {
        return undefined;
    }
    return Math.round(Number(m[1]) * (units[m[2]] || 1));
}
function parseViewbox(viewbox) {
    const bounds = viewbox.split(' ');
    return {
        height: parseLength(bounds[3]),
        width: parseLength(bounds[2])
    };
}
function parseAttributes(root) {
    const width = root.match(extractorRegExps.width);
    const height = root.match(extractorRegExps.height);
    const viewbox = root.match(extractorRegExps.viewbox);
    return {
        height: height && parseLength(height[2]),
        viewbox: viewbox && parseViewbox(viewbox[2]),
        width: width && parseLength(width[2]),
    };
}
function calculateByDimensions(attrs) {
    return {
        height: attrs.height,
        width: attrs.width,
    };
}
function calculateByViewbox(attrs, viewbox) {
    const ratio = viewbox.width / viewbox.height;
    if (attrs.width) {
        return {
            height: Math.floor(attrs.width / ratio),
            width: attrs.width,
        };
    }
    if (attrs.height) {
        return {
            height: attrs.height,
            width: Math.floor(attrs.height * ratio),
        };
    }
    return {
        height: viewbox.height,
        width: viewbox.width,
    };
}
svg.SVG = {
    validate(buffer) {
        const str = String(buffer);
        return svgReg.test(str);
    },
    calculate(buffer) {
        const root = buffer.toString('utf8').match(extractorRegExps.root);
        if (root) {
            const attrs = parseAttributes(root[0]);
            if (attrs.width && attrs.height) {
                return calculateByDimensions(attrs);
            }
            if (attrs.viewbox) {
                return calculateByViewbox(attrs, attrs.viewbox);
            }
        }
        throw new TypeError('Invalid SVG');
    }
};

var tga = {};

Object.defineProperty(tga, "__esModule", { value: true });
tga.TGA = void 0;
tga.TGA = {
    validate(buffer) {
        return buffer.readUInt16LE(0) === 0 && buffer.readUInt16LE(4) === 0;
    },
    calculate(buffer) {
        return {
            height: buffer.readUInt16LE(14),
            width: buffer.readUInt16LE(12),
        };
    }
};

var tiff = {};

Object.defineProperty(tiff, "__esModule", { value: true });
tiff.TIFF = void 0;
// based on http://www.compix.com/fileformattif.htm
// TO-DO: support big-endian as well
const fs = require$$0;
const readUInt_1 = readUInt$1;
// Read IFD (image-file-directory) into a buffer
function readIFD(buffer, filepath, isBigEndian) {
    const ifdOffset = (0, readUInt_1.readUInt)(buffer, 32, 4, isBigEndian);
    // read only till the end of the file
    let bufferSize = 1024;
    const fileSize = fs.statSync(filepath).size;
    if (ifdOffset + bufferSize > fileSize) {
        bufferSize = fileSize - ifdOffset - 10;
    }
    // populate the buffer
    const endBuffer = Buffer.alloc(bufferSize);
    const descriptor = fs.openSync(filepath, 'r');
    fs.readSync(descriptor, endBuffer, 0, bufferSize, ifdOffset);
    fs.closeSync(descriptor);
    return endBuffer.slice(2);
}
// TIFF values seem to be messed up on Big-Endian, this helps
function readValue(buffer, isBigEndian) {
    const low = (0, readUInt_1.readUInt)(buffer, 16, 8, isBigEndian);
    const high = (0, readUInt_1.readUInt)(buffer, 16, 10, isBigEndian);
    return (high << 16) + low;
}
// move to the next tag
function nextTag(buffer) {
    if (buffer.length > 24) {
        return buffer.slice(12);
    }
}
// Extract IFD tags from TIFF metadata
function extractTags(buffer, isBigEndian) {
    const tags = {};
    let temp = buffer;
    while (temp && temp.length) {
        const code = (0, readUInt_1.readUInt)(temp, 16, 0, isBigEndian);
        const type = (0, readUInt_1.readUInt)(temp, 16, 2, isBigEndian);
        const length = (0, readUInt_1.readUInt)(temp, 32, 4, isBigEndian);
        // 0 means end of IFD
        if (code === 0) {
            break;
        }
        else {
            // 256 is width, 257 is height
            // if (code === 256 || code === 257) {
            if (length === 1 && (type === 3 || type === 4)) {
                tags[code] = readValue(temp, isBigEndian);
            }
            // move to the next tag
            temp = nextTag(temp);
        }
    }
    return tags;
}
// Test if the TIFF is Big Endian or Little Endian
function determineEndianness(buffer) {
    const signature = buffer.toString('ascii', 0, 2);
    if ('II' === signature) {
        return 'LE';
    }
    else if ('MM' === signature) {
        return 'BE';
    }
}
const signatures = [
    // '492049', // currently not supported
    '49492a00',
    '4d4d002a', // Big Endian
    // '4d4d002a', // BigTIFF > 4GB. currently not supported
];
tiff.TIFF = {
    validate(buffer) {
        return signatures.includes(buffer.toString('hex', 0, 4));
    },
    calculate(buffer, filepath) {
        if (!filepath) {
            throw new TypeError('Tiff doesn\'t support buffer');
        }
        // Determine BE/LE
        const isBigEndian = determineEndianness(buffer) === 'BE';
        // read the IFD
        const ifdBuffer = readIFD(buffer, filepath, isBigEndian);
        // extract the tags from the IFD
        const tags = extractTags(ifdBuffer, isBigEndian);
        const width = tags[256];
        const height = tags[257];
        if (!width || !height) {
            throw new TypeError('Invalid Tiff. Missing tags');
        }
        return { height, width };
    }
};

var webp = {};

Object.defineProperty(webp, "__esModule", { value: true });
webp.WEBP = void 0;
function calculateExtended(buffer) {
    return {
        height: 1 + buffer.readUIntLE(7, 3),
        width: 1 + buffer.readUIntLE(4, 3)
    };
}
function calculateLossless(buffer) {
    return {
        height: 1 + (((buffer[4] & 0xF) << 10) | (buffer[3] << 2) | ((buffer[2] & 0xC0) >> 6)),
        width: 1 + (((buffer[2] & 0x3F) << 8) | buffer[1])
    };
}
function calculateLossy(buffer) {
    // `& 0x3fff` returns the last 14 bits
    // TO-DO: include webp scaling in the calculations
    return {
        height: buffer.readInt16LE(8) & 0x3fff,
        width: buffer.readInt16LE(6) & 0x3fff
    };
}
webp.WEBP = {
    validate(buffer) {
        const riffHeader = 'RIFF' === buffer.toString('ascii', 0, 4);
        const webpHeader = 'WEBP' === buffer.toString('ascii', 8, 12);
        const vp8Header = 'VP8' === buffer.toString('ascii', 12, 15);
        return (riffHeader && webpHeader && vp8Header);
    },
    calculate(buffer) {
        const chunkHeader = buffer.toString('ascii', 12, 16);
        buffer = buffer.slice(20, 30);
        // Extended webp stream signature
        if (chunkHeader === 'VP8X') {
            const extendedHeader = buffer[0];
            const validStart = (extendedHeader & 0xc0) === 0;
            const validEnd = (extendedHeader & 0x01) === 0;
            if (validStart && validEnd) {
                return calculateExtended(buffer);
            }
            else {
                // TODO: breaking change
                throw new TypeError('Invalid WebP');
            }
        }
        // Lossless webp stream signature
        if (chunkHeader === 'VP8 ' && buffer[0] !== 0x2f) {
            return calculateLossy(buffer);
        }
        // Lossy webp stream signature
        const signature = buffer.toString('hex', 3, 6);
        if (chunkHeader === 'VP8L' && signature !== '9d012a') {
            return calculateLossless(buffer);
        }
        throw new TypeError('Invalid WebP');
    }
};

Object.defineProperty(types, "__esModule", { value: true });
types.typeHandlers = void 0;
// load all available handlers explicitely for browserify support
const bmp_1 = bmp;
const cur_1 = cur;
const dds_1 = dds;
const gif_1 = gif;
const icns_1 = icns;
const ico_1 = ico;
const j2c_1 = j2c;
const jp2_1 = jp2;
const jpg_1 = jpg;
const ktx_1 = ktx;
const png_1 = png;
const pnm_1 = pnm;
const psd_1 = psd;
const svg_1 = svg;
const tga_1 = tga;
const tiff_1 = tiff;
const webp_1 = webp;
types.typeHandlers = {
    bmp: bmp_1.BMP,
    cur: cur_1.CUR,
    dds: dds_1.DDS,
    gif: gif_1.GIF,
    icns: icns_1.ICNS,
    ico: ico_1.ICO,
    j2c: j2c_1.J2C,
    jp2: jp2_1.JP2,
    jpg: jpg_1.JPG,
    ktx: ktx_1.KTX,
    png: png_1.PNG,
    pnm: pnm_1.PNM,
    psd: psd_1.PSD,
    svg: svg_1.SVG,
    tga: tga_1.TGA,
    tiff: tiff_1.TIFF,
    webp: webp_1.WEBP,
};

var detector$1 = {};

Object.defineProperty(detector$1, "__esModule", { value: true });
detector$1.detector = void 0;
const types_1 = types;
const keys = Object.keys(types_1.typeHandlers);
// This map helps avoid validating for every single image type
const firstBytes = {
    0x38: 'psd',
    0x42: 'bmp',
    0x44: 'dds',
    0x47: 'gif',
    0x49: 'tiff',
    0x4d: 'tiff',
    0x52: 'webp',
    0x69: 'icns',
    0x89: 'png',
    0xff: 'jpg'
};
function detector(buffer) {
    const byte = buffer[0];
    if (byte in firstBytes) {
        const type = firstBytes[byte];
        if (type && types_1.typeHandlers[type].validate(buffer)) {
            return type;
        }
    }
    const finder = (key) => types_1.typeHandlers[key].validate(buffer);
    return keys.find(finder);
}
detector$1.detector = detector;

(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.types = exports.setConcurrency = exports.disableTypes = exports.disableFS = exports.imageSize = void 0;
	const fs = require$$0;
	const path$1 = path;
	const queue_1 = queueExports;
	const types_1 = types;
	const detector_1 = detector$1;
	// Maximum buffer size, with a default of 512 kilobytes.
	// TO-DO: make this adaptive based on the initial signature of the image
	const MaxBufferSize = 512 * 1024;
	// This queue is for async `fs` operations, to avoid reaching file-descriptor limits
	const queue = new queue_1.default({ concurrency: 100, autostart: true });
	const globalOptions = {
	    disabledFS: false,
	    disabledTypes: []
	};
	/**
	 * Return size information based on a buffer
	 *
	 * @param {Buffer} buffer
	 * @param {String} filepath
	 * @returns {Object}
	 */
	function lookup(buffer, filepath) {
	    // detect the file type.. don't rely on the extension
	    const type = (0, detector_1.detector)(buffer);
	    if (typeof type !== 'undefined') {
	        if (globalOptions.disabledTypes.indexOf(type) > -1) {
	            throw new TypeError('disabled file type: ' + type);
	        }
	        // find an appropriate handler for this file type
	        if (type in types_1.typeHandlers) {
	            const size = types_1.typeHandlers[type].calculate(buffer, filepath);
	            if (size !== undefined) {
	                size.type = type;
	                return size;
	            }
	        }
	    }
	    // throw up, if we don't understand the file
	    throw new TypeError('unsupported file type: ' + type + ' (file: ' + filepath + ')');
	}
	/**
	 * Reads a file into a buffer.
	 * @param {String} filepath
	 * @returns {Promise<Buffer>}
	 */
	async function asyncFileToBuffer(filepath) {
	    const handle = await fs.promises.open(filepath, 'r');
	    try {
	        const { size } = await handle.stat();
	        if (size <= 0) {
	            throw new Error('Empty file');
	        }
	        const bufferSize = Math.min(size, MaxBufferSize);
	        const buffer = Buffer.alloc(bufferSize);
	        await handle.read(buffer, 0, bufferSize, 0);
	        return buffer;
	    }
	    finally {
	        await handle.close();
	    }
	}
	/**
	 * Synchronously reads a file into a buffer, blocking the nodejs process.
	 *
	 * @param {String} filepath
	 * @returns {Buffer}
	 */
	function syncFileToBuffer(filepath) {
	    // read from the file, synchronously
	    const descriptor = fs.openSync(filepath, 'r');
	    try {
	        const { size } = fs.fstatSync(descriptor);
	        if (size <= 0) {
	            throw new Error('Empty file');
	        }
	        const bufferSize = Math.min(size, MaxBufferSize);
	        const buffer = Buffer.alloc(bufferSize);
	        fs.readSync(descriptor, buffer, 0, bufferSize, 0);
	        return buffer;
	    }
	    finally {
	        fs.closeSync(descriptor);
	    }
	}
	// eslint-disable-next-line @typescript-eslint/no-use-before-define
	module.exports = exports = imageSize; // backwards compatibility
	exports.default = imageSize;
	/**
	 * @param {Buffer|string} input - buffer or relative/absolute path of the image file
	 * @param {Function=} [callback] - optional function for async detection
	 */
	function imageSize(input, callback) {
	    // Handle buffer input
	    if (Buffer.isBuffer(input)) {
	        return lookup(input);
	    }
	    // input should be a string at this point
	    if (typeof input !== 'string' || globalOptions.disabledFS) {
	        throw new TypeError('invalid invocation. input should be a Buffer');
	    }
	    // resolve the file path
	    const filepath = path$1.resolve(input);
	    if (typeof callback === 'function') {
	        queue.push(() => asyncFileToBuffer(filepath)
	            .then((buffer) => process.nextTick(callback, null, lookup(buffer, filepath)))
	            .catch(callback));
	    }
	    else {
	        const buffer = syncFileToBuffer(filepath);
	        return lookup(buffer, filepath);
	    }
	}
	exports.imageSize = imageSize;
	const disableFS = (v) => { globalOptions.disabledFS = v; };
	exports.disableFS = disableFS;
	const disableTypes = (types) => { globalOptions.disabledTypes = types; };
	exports.disableTypes = disableTypes;
	const setConcurrency = (c) => { queue.concurrency = c; };
	exports.setConcurrency = setConcurrency;
	exports.types = Object.keys(types_1.typeHandlers); 
} (dist, dist.exports));

function resolveSize(transform) {
  if (transform.width && transform.height) {
    return transform;
  }
  if (!transform.width && !transform.height) {
    throw new Error(`"width" and "height" cannot both be undefined`);
  }
  if (!transform.aspectRatio) {
    throw new Error(
      `"aspectRatio" must be included if only "${transform.width ? "width" : "height"}" is provided`
    );
  }
  let aspectRatio;
  if (typeof transform.aspectRatio === "number") {
    aspectRatio = transform.aspectRatio;
  } else {
    const [width, height] = transform.aspectRatio.split(":");
    aspectRatio = Number.parseInt(width) / Number.parseInt(height);
  }
  if (transform.width) {
    return {
      ...transform,
      width: transform.width,
      height: Math.round(transform.width / aspectRatio)
    };
  } else if (transform.height) {
    return {
      ...transform,
      width: Math.round(transform.height * aspectRatio),
      height: transform.height
    };
  }
  return transform;
}
async function resolveTransform(input) {
  if (typeof input.src === "string") {
    return resolveSize(input);
  }
  const metadata = "then" in input.src ? (await input.src).default : input.src;
  let { width, height, aspectRatio, background, format = metadata.format, ...rest } = input;
  if (!width && !height) {
    width = metadata.width;
    height = metadata.height;
  } else if (width) {
    let ratio = parseAspectRatio(aspectRatio) || metadata.width / metadata.height;
    height = height || Math.round(width / ratio);
  } else if (height) {
    let ratio = parseAspectRatio(aspectRatio) || metadata.width / metadata.height;
    width = width || Math.round(height * ratio);
  }
  return {
    ...rest,
    src: metadata.src,
    width,
    height,
    aspectRatio,
    format,
    background
  };
}
async function getImage(transform) {
  var _a, _b, _c;
  if (!transform.src) {
    throw new Error("[@astrojs/image] `src` is required");
  }
  let loader = (_a = globalThis.astroImage) == null ? void 0 : _a.loader;
  if (!loader) {
    const { default: mod } = await import('./endpoint.js.4e580eae.mjs').then(n => n.s).catch(() => {
      throw new Error(
        "[@astrojs/image] Builtin image loader not found. (Did you remember to add the integration to your Astro config?)"
      );
    });
    loader = mod;
    globalThis.astroImage = globalThis.astroImage || {};
    globalThis.astroImage.loader = loader;
  }
  const resolved = await resolveTransform(transform);
  const attributes = await loader.getImageAttributes(resolved);
  const isDev = (_b = (Object.assign({"PUBLIC_CMS_API":"https://api-ap-northeast-1.graphcms.com/v2/cl1mc56xq0kk301xs2ogc737a/master","BASE_URL":"/","MODE":"production","DEV":false,"PROD":true,"SSR":true,"SITE":"https://rizkyy.dev","ASSETS_PREFIX":undefined},{SSR:true,}))) == null ? void 0 : _b.DEV;
  const isLocalImage = !isRemoteImage(resolved.src);
  const _loader = isDev && isLocalImage ? globalThis.astroImage.defaultLoader : loader;
  if (!_loader) {
    throw new Error("@astrojs/image: loader not found!");
  }
  const { searchParams } = isSSRService(_loader) ? _loader.serializeTransform(resolved) : globalThis.astroImage.defaultLoader.serializeTransform(resolved);
  const imgSrc = !isLocalImage && resolved.src.startsWith("//") ? `https:${resolved.src}` : resolved.src;
  let src;
  if (/^[\/\\]?@astroimage/.test(imgSrc)) {
    src = `${imgSrc}?${searchParams.toString()}`;
  } else {
    searchParams.set("href", imgSrc);
    src = `/_image?${searchParams.toString()}`;
  }
  if ((_c = globalThis.astroImage) == null ? void 0 : _c.addStaticImage) {
    src = globalThis.astroImage.addStaticImage(resolved);
  }
  return {
    ...attributes,
    src
  };
}

async function resolveAspectRatio({ src, aspectRatio }) {
  if (typeof src === "string") {
    return parseAspectRatio(aspectRatio);
  } else {
    const metadata = "then" in src ? (await src).default : src;
    return parseAspectRatio(aspectRatio) || metadata.width / metadata.height;
  }
}
async function resolveFormats({ src, formats }) {
  const unique = new Set(formats);
  if (typeof src === "string") {
    unique.add(extname(src).replace(".", ""));
  } else {
    const metadata = "then" in src ? (await src).default : src;
    unique.add(extname(metadata.src).replace(".", ""));
  }
  return Array.from(unique).filter(Boolean);
}
async function getPicture(params) {
  const { src, alt, widths, fit, position, background } = params;
  if (!src) {
    throw new Error("[@astrojs/image] `src` is required");
  }
  if (!widths || !Array.isArray(widths)) {
    throw new Error("[@astrojs/image] at least one `width` is required. ex: `widths={[100]}`");
  }
  const aspectRatio = await resolveAspectRatio(params);
  if (!aspectRatio) {
    throw new Error("`aspectRatio` must be provided for remote images");
  }
  const allFormats = await resolveFormats(params);
  const lastFormat = allFormats[allFormats.length - 1];
  const maxWidth = Math.max(...widths);
  let image;
  async function getSource(format) {
    const imgs = await Promise.all(
      widths.map(async (width) => {
        const img = await getImage({
          src,
          alt,
          format,
          width,
          fit,
          position,
          background,
          aspectRatio
        });
        if (format === lastFormat && width === maxWidth) {
          image = img;
        }
        return `${img.src} ${width}w`;
      })
    );
    return {
      type: mime.getType(format) || format,
      srcset: imgs.join(",")
    };
  }
  const sources = await Promise.all(allFormats.map((format) => getSource(format)));
  return {
    sources,
    image
  };
}

const $$Astro$2 = createAstro("https://rizkyy.dev");
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Image;
  const { loading = "lazy", decoding = "async", ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    warnForMissingAlt();
  }
  const attrs = await getImage(props);
  return renderTemplate`${maybeRenderHead()}<img${spreadAttributes(attrs)}${addAttribute(loading, "loading")}${addAttribute(decoding, "decoding")}>`;
}, "/Users/rizkyy/Desktop/Projekan/astroship/node_modules/.pnpm/@astrojs+image@0.14.1_astro@2.8.1+sharp@0.31.3/node_modules/@astrojs/image/components/Image.astro");

const $$Astro$1 = createAstro("https://rizkyy.dev");
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Picture;
  const {
    src,
    alt,
    sizes,
    widths,
    aspectRatio,
    fit,
    background,
    position,
    formats = ["avif", "webp"],
    loading = "lazy",
    decoding = "async",
    ...attrs
  } = Astro2.props;
  if (alt === void 0 || alt === null) {
    warnForMissingAlt();
  }
  const { image, sources } = await getPicture({
    src,
    widths,
    formats,
    aspectRatio,
    fit,
    background,
    position,
    alt
  });
  delete image.width;
  delete image.height;
  return renderTemplate`${maybeRenderHead()}<picture>
	${sources.map((attrs2) => renderTemplate`<source${spreadAttributes(attrs2)}${addAttribute(sizes, "sizes")}>`)}
	<img${spreadAttributes(image)}${addAttribute(loading, "loading")}${addAttribute(decoding, "decoding")}${spreadAttributes(attrs)}>
</picture>`;
}, "/Users/rizkyy/Desktop/Projekan/astroship/node_modules/.pnpm/@astrojs+image@0.14.1_astro@2.8.1+sharp@0.31.3/node_modules/@astrojs/image/components/Picture.astro");

let altWarningShown = false;
function warnForMissingAlt() {
  if (altWarningShown === true) {
    return;
  }
  altWarningShown = true;
  console.warn(`
[@astrojs/image] "alt" text was not provided for an <Image> or <Picture> component.

A future release of @astrojs/image may throw a build error when "alt" text is missing.

The "alt" attribute holds a text description of the image, which isn't mandatory but is incredibly useful for accessibility. Set to an empty string (alt="") if the image is not a key part of the content (it's decoration or a tracking pixel).
`);
}

objectType({
  data: objectType({
    postsConnection: objectType({
      edges: arrayType(
        objectType({
          node: objectType({
            excerpt: stringType(),
            title: stringType(),
            slug: stringType(),
            id: stringType(),
            createdAt: stringType(),
            thumbnailImage: objectType({
              fileName: stringType(),
              url: stringType()
            }),
            categories: arrayType(
              objectType({
                name: stringType(),
                slug: stringType()
              })
            )
          })
        })
      )
    }),
    authors: arrayType(
      objectType({
        photo: objectType({
          fileName: stringType(),
          url: stringType()
        })
      })
    )
  })
});
objectType({
  data: objectType({
    post: objectType({
      author: objectType({
        name: stringType(),
        photo: objectType({
          fileName: stringType(),
          url: stringType()
        })
      }),
      thumbnailImage: objectType({
        fileName: stringType(),
        url: stringType()
      }),
      categories: arrayType(
        objectType({
          name: stringType(),
          slug: stringType()
        })
      ),
      content: stringType(),
      createdAt: stringType(),
      title: stringType(),
      slug: stringType(),
      excerpt: stringType()
    })
  })
});
function parseTimestamp(timestamp) {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const parsedTime = `${year}/${month}/${day}`;
  return parsedTime;
}
function parseTime(time) {
  const date = new Date(time);
  const options = {
    month: "short",
    day: "2-digit",
    year: "numeric"
  };
  const parsedTime = date.toLocaleDateString("en-US", options);
  return parsedTime;
}
function parseNumber(number) {
  if (number >= 1e3 && number < 1e6) {
    return `${(number / 1e3).toFixed(0)}k`;
  }
  if (number >= 1e6) {
    return `${(number / 1e6).toFixed(0)}M`;
  }
  return number.toString();
}
const graphqlFetch = async (body) => {
  const data = await fetch("https://api-ap-northeast-1.graphcms.com/v2/cl1mc56xq0kk301xs2ogc737a/master", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ ...body })
  });
  return data.json();
};

const postQuery = `
  query PostQuery($first: Int, $skip: Int) {
    postsConnection(first: $first, skip: $skip, orderBy: createdAt_DESC) {
      edges {
        node {
          id
          excerpt
          title
          slug
          createdAt
          categories {
            name
            slug
          }
          thumbnailImage{
            fileName
            url
          }
        }
        cursor
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        pageSize
      }
    }
    authors {
      photo {
        url
        fileName
      }
    }
  }
`;
const postDetailQuery = `
  query PostDetailQuery($slug: String) {
    post(where: {slug: $slug}) {
      content
      title
      slug
      excerpt
      createdAt
      thumbnailImage {
        fileName
        url
      }
      author {
        name
        photo {
          url
          fileName
        }
      }
      categories {
        name
        slug
      }
    }
  }
`;

const $$Astro = createAstro("https://rizkyy.dev");
const $$Blogs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blogs;
  const {
    data: { postsConnection }
  } = await graphqlFetch({
    query: postQuery,
    variables: {
      first: 10,
      skip: 0
    }
  });
  const posts = postsConnection.edges;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blogs" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate`${posts.length >= 4 ? renderTemplate`${maybeRenderHead()}<div class="mb-10 grid grid-cols-2 gap-6 xsm:grid-cols-1">
          <div class="flex flex-col space-y-3">
            ${renderComponent($$result3, "Picture", $$Picture, { "src": posts[0].node.thumbnailImage.url, "alt": "thumbnail-post", "sizes": "(max-width: 800px) 100vw, 800px", "widths": [200, 400, 800], "aspectRatio": "16:9", "fit": "cover", "position": "center", "format": "webp", "loading": "eager", "class": "w-full rounded-md" })}

            <div class="meta">
              <div class="meta-categories">
                ${posts[0].node.categories.map((item) => renderTemplate`<span class="text-purple-400 text-sm">#${item.name}</span>`)}
              </div>
              <time class="text-gray-400 text-sm font-sans meta-time">
                ${parseTimestamp(posts[0].node.createdAt)}
              </time>

              <div class="mt-2 meta-content">
                <a${addAttribute(`/blogs/${posts[0].node.slug}`, "href")} class="no-underline">
                  <p class="text-2xl font-bold font-playfair opacity-80">
                    ${posts[0].node.title}
                  </p>
                </a>
              </div>
            </div>
          </div>

          <div class="flex flex-col space-y-3">
            ${posts.splice(1, 2).map((item) => renderTemplate`<div class="flex space-x-3 xsm:flex-col xsm:space-x-0">
                <div class="w-1/2 xsm:w-full">
                  ${renderComponent($$result3, "Picture", $$Picture, { "src": item.node.thumbnailImage.url, "alt": "thumbnail-post", "sizes": "(max-width: 800px) 100vw, 800px", "widths": [200, 400, 800], "aspectRatio": "16:9", "format": "webp", "fit": "cover", "position": "center", "loading": "eager", "class": "w-full rounded-md" })}
                </div>
                <div class="w-1/2 xsm:w-full">
                  <p class="font-pollysans text-gray-400">${item.node.title}</p>
                </div>
              </div>`)}
          </div>
        </div>` : null}<ul class="list-of-blog">
      <p class="mb-3 text-xl font-playfair">All Bλog Posts</p>
      <hr class="opacity-40">
      <li class="mt-3">
        ${posts.splice(posts.length >= 3 ? 1 : 0).map((item) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, {}, { "default": ($$result4) => renderTemplate`${item.node.categories.map((c) => renderTemplate`<span class="text-purple-400 text-[13px]">#${c.name}</span>`)}<a${addAttribute(`/blogs/${item.node.slug}`, "href")} class="no-underline hover:opacity-70">
                <div class="flex justify-between items-center xsm:flex-col xsm:items-start">
                  <p class="xsm:leading-8 font-playfair font-bold text-2xl opacity-80">
                    ${item.node.title}
                  </p>

                  <time class="text-sm xsm:mt-3 text-gray-400">
                    ${parseTimestamp(item.node.createdAt)}
                  </time>
                </div>
              </a>
            ` })}`)}
      </li>
    </ul>
  ` })}
` })}`;
}, "/Users/rizkyy/Desktop/Projekan/astroship/src/pages/blogs.astro");

const $$file = "/Users/rizkyy/Desktop/Projekan/astroship/src/pages/blogs.astro";
const $$url = "/blogs";

const blogs = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blogs,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Picture as $, BaseSSRService as B, isRemoteImage as a, graphqlFetch as b, postQuery as c, postDetailQuery as d, parseNumber as e, blogs as f, getCollection as g, isOutputFormatSupportsAlpha as i, parseTime as p };
