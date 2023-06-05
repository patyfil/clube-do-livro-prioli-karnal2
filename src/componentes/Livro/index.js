import { AiFillCloseCircle } from 'react-icons/ai';
import { RiShoppingBasketLine } from 'react-icons/ri';
import './Livro.css'

const Livro = ({ livro, corDeFundo, aoDeletar, aoComprar }) => {
  return (<div className='livro'>
    <AiFillCloseCircle
      size={25}
      className='deletar'
      onClick={() => aoDeletar(livro.id)} />
    <RiShoppingBasketLine
      size={25}
      className='comprar'
      onClick={() => aoComprar(livro.id)} />
    <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
      <img src={livro.imagem} alt={livro.titulo} />
    </div>
    <div className='rodape'>
      <h4>{livro.titulo}</h4>
      <h5>{livro.autor}</h5>
    </div>
  </div>)
}

export default Livro