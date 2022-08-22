import './App.css';

function App() {
  return (
    <div className="App">
      <div className="main-cont">
        <header>
          <div className="content">
            <div className="logo"><img src="images/logo.png" alt=""/></div>
            <div className="menu">
              <div className="menu-item"><a href="">o que fazemos</a></div>
              <div className="menu-item"><a href="">como te ajudamos</a></div>
              <div className="menu-item"><a href="">fale conosco</a></div>
            </div>
            <div className="head-social">
              <a id="instagram" href=""></a>
              <a id="facebook" href=""></a>
            </div>
            <div className="navicon-cont">
              <div className="navicon">
                <div className="menu-item"><a href="">o que fazemos</a></div>
                <div className="menu-item"><a href="">como te ajudamos</a></div>
                <div className="menu-item"><a href="">fale conosco</a></div>
              </div>
            </div>
          </div>
        </header>
        <div className="slogan-cont">
          <div className="background"></div>
          <div className="content">
            <div className="text-cont">
              <h1>Um slogan chamativo aqui.</h1>
              <h4>Um texto sobre o seu produto ou serviço. Explique <span>porque ele é valioso</span> e direcione o usuário ao próximo objetivo.</h4>
              <div className="button-cont">
                <button>Eu quero!</button>
                <button>Conhecer mais</button>
              </div>
            </div>
            <div className="businessman">
              <img src="images/businessman.png" alt=""/>
            </div>
          </div>
        </div>

        <div className="three-item-cont">
          <div className="content">
            <h1>Um subtítulo para quem rolou até aqui!</h1>
            <div className="line"></div>
            <p>Aproveite esta seção para destacar os benefícios do seu produto ou serviço. Palavras-chave ajudam no SEO.</p>
            <div className="item-container">
              <div className="item">
                <div className="item-content">
                  <div className="item-log"><img src="images/item1.png" alt=""/></div>
                  <h3>Rápido</h3>
                  <h4>Aproveite esta seção para destacar os benefícios do seu produto ou serviço.</h4>
                  <div className="add-btn"><img src="images/item_add.png" alt=""/></div>
                </div>
              </div>
              <div className="item">
                <div className="item-content">
                  <div className="item-log"><img src="images/item2.png" alt=""/></div>
                  <h3>Do seu jeito</h3>
                  <h4>Aproveite esta seção para destacar os benefícios do seu produto ou serviço.</h4>
                  <div className="add-btn"><img src="images/item_add.png" alt=""/></div>
                </div>
              </div>
              <div className="item">
                <div className="item-content">
                  <div className="item-log"><img src="images/item3.png" alt=""/></div>
                  <h3>Como você queria</h3>
                  <h4>Aproveite esta seção para destacar os benefícios do seu produto ou serviço.</h4>
                  <div className="add-btn"><img src="images/item_add.png" alt=""/></div>
              </div>
            </div>
            </div>
          </div>
        </div>

        <div className="simples-cont">
          <div className="content">
            <div className="text-cont">
              <p>#CONTECOMADENTE</p>
              <h1>Simples, rápido e do seu jeito.</h1>
              <h4>Mostre os valores da sua marca e como ela pode fazer parte da vida do usuário que está lendo. Gerar identificação é a chave para <span>conquistar seu cliente.</span></h4>
              <div className="button-cont">
                <button>Eu quero!</button>
              </div>
            </div>
            <div className="businessman">
              <img src="images/ellipse_businessman.png" alt=""/>
            </div>
          </div>
          <div className="blur-cont">
            <div className="ellipse"><img src="images/ellipse_big.png" alt=""/></div>
            <div className="ellipse-txt-cont">
              <div className="ellipse"><img src="images/ellipse_small.png" alt=""/></div>
              <div className="ellipse-txt">Todas as imagens deste template são do <u>Iconscout</u>.</div>
            </div>
          </div>
        </div>

      <div className="chat-cont">
        <div className="content">
          <img src="images/chat.png" alt=""/>
          <h1>Ainda tem dúvidas? Fale conosco!</h1>
          <div className="line"></div>
          <div className="item-container">
            <div className="text-cont">
              <h4>Ofereça um meio de comunicação direto. Pode ser um <a href="">contato@email.com.br</a></h4>
              <h4>Ou crie um formulário ao lado que entrem em contato <span>o mais rápido possível!</span></h4>
              <div className="whatsapp">
                <img src="images/whatsapp.png" alt=""/>
                <a href="">Hey! Estamos no whatsapp!</a>
              </div>
            </div>
            <div className="form-cont">
              <form action="" method="POST">
                <p>Nome</p>
                  <input type="text" placeholder="Nome Sobrenome"/>
                <p>Email</p>
                  <input type="text" placeholder="nome@email.com.br"/>
                <p>Telefone</p>
                  <input type="text" placeholder="21 9988-7766"/>
                <div className="button-cont">
                  <button>Enviar!</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="content">
          <div className="footer-top">
            <div className="logo"><img src="images/logo_foot.png" alt=""/></div>
            <div className="menu">
              <div className="menu-item"><a href="">o que fazemos</a></div>
              <div className="menu-item"><a href="">como te ajudamos</a></div>
              <div className="menu-item"><a href="">fale conosco</a></div>
            </div>
            <div className="head-social">
              <a id="instagram" href=""></a>
              <a id="facebook" href=""></a>
            </div>
          </div>
          <div className="email-cont">
            <p>Receba as novidades do nice</p>
            <form action="">
              <input type="email" placeholder="nome@email.com"/>
              <input type="submit" value="Inscrever"/>
            </form>
          </div>
          <div className="footer-end">
            <div className="line"></div>
            <p>Nice template by @lopesluiza on Figma - 2021</p>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}

export default App;
