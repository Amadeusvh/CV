import { Col, Container, Row } from "react-bootstrap"
import './Page.css'

type Props = {}

export default (props: Props) => {
  return (
    <Container className="body">
      <Row className="pt-4">
        <Col className="">
          <h1>Gabriel Vilar Martins</h1>
          <h3>Desenvolvedor Web/Front-End</h3>
        </Col>
      </Row>

      <Row className="contacts justify-content-md-center mt-3">
        <Col md="auto">
          (51) 986100259
        </Col>
        <Col md="auto">
          gabrielvilarmartins@gmail.com
        </Col>
        <Col md="auto">
          <a href="https://www.linkedin.com/in/gabriel-martins-769ba0217/">LinkedIn</a>
        </Col>
        <Col md="auto">
          <a href="https://github.com/Amadeusvh">GitHub</a>
        </Col>
      </Row>

      <Row className="mt-2">
        <Col>
          <h4>
            19 anos, Porto Alegre - RS
          </h4>
        </Col>
      </Row>

      <Row className="spacer mt-5">
        <Col>
          <h2 className="title">Sobre</h2>
          <p className="mt-2">
            ㅤㅤAtualmente estudo Análise e Desenvolvimento de sistemas (3° Semestre); Tenho experiência com desenvolvimento web
            ligado a FrontEnd, já desenvolvi projetos pessoais com: <b className="important">Laravel</b>, <b className="important">React.js</b> e <b className="important">Vue.js.</b> Adoro aprender novas tecnologias, compreendendo a melhor maneira de usá-las para conseguir um resultado exemplar.
            Além disso Sou capaz de compreender a língua inglesa <b className="important">(escrito/falado)</b> em <b className="important">nível médio/avançado</b>.
          </p>
        </Col>
      </Row>

      <Row className="spacer mt-5">
        <Col>
          <h2 className="title">Habilidades</h2>
        </Col>
      </Row>
      <Row className="comp mt-2">
        <Col>HTLM5/CSS3</Col>
        <Col>Vue.js</Col>
        <Col>React.js</Col>
      </Row>
      <Row className="comp">
        <Col>PHP</Col>
        <Col>Git</Col>
        <Col>JavaScript</Col>
      </Row>

      <Row className="spacer mt-5">
        <Col>
          <h2 className="Title">Formação</h2>
        </Col>
        <ul>
          <li><b className="important">Ensino Superior (3° Semestre)</b>: Análise e Desenvolvimentos de Sistemas - Uniftec - com término previsto para 2023</li>
          <li><b className="important">Ensino Médio (Completo)</b>: Escola Estadual de Ensino Médio Roque Gonzáles </li>
        </ul>
      </Row>

      <Row className="spacer mt-5">
        <Col>
          <h2 className="title">Projetos</h2>
          <p className="mt-2">
            ㅤㅤAtualmente estou participando no projeto <a href="https://github.com/moneyman-S">Moneyman</a> como Front-End Developer utilizando as
            tecnologias <b className="important">React.js</b>, <b className="important">TypeScript</b>, <b className="important">React-Bootstrap</b> e <b className="important">Bootstrap</b>.
          </p>
        </Col>
      </Row>
    </Container>
  )

}
