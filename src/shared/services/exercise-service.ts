import axios from 'axios';
import {Exercise} from '../models/Exercise';

const _http = axios.create({
    baseURL: 'http://localhost:8080/',
    headers: { 'Authorization': 'XXX_TOKEN' }
});

class ExerciseService {
    /**
     * Get all Exercise
     */
    getExerciseList(): Promise<Exercise[]> {
        return _http.get('/exercises').then(res => res.data);
    }

    /**
     * Add new Exercise
     */
    addExercise(exercise: Exercise): Promise<Exercise> {
        return _http.post('exercises', exercise).then(res => res.data);
    }
}

export default new ExerciseService();