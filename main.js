var listaNomes = [
  'Harry Potter e a Pedra filosofal',
  'Harry Potter e a Câmara Secreta',
  'Harry Potter e o Prisioneiro de Azkaban',
  'Harry Potter e o Cálice de Fogo',
  'Harry Potter e a Ordem da Fênix',
  'Harry Potter e o Enigma do Príncipe',
  'Harry Potter e as Relíquias da Morte: Parte 1',
  'Harry Potter e as Relíquias da Morte: Parte 2'
]

var listaFilmes = [
  'https://resizing.flixster.com/Q5W7m_i_f24Q_a4zLeRxNvx1WAs=/206x305/v2/https://flxt.tmsimg.com/assets/p28630_p_v8_at.jpg',
  'https://resizing.flixster.com/hXI16eWpzhmvHh4wKtyC1_ytSZk=/206x305/v2/https://flxt.tmsimg.com/NowShowing/28900/28900_da.jpg',
  'https://resizing.flixster.com/NbhfA03AEEoMxDdfy6Pi1w9bThU=/206x305/v2/https://flxt.tmsimg.com/NowShowing/42175/42175_aa.jpg',
  'https://resizing.flixster.com/jb9OnSJ0e9oM8I59sblMuhXM824=/206x305/v2/https://flxt.tmsimg.com/NowShowing/39509/39509_aa.jpg',
  'https://resizing.flixster.com/PZOBGYzTPhmkX33-0KKqp9X6ccM=/206x305/v2/https://flxt.tmsimg.com/NowShowing/58706/58706_aa.jpg',
  'https://resizing.flixster.com/0178oclr2lcbnZsXK9-OSNnL334=/206x305/v2/https://flxt.tmsimg.com/NowShowing/65212/65212_ak.jpg',
  'https://resizing.flixster.com/iIcfBePQY3R9i5nE79oEkr8aomM=/206x305/v2/https://flxt.tmsimg.com/NowShowing/87040/87040_aa.jpg',
  'https://resizing.flixster.com/3FH1MZ04DgTiMfzjHX_U-fWG1z8=/206x305/v2/https://flxt.tmsimg.com/NowShowing/87176/87176_aa.jpg'
]

var linkFilmes = [
  'https://vizer.tv/filme/online/harry-potter-e-a-pedra-filosofal',
  'https://vizer.tv/filme/online/harry-potter-e-a-camara-secreta',
  'https://vizer.tv/filme/online/harry-potter-e-o-prisioneiro-de-azkaban',
  'https://vizer.tv/filme/online/harry-potter-e-o-calice-de-fogo',
  'https://vizer.tv/filme/online/harry-potter-e-a-ordem-da-fenix',
  'https://vizer.tv/filme/online/harry-potter-e-o-enigma-do-principe',
  'https://vizer.tv/filme/online/harry-potter-e-as-reliquias-da-morte-parte-1',
  'https://vizer.tv/filme/online/harry-potter-e-as-reliquias-da-morte-parte-2'
]

for (var i = 0; i < linkFilmes.length; i++) {
  document.write(
    '<a href=' +
      linkFilmes[i] +
      ' target="_blank"><img src=' +
      listaFilmes[i] +
      ' alt="" class=""></a> ' +
      '<p>' +
      listaNomes[i] +
      '</p>'
  )
}
