import './ItemSugestao.css';
export default function ItemSugestao(props) {

    const MAX_DESCRICAO_LENGTH = 30;
  const descricao = props.descricao.slice(0, MAX_DESCRICAO_LENGTH);

    return (
        <span className='ItemSugestao flex-container'>
      <img className='flex-img' src={props.imgPerfil} alt='' />
      <div className='flex-descricao'>
        <span className='nomePerfil'>{props.nome}</span>
        <span className='descricao'>{props.descricao.length > MAX_DESCRICAO_LENGTH ? descricao + "..." : descricao}</span>
      </div>
      <span className='texto flex-texto'>{props.texto}</span>
    </span>

    );
}