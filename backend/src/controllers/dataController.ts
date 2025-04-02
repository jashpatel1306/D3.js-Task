import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

// Helper function to read JSON data
const readJSONFile = (fileName: string) => {
    const filePath = path.join(__dirname, '..', 'data', fileName);
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
};

// Controllers
export const getAccountIndustry = (req: Request, res: Response) => {
    res.json(readJSONFile('accountIndustry.json'));
};

export const getCustomerType = (req: Request, res: Response) => {
    res.json(readJSONFile('customerType.json'));
};

export const getTeam = (req: Request, res: Response) => {
    res.json(readJSONFile('team.json'));
};
