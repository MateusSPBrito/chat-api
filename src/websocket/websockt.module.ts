import { Module } from '@nestjs/common';
import { DBSocketModule } from 'src/dataBaseSocket/dbSocket.module';
import { websoketProviders } from './websket.providers';
import { WebSocketController } from './websocket.controller';
import { WebSocketService } from './websocket.service';

@Module({
  imports: [DBSocketModule],
  controllers: [WebSocketController],
  providers: [
    ...websoketProviders,
    WebSocketService,
  ],
  exports:[WebSocketService]
})
export class WebSocketModule { }