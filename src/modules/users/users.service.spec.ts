import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';

describe('UsersService', () => {
    let usersService: UsersService;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                UsersService,
                {
                    provide: UsersService,
                    useValue: usersService,
                },
            ],
        }).compile();

        usersService = module.get<UsersService>(UsersService);
    });

    it('should be defined', () => {
        expect(usersService).toBeDefined();
    });
});
