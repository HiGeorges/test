"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventTypeModule = void 0;
const common_1 = require("@nestjs/common");
const eventType_service_1 = require("./eventType.service");
const eventType_controller_1 = require("./eventType.controller");
const mongoose_1 = require("@nestjs/mongoose");
const schemas_1 = require("../../lib/schemas");
let EventTypeModule = class EventTypeModule {
};
EventTypeModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: schemas_1.EventType.name, schema: schemas_1.EventTypeSchema },
            ]),
        ],
        controllers: [eventType_controller_1.EventTypeController],
        providers: [eventType_service_1.EventTypeService],
        exports: [eventType_service_1.EventTypeService],
    })
], EventTypeModule);
exports.EventTypeModule = EventTypeModule;
//# sourceMappingURL=eventType.module.js.map