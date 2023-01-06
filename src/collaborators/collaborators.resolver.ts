import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { CollaboratorsService } from './collaborators.service'
import { Collaborator } from './entities/collaborator.entity'
import { CreateCollaboratorInput } from './dto/create-collaborator.input'
import { UpdateCollaboratorInput } from './dto/update-collaborator.input'
import { UnitsService } from 'src/units/units.service'
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston'
import { Inject, LoggerService } from '@nestjs/common'

@Resolver(() => Collaborator)
export class CollaboratorsResolver {
  constructor(
    private readonly collaboratorsService: CollaboratorsService,
    private readonly unitsService: UnitsService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER) private readonly logger: LoggerService
  ) {}

  @Mutation(() => Collaborator)
  createCollaborator(
    @Args('createCollaboratorInput')
    createCollaboratorInput: CreateCollaboratorInput
  ) {
    this.logger.log({ message: 'Started Create Collaborator', level: 'info' })
    return this.collaboratorsService.create(createCollaboratorInput)
  }

  @Query(() => [Collaborator], { name: 'collaborators' })
  findAll() {
    this.logger.log({
      message: 'Started Find All Collaborators',
      level: 'info',
    })
    return this.collaboratorsService.findAll()
  }

  @Query(() => Collaborator, { name: 'collaborator' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    this.logger.log({ message: 'Started Find Collaborator', level: 'info' })
    return this.collaboratorsService.findOne(id)
  }

  @Mutation(() => Collaborator)
  updateCollaborator(
    @Args('updateCollaboratorInput')
    updateCollaboratorInput: UpdateCollaboratorInput
  ) {
    this.logger.log({ message: 'Started Update Collaborator', level: 'info' })
    return this.collaboratorsService.update(
      updateCollaboratorInput.id,
      updateCollaboratorInput
    )
  }

  @Mutation(() => Collaborator)
  removeCollaborator(@Args('id', { type: () => Int }) id: number) {
    this.logger.log({ message: 'Started Remove Collaborator', level: 'info' })
    return this.collaboratorsService.remove(id)
  }
}
