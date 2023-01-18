import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
    let usersController: UsersController;
    let usersService = {};

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [UsersController],
            providers: [
                {
                    provide: UsersService,
                    useValue: usersService,
                },
            ],
        }).compile();

        usersController = module.get<UsersController>(UsersController);
    });

    it('should be defined', () => {
        expect(usersController).toBeDefined();
    });
});
