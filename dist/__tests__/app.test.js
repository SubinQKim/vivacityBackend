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
const supertest_1 = __importDefault(require("supertest"));
const app_1 = require("../app"); // Import your Express app instance
let server;
const testPort = 7002;
beforeAll((done) => {
    jest.resetModules(); // Reset modules before each test
    server = app_1.app.listen(testPort, done);
}, 10000);
afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield new Promise((resolve) => {
        server.close(resolve);
    });
}));
describe('POST /fun/info', () => {
    it('should insert fun info into the database', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.app)
            .post('/fun/info')
            .send({
            name: 'Test Name',
            hobbies: ['Hobby 1', 'Hobby 2'],
            favoriteFood: 'Test Food',
        });
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Fun information inserted successfully');
    }));
});
