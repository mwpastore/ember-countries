import Em from 'ember';

import { getState } from 'ember-countries';

const {
  Helper: { helper }
  } = Em;

export default helper(([country, value]) => getState(country, value));
