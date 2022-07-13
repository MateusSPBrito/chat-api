import { Module } from '@nestjs/common';
import { dbUSerProviders } from './dbUsers.providers';

@Module({
  providers: [...dbUSerProviders],
  exports: [...dbUSerProviders],
})
export class DBUserModule {}