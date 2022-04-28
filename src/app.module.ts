import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//Libreria para conectar a la base de datos
import { TypeOrmModule } from '@nestjs/typeorm';
//Se importan los modulos creados
import { Jugador } from './Jugador/jugador.entity';
import { JugadorModule } from './Jugador/jugador.module'
import { Niveles } from './Niveles/niveles.entity';
import { NivelesModule } from './Niveles/niveles.module'
import { Partidas } from './Partidas/partidas.entity';
import { PartidasModule } from './Partidas/partidas.module'
import { PartidaNivel } from './Partida_Nivel/partida_nivel.entity';
import { PartidaNivelModule } from './Partida_Nivel/partida_nivel.module'
import { PartidaNivelIntento } from './PartidaNivelIntento/partida_nivel_intento.entity';
import { PartidaNivelIntentoModule } from './PartidaNivelIntento/partida_nivel_intento.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost', //DigitalOcean
      port: 3306,
      username: 'root',
      password: '',
      database: 'pruebaNEST',
      entities: [Jugador, Niveles, Partidas, PartidaNivel, PartidaNivelIntento],
      autoLoadEntities: true,
      synchronize: false,
    }), JugadorModule, NivelesModule, PartidasModule, PartidaNivelModule, PartidaNivelIntentoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
