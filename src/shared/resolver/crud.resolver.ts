import { Type } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CrudService } from '../service/crud/crud.service';

export function CrudResolver<T, X, M, S extends CrudService<M, X>>(
  suffix: string,
  type: Type<T>,
  input: Type<X>,
): any {
  @Resolver({ isAbstract: true })
  abstract class BaseResolver {
    constructor(protected readonly service: S) {}
    @Query(() => [type], { name: `${suffix}` })
    async getData(
      @Args({ name: 'id', type: () => String, nullable: true }) id?: string,
    ): Promise<M[]> {
      if (id) {
        return await this.service.findById(id);
      } else {
        return await this.service.findAll();
      }
    }
    @Mutation(() => type, { name: `create${suffix}` })
    async createData(
      @Args({ name: 'input', type: () => input }) input: X,
    ): Promise<M> {
      return await this.service.create(input);
    }
    @Mutation(() => type, { name: `update${suffix}` })
    async updateData(
      @Args({ name: 'id', type: () => String }) id: string,
      @Args({ name: 'input', type: () => input }) input: X,
    ): Promise<M> {
      return await this.service.update(id, input);
    }
    @Mutation(() => type, { name: `delete${suffix}` })
    async deleteData(
      @Args({ name: 'id', type: () => String }) id: string,
    ): Promise<M> {
      return await this.service.delete(id);
    }
  }
  return BaseResolver;
}
