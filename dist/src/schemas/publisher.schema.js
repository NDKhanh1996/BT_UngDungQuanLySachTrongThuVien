"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Publishers = void 0;
const mongoose_1 = require("mongoose");
const publisherSchema = new mongoose_1.Schema({
    name: String
});
exports.Publishers = (0, mongoose_1.model)('Publisher', publisherSchema, 'publishers');
//# sourceMappingURL=publisher.schema.js.map