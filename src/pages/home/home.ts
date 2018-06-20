import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    this.initializeItems();
  }

  items = [];

  initializeItems() {
    this.items = [
      {
        "_id": "001",
        "nome": "Brownie de Chocolate com Gengibre",
        "secao": [
          {
            "nome": " Ingredientes",
            "conteudo": [
              "50 g farinha de milho fina",
              "10 g de cacau em pó",
              "250 g de chocolate meio amargo",
              "200 g de manteiga sem sal cortada em cubos",
              "20 ml de suco de gengibre",
              "5 ovos",
              "200 g de açúcar",
              "1 colher (chá) de fermento em pó",
              "100 g de nozes picadas grosseiramente"
            ]
          },
          {
            "nome": " Modo de Preparo",
            "conteudo": [
              "1 - Coloque numa tigela a farinha de milho fina e o cacau em pó.",
              "2 - Misture e reserve.",
              "3 - Numa panela, em banho-maria, derreta o chocolate meio amargo picado com a manteiga sem sal cortada em cubos.",
              "4 - Retire do fogo.",
              "5 - Adicione o suco de gengibre e misture.",
              "6 - Acrescente a mistura de farinha com cacau em pó (reservada acima). Misture bem e reserve.",
              "7 - Numa batedeira, coloque os ovos e o açúcar. Bata bem até dobrar de volume.",
              "8 - Com a batedeira ainda ligada, adicione o fermento em pó e bata até misturar.",
              "9 - Desligue a batedeira. Acrescente a mistura de chocolate (reservada acima) e as nozes picadas. Misture.",
              "10 - Transfira a massa para uma assadeira retangular (18 cm X 30 cm) untada e forrada com papel manteiga.",
              "11 - Leve para assar em forno médio pré-aquecido a 180°C por +/- 40 minutos.",
              "12 - Retire do forno.",
              "13 - Cubra o brownie com papel manteiga.",
              "14 - Coloque outra assadeira do mesmo tamanho pressionando levemente o brownie para que fique mais compacto e úmido",
              "15 - Deixe por +/- 4 horas na geladeira.",
              "16 - Retire a assadeira de cima do brownie, desenforme, corte em quadrados e sirva em seguida."
            ]
          },
          {
            "nome": " Outras informações",
            "conteudo": [
              "Rendimento: 20 porções "
            ]
          }
        ]
      },
      {
        "_id": "002",
        "nome": "Hamburquibe",
        "secao": [
          {
            "nome": " Ingredientes",
            "conteudo": [
              "RECHEIO",
              "2 colheres (sopa) de azeite",
              "1 colher (sopa) de alho picadinho",
              "100g de cebola picada",
              "500g de carne moída",
              "60g de extrato de tomate",
              "1⁄2 xícara (chá) de água",
              "Salsinha a gosto",
              "Pimenta síria a gosto",
              "Sal a gosto",
              "MASSA",
              "150g de cebola cortada em cubos médios",
              "4 dentes de alho",
              "1 xícara (chá) de hortelã",
              "200g de trigo para quibe",
              "360ml de água fervente",
              "60ml de azeite",
              "1kg de carne moída",
              "1 xícara (chá) de tomate sem pele e sem semente cortado em cubos",
              "Sal a gosto",
              "Pimenta Síria a gosto",
              "MOLHO DE IOGURTE",
              "2 copos de iogurte natural2 colheres (sopa) de azeite1 limão (suco)Hortelã picadinho a gostoSal a gostoPimenta síria a gosto"
            ]
          },
          {
            "nome": " Modo de Preparo",
            "conteudo": [
              "Coloque numa panela aquecida 2 colheres (sopa) de azeite, o alho picadinho, a cebola picadinha e refogue até murchar.Acrescente 500g de carne moída e refogue até a carne ficar soltinha e começar a dourar.Junte 60g de extrato de tomate, ½ xícara (chá) de água, salsinha, sal e pimenta síria a gosto.Abaixe o fogo e deixe cozinhar por +/- 15 minutos ou até o molho encorpar.Apague o fogo e deixe esfriar.",
              "Numa frigideira antiaderente, em fogo médio com azeite, grelhe os hamburquibes dos dois lados (+/- 12 minutos). Sirva com molho de iogurte com hortelã. Se preferir, coloque os hamburquibe numa assadeira untada e leve ao forno pré-aquecido a 200º C por 15 minutos, virando na metade do tempo.",
              "Reserve.",
              "MASSA",
              "Num processador coloque a cebola cortada em cubos médios, o alho, e as folhas de hortelã e bata até obter uma pasta.Reserve.Numa tigela coloque o trigo para quibe, a pasta reservada acima, a água fervente e deixe coberto com um prato por +/- 1 hora ou até esfriar.Depois junte o azeite, a carne moída, o tomate sem pele picado, sal e pimenta síria a gosto.Misture bem.Pegue metade da massa, abra entre dois plásticos e corte discos (com 10cm de diâmetro e 0,5cm de espessura).Coloque uma porção do recheio no centro de um disco e cubra outro disco.Feche bem a borda modelando como um hambúrguer.Repita o mesmo procedimento com a outra metade da massa.Numa frigideira antiaderente, em fogo médio com azeite, grelhe os hamburquibes dos dois lados (+/- 12 minutos).Sirva com molho de iogurte com hortelã.Se preferir, coloque os hamburquibe numa assadeira untada e leve ao forno pré-aquecido a 200º C por 15 minutos, virando na metade do tempo.",
              "MOLHO DE IOUGURTE",
              "Numa tigela coloque o iogurte natural, o suco de 1 limão, hortelã, sal, pimenta síria e azeite.Misture bem."
            ]
          },
          {
            "nome": " Outras informações",
            "conteudo": [
              "CUSTO DE CADA HAMBURQUIBE: 4,00 reais",
              "RENDIMENTO: 10 hamburquibe com +/- 230 g cada"
            ]
          }
        ]
      },
      {
        "_id": "003",
        "nome": "Peixe Delícia de Olinda da Eliane",
        "secao": [
          {
            "nome": " Ingredientes",
            "conteudo": [
              "4 filés de peixe branco limpo (aproximadamente 120g cada)",
              "8 bananas pacovã, prata ou nanica maduras e firmes",
              "12 fatias de queijo-manteiga (o suficiente para cobrir a forma de acordo com a montagem abaixo)",
              "1 colher de sopa de margarina",
              "Sal",
              "Pimenta-do-reino",
              "Azeite",
              "Açúcar",
              "Canela em pó"
            ]
          },
          {
            "nome": " Modo de Preparo",
            "conteudo": [
              "1 - Tempere o peixe com sal e pimenta-do-reino e deixe pegar gosto por duas horas na geladeira.",
              "2 - Em uma frigideira antiaderente (de preferência com tampa), coloque um fio de azeite e frite o peixe.",
              "3 - Em outra frigideira, coloque a bananas partidas ao meio no sentido do comprimento e doure-as com a margarina. Reserve.",
              "4 - Em uma forma refratária, monte da seguinte forma: uma camada de peixe, uma camada de banana, uma camada de queijo e repita novamente.",
              "5 - Polvilhe com canela e levemente com açúcar. Leve ao forno 220 graus. Espere o queijo derreter e sirva imediatamente."
            ]
          }
        ]
      },
      {
        "_id": "004",
        "nome": "Bombom de cerejas do Flavio Federico",
        "secao": [
          {
            "nome": " Ingredientes",
            "conteudo": [
              "100g de calda da cereja",
              "400ml de vodca (ou Bourbon ou whisky com 40º de álcool)",
              "Corante alimentício em pó vermelho a gosto",
              "50 cerejas em calda com cabo e drenadas",
              "600g de fondant branco",
              "400g de chocolate meio amargo temperado"
            ]
          },
          {
            "nome": " Modo de Preparo",
            "conteudo": [
              "1 - Em uma panela coloque 100g da calda da cereja, 400ml de vodca, corante alimentício em pó vermelho a gosto e misture. Leve ao fogo baixo até atingir a temperatura de 40°C. Retire do fogo.",
              "2 - Coloque em um pote com tampa 50 cerejas em calda com cabo e drenadas e a calda da cereja aquecida (feita acima), tampe e guarde num local arejado por no mínimo 15 dias.",
              "3 - Depois deste tempo retire as cerejas do pote e coloque em uma peneira para escorrer (20 minutos). Reserve as cerejas e a calda.",
              "4 - Aqueça em uma panela 600g de fondant branco (entre 60° a 65°C) até que derreta completamente mexendo delicadamente. Coloque um pouco de calda da cereja para afinar o fondant. Retire do fogo.",
              "5 - Mergulhe as cerejas (reservadas acima) no fondant até que fiquem cobertas totalmente. Em seguida coloque em um papel-manteiga untado (ou tapete antiaderente) para secar (cerca de 10 minutos).",
              "6 - Em outro papel-manteiga untado (ou tapete antiaderente) pingue uma gota com 1 cm de diâmetro de chocolate meio amargo derretido e temperado e coloque a cereja com fondant sobre a gota (esse processo previne o vazamento do licor pelo fundo). Deixe o chocolate endurecer.",
              "7 - Em seguida, banhe as cerejas por completo no chocolate, leve para a geladeira por 5 minutos para firmar. Guarde em um recipiente com tampa por pelo menos 10 dias antes de consumir."
            ]
          },
          {
            "nome": " Outras informações",
            "conteudo": [
              "Rende 50 bombons",
              "O custo da receita com vodca importada é de R$ 1,50 para cada bombom.",
              "Já com vodca nacional o custo é de R$ 1,00 para cada bombom.",
              "O preço deste tipo de bombom no mercado chega a R$ 4,00 cada."
            ]
          }
        ]
      },
      {
        "_id": "005",
        "nome": "Paleta Assada",
        "secao": [
          {
            "nome": " Ingredientes",
            "conteudo": [
              "1 litro de água",
              "3 colheres (sopa) de sal (45g)",
              "3 colheres (sopa) de açúcar (30g)",
              "1⁄2 colher (sopa) de alho picado (5g)",
              "1 colher (sopa) de pimenta-do-reino moída a gosto (5g)",
              "1 colher (sopa) de páprica picante em pó (5g)",
              "Alecrim debulhado a gosto",
              "4 bifes de paleta com osso (+/- 3kg no total)"
            ]
          },
          {
            "nome": " Modo de Preparo",
            "conteudo": [
              "1 - Em uma tigela coloque 1 litro de água, 3 colheres (sopa) de sal, 3 colheres (sopa) de açúcar, ½ colher (sopa) de alho picado, 1 colher (sopa) de pimenta-do-reino moída a gosto, 1 colher (sopa) de páprica picante em pó, alecrim debulhado a gosto e misture bem.",
              "2 - Encha uma seringa com a mistura de temperos (feita acima) e em seguida injete em 4 bifes de paleta com osso espalhando o tempero por toda a peça. OBS: faça isso algumas vezes.",
              "3 - Coloque os bifes de paleta e o restante da mistura de temperos dentro de um saco plástico, misture e deixe marinando na geladeira por 3 dias.",
              "4 - Depois deste tempo, retire os bifes de paleta da marinada e lave rapidamente em água corrente. Em seguida seque com papel-toalha.",
              "5 - Em uma assadeira untada com azeite coloque os bifes de paleta, regue azeite e leve para assar em forno alto preaquecido a 220°C por cerca de 1 hora e 40 minutos.",
              "6 - Vire os bifes de paleta e deixe no forno até dourar (cerca de 20 minutos).Retire do forno e sirva em seguida com farofa e vinagrete."
            ]
          }
        ]
      }
    ]
  }

  getItems(ev: any) {
    this.initializeItems();
    let val = ev.target.value;

    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  public Listitem(item)
  {
    this.navCtrl.push(DetailsPage,{item:item});
  }
}
