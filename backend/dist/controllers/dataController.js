"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTeam = exports.getCustomerType = exports.getAccountIndustry = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
// Helper function to read JSON data
const readJSONFile = (fileName) => {
    const filePath = path_1.default.join(__dirname, '..', 'data', fileName);
    return JSON.parse(fs_1.default.readFileSync(filePath, 'utf8'));
};
// Controllers
const getAccountIndustry = (req, res) => {
    res.json(readJSONFile('accountIndustry.json'));
};
exports.getAccountIndustry = getAccountIndustry;
const getCustomerType = (req, res) => {
    res.json(readJSONFile('customerType.json'));
};
exports.getCustomerType = getCustomerType;
const getTeam = (req, res) => {
    res.json(readJSONFile('team.json'));
};
exports.getTeam = getTeam;
