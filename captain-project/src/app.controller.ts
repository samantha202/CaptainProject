import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import {PrismaService} from 'prisma/prisma.services';
import { Post} from '@prisma/client';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
              private readonly prismaService: PrismaService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('posts')
  async post(): Promise<Post[]>{
    return this.prismaService.post.findMany();
  }
  @Get('post/:id')
  async posts(@Param('id') id: string): Promise<Post>{
    return this.prismaService.post.findUnique({where: {id: +id}});
  }
}
