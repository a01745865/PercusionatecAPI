import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { Partidas } from './partidas.entity';


@Injectable()
export class PartidasService {
    constructor(
        @InjectRepository(Partidas)
        private partidasRepository: Repository<Partidas>,
    ) { }

    helloPartidas(): string{
        return "Hola, esta es la ruta para partidas";
    }
}