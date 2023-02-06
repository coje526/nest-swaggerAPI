"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const app_service_1 = require("./app.service");
const create_user_dto_1 = require("./dto/create-user.dto");
const express_1 = require("express");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    login(data, response) {
        if (this.appService.login(data)) {
            return response.status(common_1.HttpStatus.OK).send("Good");
        }
        else {
            return response.status(common_1.HttpStatus.BAD_REQUEST).send("NOT GOOD");
        }
    }
    getAllUser() {
        return this.appService.getAllUser();
    }
    getById(id) {
        return this.appService.getById(id);
    }
};
__decorate([
    (0, common_1.Post)('login'),
    (0, common_1.HttpCode)(200),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'OK' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Not Found' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.login, typeof (_a = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _a : Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "login", null);
__decorate([
    (0, common_1.Get)('users'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The record is successfully created' }),
    (0, swagger_1.ApiHeader)({
        name: 'Authorization',
        description: 'Authorization token'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getAllUser", null);
__decorate([
    (0, common_1.Get)('user/:id'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The record is successfully created' }),
    (0, swagger_1.ApiHeader)({
        name: 'Authorization',
        description: 'Authorization token'
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getById", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map