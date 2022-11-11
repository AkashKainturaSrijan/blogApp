import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  findOne(id: number) {
    throw new Error('Method not implemented.');
  }
}
