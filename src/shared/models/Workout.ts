import {Exercise} from './Exercise';

export interface Workout {
    units: WorkoutUnit[];
}

interface WorkoutUnit {
    day: Day;
    type: WorkoutType;
    exerciseList: Exercise[];
}

enum Day {
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6,
    Sunday = 7,
}

enum WorkoutType {
    CHEST = 'Chest',
    BACK = 'Back',
    LEG = 'Leg',
    SHOULDER = 'Shoulder',
    NECK = 'Neck',
    BICEPS = 'Biceps',
    Triceps = 'Triceps',
    ABS = 'Abs',
    REST = 'Rest',
    OTHER = 'Other'
}