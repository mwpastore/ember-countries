import Em from 'ember';

const {
  isNone
  } = Em;

export function getFormat(val) {
  if (typeof val === "object" && val !== null && val.iso2) {
    return 'country';
  }

  if (typeof val !== "string") {return null;}

  if (!isNaN(Number(val))) {
    return 'isoNumeric';
  } else if (val.length === 2) {
    return 'iso2';
  } else if (val.length === 3) {
    return 'iso3';
  } else {
    return null;
  }
}


export function buildIndex(LIST, code, indexedObj) {
  if (!isNone(indexedObj)) { return indexedObj; }
  indexedObj = LIST.reduce((prev, el) => {
    prev[el[code]] = el;
    return prev;
  }, {});
  return indexedObj;
}
