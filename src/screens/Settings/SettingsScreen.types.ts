export type SettingItemType = 'navigation' | 'switch';

export interface SettingItemProps {
  type: SettingItemType;
  title: string;
  value?: string;
  switchValue?: boolean;
  onPress?: () => void;
  onSwitchChange?: (value: boolean) => void;
}