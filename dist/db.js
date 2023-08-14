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
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertFunInfo = exports.pool = void 0;
//database configuration file
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'vivacityDB',
    password: 'nyqcelerity!21Foxglove',
    port: 5432,
});
exports.pool = pool;
function insertFunInfo(info) {
    return __awaiter(this, void 0, void 0, function* () {
        const query = `INSERT INTO fun_info (name, hobbies, favorite_food) VALUES ($1, $2, $3)`;
        const values = [info.name, info.hobbies, info.favoriteFood];
        try {
            yield pool.query(query, values);
            console.log('Inserted info into the db');
        }
        catch (error) {
            console.error('Error inserting fun info:', error);
        }
    });
}
exports.insertFunInfo = insertFunInfo;
