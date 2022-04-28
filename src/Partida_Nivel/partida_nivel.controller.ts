import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { PartidaNivelService } from './partida_nivel.service';

@Controller('partida_nivel')
export class PartidaNivelController {
    constructor(private readonly PartidaNivelservice: PartidaNivelService) { }

    @Get()
    sayHelloPartidaNivel(): string {
        var answer = this.PartidaNivelservice.helloPartidaNivel();
        return answer;
    }    
}