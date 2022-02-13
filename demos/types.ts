import { NativeStackScreenProps } from '@react-navigation/native-stack';

export enum Routes {
  Home = 'Home',
  Details = 'Details',
  Modal = 'Modal',
  Unknown = 'Unknown',

  HomesTab = 'HomesTab',
  SettingsTab = 'SettingsTab'
}

export type RootStackParamList = {
  [Routes.Home]: undefined | {msg: string};
  [Routes.Details]: {id: string};
  [Routes.Modal]: undefined;
  [Routes.Unknown]: undefined;

  [Routes.HomesTab]: undefined;
  [Routes.SettingsTab]: undefined;
};

export type HomeProps = NativeStackScreenProps<RootStackParamList, Routes.Home>;
export type DetailsProps = NativeStackScreenProps<RootStackParamList, Routes.Details>;
export type ModalProps = NativeStackScreenProps<RootStackParamList, Routes.Modal>;
export type UnknownProps =  NativeStackScreenProps<RootStackParamList, Routes.Unknown>;
export type SettingsProps = NativeStackScreenProps<RootStackParamList, Routes.SettingsTab>;
