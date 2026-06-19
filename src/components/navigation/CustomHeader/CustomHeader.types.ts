import { ReactNode } from "react";

export interface CustomHeaderProps {
  title: string;

  showBackButton?: boolean;

  onBackPress?: () => void;

  leftComponent?: ReactNode;

  rightComponent?: ReactNode;
}