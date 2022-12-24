import GlobalService from './global-service';
import {Blacklist} from '../models/Blacklist.js';

class BlacklistService {
    /** Get all blacklisted Exercises **/
    getBlacklist(): Promise<Blacklist[]> {
        return GlobalService.get('blacklist').then(res => res.data);
    }
}

export default new BlacklistService();