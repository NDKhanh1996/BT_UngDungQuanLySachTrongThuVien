"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const router_1 = require("./src/router/router");
const app = (0, express_1.default)();
const port = 8080;
const DB_URL = 'mongodb://127.0.0.1:27017/Library';
mongoose_1.default.connect(DB_URL).then(() => { console.log('DB connection established'); }).catch(() => { console.log('DB connection failed'); });
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(__dirname, '../src/views'));
app.use(express_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(router_1.router);
app.listen(port, () => { console.log('Server is running on port ' + port); });
//# sourceMappingURL=index.js.map