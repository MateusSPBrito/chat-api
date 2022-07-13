import { WebSocketService } from './websocket/websocket.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { WebSocketModule } from './websocket/websockt.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, WebSocketModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
