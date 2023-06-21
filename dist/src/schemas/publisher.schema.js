"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publisher = void 0;
const mongoose_1 = require("mongoose");
const publisherSchema = new mongoose_1.Schema({
    Name: String
});
exports.publisher = (0, mongoose_1.model)('Publisher', publisherSchema, 'publishers');
//# sourceMappingURL=publisher.schema.js.map