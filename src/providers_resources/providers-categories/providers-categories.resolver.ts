import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProvidersCategoriesService } from './providers-categories.service';
import { ProvidersCategory } from './entities/providers-category.entity';
import { CreateProvidersCategoryInput } from './dto/create-providers-category.input';
import { UpdateProvidersCategoryInput } from './dto/update-providers-category.input';

@Resolver(() => ProvidersCategory)
export class ProvidersCategoriesResolver {
  constructor(
    private readonly providersCategoriesService: ProvidersCategoriesService
  ) {}

  @Mutation(() => ProvidersCategory)
  createProvidersCategory(
    @Args('createProvidersCategoryInput')
    createProvidersCategoryInput: CreateProvidersCategoryInput
  ) {
    return this.providersCategoriesService.create(createProvidersCategoryInput);
  }

  @Query(() => [ProvidersCategory], { name: 'providersCategories' })
  findAll() {
    return this.providersCategoriesService.findAll();
  }

  @Query(() => ProvidersCategory, { name: 'providersCategory' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.providersCategoriesService.findOne(id);
  }

  @Mutation(() => ProvidersCategory)
  updateProvidersCategory(
    @Args('updateProvidersCategoryInput')
    updateProvidersCategoryInput: UpdateProvidersCategoryInput
  ) {
    return this.providersCategoriesService.update(
      updateProvidersCategoryInput.id,
      updateProvidersCategoryInput
    );
  }

  @Mutation(() => ProvidersCategory)
  removeProvidersCategory(@Args('id', { type: () => Int }) id: number) {
    return this.providersCategoriesService.remove(id);
  }
}
