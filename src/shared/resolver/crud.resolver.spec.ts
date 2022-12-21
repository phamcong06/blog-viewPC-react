import { Test, TestingModule } from '@nestjs/testing';
import { CrudResolver } from './crud.resolver';

describe('CrudResolver', () => {
  let resolver: CrudResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CrudResolver],
    }).compile();

    resolver = module.get<CrudResolver>(CrudResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
