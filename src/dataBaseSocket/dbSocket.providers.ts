import { DataSource } from 'typeorm';

export const dbSocketProviders = [
  {
    provide: 'DATA_SOURCE_SOCKET',
    useFactory: async () => {
      const dataSourceSocket = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'message',
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: true,
      });

      return dataSourceSocket.initialize();
    },
  },
];