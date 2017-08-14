import Em from 'ember';

import { isCustomsDeclarationRequiredInUS } from 'ember-countries';

const {
  Helper: { helper }
  } = Em;

export default helper(([stateFrom, stateTo]) => isCustomsDeclarationRequiredInUS(stateFrom, stateTo));
