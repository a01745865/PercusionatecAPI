import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { PartidaNivel } from './partida_nivel.entity';


@Injectable()
export class PartidaNivelService {
    constructor(
        @InjectRepository(PartidaNivel)
        private partida_nivelRepository: Repository<PartidaNivel>,
    ) { }

    helloPartidaNivel(): string{
        return "Bienvenido a partida nivel!";
    }
}