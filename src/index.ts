import cors from 'cors'
import express from 'express';
import helmet from 'helmet';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import * as productCRUD from './product-crud';

dotenv.config();

if(!process.env.PORT){
    console.log('Error to get no port');
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => 
    res.send('Hellow world with express')
);
app.get('/products', productCRUD.getProductList);
app.post('/products',productCRUD.createProduct);
app.post('/updateproduct',productCRUD.updateroduct);
app.post('/deleteproduct',productCRUD.deleteproduct);