import Em from 'ember';

import { getStatesForCountry } from 'ember-countries';

const {
  Helper: { helper }
  } = Em;

export default helper(([value]) => getStatesForCountry(value));
