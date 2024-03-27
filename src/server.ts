import fastify from 'fastify';
import mongoose from 'mongoose';
import cors from '@fastify/cors';
import { routes } from './routes/routes';
import dotenv from 'dotenv';

dotenv.config();

const app = fastify({ logger: true });

mongoose.connect(String(process.env.MONGODB_URI)); 

const start = async () => {

    await app.register(cors)
    await app.register(routes)
    
    try {
        await app.listen({ port: 3000 })
        console.log('Servidor Express em execução na porta 3000');
    } catch (err) {
        console.error('Erro ao iniciar o servidor:', err);
        process.exit(1);   
    }
}

start();
