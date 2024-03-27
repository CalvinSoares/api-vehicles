import { IVehicle }  from '../models/Model.Vehicle'
import Vehicle from '../models/Model.Vehicle';

class CreateVehicleService {
    async execute(vehicleData: IVehicle): Promise<IVehicle> {
        const newVehicle = await Vehicle.create(vehicleData)
        return newVehicle;
    }
}

export { CreateVehicleService }