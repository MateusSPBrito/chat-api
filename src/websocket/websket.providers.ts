import { DataSource } from 'typeorm';
import { WebSoket } from './websket.entity';

export const websoketProviders = [
  {
    provide: 'WEBSOCKET_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(WebSoket),
    inject: ['DATA_SOURCE_SOCKET'],
  },
];