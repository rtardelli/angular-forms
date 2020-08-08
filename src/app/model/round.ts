import { User } from './user';
import { Vehicle } from './vehicle';

export class Round {
    first: User;
    second?: User;
    vehicle: Vehicle;
    startDate: Date;
}