import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Param,
  Body,
} from '@nestjs/common';

@Controller('items')
export class ItemsController {
  @Get()
  findAll(): string {
    return 'Get all items';
  }

  @Get(':id')
  findOne(@Param() param): string {
    return 'Get single item';
  }

  @Post()
  create(): string {
    return 'Create Item';
  }

  @Delete(':id')
  delete(@Param('id') id): string {
    return 'Item deleted successful';
  }
  @Put(':id')
  update(@Body() updatedObject: UpdatedObject, @Param() param): string {
    return 'Item updated successful';
  }
}
