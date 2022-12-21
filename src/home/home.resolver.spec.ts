import { Test, TestingModule } from '@nestjs/testing';
import { HomeResolver } from './home.resolver';

describe('HomeResolver', () => {
  let resolver: HomeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HomeResolver],
    }).compile();

    resolver = module.get<HomeResolver>(HomeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
