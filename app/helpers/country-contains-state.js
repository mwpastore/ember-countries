import Em from 'ember';

import { countryContainsState } from 'ember-countries';

const {
  Helper: { helper }
  } = Em;

export default helper(([country, state]) => countryContainsState(country, state));
