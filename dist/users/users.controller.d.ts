import { UsersService } from './users.service';
import { UsersEntity } from './users.entity';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    get(): Promise<UsersEntity[]>;
    create(userEntity: UsersEntity): Promise<void>;
}
