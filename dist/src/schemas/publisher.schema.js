"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publishers = void 0;
const mongoose_1 = require("mongoose");
const publisherSchema = new mongoose_1.Schema({
    publisherName: String
});
exports.publishers = (0, mongoose_1.model)('publisher', publisherSchema, 'publishers');
//# sourceMappingURL=publisher.schema.js.map