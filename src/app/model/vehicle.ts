export class Vehicle {
    type: VehicleType;
    identification: string;
}

export enum VehicleType {
    CAR = "Carro",
    BIKE = "Bicicleta",
    MOTORCYCLE = "Moto",
    BOAT = "Barco"
}