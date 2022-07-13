import { Inject } from '@nestjs/common';
import { ConnectedSocket, MessageBody, OnGatewayConnection, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Repository } from 'typeorm';
import { saveMessage } from './dto/message.dto';
import { WebSoket } from './websket.entity';


@WebSocketGateway()
export class WebSocketService implements OnGatewayConnection {

    constructor(
        @Inject('WEBSOCKET_REPOSITORY')
        private socketRepository: Repository<WebSoket>,
    ) { }

    async findmessages(): Promise<WebSoket[]> {
        return await this.socketRepository.find();
    }

    async saveMessage(data: saveMessage): Promise<any> {
        return await this.socketRepository.save(data);
    }

    @WebSocketServer()
    private server: Server

    handleConnection(client: Socket, ...args: any[]) {
        // console.log(client.id)
    }

    @SubscribeMessage('send-message')
    async sendMessage(
        @ConnectedSocket() client: Socket,
        @MessageBody() boby: any) {
        await this.saveMessage(boby)
        client.broadcast.emit('receive-message', boby)
        client.emit('receive-message', boby)
        // console.log(boby.name)
        // console.log(boby.message)

    }
}
