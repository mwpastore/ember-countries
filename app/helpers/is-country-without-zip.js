import Em from 'ember';

import { isCountryWithoutZip } from 'ember-countries';

const {
  Helper: { helper }
  } = Em;

export default helper(([value]) => isCountryWithoutZip(value));
