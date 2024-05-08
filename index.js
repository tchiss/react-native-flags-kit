import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import * as flags from './src';

const Flag = ({ size = 64, type = "shiny", code, style }) => {
  const flag = flags[type][`icons${size}`][code];
  const unknownFlag = flags[type][`icons${size}`]['unknown'];

  return (
      <Image
          source={flag || unknownFlag}
          style={[{ width: size, height: size }, style]}
      />
  );
};

Flag.propTypes = {
  size: PropTypes.number,
  type: PropTypes.string,
  code: PropTypes.string.isRequired,
  style: PropTypes.object,
};

export default Flag;
