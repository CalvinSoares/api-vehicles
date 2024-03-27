import { FastifyRequest, FastifyReply } from 'fastify';
import { IVehicle } from '../models/Model.Vehicle';
import { CreateVehicleService } from '../services/CreateVehicle.Service';

export const createVehicle = async (req: FastifyRequest, reply: FastifyReply): Promise<void> => {
  try {
    const vehicleData = req.body as IVehicle;
    const createVehicleService = new CreateVehicleService();
    const newVehicle = await createVehicleService.execute(vehicleData);
    
    reply.status(201).send(newVehicle);
  } catch (error) {
    console.error('Error creating vehicle:', error);
    reply.status(500).send({ error: 'Internal server error' });
  }
};


