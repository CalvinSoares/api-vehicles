import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from 'fastify';
import { IVehicle } from '../models/Model.Vehicle';
import Vehicle from '../models/Model.Vehicle';

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

    fastify.post("/vehicles", async (request: FastifyRequest, reply: FastifyReply) => {
        try {
            const vehicleData = request.body as IVehicle;
            const newVehicle = new Vehicle(vehicleData)

            await newVehicle.save();
            reply.code(201).send(newVehicle)
        } catch (err) {
            console.error('Error creating vehicle:', err);
            reply.code(500).send({ err: 'internal server error' });
        }
    });

    fastify.get('/vehicles', async (request: FastifyRequest, reply: FastifyReply) => {
        try {
        
            const vehicles = await Vehicle.find();
            reply.code(200).send(vehicles);
        } catch (err) {

            console.error('Error fetching vehicles:', err);
            reply.code(500).send({ error: 'server error' })
        }
    })

    fastify.put('/vehicles/:id', async (request: FastifyRequest, reply: FastifyReply) => {
        try {
            const params = request.params as { id: string };
            const { id } = params;
            const vehiclesData = request.body as IVehicle;
            const updatedVehicle = await Vehicle.findByIdAndUpdate(id, vehiclesData, { new: true })
            reply.send(updatedVehicle);

        } catch (err) {
            console.error('Error fetching vehicles:', err);
            reply.code(500).send({ error: 'server error' })
        }
    });

    fastify.delete('/vehicles/:id', async (request: FastifyRequest, reply: FastifyReply) => {
        try {
            const params = request.params as { id: string };
            const { id } = params;
            await Vehicle.findByIdAndDelete(id);
            reply.send({ message: 'Vehicle deleted successfully' })
        } catch (err) {
            console.error('Error deleting vehicle:', err);
            reply.code(500).send({ err: 'internal server error' });
        }
    })

}
