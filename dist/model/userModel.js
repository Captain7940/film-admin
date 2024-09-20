"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const filmSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
    nickName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
    },
    sex: {
        type: String,
    },
    status: {
        type: String,
    },
    role: {
        type: String,
    },
});
exports.default = filmSchema;
