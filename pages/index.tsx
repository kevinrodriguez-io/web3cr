/* eslint-disable @next/next/no-img-element */
import type { NextPage as WEB3CRHome } from "next";

const DISCORD_LINK = "https://discord.gg/2w6zGfuxbz";

const Home: WEB3CRHome = () => (
  <>
    <header>
      <div className="head">
        <img
          className="head__logo"
          src="./assets/images/logo_web3.svg"
          alt="Logo Web3 Costa Rica"
        />
        <nav className="head__nav"></nav>
        <a
          href={DISCORD_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="head__cta-comunity"
        >
          Entrar a la comunidad <span className="cr-icon"></span>
        </a>
      </div>
    </header>
    <main>
      <section className="above">
        <div className="above-cointain">
          <h1>Tu comunidad de Web3 en Costa Rica</h1>
          <p>
            Aprende, consigue ofertas de trabajo, no te pierdas las últimas
            noticias o solo diviertete con los demás en tu comunidad 🤙
          </p>
          <a
            href={DISCORD_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="button-cta-comunity"
          >
            Unirme <span className="cr-icon"></span>
          </a>
        </div>
      </section>

      <section className="localice map">
        <div className="localice-cointainer">
          <picture className="localice__mapa">
            <img
              className="pic_cont pic_mapa"
              src="/assets/images/CR.svg"
              alt="Mapa de Costa Rica"
            />
          </picture>

          <div className="localice-content">
            <h3>No importa en que provincia estés</h3>
            <p>
              Conecta con más de 150 personas de todo CR y forma equipos de
              trabajo, consigue contactos y muestra tus proyectos a los demás
            </p>
            <a href={DISCORD_LINK} className="localice__cta cta-secondary">
              Quiero ser parte
            </a>
          </div>
        </div>
      </section>

      <section className="localice discord">
        <div className="localice-cointainer">
          <picture className="localice__dc">
            <img
              className="pic_cont pic_dc"
              src="/assets/images/discord_web3.svg"
              alt="Imagen de Dsicord representativa"
            />
          </picture>

          <div className="localice-content">
            <h3>Conecta con personas increíbles</h3>
            <p>
              Con personas que todos los días crean y construyen el futuro de
              Web3
            </p>
            <a href="#connect" className="localice__cta cta-secondary">
              Quiero ser parte
            </a>
          </div>
        </div>
      </section>

      <section className="decoration">
        <div className="metup_decorations">
          <span className="circle circle-purple"></span>
          <span className="circle circle-orange"></span>
          <span className="circle circle-pink"></span>
          <span className="circle circle-blue"></span>
        </div>
      </section>

      <section className="metup">
        <div className="metup-cointainer">
          <h3>Asiste a Meetups En Vivo y Online</h3>
          <p>
            Aprende, consigue ofertas de trabajo, no te pierdas las últimas
            noticias o solo diviertete con los demás en tu comunidad 🤙
          </p>
          <a
            href="https://www.meetup.com/es-ES/web3cr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ¡Me apunto!
          </a>
        </div>
      </section>

      <section className="connect" id="connect">
        <h3>Conecta con la comunidad</h3>

        <div className="redes">
          <a href={DISCORD_LINK} target="_blank" rel="noopener noreferrer">
            <span className="icon-social DISC-Footer">
              <span className="DISC-icon logo-social"></span>
            </span>
          </a>

          <a
            href="https://en-gb.facebook.com/watch/web3cr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon-social FB-Footer">
              <span className="FB-icon logo-social"></span>
            </span>
          </a>

          <a
            href="https://www.meetup.com/es-ES/web3cr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon-social IG-Footer">
              <span className="IG-icon logo-social"></span>
            </span>
          </a>
        </div>
      </section>

      <footer>
        <div className="footer-navs">
          <nav className="footer-nav w3cr">
            <h4>Web3 Costa Rica</h4>
            <ul className="w3cr__nav">
              <a href={DISCORD_LINK} target="_blank" rel="noopener noreferrer">
                <li className="nav_fotter-item">Comunidad</li>
              </a>
              <a
                href="https://www.meetup.com/es-ES/web3cr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="nav_fotter-item">Meetups</li>
              </a>
            </ul>
          </nav>

          <nav className="footer-nav about">
            <h4>Sobre</h4>
            <ul className="about__nav">
              <a href="#connect">
                <li className="nav_fotter-item">Redes</li>
              </a>
            </ul>
          </nav>

          <div className="footer-nav CTA-apoyo">
            <h4>Apoyar</h4>
            <button className="cta-donation">Donar con cripto</button>
          </div>
        </div>
      </footer>
    </main>
  </>
);

export default Home;
