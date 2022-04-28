import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { PartidasService } from './partidas.service';

@Controller('partidas')
export class PartidasController {
    constructor(private readonly Partidasservice: PartidasService) { }

    @Get()
    sayHelloPartidas(): string {
        var answer = this.Partidasservice.helloPartidas();
        return answer;
    }    
}