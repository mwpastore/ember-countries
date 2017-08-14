import Em from 'ember';

import { getCountry } from 'ember-countries';

const {
  Helper: { helper }
  } = Em;

export default helper(([value]) => getCountry(value));
