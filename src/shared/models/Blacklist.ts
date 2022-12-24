import {Exercise} from './Exercise';

export interface Blacklist {
    id?: number;
    exerciseName: string;
    exercise?: Exercise;
    reason?: string;
    reasonProof?: string;
}