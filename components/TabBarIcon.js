import React from 'react';
import WalaIcon from './WalaIcon';

import Colors from '../constants/Colors';

export default function TabBarIcon(props) {
  return (
    <WalaIcon
      name={props.name}
      size={24}
      style={{ marginBottom: -3 }}
      color={
        props.focused
          ? Colors.brandGreen
          : Colors.brandGray0
      }
    />
  );
}
