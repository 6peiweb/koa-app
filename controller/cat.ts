import { Path, Get, Post, Param, Query, Ctx, Next } from '../src';

@Path('/api/cat')
class CatController {

  @Get
  @Path('/eat/:name/age/:age')
  eatMeat(@Param('name') name: string, 
          @Param('age') age: number, 
          @Query('query') query: Object, 
          @Ctx('ctx') ctx: any, 
          @Next('next') next: any) {
    return {
      a: name
    }
  }

  @Post
  @Path('/eat/cao')
  eatCao() {
    return {
      b: 2
    }
  }
  
}

export { CatController };
