import { Body, Controller, Get, Post } from '@nestjs/common';
import { WebSoket } from './websket.entity';
import { WebSocketService } from './websocket.service';

@Controller('message')
export class WebSocketController{
    constructor(private readonly websocketservice: WebSocketService){}

    @Get()
    async listMessage():Promise<WebSoket[]>{
        return await this.websocketservice.findmessages();
    }
}