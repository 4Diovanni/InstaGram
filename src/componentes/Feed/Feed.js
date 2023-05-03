import './Feed.css';

import Post from './componentes/Post/Post'

import imgPerfilExemplo01 from './imagens/radiantPerfil.png';
import imgPerfilExemplo02 from './imagens/flashPerfil.png';
import imgPerfilExemplo04 from './imagens/SpideyPerfil.png';
import imgPerfilExemplo03 from './imagens/oharaPerfil.png';

import imgExemplo01 from './imagens/radiant.png';
import imgExemplo02 from './imagens/flashSpeed.png';
import imgExemplo03 from './imagens/miguelOhara.png';
import imgExemplo04 from './imagens/spiderVenom.png';

import { BsChat } from "react-icons/bs"; // chat escrever
import { BsSend } from "react-icons/bs"; // send
import { BsHeart  } from "react-icons/bs";// coração
import { BsBookmark} from "react-icons/bs"; // favorito

export default function Feed() {
    return (
        <div className="Feed">

            <Post
                nomePerfil="Radiant"
                imagemPost={imgExemplo01}
                imagemPerfil={imgPerfilExemplo01}
                icon1={<BsHeart/>}
                icon2={<BsChat/>}
                icon3={<BsSend/>}
                icon4={<BsBookmark/>}
                nome="Giovanna"
                pessoas=" Emily0202, CaioRo"
                descricao="Meus poderes, minhas regras"
                
            />
            

            <Post
                nomePerfil="The Flash"
                imagemPost={imgExemplo02}
                imagemPerfil={imgPerfilExemplo02}
                icon1={<BsHeart/>}
                icon2={<BsChat/>}
                icon3={<BsSend/>}
                icon4={<BsBookmark/>}
                nome="Alisson"
                pessoas="Giovanni.4, Amand6 e lucas"
                descricao="Eu tenho que ir rapido"
            />

            <Post
                nomePerfil="Ohara's"
                imagemPost={imgExemplo03}
                imagemPerfil={imgPerfilExemplo03}
                icon1={<BsHeart/>}
                icon2={<BsChat/>}
                icon3={<BsSend/>}
                icon4={<BsBookmark/>}
                nome="Giovanni"
                pessoas=" outras pessoas"
                descricao="Myles..Eu vou te salvar!"
            />
            <Post
                nomePerfil="Spider Venom"
                imagemPost={imgExemplo04}
                imagemPerfil={imgPerfilExemplo04}
                icon1={<BsHeart/>}
                icon2={<BsChat/>}
                icon3={<BsSend/>}
                icon4={<BsBookmark/>}
                nome="Gabriela"
                pessoas=" GiovanaS7, JuliaRE4"
                descricao="Tudo está perdido"
            />

        </div>
    )
}