"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Film = exports.User = void 0;
const filmModel_1 = __importDefault(require("./filmModel"));
const userModel_1 = __importDefault(require("./userModel"));
const mongoose = require('mongoose');
var uri = "mongodb+srv://admin:admin@cluster0.iypxbdh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        mongoose.connect(uri);
    });
}
main()
    .then(() => {
    console.log('MongoDB Connected');
})
    .catch((err) => {
    console.log(err);
});
const User = mongoose.model('User', userModel_1.default);
exports.User = User;
const Film = mongoose.model('Film', filmModel_1.default);
exports.Film = Film;
