"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 3000;
//enable cors
app.use((0, cors_1.default)());
//API endpoint
app.get("/awesome/applicant", (req, res) => {
    const funInfo = {
        name: "Subin Kim",
        hobbies: ["Reading Space Operas", "Redesigning room", "Listening to hip hop"],
        favoriteCoffee: "Iced Vanilla Latte",
    };
    res.json(funInfo);
});
//Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
