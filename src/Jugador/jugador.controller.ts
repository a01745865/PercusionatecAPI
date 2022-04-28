import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { JugadorService } from './jugador.service';

@Controller('jugador')
export class JugadorController {
    constructor(private readonly Jugadorservice: JugadorService) { }

    @Get()
    sayHelloJugador(): string {
        var answer = this.Jugadorservice.helloJugador();
        return answer;
    }
    @Get(':usuario')
    sayBuscarUsuario(@Param('usuario') usuario) {
        var answer = this.Jugadorservice.buscarUsuario(usuario);
        return answer;
    }
    @Post()
    async RegistrarJugador(@Body() body) {
        const registro = this.Jugadorservice.registroJugador(body.usuario, body.nombre, body.ciudad, body.mail, body.contrasena, body.fechaNaci, body.nacionalidad);
        return "El jugador "+ body.usuario + "fue registrado con éxito";
    }
}