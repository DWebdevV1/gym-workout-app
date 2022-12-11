import GlobalService from './global-service';
import {Exercise} from '../models/Exercise';

class ExerciseService {
    /** Get all Exercise **/
    getExerciseList(): Promise<Exercise[]> {
        return GlobalService.get('exercises').then(res => res.data);
    }

    /** Add new Exercise **/
    addExercise(exercise: Exercise): Promise<Exercise> {
        return GlobalService.post('exercises', exercise).then(res => res.data);
    }
}

export default new ExerciseService();
