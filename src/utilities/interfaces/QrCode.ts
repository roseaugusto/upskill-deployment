import { User } from './User';

export interface QrCode {
  user: User;
  qrCodeDataUri: string;
}
