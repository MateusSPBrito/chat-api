import { DataSource } from 'typeorm';

export const dbUSerProviders = [
  {
    provide: 'DATA_SOURCE_USER',
    useFactory: async () => {
      const dataSourceUser = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'users',
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: true,
      });

      return dataSourceUser.initialize();
    },
  },
];