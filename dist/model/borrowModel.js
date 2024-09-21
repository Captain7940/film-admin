"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const borrowSchema = new mongoose_1.default.Schema({
    book: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Book",
    },
    user: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
    },
    status: {
        type: String,
        default: "on",
    },
    backAt: {
        type: Number,
    },
    createDAt: {
        type: Number,
        default: Date.now(),
    },
    updatedAt: {
        type: Number,
        default: Date.now(),
    },
});
exports.default = borrowSchema;
