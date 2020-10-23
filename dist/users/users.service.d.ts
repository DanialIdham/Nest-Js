import { Repository } from 'typeorm';
import { UsersEntity } from './users.entity';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: Repository<UsersEntity>);
    getAllUsers(): Promise<UsersEntity[]>;
    createUser(userEntity: UsersEntity): Promise<void>;
}
