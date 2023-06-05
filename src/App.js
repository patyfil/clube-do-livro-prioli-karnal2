import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import Ano from './componentes/Ano';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [edicao, setEdicao] = useState([
    {
      id: uuidv4(),
      nome: 'Edição 2023',
      cor: '#57C278'
    },
    {
      id: uuidv4(),
      nome: 'Edição 2022',
      cor: '#82CFFA'
    },
    {
      id: uuidv4(),
      nome: 'Edição 2021',
      cor: '#A6D157'
    },
    {
      id: uuidv4(),
      nome: 'Edição 2020',
      cor: '#E06B69'
    },
  ]);

  const inicial = [
    {
      id: uuidv4(),
      titulo: "A hora da estrela",
      autor: "Clarice Lispector",
      imagem: "https://github.com/patyfil/clube-do-livro-prioli-karnal/blob/main/public/imagens/4-2023/01.jpg?raw=true",
      ano: edicao[0].nome,
      linkCompra: " ",
      linkCompra: " "
    },
    {
      id: uuidv4(),
      titulo: "Arendt, entre o amor e o mal",
      autor: "Ann Heberlein",
      imagem: "https://github.com/patyfil/clube-do-livro-prioli-karnal/blob/main/public/imagens/4-2023/02.jpg?raw=true",
      ano: edicao[0].nome,
      linkCompra: " "
    },
    {
      id: uuidv4(),
      titulo: "Capitalismo sem rivais",
      autor: "Branko Milanovic",
      imagem: "https://github.com/patyfil/clube-do-livro-prioli-karnal/blob/main/public/imagens/4-2023/03.jpg?raw=true",
      ano: edicao[0].nome,
      linkCompra: " "
    },
    {
      id: uuidv4(),
      titulo: "Fahrenheit 451",
      autor: "Ray Bradbury",
      imagem: "https://github.com/patyfil/clube-do-livro-prioli-karnal/blob/main/public/imagens/4-2023/04.jpg?raw=true",
      ano: edicao[0].nome,
      linkCompra: " "
    },
    {
      id: uuidv4(),
      titulo: "Ideologias",
      autor: "Gabriela Prioli",
      imagem: "https://github.com/patyfil/clube-do-livro-prioli-karnal/blob/main/public/imagens/4-2023/05.jpg?raw=true",
      ano: edicao[0].nome,
      linkCompra: " "
    },
    {
      id: uuidv4(),
      titulo: "Modernidade Líquida",
      autor: "Zygmunt Bauman",
      imagem: "https://github.com/patyfil/clube-do-livro-prioli-karnal/blob/main/public/imagens/4-2023/06.jpg?raw=true",
      ano: edicao[0].nome,
      linkCompra: " "
    },
    {
      id: uuidv4(),
      titulo: "O Estrangeiro",
      autor: "Albert Camus",
      imagem: "https://github.com/patyfil/clube-do-livro-prioli-karnal/blob/main/public/imagens/4-2023/07.jpg?raw=true",
      ano: edicao[0].nome,
      linkCompra: " "
    },
    {
      id: uuidv4(),
      titulo: "O olho mais azul",
      autor: "Toni Morrison",
      imagem: "https://github.com/patyfil/clube-do-livro-prioli-karnal/blob/main/public/imagens/4-2023/08.jpg?raw=true",
      ano: edicao[0].nome,
      linkCompra: " "
    },
    {
      id: uuidv4(),
      titulo: "Pecar e Perdoar",
      autor: "Leandro Karnal",
      imagem: "https://github.com/patyfil/clube-do-livro-prioli-karnal/blob/main/public/imagens/4-2023/09.jpg?raw=true",
      ano: edicao[0].nome,
      linkCompra: " "
    },
    {
      id: uuidv4(),
      titulo: "Ruído",
      autor: "Daniel Kahneman e demais autores.",
      imagem: "https://github.com/patyfil/clube-do-livro-prioli-karnal/blob/main/public/imagens/4-2023/10.jpg?raw=true",
      ano: edicao[0].nome,
      linkCompra: " "
    },
    {
      id: uuidv4(),
      titulo: "A Mente Moralista",
      autor: "Jonathan Haidt",
      imagem: "https://github.com/patyfil/clube-do-livro-prioli-karnal/blob/main/public/imagens/3-2022/01.jpg?raw=true",
      ano: edicao[1].nome,
      linkCompra: " "
    },
    {
      id: uuidv4(),
      titulo: "Galileu e os negadores da ciência",
      autor: "Mario Livio",
      imagem: "https://github.com/patyfil/clube-do-livro-prioli-karnal/blob/main/public/imagens/3-2022/02.jpg?raw=true",
      ano: edicao[1].nome,
      linkCompra: " "
    },
    {
      id: uuidv4(),
      titulo: "Algoritmos da destruição em massa",
      autor: "Cathy O’Neil",
      imagem: "https://github.com/patyfil/clube-do-livro-prioli-karnal/blob/main/public/imagens/3-2022/03.jpg?raw=true",
      ano: edicao[1].nome,
      linkCompra: " "
    },
    {
      id: uuidv4(),
      titulo: "O naufrágio das civilizações",
      autor: "Amin Maalouf",
      imagem: "https://github.com/patyfil/clube-do-livro-prioli-karnal/blob/main/public/imagens/3-2022/04.jpg?raw=true",
      ano: edicao[1].nome,
      linkCompra: " "
    },
    {
      id: uuidv4(),
      titulo: "Aprender a Viver",
      autor: "Luc Ferry",
      imagem: "https://github.com/patyfil/clube-do-livro-prioli-karnal/blob/main/public/imagens/3-2022/05.jpg?raw=true",
      ano: edicao[1].nome,
      linkCompra: " "
    },
    {
      id: uuidv4(),
      titulo: "Hibisco Roxo",
      autor: "Chimamanda Ngozi",
      imagem: "https://github.com/patyfil/clube-do-livro-prioli-karnal/blob/main/public/imagens/3-2022/06.jpg?raw=true",
      ano: edicao[1].nome,
      linkCompra: " "
    },
    {
      id: uuidv4(),
      titulo: "O Avesso da Pele",
      autor: "Jeferson Tenório",
      imagem: "https://github.com/patyfil/clube-do-livro-prioli-karnal/blob/main/public/imagens/3-2022/07.jpg?raw=true",
      ano: edicao[1].nome,
      linkCompra: " "
    },
    {
      id: uuidv4(),
      titulo: "Sociedade do Cansaço",
      autor: "Byung-Chul Han",
      imagem: "https://github.com/patyfil/clube-do-livro-prioli-karnal/blob/main/public/imagens/3-2022/08.jpg?raw=true",
      ano: edicao[1].nome,
      linkCompra: " "
    },
    {
      id: uuidv4(),
      titulo: "O Anel de Giges",
      autor: "Eduardo Giannetti",
      imagem: "https://github.com/patyfil/clube-do-livro-prioli-karnal/blob/main/public/imagens/3-2022/09.jpg?raw=true",
      ano: edicao[1].nome,
      linkCompra: " "
    },
    {
      id: uuidv4(),
      titulo: "Humanidade",
      autor: "Rutger Bregman",
      imagem: "https://github.com/patyfil/clube-do-livro-prioli-karnal/blob/main/public/imagens/2-2021/01.jpg?raw=true",
      ano: edicao[2].nome,
      linkCompra: " "
    },
    {
      id: uuidv4(),
      titulo: "Eu sou dinamite!",
      autor: "Sue Prideaux",
      imagem: "https://github.com/patyfil/clube-do-livro-prioli-karnal/blob/main/public/imagens/2-2021/02.jpg?raw=true",
      ano: edicao[2].nome,
      linkCompra: " "
    },
    {
      id: uuidv4(),
      titulo: "Fascismo à brasileira",
      autor: "Pedro Doria",
      imagem: "https://github.com/patyfil/clube-do-livro-prioli-karnal/blob/main/public/imagens/2-2021/03.jpg?raw=true",
      ano: edicao[2].nome,
      linkCompra: " "
    },
    {
      id: uuidv4(),
      titulo: "As grandes estratégias",
      autor: "John Lewis Gaddis",
      imagem: "https://github.com/patyfil/clube-do-livro-prioli-karnal/blob/main/public/imagens/2-2021/04.jpg?raw=true",
      ano: edicao[2].nome,
      linkCompra: " "
    },
    {
      id: uuidv4(),
      titulo: "Novas formas de amar",
      autor: "Regina Navarro Lins ",
      imagem: "https://github.com/patyfil/clube-do-livro-prioli-karnal/blob/main/public/imagens/2-2021/05.jpg?raw=true",
      ano: edicao[2].nome,
      linkCompra: " "
    },
    {
      id: uuidv4(),
      titulo: "Internacionalismo ou extinção",
      autor: "Noam Chomsky",
      imagem: "https://github.com/patyfil/clube-do-livro-prioli-karnal/blob/main/public/imagens/2-2021/06.jpg?raw=true",
      ano: edicao[2].nome,
      linkCompra: " "
    },
    {
      id: uuidv4(),
      titulo: "A metamorfose",
      autor: "Franz Kafka",
      imagem: "https://github.com/patyfil/clube-do-livro-prioli-karnal/blob/main/public/imagens/2-2021/07.jpg?raw=true",
      ano: edicao[2].nome,
      linkCompra: " "
    },
    {
      id: uuidv4(),
      titulo: "O dilema do porco-espinho",
      autor: "Leandro Karnal",
      imagem: "https://github.com/patyfil/clube-do-livro-prioli-karnal/blob/main/public/imagens/2-2021/08.jpg?raw=true",
      ano: edicao[2].nome,
      linkCompra: " "
    },
    {
      id: uuidv4(),
      titulo: "História da Riqueza do Homem",
      autor: "Leo Huberman",
      imagem: "https://github.com/patyfil/clube-do-livro-prioli-karnal/blob/main/public/imagens/1-2020/01.jpg?raw=true",
      ano: edicao[3].nome,
      linkCompra: " "
    },
    {
      id: uuidv4(),
      titulo: "Justiça",
      autor: "Michael J. Sandel",
      imagem: "https://github.com/patyfil/clube-do-livro-prioli-karnal/blob/main/public/imagens/1-2020/02.jpg?raw=true",
      ano: edicao[3].nome,
      linkCompra: " "
    },
    {
      id: uuidv4(),
      titulo: "Conservadorismo",
      autor: "Roger Scruton",
      imagem: "https://github.com/patyfil/clube-do-livro-prioli-karnal/blob/main/public/imagens/1-2020/03.jpg?raw=true",
      ano: edicao[3].nome,
      linkCompra: " "
    },
    {
      id: uuidv4(),
      titulo: "O chamado da tribo",
      autor: "Mario Vargas Llosa",
      imagem: "https://github.com/patyfil/clube-do-livro-prioli-karnal/blob/main/public/imagens/1-2020/04.jpg?raw=true",
      ano: edicao[3].nome,
      linkCompra: " "
    },
    {
      id: uuidv4(),
      titulo: "Caminhos da esquerda",
      autor: "Ruy Fausto",
      imagem: "https://github.com/patyfil/clube-do-livro-prioli-karnal/blob/main/public/imagens/1-2020/05.jpg?raw=true",
      ano: edicao[3].nome,
      linkCompra: " "
    },
    {
      id: uuidv4(),
      titulo: "Sobre o autoritarismo brasileiro",
      autor: "Lilia M. Schwarcz",
      imagem: "https://github.com/patyfil/clube-do-livro-prioli-karnal/blob/main/public/imagens/1-2020/06.jpg?raw=true",
      ano: edicao[3].nome,
      linkCompra: " "
    },
    {
      id: uuidv4(),
      titulo: "O valor das ideias",
      autor: "Marcos Lisboa e Samuel Pessôa",
      imagem: "https://github.com/patyfil/clube-do-livro-prioli-karnal/blob/main/public/imagens/1-2020/07.jpg?raw=true",
      ano: edicao[3].nome,
      linkCompra: " "
    },
    {
      id: uuidv4(),
      titulo: "O povo contra a democracia",
      autor: "Yascha Mounk",
      imagem: "https://github.com/patyfil/clube-do-livro-prioli-karnal/blob/main/public/imagens/1-2020/08.jpg?raw=true",
      ano: edicao[3].nome,
      linkCompra: " "
    },
    {
      id: uuidv4(),
      titulo: "A revolução dos bichos",
      autor: "George Orwell",
      imagem: "https://github.com/patyfil/clube-do-livro-prioli-karnal/blob/main/public/imagens/1-2020/09.jpg?raw=true",
      // imagem: "http://localhost:3000/imagens/1-2020/09.jpg",
      ano: edicao[3].nome,
      linkCompra: " "
    },
  ]
  const [livros, setLivros] = useState(inicial)

  function deletarLivro(id) {
    setLivros(livros.filter(livro => livro.id !== id));
  }

  function comprarLivro(id) {
    const livro = livros.find(livro => livro.id === id);
    if (livro) {
      const linkCompra = livro.linkCompra;
      window.open(linkCompra, '_blank');
    }
  }

  function mudarCorDoAno(cor, id) {
    setEdicao(edicao.map(ano => {
      if (ano.id === id) {
        ano.cor = cor;
      }
      return ano;
    }));
  }

  return (
    <div>
      <Banner />
      <section className='edicao'>
        {/* <h1>Livros</h1> */}
        {edicao.map((ano, indice) =>
          <Ano
            mudarCor={mudarCorDoAno}
            key={indice}
            ano={ano}
            livros={livros.filter(livro => livro.ano === ano.nome)}
            aoDeletar={deletarLivro}
            aoComprar={comprarLivro}
          />
        )}
      </section>
      <Formulario edicao={edicao.map(ano => ano.nome)}
        aoCadastrar={livro =>
          setLivros([...livros, livro])} />
      <Rodape />
    </div>
  );
}

export default App
