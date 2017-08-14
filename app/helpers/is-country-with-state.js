import Em from 'ember';

import { isCountryWithState } from 'ember-countries';

const {
  Helper: { helper }
  } = Em;

export default helper(([value]) => isCountryWithState(value));
