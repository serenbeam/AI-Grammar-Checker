import { memo } from 'react';

import { TabBarIconProps } from './TabBarIcon.types';

export const TabBarIcon = memo(
  ({
    icon: Icon,
    color,
    size = 22,
  }: TabBarIconProps) => {
    return (
      <Icon
        size={size}
        color={color}
      />
    );
  },
);

TabBarIcon.displayName = 'TabBarIcon';