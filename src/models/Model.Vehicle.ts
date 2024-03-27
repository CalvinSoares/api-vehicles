import mongoose, { Schema, Document } from 'mongoose';

interface IVehicle extends Document {
    marca: string;
    modelo: string;
    ano: number;
    cor: string;
    preço: string;
    motor: string;
    ficha_técnica: string;
    foto: string;
    created_at?: Date;
    updated_at?: Date;

}

const vehicleSchema: Schema = new Schema({
  marca: { type: String, required: true },
  modelo: { type: String, required: true },
  ano: { type: Number, required: true },
  cor: { type: String, required: true },
  preço: { type: String, required: true },
  motor: { type: String, required: true },
  ficha_técnica: { type: String, required: true },
  foto:{ type: String },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const Vehicle = mongoose.model<IVehicle>('Vehicle', vehicleSchema);

export default Vehicle

export { IVehicle }

