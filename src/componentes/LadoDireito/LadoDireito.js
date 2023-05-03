import './LadoDireito.css';
import FotoPerfil from "./componentes/imagens/perfil.png";

import FotoPerfil1 from "./componentes/imagens/bunny.jpg";
import FotoPerfil2 from "./componentes/imagens/lucario.jpg";
import FotoPerfil3 from "./componentes/imagens/trekko.jpg";
import FotoPerfil4 from "./componentes/imagens/bunny.jpg";
import FotoPerfil5 from "./componentes/imagens/trekko.jpg";

import ItemSugestao from './componentes/ItemSugestao';


export default function LadoDireito() {
    return (

        <div className='LadoDireito'>
            <div className='Perfil'>
                <ItemSugestao imgPerfil={FotoPerfil} nome='Squirtle' descricao='Um Pokémon de água' texto='Mais' />
                <div className='linha'></div>
            </div>
            <div className='Sugestao'>
                <div className='text1'>
                    <p className='text'>Sugestões para você</p>
                    <p className='text'>Ver tudo</p>
                </div>
                <ItemSugestao imgPerfil={FotoPerfil1} nome='Bunny' descricao='Um Pokémon de fogo,Um Pokémon de fogo,Um Pokémon de fogo,Um Pokémon de fogo' texto='Seguir' />
                <ItemSugestao imgPerfil={FotoPerfil2} nome='lucario' descricao='Um Pokémon lutador,Um Pokémon lutador,Um Pokémon lutador' texto='Seguir' />
                <ItemSugestao imgPerfil={FotoPerfil3} nome='trekko' descricao='Um Pokémon de planta,Um Pokémon lutador,Um Pokémon lutador' texto='Seguir' />
                <ItemSugestao imgPerfil={FotoPerfil4} nome='Bunny' descricao='Um Pokémon de fogo,Um Pokémon lutador,Um Pokémon lutador' texto='Seguir' />
                <ItemSugestao imgPerfil={FotoPerfil5} nome='trekko' descricao='Um Pokémon de planta,Um Pokémon lutador,Um Pokémon lutador ' texto='Seguir' />

            </div>
            <div className='Ajuda'>
                <div className='sobre'>
                    <p className='paragrafo1'>Sobre·Ajuda·Imprensa·API·Carreiras·Privacidade </p>
                    <span className='paragrafo2'> Termos·Localizações·Idioma·Meta Verified </span>
                </div>
                <p className="paragrafo3"> © 2023 INSTAGRAM FROM META </p>
            </div>
        </div>

    );
}