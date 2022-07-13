import { Module } from '@nestjs/common';
import { dbSocketProviders } from './dbSocket.providers';

@Module({
  providers: [...dbSocketProviders],
  exports: [...dbSocketProviders],
})
export class DBSocketModule {}