import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class ProvidersCategory {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
