import GlobalService from './global-service';
import {Workout} from '../models/Workout';

class WorkoutService {
    /** Get all Workouts **/
    getWorkoutList(): Promise<Workout[]> {
        return GlobalService.get('workouts').then(res => res.data);
    }

    /** Add new Workout **/
    addWorkout(payload: Workout): Promise<Workout> {
        return GlobalService.post('workouts', payload).then(res => res.data);
    }
}

export default new WorkoutService();