import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { PartidaNivelIntentoService } from './partida_nivel_intento.service';

@Controller('partida_nivel_intento')
export class PartidaNivelIntentoController {
    constructor(private readonly PartidaNivelIntentoservice: PartidaNivelIntentoService) { }

    @Get()
    sayHelloPartidaNivelIntento(): string {
        var answer = this.PartidaNivelIntentoservice.helloPartidaNivelIntento();
        return answer;
    }    
}