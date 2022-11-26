import { ParseIdPipe } from '../pipes';
export declare enum Roles {
    ADMIN = "ADMIN",
    CUSTOMER = "CUSTOMER",
    EVENTMANAGER = "EVENTMANAGER",
    EVENTAGENT = "EVENTAGENT",
    TICKETSELLER = "TICKETSELLER"
}
export declare enum UserSTATUS {
    CREATED = "CREATED",
    ACTIVE = "ACTIVE",
    SUSPENDED = "SUSPENDED",
    DISABLED = "DISABLED"
}
export declare enum TransactionSTATUS {
    PENDING = "PENDING",
    SUCCESS = "SUCCESS",
    FAILED = "FAILED",
    REFUNDED = "REFUNDED"
}
export declare enum TransactionTYPES {
    DEPOSIT = "DEPOSIT",
    WITHDRAWAL = "WITHDRAWAL",
    TRANSFER = "TRANSFER",
    REFUND = "REFUND",
    PAYMENT = "PAYMENT"
}
export declare enum TransactionMETHODS {
    CREDITCARD = "CREDITCARD",
    BANKTRANSFER = "BANKTRANSFER",
    PAYPAL = "PAYPAL",
    CASH = "CASH",
    MTNBJ = "MTNBJ",
    MOOVBJ = "MOOVBJ",
    OTHER = "OTHER"
}
export declare enum EventVisibility {
    PRIVATE = "PRIVATE",
    PUBLIC = "PUBLIC",
    ARCHIVED = "ARCHIVED"
}
export declare class JWT_PAYLOAD {
    _id: ParseIdPipe;
    role: Roles;
}
