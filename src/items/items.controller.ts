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
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemService: ItemsService) {}
  @Get()
  findAll(): Item[] {
    return this.itemService.findAll();
  }

  @Get(':id')
  findOne(@Param() param): Item {
    return this.itemService.findOne(param.id);
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
