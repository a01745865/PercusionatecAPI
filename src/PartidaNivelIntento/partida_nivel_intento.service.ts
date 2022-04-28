import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { PartidaNivelIntento } from './partida_nivel_intento.entity';


@Injectable()
export class PartidaNivelIntentoService {
    constructor(
        @InjectRepository(PartidaNivelIntento)
        private partida_nivel_intentoRepository: Repository<PartidaNivelIntento>,
    ) { }

    helloPartidaNivelIntento(): string{
        return "Bienvenido a partida nivel intento";
    }
}