import Jogadores from "../Jogadores";
import Jogos from "../Jogos";
import Rodadas from "../Rodadas";
import Rodada_Intermediaria from "../rodada_intermediaria";
import Usuario from "../Usuario";

Rodada_Intermediaria.belongsTo(Jogadores, {foreignKey: 'id_jogador'});
Rodada_Intermediaria.belongsTo(Rodadas, {foreignKey: 'id_rodada'});
Rodada_Intermediaria.belongsTo(Jogos, {foreignKey: 'id_jogo'});

Jogadores.hasMany(Rodada_Intermediaria, {foreignKey: 'id_jogador'});
Rodadas.hasMany(Rodada_Intermediaria, {foreignKey: 'id_rodada'});
Jogos.hasMany(Rodada_Intermediaria, {foreignKey: 'id_jogo'});

Rodadas.belongsTo(Jogos, {foreignKey: 'id_jogo'});

export {Jogadores, Jogos, Rodadas, Rodada_Intermediaria, Usuario};