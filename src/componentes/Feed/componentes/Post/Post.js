
import './Post.css';
//propriedades
export default function Post(props) {
    return (
        <div className='Post'>

            <div className='geral'>
                <div className="BarraSuperior">
                    <div className="ImagemPerfilAutor">
                        <img alt="Perfil de um Super-Herói" src={props.imagemPerfil} />
                    </div>
                    <div className="NomePerfilAutor">{props.nomePerfil}</div>
                    <div className="MenuBarraSuperior"></div>
                </div>
                <div className="ConteudoPost">
                    <img alt="Imagem de Super-Herói" src={props.imagemPost} />
                </div>
                {/* BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA */}


                <div className="BarraInferior">
                    <div className="reactIcones">
                        <div className='icons'>
                            <div className="react-icons-1">{props.icon1}</div>
                            <div className="react-icons-2">{props.icon2}</div>
                            <div className="react-icons-3">{props.icon3}</div>
                        </div>
                        <div className='react-icons-4'>{props.icon4}</div>
                    </div>
                    <div className="curtidas">
                        <p className='curtidoPor'>Curtido por</p>
                        <div className="nome">{props.nome}</div>
                        <span className='e'>e</span>
                        <div className="outrasPessoas">{props.pessoas}</div>
                    </div>
                    <div className='sub-descricao'>
                        <div className='content-perfil'>
                            <div className="nomePerfil">{props.nomePerfil}</div>
                            <p className='descrito'>{props.descricao}</p>
                        </div>
                        <span className='font-cinzar'>mais</span>
                        <p className='font-cinzar1'>Ver Tradução</p>
                        <div className='font-cinzar'>
                            Ver todos os comentarios..
                        </div>
                        <div className="caixa-comentarios">
                            <input type="text" placeholder="Adicione um comentário" style={{ flex: 1, border: 'none', outline: 'none', fontSize: 14, padding: 10, marginRight: 10 }} />
                            <button className='botao' style={{ backgroundColor: '#3897f0', color: '#fff', fontWeight: 600, border: 'none', outline: 'none', cursor: 'pointer', padding: '8px 16px', borderRadius: 5, transition: 'background-color 0.2s ease-in-out' }}>
                                Enviar
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}