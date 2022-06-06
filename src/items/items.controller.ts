import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Param,
  Body,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item'

@Controller('items')
export class ItemsController {
  @Get()
  findAll(): string {
    return 'Get All Items';
  }

  @Get(':id')
  findOne(@Param() param): CreateItemDto {
    return param;
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): CreateItemDto {
    return createItemDto;
  }

  @Delete(':id')
  delete(@Param('id') id): string {
    return `Item ${id} deleted successful`;
  }
  @Put(':id')
  update(
    @Body() updatedItem: CreateItemDto,
    @Param() param,
  ): [string, CreateItemDto] {
    return [`ItemId: ${param.id}`, updatedItem];
  }
}
