import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: '3addka33235sa',
      name: 'Olive Oil',
      description: 'Made in Rwanda',
      qty: 50,
    },
    {
      id: '3adda37893235sa',
      name: 'Soap',
      description: 'Made in Kenya',
      qty: 120,
    },
    {
      id: '3ad70077a33235sa',
      name: 'Rice',
      description: 'Made in Tzd',
      qty: 1000,
    },
  ];

  findAll(): Item[] {
    return this.items;
  }
  findOne(id: string): Item {
    return this.items.find((item) => item.id === id);
  }
}
