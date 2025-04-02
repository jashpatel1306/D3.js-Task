"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dataController_1 = require("../controllers/dataController");
const router = express_1.default.Router();
router.get('/account-industry', dataController_1.getAccountIndustry);
router.get('/customer-type', dataController_1.getCustomerType);
router.get('/team', dataController_1.getTeam);
exports.default = router;
