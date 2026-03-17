import "./home.css";
import logo from "../assets/logo.png";
import footer from "../componentes/footer.jsx";

function Home() {
  return (
    <main className="home">

      {/* HERO */}
      <section className="hero">

        <div className="hero_left">
          <h1>
            Aprenda com quem <span>entende você</span>
          </h1>

          <p>
            Encontre professores qualificados de forma simples,
            rápida e perto da sua casa ou online.
            O conhecimento certo está a poucos cliques de distância.
          </p>
  
   <img src={logo} className="hero_logo_bg" />

          <div className="search_box">
            <input placeholder="O que você quer aprender?" />
            <button>Buscar</button>
          </div>
        </div>

      </section>

      {/* BENEFÍCIOS */}
      <section className="benefits">

        <div className="benefit_card">
          <h3>Professores verificados</h3>
          <p>Profissionais avaliados para garantir qualidade no ensino.</p>
        </div>

        <div className="benefit_card">
          <h3>Agendamento fácil</h3>
          <p>Marque suas aulas em poucos segundos.</p>
        </div>

        <div className="benefit_card">
          <h3>Perto de você</h3>
          <p>Aulas presenciais ou online conforme sua necessidade.</p>
        </div>

      </section>

      {/* PROFESSORES DESTAQUE */}
      <section className="teachers">

        <h2>Professores em destaque</h2>

        <div className="teachers_grid">

          <div className="teacher_card">
            <div className="teacher_img"></div>
            <h4>João Silva</h4>
            <span>Matemática</span>
            <button>Agendar aula</button>
          </div>

          <div className="teacher_card">
            <div className="teacher_img"></div>
            <h4>Ana Souza</h4>
            <span>Inglês</span>
            <button>Agendar aula</button>
          </div>

          <div className="teacher_card">
            <div className="teacher_img"></div>
            <h4>Lucas Mendes</h4>
            <span>Programação</span>
            <button>Agendar aula</button>
          </div>

        </div>

      </section>

      {/* COMO FUNCIONA */}
      <section className="steps">

        <h2>Como funciona</h2>

        <div className="steps_grid">

          <div className="step">
            <h3>1</h3>
            <p>Busque a matéria que deseja aprender.</p>
          </div>

          <div className="step">
            <h3>2</h3>
            <p>Escolha o professor ideal.</p>
          </div>

          <div className="step">
            <h3>3</h3>
            <p>Agende sua aula facilmente.</p>
          </div>

        </div>

      </section>

      {/* CTA FINAL */}
      <section className="cta">
        <h2>Comece a aprender hoje mesmo</h2>
        <button>Encontrar professor</button>
      </section>

    </main>
  );
}

export default Home;