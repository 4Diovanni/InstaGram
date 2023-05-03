import './LadoEsquerdo.css';

import Logo from './componentes/imagens/logo.png';
import ItemMenu from './componentes/ItemMenu';
import PerfilFoto from './componentes/imagens/squirtle.jpg';

import { BiHomeAlt2 } from "react-icons/bi";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { CgClapperBoard } from "react-icons/cg";
import { AiFillMessage } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineCompass } from "react-icons/ai";
import { MdOutlineAddBox } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";





export default function LadoEsquerdo() {
    return (

        <div className="LadoEsquerdo">
            <div className='logo'>

                <img src={Logo} alt='logo' />
            </div>
            
            <div className="menu-principal">

                <ItemMenu icone={<BiHomeAlt2 />} texto="Pagina inicial" />
                <ItemMenu icone={<HiOutlineMagnifyingGlass />} texto="Pesquisa" />
                <ItemMenu icone={<AiOutlineCompass />} texto="Explorar" />
                <ItemMenu icone={<CgClapperBoard />} texto="Reels" />
                <ItemMenu icone={<AiFillMessage />} texto="Mensagens" />
                <ItemMenu icone={<AiOutlineHeart />} texto="Notificações" />
                <ItemMenu icone={<MdOutlineAddBox />} texto="Criar" />
                <div className='imagemPerfil'>
                    <img src={PerfilFoto} alt=''></img>
                    <span> Perfil </span>
                </div>
                <ItemMenu icone={<AiOutlineMenu />} texto="Mais"/>
            </div>
        </div>
    )
}