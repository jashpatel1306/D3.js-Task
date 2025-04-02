import express from 'express';
import { getAccountIndustry, getCustomerType, getTeam } from '../controllers/dataController';

const router = express.Router();

router.get('/account-industry', getAccountIndustry);
router.get('/customer-type', getCustomerType);
router.get('/team', getTeam);

export default router;
