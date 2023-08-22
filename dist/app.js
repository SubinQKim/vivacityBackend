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
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const db_1 = require("./db");
const cors_1 = __importDefault(require("cors"));
exports.app = (0, express_1.default)();
const port = 7001;
//enable cors to allow reqs from diff origins
exports.app.use((0, cors_1.default)());
// Parse incoming json reqs
exports.app.use(express_1.default.json());
exports.app.post("/fun/info", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Received a POST request to /fun/info");
    const { name, hobbies, favoriteFood } = req.body;
    const funInfo = {
        name,
        hobbies,
        favoriteFood,
    };
    try {
        yield (0, db_1.insertFunInfo)(funInfo);
        res.json({ message: "Fun information inserted successfully" });
    }
    catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}));
//Start the server
if (require.main == module) {
    exports.app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
}
//API endpoint (old, before stretch activity)
// app.get("/awesome/applicant", (req: Request, res: Response) =>  {
//     const funInfo = {
//         name: "Subin Kim",
//         hobbies: ["Reading Space Operas", "Redesigning room", "Listening to hip hop"],
//         favoriteCoffee: "Iced Vanilla Latte",
//     };
//     res.json(funInfo);
// });
// below is the create table query used in PG Admin 4
// CREATE TABLE fun_info (
//     id SERIAL PRIMARY KEY,
//     name VARCHAR(255) NOT NULL,
//     hobbies TEXT[],
//     favorite_food VARCHAR(255) NOT NULL
// );
