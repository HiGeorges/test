import { ParseIdPipe } from '../pipes';

export enum Roles {
  ADMIN = 'ADMIN',
  CUSTOMER = 'CUSTOMER',
  EVENTMANAGER = 'EVENTMANAGER',
  EVENTAGENT = 'EVENTAGENT',
  TICKETSELLER = 'TICKETSELLER',
}

export enum UserSTATUS {
  CREATED = 'CREATED',
  ACTIVE = 'ACTIVE',
  SUSPENDED = 'SUSPENDED',
  DISABLED = 'DISABLED',
}

export enum TransactionSTATUS {
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  FAILED = 'FAILED',
  REFUNDED = 'REFUNDED',
}
export enum TransactionTYPES {
  DEPOSIT = 'DEPOSIT',
  WITHDRAWAL = 'WITHDRAWAL',
  TRANSFER = 'TRANSFER',
  REFUND = 'REFUND',
  PAYMENT = 'PAYMENT',
}
export enum TransactionMETHODS {
  CREDITCARD = 'CREDITCARD',
  BANKTRANSFER = 'BANKTRANSFER',
  PAYPAL = 'PAYPAL',
  CASH = 'CASH',
  MTNBJ = 'MTNBJ',
  MOOVBJ = 'MOOVBJ',
  OTHER = 'OTHER',
}

export enum EventVisibility {
  PRIVATE = 'PRIVATE',
  PUBLIC = 'PUBLIC',
  ARCHIVED = 'ARCHIVED',
}

export class JWT_PAYLOAD {
  _id: ParseIdPipe;
  role: Roles;
}
