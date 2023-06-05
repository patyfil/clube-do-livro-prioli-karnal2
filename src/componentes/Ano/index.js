import hexToRgba from 'hex-to-rgba'
import Livro from '../Livro'
import './Ano.css'

const Ano = ({ ano, livros, aoDeletar, aoComprar, mudarCor }) => {
    return (
        livros.length > 0 &&
        <section className="ano"
            style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(ano.cor, '0.2') }}>
            <input onChange={evento => mudarCor(evento.target.value, ano.id)} value={ano.cor} type='color' className='input-cor'/>
            <a href={ano.linkCompra} target="_blank" rel="noreferrer" className='a-linkCompra'>Comprar</a>

            <h3 style={{ borderColor: ano.cor }}>{ano.nome}</h3>
            <div className='livros'>
                {livros.map((livro, indice) => {
                    return <Livro
                        key={indice}
                        livro={livro}
                        corDeFundo={ano.cor} 
                        aoDeletar={aoDeletar}
                        aoComprar={aoComprar} />;
                })}
            </div>
        </section>
    )
}

export default Ano