import GlobalService from './global-service';
import {Workout} from '../models/Workout';

class WorkoutService {
    /** Get all Workouts **/
    getWorkoutList(): Promise<Workout[]> {
        return GlobalService.get('workouts').then(res => res.data);
    }

    /** Add new Workout **/
    addWorkout(exercise: Workout): Promise<Workout> {
        return GlobalService.post('workouts', exercise).then(res => res.data);
    }
}

export default new WorkoutService();
