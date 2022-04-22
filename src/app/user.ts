
import { UUID } from 'angular2-uuid';

export interface User {
    id: Number | null;
    salutation: string;
    firstName: string;
    lastName: string;
    emailAddress: string;
    birthDate: Date;
}