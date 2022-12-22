import { UploadedFile, UseInterceptors } from '@nestjs/common'
import { Resolver, Mutation, Args } from '@nestjs/graphql'
import { FileInterceptor } from '@nestjs/platform-express'
@Resolver()
export class UploadsResolver {
  @Mutation(() => Boolean)
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file, @Args() args) {
    console.log(file)
    console.log(args)
    // fazer alguma coisa com o arquivo aqui
    return true
  }
}
