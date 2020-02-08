// @flow

import variable from './../variables/platform';

export default (variables /* : * */ = variable) => {
  const h1Theme = {
    color: variable.brandGreen,
    fontSize: variable.fontSizeH1,
    lineHeight: variable.lineHeightH1,
  };

  return h1Theme;
};
