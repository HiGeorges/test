"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWT_PAYLOAD = exports.EventVisibility = exports.TransactionMETHODS = exports.TransactionTYPES = exports.TransactionSTATUS = exports.UserSTATUS = exports.Roles = void 0;
var Roles;
(function (Roles) {
    Roles["ADMIN"] = "ADMIN";
    Roles["CUSTOMER"] = "CUSTOMER";
    Roles["EVENTMANAGER"] = "EVENTMANAGER";
    Roles["EVENTAGENT"] = "EVENTAGENT";
    Roles["TICKETSELLER"] = "TICKETSELLER";
})(Roles = exports.Roles || (exports.Roles = {}));
var UserSTATUS;
(function (UserSTATUS) {
    UserSTATUS["CREATED"] = "CREATED";
    UserSTATUS["ACTIVE"] = "ACTIVE";
    UserSTATUS["SUSPENDED"] = "SUSPENDED";
    UserSTATUS["DISABLED"] = "DISABLED";
})(UserSTATUS = exports.UserSTATUS || (exports.UserSTATUS = {}));
var TransactionSTATUS;
(function (TransactionSTATUS) {
    TransactionSTATUS["PENDING"] = "PENDING";
    TransactionSTATUS["SUCCESS"] = "SUCCESS";
    TransactionSTATUS["FAILED"] = "FAILED";
    TransactionSTATUS["REFUNDED"] = "REFUNDED";
})(TransactionSTATUS = exports.TransactionSTATUS || (exports.TransactionSTATUS = {}));
var TransactionTYPES;
(function (TransactionTYPES) {
    TransactionTYPES["DEPOSIT"] = "DEPOSIT";
    TransactionTYPES["WITHDRAWAL"] = "WITHDRAWAL";
    TransactionTYPES["TRANSFER"] = "TRANSFER";
    TransactionTYPES["REFUND"] = "REFUND";
    TransactionTYPES["PAYMENT"] = "PAYMENT";
})(TransactionTYPES = exports.TransactionTYPES || (exports.TransactionTYPES = {}));
var TransactionMETHODS;
(function (TransactionMETHODS) {
    TransactionMETHODS["CREDITCARD"] = "CREDITCARD";
    TransactionMETHODS["BANKTRANSFER"] = "BANKTRANSFER";
    TransactionMETHODS["PAYPAL"] = "PAYPAL";
    TransactionMETHODS["CASH"] = "CASH";
    TransactionMETHODS["MTNBJ"] = "MTNBJ";
    TransactionMETHODS["MOOVBJ"] = "MOOVBJ";
    TransactionMETHODS["OTHER"] = "OTHER";
})(TransactionMETHODS = exports.TransactionMETHODS || (exports.TransactionMETHODS = {}));
var EventVisibility;
(function (EventVisibility) {
    EventVisibility["PRIVATE"] = "PRIVATE";
    EventVisibility["PUBLIC"] = "PUBLIC";
    EventVisibility["ARCHIVED"] = "ARCHIVED";
})(EventVisibility = exports.EventVisibility || (exports.EventVisibility = {}));
class JWT_PAYLOAD {
}
exports.JWT_PAYLOAD = JWT_PAYLOAD;
//# sourceMappingURL=index.js.map