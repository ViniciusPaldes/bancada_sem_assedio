import "./index.css";
import React from "react";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import icMapeamento from "../../assets/mapeamento.png";
import FormControl from "@material-ui/core/FormControl";
import imgTorcida from "../../assets/bg_torcida_cinza.png";
import OutlinedInput from "@material-ui/core/OutlinedInput";

class Denuncia extends React.Component {
  state = {
    estadio: "",
    listaEstadios: [
      "14 de Dezembro",
      "Adail Nunes da Silva",
      "Ademir Cunha",
      "Adhermazão",
      "Aflitos",
      "Albertão",
      "Alfredo Chiavegato",
      "Alfredo Jaconi",
      "Alfredão",
      "Allianz Parque",
      "Almeidão",
      "Amigão",
      "Anacleto Campanella",
      "Antonio Lins Ribeiro Guimarães",
      "Anísio Haddad",
      "Arapucão",
      "Arena Barueri",
      "Arena Batistão",
      "Arena Condá",
      "Arena Corinthians",
      "Arena Grêmio",
      "Arena Joinville",
      "Arena Pantanal",
      "Arena Pernambuco",
      "Arena da Amazônia",
      "Arena da Baixada",
      "Arena da Floresta",
      "Arena da Fonte Luminosa",
      "Arena das Dunas",
      "Arena do Calçado",
      "Arena do Jacaré",
      "Arena fonte-nova",
      "Arruda",
      "Augustinho Lima",
      "Baenão",
      "Barradão",
      "Barão de Serra Negra",
      "Beira-Rio",
      "Bento de Abreu",
      "Bezerrão",
      "Boca do Jacaré",
      "Boca do Lobo",
      "Breno Ribeiro do Val",
      "Brinco de Ouro",
      "Canindé",
      "Carlos Affini",
      "Carneirão",
      "Castelão",
      "Castelão",
      "Centenário",
      "Colina",
      "Colosso da Lagoa",
      "Complexo Esportivo Umuarama",
      "Complexo Esportivo da Ulbra",
      "Cornélio de Barros",
      "Couto Pereira",
      "Curuzu	Belém",
      "Dario Rodrigues Leite",
      "Domingão",
      "Douradão",
      "Décio Vitta",
      "Érton Coelho Queiroz",
      "Estádio Caio Martins",
      "Estádio Luso-Brasileiro	Rio de Janeiro",
      "Estádio Olímpico",
      "Estádio do Café",
      "Estádio Ítalo del Cima",
      "Fortaleza",
      "Francisco Nogueira Filho",
      "Frasqueirão	Natal",
      "Frei Epifânio",
      "Fumeirão",
      "Germano Krüger",
      "Gigante do Norte",
      "Gilbertão",
      "Giulite Coutinho",
      "Helenão",
      "Heriberto Hülse",
      "Herminio Ometto",
      "Ilha do Retiro",
      "Independência",
      "Ipatingão",
      "Irmão Gino Maria Rossi",
      "JK",
      "Jayme Cintra",
      "Jonas Duarte",
      "Jorge Ismael de Biasi",
      "José Liberatti",
      "José Maria Campos Maia",
      "Jóia da Princesa",
      "Kleber Andrade",
      "Lacerdão",
      "Lancha Filho",
      "Lomantão",
      "Luthero Lopes",
      "Luís Augusto de Oliveira",
      "Major Levy",
      "Mangueirão",
      "Mané Garrincha",
      "Maracanã",
      "Maria Teresa Breda",
      "Martins Pereira",
      "Melão",
      "Mineirão",
      "Moacyrzão",
      "Moisés Lucarelli",
      "Montanha dos Vinhedos",
      "Morenão",
      "Morumbi",
      "Nabi Abi Chedid",
      "Nhozinho Santos",
      "Nilton Santos",
      "Novelli Júnior",
      "Orlando Scarpelli",
      "Oswaldo Scatena	Batatais",
      "Otacília Patrício Arroyo",
      "Pacaembu",
      "Palma Travassos",
      "Parque São Jorge",
      "Parque do Sabiá",
      "Passo das Emas",
      "Pituaçu",
      "Presidente Médici",
      "Presidente Vargas",
      "Primeiro de Maio",
      "Prudentão",
      "Raulino de Oliveira",
      "Regional Arnaldo Busatto",
      "Ressacada",
      "Ribeirão",
      "Romeirão",
      "Santa Cruz",
      "Serra Dourada",
      "Serra Dourada",
      "Serra do Lago",
      "Silvio Salles",
      "São Januário",
      "Sócrates Stamato",
      "Teixeirão",
      "Trapichão",
      "Vail Chaves",
      "Vavazão",
      "Vermelhão da Serra",
      "Vila Belmiro",
      "Vila Capanema",
      "Walter Ribeiro",
      "Willie Davids",
      "Zerão",
      "Zezinho Magalhães"
    ]
  };
  render() {
    const { estadio, listaEstadios } = this.state;
    return (
      <div className="denuncia">
        <legend>Crie agora a sua ocorrência!</legend>
        <h4>Não se preocupe ela é sigiloza</h4>
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-estadio-native-simple">
            Você está em qual estádio?
          </InputLabel>
          <Select
            native
            value={estadio}
            onChange={this.handleChange}
            className="estadioSelect"
            input={
              <OutlinedInput
                labelWidth={200}
                name="estadio"
                id="outlined-estadio-native-simple"
              />
            }
          >
            <option value="" />
            {listaEstadios.map((est, index) => {
              return (
                <option key={index} value={est}>
                  {est}
                </option>
              );
            })}
          </Select>
        </FormControl>
        <Button variant="outlined" fullWidth={true}>
          Não estou no estádio
        </Button>
        <Button variant="contained" fullWidth={true}>
          Iniciar
        </Button>
        <img className="torcidaCinza" src={imgTorcida} alt="Torcida Cinza" />
      </div>
    );
  }

  handleChange = e => {
    this.setState({ estadio: e.target.value });
  };
}

export default Denuncia;
