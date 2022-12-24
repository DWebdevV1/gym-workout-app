import GlobalService from './global-service';
import {Exercise} from '../models/Exercise';

class ExerciseService {
    /** Get all Exercise **/
    getExerciseList(): Promise<Exercise[]> {
        return GlobalService.get('exercises').then(res => res.data);
    }

    /** Add new Exercise **/
    addExercise(payload: Exercise): Promise<Exercise> {
        return GlobalService.post('exercises', payload).then(res => res.data);
    }
}

export default new ExerciseService();