"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.post('/api/borrows', (req, res) => {
    const borrowRequest = req.body;
    // Here you would typically save the borrowRequest to your database
    console.log('Borrow request received:', borrowRequest);
    // For now, we'll just send a success response
    res.status(201).json({ message: 'Film rented successfully', borrowRequest });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
