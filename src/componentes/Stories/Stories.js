import './Stories.css';

import Story from './componentes/Story';

import imgExemplo01 from './imagens/fotoStories5.jpeg';
import imgExemplo02 from './imagens/fotoStories1.png';
import imgExemplo03 from './imagens/fotoStories2.jpg';
import imgExemplo04 from './imagens/fotoStories3.png';
import imgExemplo05 from './imagens/fotoStories4.jpg';


function Stories () {
    return(
        <div className="Stories">
        
            <Story imgPerfil={imgExemplo01} nomeDaConta="j4h20nny" />
            <Story imgPerfil={imgExemplo02} nomeDaConta="alisson_sas" />
            <Story imgPerfil={imgExemplo03} nomeDaConta="4dio.g4" />
            <Story imgPerfil={imgExemplo04} nomeDaConta="Bruce Wayne" />
            <Story imgPerfil={imgExemplo05} nomeDaConta="jhessy_sn" />
            <Story imgPerfil={imgExemplo01} nomeDaConta="j4h20nny" />
            <Story imgPerfil={imgExemplo02} nomeDaConta="alisson_sas" />
            <Story imgPerfil={imgExemplo03} nomeDaConta="4dio.g4" />
            <Story imgPerfil={imgExemplo04} nomeDaConta="Bruce Wayne" />
            <Story imgPerfil={imgExemplo05} nomeDaConta="jhessy_sn" />
        
           
        </div>
    )
}

export default Stories;