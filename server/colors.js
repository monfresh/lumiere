/**
 * Colors!
 *
 * Colors can be a string name or an array of chroma-compatible strings.
 */
var chroma = Meteor.require('chroma-js');
var colors = _.clone(chroma.colors);

colors = _.extend(colors, {
  rainbow: ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'],
  doublerainbow: [
    'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet',
    chroma('red').desaturate().desaturate().hex(),
    chroma('orange').desaturate().desaturate().hex(),
    chroma('yellow').desaturate().desaturate().hex(),
    chroma('green').desaturate().desaturate().hex(),
    chroma('blue').desaturate().desaturate().hex(),
    chroma('indigo').desaturate().desaturate().hex(),
    chroma('violet').desaturate().desaturate().hex()
  ],

  // Colors borrowed from:
  // http://chir.ag/projects/name-that-color/
  abbey: '#4C4F56',
  acadia: '#1B1404',
  acapulco: '#7CB0A1',
  aeroblue: '#C9FFE5',
  affair: '#714693',
  akaroa: '#D4C4A8',
  alabaster: '#FAFAFA',
  albescentwhite: '#F5E9D3',
  algaegreen: '#93DFB8',
  aliceblue: '#F0F8FF',
  alizarincrimson: '#E32636',
  allports: '#0076A3',
  almond: '#EED9C4',
  almondfrost: '#907B71',
  alpine: '#AF8F2C',
  alto: '#DBDBDB',
  aluminium: '#A9ACB6',
  amaranth: '#E52B50',
  amazon: '#3B7A57',
  amber: '#FFBF00',
  americano: '#87756E',
  amethyst: '#9966CC',
  amethystsmoke: '#A397B4',
  amour: '#F9EAF3',
  amulet: '#7B9F80',
  anakiwa: '#9DE5FF',
  antiquebrass: '#C88A65',
  antiquebronze: '#704A07',
  anzac: '#E0B646',
  apache: '#DFBE6F',
  apple: '#4FA83D',
  appleblossom: '#AF4D43',
  applegreen: '#E2F3EC',
  apricot: '#EB9373',
  apricotpeach: '#FBCEB1',
  apricotwhite: '#FFFEEC',
  aquadeep: '#014B43',
  aquaforest: '#5FA777',
  aquahaze: '#EDF5F5',
  aquaisland: '#A1DAD7',
  aquaspring: '#EAF9F5',
  aquasqueeze: '#E8F5F2',
  aquamarine: '#7FFFD4',
  aquamarineblue: '#71D9E2',
  arapawa: '#110C6C',
  armadillo: '#433E37',
  arrowtown: '#948771',
  ash: '#C6C3B5',
  asparagus: '#7BA05B',
  asphalt: '#130A06',
  astra: '#FAEAB9',
  astral: '#327DA0',
  astronaut: '#283A77',
  astronautblue: '#013E62',
  athensgray: '#EEF0F3',
  athsspecial: '#ECEBCE',
  atlantis: '#97CD2D',
  atoll: '#0A6F75',
  atomictangerine: '#FF9966',
  auchico: '#97605D',
  aubergine: '#3B0910',
  australianmint: '#F5FFBE',
  avocado: '#888D65',
  axolotl: '#4E6649',
  azalea: '#F7C8DA',
  aztec: '#0D1C19',
  azure: '#315BA1',
  azureradiance: '#007FFF',
  babyblue: '#E0FFFF',
  bahamablue: '#026395',
  bahia: '#A5CB0C',
  bajawhite: '#FFF8D1',
  balihai: '#859FAF',
  balticsea: '#2A2630',
  bamboo: '#DA6304',
  bananamania: '#FBE7B2',
  bandicoot: '#858470',
  barberry: '#DED717',
  barleycorn: '#A68B5B',
  barleywhite: '#FFF4CE',
  barossa: '#44012D',
  bastille: '#292130',
  battleshipgray: '#828F72',
  bayleaf: '#7DA98D',
  bayofmany: '#273A81',
  bazaar: '#98777B',
  bean: '#3D0C02',
  beautybush: '#EEC1BE',
  beaver: '#926F5B',
  beeswax: '#FEF2C7',
  beige: '#F5F5DC',
  bermuda: '#7DD8C6',
  bermudagray: '#6B8BA2',
  berylgreen: '#DEE5C0',
  bianca: '#FCFBF3',
  bigstone: '#162A40',
  bilbao: '#327C14',
  bilobaflower: '#B2A1EA',
  birch: '#373021',
  birdflower: '#D4CD16',
  biscay: '#1B3162',
  bismark: '#497183',
  bisonhide: '#C1B7A4',
  bistre: '#3D2B1F',
  bitter: '#868974',
  bitterlemon: '#CAE00D',
  bittersweet: '#FE6F5E',
  bizarre: '#EEDEDA',
  black: '#000000',
  blackbean: '#081910',
  blackforest: '#0B1304',
  blackhaze: '#F6F7F7',
  blackmarlin: '#3E2C1C',
  blackolive: '#242E16',
  blackpearl: '#041322',
  blackrock: '#0D0332',
  blackrose: '#67032D',
  blackrussian: '#0A001C',
  blacksqueeze: '#F2FAFA',
  blackwhite: '#FFFEF6',
  blackberry: '#4D0135',
  blackcurrant: '#32293A',
  blazeorange: '#FF6600',
  bleachwhite: '#FEF3D8',
  bleachedcedar: '#2C2133',
  blizzardblue: '#A3E3ED',
  blossom: '#DCB4BC',
  blue: '#0000FF',
  bluebayoux: '#496679',
  bluebell: '#9999CC',
  bluechalk: '#F1E9FF',
  bluecharcoal: '#010D1A',
  bluechill: '#0C8990',
  bluediamond: '#380474',
  bluedianne: '#204852',
  bluegem: '#2C0E8C',
  bluehaze: '#BFBED8',
  bluelagoon: '#017987',
  bluemarguerite: '#7666C6',
  blueribbon: '#0066FF',
  blueromance: '#D2F6DE',
  bluesmoke: '#748881',
  bluestone: '#016162',
  blueviolet: '#6456B7',
  bluewhale: '#042E4C',
  bluezodiac: '#13264D',
  blumine: '#18587A',
  blush: '#B44668',
  blushpink: '#FF6FFF',
  bombay: '#AFB1B8',
  bonjour: '#E5E0E1',
  bondiblue: '#0095B6',
  bone: '#E4D1C0',
  bordeaux: '#5C0120',
  bossanova: '#4E2A5A',
  bostonblue: '#3B91B4',
  botticelli: '#C7DDE5',
  bottlegreen: '#093624',
  boulder: '#7A7A7A',
  bouquet: '#AE809E',
  bourbon: '#BA6F1E',
  bracken: '#4A2A04',
  brandy: '#DEC196',
  brandypunch: '#CD8429',
  brandyrose: '#BB8983',
  breakerbay: '#5DA19F',
  brickred: '#C62D42',
  bridalheath: '#FFFAF4',
  bridesmaid: '#FEF0EC',
  brightgray: '#3C4151',
  brightgreen: '#66FF00',
  brightred: '#B10000',
  brightsun: '#FED33C',
  brightturquoise: '#08E8DE',
  brilliantrose: '#F653A6',
  brinkpink: '#FB607F',
  bronco: '#ABA196',
  bronze: '#3F2109',
  bronzeolive: '#4E420C',
  bronzetone: '#4D400F',
  broom: '#FFEC13',
  brown: '#964B00',
  brownbramble: '#592804',
  brownderby: '#492615',
  brownpod: '#401801',
  brownrust: '#AF593E',
  browntumbleweed: '#37290E',
  bubbles: '#E7FEFF',
  buccaneer: '#622F30',
  bud: '#A8AE9C',
  buddhagold: '#C1A004',
  buff: '#F0DC82',
  bulgarianrose: '#480607',
  bullshot: '#864D1E',
  bunker: '#0D1117',
  bunting: '#151F4C',
  burgundy: '#900020',
  burnham: '#002E20',
  burningorange: '#FF7034',
  burningsand: '#D99376',
  burntmaroon: '#420303',
  burntorange: '#CC5500',
  burntsienna: '#E97451',
  burntumber: '#8A3324',
  bush: '#0D2E1C',
  buttercup: '#F3AD16',
  butteredrum: '#A1750D',
  butterflybush: '#624E9A',
  buttermilk: '#FFF1B5',
  butterywhite: '#FFFCEA',
  cabsav: '#4D0A18',
  cabaret: '#D94972',
  cabbagepont: '#3F4C3A',
  cactus: '#587156',
  cadetblue: '#A9B2C3',
  cadillac: '#B04C6A',
  caferoyale: '#6F440C',
  calico: '#E0C095',
  california: '#FE9D04',
  calypso: '#31728D',
  camarone: '#00581A',
  camelot: '#893456',
  cameo: '#D9B99B',
  camouflage: '#3C3910',
  camouflagegreen: '#78866B',
  cancan: '#D591A4',
  canary: '#F3FB62',
  candlelight: '#FCD917',
  candycorn: '#FBEC5D',
  cannonblack: '#251706',
  cannonpink: '#894367',
  capecod: '#3C4443',
  capehoney: '#FEE5AC',
  capepalliser: '#A26645',
  caper: '#DCEDB4',
  caramel: '#FFDDAF',
  cararra: '#EEEEE8',
  cardingreen: '#01361C',
  cardinal: '#C41E3A',
  cardinalpink: '#8C055E',
  careyspink: '#D29EAA',
  caribbeangreen: '#00CC99',
  carissma: '#EA88A8',
  carla: '#F3FFD8',
  carmine: '#960018',
  carnabytan: '#5C2E01',
  carnation: '#F95A61',
  carnationpink: '#FFA6C9',
  carouselpink: '#F9E0ED',
  carrotorange: '#ED9121',
  casablanca: '#F8B853',
  casal: '#2F6168',
  cascade: '#8BA9A5',
  cashmere: '#E6BEA5',
  casper: '#ADBED1',
  castro: '#52001F',
  catalinablue: '#062A78',
  catskillwhite: '#EEF6F7',
  cavernpink: '#E3BEBE',
  cedar: '#3E1C14',
  cedarwoodfinish: '#711A00',
  celadon: '#ACE1AF',
  celery: '#B8C25D',
  celeste: '#D1D2CA',
  cello: '#1E385B',
  celtic: '#163222',
  cement: '#8D7662',
  ceramic: '#FCFFF9',
  cerise: '#DA3287',
  cerisered: '#DE3163',
  cerulean: '#02A4D3',
  ceruleanblue: '#2A52BE',
  chablis: '#FFF4F3',
  chaletgreen: '#516E3D',
  chalky: '#EED794',
  chambray: '#354E8C',
  chamois: '#EDDCB1',
  champagne: '#FAECCC',
  chantilly: '#F8C3DF',
  charade: '#292937',
  chardon: '#FFF3F1',
  chardonnay: '#FFCD8C',
  charlotte: '#BAEEF9',
  charm: '#D47494',
  chartreuse: '#7FFF00',
  chartreuseyellow: '#DFFF00',
  chateaugreen: '#40A860',
  chatelle: '#BDB3C7',
  chathamsblue: '#175579',
  chelseacucumber: '#83AA5D',
  chelseagem: '#9E5302',
  chenin: '#DFCD6F',
  cherokee: '#FCDA98',
  cherrypie: '#2A0359',
  cherrywood: '#651A14',
  cherub: '#F8D9E9',
  chestnut: '#B94E48',
  chestnutrose: '#CD5C5C',
  chetwodeblue: '#8581D9',
  chicago: '#5D5C58',
  chiffon: '#F1FFC8',
  chileanfire: '#F77703',
  chileanheath: '#FFFDE6',
  chinaivory: '#FCFFE7',
  chino: '#CEC7A7',
  chinook: '#A8E3BD',
  chocolate: '#370202',
  christalle: '#33036B',
  christi: '#67A712',
  christine: '#E7730A',
  chromewhite: '#E8F1D4',
  cinder: '#0E0E18',
  cinderella: '#FDE1DC',
  cinnabar: '#E34234',
  cinnamon: '#7B3F00',
  cioccolato: '#55280C',
  citrinewhite: '#FAF7D6',
  citron: '#9EA91F',
  citrus: '#A1C50A',
  clairvoyant: '#480656',
  clamshell: '#D4B6AF',
  claret: '#7F1734',
  classicrose: '#FBCCE7',
  clayash: '#BDC8B3',
  claycreek: '#8A8360',
  clearday: '#E9FFFD',
  clementine: '#E96E00',
  clinker: '#371D09',
  cloud: '#C7C4BF',
  cloudburst: '#202E54',
  cloudy: '#ACA59F',
  clover: '#384910',
  cobalt: '#0047AB',
  cocoabean: '#481C1C',
  cocoabrown: '#301F1E',
  coconutcream: '#F8F7DC',
  codgray: '#0B0B0B',
  coffee: '#706555',
  coffeebean: '#2A140E',
  cognac: '#9F381D',
  cola: '#3F2500',
  coldpurple: '#ABA0D9',
  coldturkey: '#CEBABA',
  colonialwhite: '#FFEDBC',
  comet: '#5C5D75',
  como: '#517C66',
  conch: '#C9D9D2',
  concord: '#7C7B7A',
  concrete: '#F2F2F2',
  confetti: '#E9D75A',
  congobrown: '#593737',
  congressblue: '#02478E',
  conifer: '#ACDD4D',
  contessa: '#C6726B',
  copper: '#B87333',
  coppercanyon: '#7E3A15',
  copperrose: '#996666',
  copperrust: '#944747',
  copperfield: '#DA8A67',
  coral: '#FF7F50',
  coralred: '#FF4040',
  coralreef: '#C7BCA2',
  coraltree: '#A86B6B',
  corduroy: '#606E68',
  coriander: '#C4D0B0',
  cork: '#40291D',
  corn: '#E7BF05',
  cornfield: '#F8FACD',
  cornharvest: '#8B6B0B',
  cornflower: '#93CCEA',
  cornflowerblue: '#6495ED',
  cornflowerlilac: '#FFB0AC',
  corvette: '#FAD3A2',
  cosmic: '#76395D',
  cosmos: '#FFD8D9',
  costadelsol: '#615D30',
  cottoncandy: '#FFB7D5',
  cottonseed: '#C2BDB6',
  countygreen: '#01371A',
  cowboy: '#4D282D',
  crail: '#B95140',
  cranberry: '#DB5079',
  craterbrown: '#462425',
  cream: '#FFFDD0',
  creambrulee: '#FFE5A0',
  creamcan: '#F5C85C',
  creole: '#1E0F04',
  crete: '#737829',
  crimson: '#DC143C',
  crocodile: '#736D58',
  crownofthorns: '#771F1F',
  crowshead: '#1C1208',
  cruise: '#B5ECDF',
  crusoe: '#004816',
  crusta: '#FD7B33',
  cumin: '#924321',
  cumulus: '#FDFFD5',
  cupid: '#FBBEDA',
  curiousblue: '#2596D1',
  cuttysark: '#507672',
  cyanaqua: '#00FFFF',
  cyprus: '#003E40',
  daintree: '#012731',
  dairycream: '#F9E4BC',
  daisybush: '#4F2398',
  dallas: '#6E4B26',
  dandelion: '#FED85D',
  danube: '#6093D1',
  darkblue: '#0000C8',
  darkburgundy: '#770F05',
  darkebony: '#3C2005',
  darkfern: '#0A480D',
  darktan: '#661010',
  dawn: '#A6A29A',
  dawnpink: '#F3E9E5',
  deyork: '#7AC488',
  deco: '#D2DA97',
  deepblue: '#220878',
  deepblush: '#E47698',
  deepbronze: '#4A3004',
  deepcerulean: '#007BA7',
  deepcove: '#051040',
  deepfir: '#002900',
  deepforestgreen: '#182D09',
  deepkoamaru: '#1B127B',
  deepoak: '#412010',
  deepsapphire: '#082567',
  deepsea: '#01826B',
  deepseagreen: '#095859',
  deepteal: '#003532',
  delrio: '#B09A95',
  dell: '#396413',
  delta: '#A4A49D',
  deluge: '#7563A8',
  denim: '#1560BD',
  derby: '#FFEED8',
  desert: '#AE6020',
  desertsand: '#EDC9AF',
  desertstorm: '#F8F8F7',
  dew: '#EAFFFE',
  diserria: '#DB995E',
  diesel: '#130000',
  dingley: '#5D7747',
  disco: '#871550',
  dixie: '#E29418',
  dodgerblue: '#1E90FF',
  dolly: '#F9FF8B',
  dolphin: '#646077',
  domino: '#8E775E',
  donjuan: '#5D4C51',
  donkeybrown: '#A69279',
  dorado: '#6B5755',
  doublecolonialwhite: '#EEE3AD',
  doublepearllusta: '#FCF4D0',
  doublespanishwhite: '#E6D7B9',
  dovegray: '#6D6C6C',
  downriver: '#092256',
  downy: '#6FD0C5',
  driftwood: '#AF8751',
  drover: '#FDF7AD',
  dulllavender: '#A899E6',
  dune: '#383533',
  duststorm: '#E5CCC9',
  dustygray: '#A8989B',
  eagle: '#B6BAA4',
  earlsgreen: '#C9B93B',
  earlydawn: '#FFF9E6',
  eastbay: '#414C7D',
  eastside: '#AC91CE',
  easternblue: '#1E9AB0',
  ebb: '#E9E3E3',
  ebony: '#0C0B1D',
  ebonyclay: '#26283B',
  eclipse: '#311C17',
  ecruwhite: '#F5F3E5',
  ecstasy: '#FA7814',
  eden: '#105852',
  edgewater: '#C8E3D7',
  edward: '#A2AEAB',
  eggsour: '#FFF4DD',
  eggwhite: '#FFEFC1',
  eggplant: '#614051',
  elpaso: '#1E1708',
  elsalva: '#8F3E33',
  electriclime: '#CCFF00',
  electricviolet: '#8B00FF',
  elephant: '#123447',
  elfgreen: '#088370',
  elm: '#1C7C7D',
  emerald: '#50C878',
  eminence: '#6C3082',
  emperor: '#514649',
  empress: '#817377',
  endeavour: '#0056A7',
  energyyellow: '#F8DD5C',
  englishholly: '#022D15',
  englishwalnut: '#3E2B23',
  envy: '#8BA690',
  equator: '#E1BC64',
  espresso: '#612718',
  eternity: '#211A0E',
  eucalyptus: '#278A5B',
  eunry: '#CFA39D',
  eveningsea: '#024E46',
  everglade: '#1C402E',
  fadedjade: '#427977',
  fairpink: '#FFEFEC',
  falcon: '#7F626D',
  fallgreen: '#ECEBBD',
  falured: '#801818',
  fantasy: '#FAF3F0',
  fedora: '#796A78',
  feijoa: '#9FDD8C',
  fern: '#63B76C',
  fernfrond: '#657220',
  ferngreen: '#4F7942',
  ferra: '#704F50',
  festival: '#FBE96C',
  feta: '#F0FCEA',
  fieryorange: '#B35213',
  finch: '#626649',
  finlandia: '#556D56',
  finn: '#692D54',
  fiord: '#405169',
  fire: '#AA4203',
  firebush: '#E89928',
  firefly: '#0E2A30',
  flamepea: '#DA5B38',
  flamenco: '#FF7D07',
  flamingo: '#F2552A',
  flax: '#EEDC82',
  flaxsmoke: '#7B8265',
  flesh: '#FFCBA4',
  flint: '#6F6A61',
  flirt: '#A2006D',
  flushmahogany: '#CA3435',
  flushorange: '#FF7F00',
  foam: '#D8FCFA',
  fog: '#D7D0FF',
  foggygray: '#CBCAB6',
  forestgreen: '#228B22',
  forgetmenot: '#FFF1EE',
  fountainblue: '#56B4BE',
  frangipani: '#FFDEB3',
  frenchgray: '#BDBDC6',
  frenchlilac: '#ECC7EE',
  frenchpass: '#BDEDFD',
  frenchrose: '#F64A8A',
  fresheggplant: '#990066',
  friargray: '#807E79',
  fringyflower: '#B1E2C1',
  froly: '#F57584',
  frost: '#EDF5DD',
  frostedmint: '#DBFFF8',
  frostee: '#E4F6E7',
  fruitsalad: '#4F9D5D',
  fuchsiablue: '#7A58C1',
  fuchsiapink: '#C154C1',
  fuego: '#BEDE0D',
  fuelyellow: '#ECA927',
  funblue: '#1959A8',
  fungreen: '#016D39',
  fuscousgray: '#54534D',
  fuzzywuzzybrown: '#C45655',
  gablegreen: '#163531',
  gallery: '#EFEFEF',
  galliano: '#DCB20C',
  gamboge: '#E49B0F',
  geebung: '#D18F1B',
  genoa: '#15736B',
  geraldine: '#FB8989',
  geyser: '#D4DFE2',
  ghost: '#C7C9D5',
  gigas: '#523C94',
  gimblet: '#B8B56A',
  gin: '#E8F2EB',
  ginfizz: '#FFF9E2',
  givry: '#F8E4BF',
  glacier: '#80B3C4',
  gladegreen: '#61845F',
  goben: '#726D4E',
  goblin: '#3D7D52',
  gold: '#FFD700',
  golddrop: '#F18200',
  goldsand: '#E6BE8A',
  goldtips: '#DEBA13',
  goldenbell: '#E28913',
  goldendream: '#F0D52D',
  goldenfizz: '#F5FB3D',
  goldenglow: '#FDE295',
  goldengrass: '#DAA520',
  goldensand: '#F0DB7D',
  goldentainoi: '#FFCC5C',
  goldenrod: '#FCD667',
  gondola: '#261414',
  gordonsgreen: '#0B1107',
  gorse: '#FFF14F',
  gossamer: '#069B81',
  gossip: '#D2F8B0',
  gothic: '#6D92A1',
  governorbay: '#2F3CB3',
  grainbrown: '#E4D5B7',
  grandis: '#FFD38C',
  granitegreen: '#8D8974',
  grannyapple: '#D5F6E3',
  grannysmith: '#84A0A0',
  grannysmithapple: '#9DE093',
  grape: '#381A51',
  graphite: '#251607',
  gravel: '#4A444B',
  gray: '#808080',
  grayasparagus: '#465945',
  graychateau: '#A2AAB3',
  graynickel: '#C3C3BD',
  graynurse: '#E7ECE6',
  grayolive: '#A9A491',
  graysuit: '#C1BECD',
  green: '#00FF00',
  greenhaze: '#01A368',
  greenhouse: '#24500F',
  greenkelp: '#25311C',
  greenleaf: '#436A0D',
  greenmist: '#CBD3B0',
  greenpea: '#1D6142',
  greensmoke: '#A4AF6E',
  greenspring: '#B8C1B1',
  greenvogue: '#032B52',
  greenwaterloo: '#101405',
  greenwhite: '#E8EBE0',
  greenyellow: '#ADFF2F',
  grenadier: '#D54600',
  guardsmanred: '#BA0101',
  gulfblue: '#051657',
  gulfstream: '#80B3AE',
  gullgray: '#9DACB7',
  gumleaf: '#B6D3BF',
  gumbo: '#7CA1A6',
  gunpowder: '#414257',
  gunsmoke: '#828685',
  gurkha: '#9A9577',
  hacienda: '#98811B',
  hairyheath: '#6B2A14',
  haiti: '#1B1035',
  halfbaked: '#85C4CC',
  halfcolonialwhite: '#FDF6D3',
  halfdutchwhite: '#FEF7DE',
  halfspanishwhite: '#FEF4DB',
  halfandhalf: '#FFFEE1',
  hampton: '#E5D8AF',
  harlequin: '#3FFF00',
  harp: '#E6F2EA',
  harvestgold: '#E0B974',
  havelockblue: '#5590D9',
  hawaiiantan: '#9D5616',
  hawkesblue: '#D4E2FC',
  heath: '#541012',
  heather: '#B7C3D0',
  heatheredgray: '#B6B095',
  heavymetal: '#2B3228',
  heliotrope: '#DF73FF',
  hemlock: '#5E5D3B',
  hemp: '#907874',
  hibiscus: '#B6316C',
  highland: '#6F8E63',
  hillary: '#ACA586',
  himalaya: '#6A5D1B',
  hintofgreen: '#E6FFE9',
  hintofred: '#FBF9F9',
  hintofyellow: '#FAFDE4',
  hippieblue: '#589AAF',
  hippiegreen: '#53824B',
  hippiepink: '#AE4560',
  hitgray: '#A1ADB5',
  hitpink: '#FFAB81',
  hokeypokey: '#C8A528',
  hoki: '#65869F',
  holly: '#011D13',
  hollywoodcerise: '#F400A1',
  honeyflower: '#4F1C70',
  honeysuckle: '#EDFC84',
  hopbush: '#D06DA1',
  horizon: '#5A87A0',
  horsesneck: '#604913',
  hotcinnamon: '#D2691E',
  hotpink: '#FF69B4',
  hottoddy: '#B38007',
  hummingbird: '#CFF9F3',
  huntergreen: '#161D10',
  hurricane: '#877C7B',
  husk: '#B7A458',
  icecold: '#B1F4E7',
  iceberg: '#DAF4F0',
  illusion: '#F6A4C9',
  inchworm: '#B0E313',
  indiankhaki: '#C3B091',
  indiantan: '#4D1E01',
  indigo: '#4F69C6',
  indochine: '#C26B03',
  internationalkleinblue: '#002FA7',
  internationalorange: '#FF4F00',
  irishcoffee: '#5F3D26',
  iroko: '#433120',
  iron: '#D4D7D9',
  ironsidegray: '#676662',
  ironstone: '#86483C',
  islandspice: '#FFFCEE',
  ivory: '#FFFFF0',
  jacaranda: '#2E0329',
  jacarta: '#3A2A6A',
  jackobean: '#2E1905',
  jacksonspurple: '#20208D',
  jade: '#00A86B',
  jaffa: '#EF863F',
  jaggedice: '#C2E8E5',
  jagger: '#350E57',
  jaguar: '#080110',
  jambalaya: '#5B3013',
  janna: '#F4EBD3',
  japaneselaurel: '#0A6906',
  japanesemaple: '#780109',
  japonica: '#D87C63',
  java: '#1FC2C2',
  jazzberryjam: '#A50B5E',
  jellybean: '#297B9A',
  jetstream: '#B5D2CE',
  jewel: '#126B40',
  jon: '#3B1F1F',
  jonquil: '#EEFF9A',
  jordyblue: '#8AB9F1',
  judgegray: '#544333',
  jumbo: '#7C7B82',
  junglegreen: '#29AB87',
  junglemist: '#B4CFD3',
  juniper: '#6D9292',
  justright: '#ECCDB9',
  kabul: '#5E483E',
  kaitokegreen: '#004620',
  kangaroo: '#C6C8BD',
  karaka: '#1E1609',
  karry: '#FFEAD4',
  kashmirblue: '#507096',
  kelp: '#454936',
  kenyancopper: '#7C1C05',
  keppel: '#3AB09E',
  keylimepie: '#BFC921',
  khaki: '#F0E68C',
  kidnapper: '#E1EAD4',
  kilamanjaro: '#240C02',
  killarney: '#3A6A47',
  kimberly: '#736C9F',
  kingfisherdaisy: '#3E0480',
  kobi: '#E79FC4',
  kokoda: '#6E6D57',
  korma: '#8F4B0E',
  koromiko: '#FFBD5F',
  kournikova: '#FFE772',
  kumera: '#886221',
  lapalma: '#368716',
  larioja: '#B3C110',
  laspalmas: '#C6E610',
  laser: '#C8B568',
  laserlemon: '#FFFF66',
  laurel: '#749378',
  lavender: '#B57EDC',
  lavendergray: '#BDBBD7',
  lavendermagenta: '#EE82EE',
  lavenderpink: '#FBAED2',
  lavenderpurple: '#967BB6',
  lavenderrose: '#FBA0E3',
  lavenderblush: '#FFF0F5',
  leather: '#967059',
  lemon: '#FDE910',
  lemonchiffon: '#FFFACD',
  lemonginger: '#AC9E22',
  lemongrass: '#9B9E8F',
  lightapricot: '#FDD5B1',
  lightorchid: '#E29CD2',
  lightwisteria: '#C9A0DC',
  lightningyellow: '#FCC01E',
  lilac: '#C8A2C8',
  lilacbush: '#9874D3',
  lily: '#C8AABF',
  lilywhite: '#E7F8FF',
  lima: '#76BD17',
  lime: '#BFFF00',
  limeade: '#6F9D02',
  limedash: '#747D63',
  limedoak: '#AC8A56',
  limedspruce: '#394851',
  linen: '#FAF0E6',
  linkwater: '#D9E4F5',
  lipstick: '#AB0563',
  lisbonbrown: '#423921',
  lividbrown: '#4D282E',
  loafer: '#EEF4DE',
  loblolly: '#BDC9CE',
  lochinvar: '#2C8C84',
  lochmara: '#007EC7',
  locust: '#A8AF8E',
  logcabin: '#242A1D',
  logan: '#AAA9CD',
  lola: '#DFCFDB',
  londonhue: '#BEA6C3',
  lonestar: '#6D0101',
  lotus: '#863C3C',
  loulou: '#460B41',
  lucky: '#AF9F1C',
  luckypoint: '#1A1A68',
  lunargreen: '#3C493A',
  luxorgold: '#A7882C',
  lynch: '#697E9A',
  mabel: '#D9F7FF',
  macaroniandcheese: '#FFB97B',
  madang: '#B7F0BE',
  madison: '#09255D',
  madras: '#3F3002',
  magentafuchsia: '#FF00FF',
  magicmint: '#AAF0D1',
  magnolia: '#F8F4FF',
  mahogany: '#4E0606',
  maitai: '#B06608',
  maize: '#F5D5A0',
  makara: '#897D6D',
  mako: '#444954',
  malachite: '#0BDA51',
  malibu: '#7DC8F7',
  mallard: '#233418',
  malta: '#BDB2A1',
  mamba: '#8E8190',
  manatee: '#8D90A1',
  mandalay: '#AD781B',
  mandy: '#E25465',
  mandyspink: '#F2C3B2',
  mangotango: '#E77200',
  manhattan: '#F5C999',
  mantis: '#74C365',
  mantle: '#8B9C90',
  manz: '#EEEF78',
  mardigras: '#350036',
  marigold: '#B98D28',
  marigoldyellow: '#FBE870',
  mariner: '#286ACD',
  maroon: '#800000',
  maroonflush: '#C32148',
  maroonoak: '#520C17',
  marshland: '#0B0F08',
  martini: '#AFA09E',
  martinique: '#363050',
  marzipan: '#F8DB9D',
  masala: '#403B38',
  matisse: '#1B659D',
  matrix: '#B05D54',
  matterhorn: '#4E3B41',
  mauve: '#E0B0FF',
  mauvelous: '#F091A9',
  maverick: '#D8C2D5',
  mediumcarmine: '#AF4035',
  mediumpurple: '#9370DB',
  mediumredviolet: '#BB3385',
  melanie: '#E4C2D5',
  melanzane: '#300529',
  melon: '#FEBAAD',
  melrose: '#C7C1FF',
  mercury: '#E5E5E5',
  merino: '#F6F0E6',
  merlin: '#413C37',
  merlot: '#831923',
  metallicbronze: '#49371B',
  metalliccopper: '#71291D',
  meteor: '#D07D12',
  meteorite: '#3C1F76',
  mexicanred: '#A72525',
  midgray: '#5F5F6E',
  midnight: '#011635',
  midnightblue: '#003366',
  midnightmoss: '#041004',
  mikado: '#2D2510',
  milan: '#FAFFA4',
  milanored: '#B81104',
  milkpunch: '#FFF6D4',
  millbrook: '#594433',
  mimosa: '#F8FDD3',
  mindaro: '#E3F988',
  mineshaft: '#323232',
  mineralgreen: '#3F5D53',
  ming: '#36747D',
  minsk: '#3F307F',
  mintgreen: '#98FF98',
  mintjulep: '#F1EEC1',
  minttulip: '#C4F4EB',
  mirage: '#161928',
  mischka: '#D1D2DD',
  mistgray: '#C4C4BC',
  mobster: '#7F7589',
  moccaccino: '#6E1D14',
  mocha: '#782D19',
  mojo: '#C04737',
  monalisa: '#FFA194',
  monarch: '#8B0723',
  mondo: '#4A3C30',
  mongoose: '#B5A27F',
  monsoon: '#8A8389',
  montecarlo: '#83D0C6',
  monza: '#C7031E',
  moodyblue: '#7F76D3',
  moonglow: '#FCFEDA',
  moonmist: '#DCDDCC',
  moonraker: '#D6CEF6',
  morningglory: '#9EDEE0',
  moroccobrown: '#441D00',
  mortar: '#504351',
  mosque: '#036A6E',
  mossgreen: '#ADDFAD',
  mountainmeadow: '#1AB385',
  mountainmist: '#959396',
  mountbattenpink: '#997A8D',
  muddywaters: '#B78E5C',
  muesli: '#AA8B5B',
  mulberry: '#C54B8C',
  mulberrywood: '#5C0536',
  mulefawn: '#8C472F',
  mulledwine: '#4E4562',
  mustard: '#FFDB58',
  mypink: '#D69188',
  mysin: '#FFB31F',
  mystic: '#E2EBED',
  nandor: '#4B5D52',
  napa: '#ACA494',
  narvik: '#EDF9F1',
  naturalgray: '#8B8680',
  navajowhite: '#FFDEAD',
  navyblue: '#000080',
  nebula: '#CBDBD6',
  negroni: '#FFE2C5',
  neoncarrot: '#FF9933',
  nepal: '#8EABC1',
  neptune: '#7CB7BB',
  nero: '#140600',
  nevada: '#646E75',
  neworleans: '#F3D69D',
  newyorkpink: '#D7837F',
  niagara: '#06A189',
  nightrider: '#1F120F',
  nightshadz: '#AA375A',
  nileblue: '#193751',
  nobel: '#B7B1B1',
  nomad: '#BAB1A2',
  norway: '#A8BD9F',
  nugget: '#C59922',
  nutmeg: '#81422C',
  nutmegwoodfinish: '#683600',
  oasis: '#FEEFCE',
  observatory: '#02866F',
  oceangreen: '#41AA78',
  ochre: '#CC7722',
  offgreen: '#E6F8F3',
  offyellow: '#FEF9E3',
  oil: '#281E15',
  oldbrick: '#901E1E',
  oldcopper: '#724A2F',
  oldgold: '#CFB53B',
  oldlace: '#FDF5E6',
  oldlavender: '#796878',
  oldrose: '#C08081',
  olive: '#808000',
  olivedrab: '#6B8E23',
  olivegreen: '#B5B35C',
  olivehaze: '#8B8470',
  olivetone: '#716E10',
  olivine: '#9AB973',
  onahau: '#CDF4FF',
  onion: '#2F270E',
  opal: '#A9C6C2',
  opium: '#8E6F70',
  oracle: '#377475',
  orange: '#FF681F',
  orangepeel: '#FFA000',
  orangeroughy: '#C45719',
  orangewhite: '#FEFCED',
  orchid: '#DA70D6',
  orchidwhite: '#FFFDF3',
  oregon: '#9B4703',
  orient: '#015E85',
  orientalpink: '#C69191',
  orinoco: '#F3FBD4',
  oslogray: '#878D91',
  ottoman: '#E9F8ED',
  outerspace: '#2D383A',
  outrageousorange: '#FF6037',
  oxfordblue: '#384555',
  oxley: '#779E86',
  oysterbay: '#DAFAFF',
  oysterpink: '#E9CECD',
  paarl: '#A65529',
  pablo: '#776F61',
  pacificblue: '#009DC4',
  pacifika: '#778120',
  paco: '#411F10',
  padua: '#ADE6C4',
  palecanary: '#FFFF99',
  paleleaf: '#C0D3B9',
  paleoyster: '#988D77',
  paleprim: '#FDFEB8',
  palerose: '#FFE1F2',
  palesky: '#6E7783',
  paleslate: '#C3BFC1',
  palmgreen: '#09230F',
  palmleaf: '#19330E',
  pampas: '#F4F2EE',
  panache: '#EAF6EE',
  pancho: '#EDCDAB',
  papayawhip: '#FFEFD5',
  paprika: '#8D0226',
  paradiso: '#317D82',
  parchment: '#F1E9D2',
  parisdaisy: '#FFF46E',
  parism: '#26056A',
  pariswhite: '#CADCD4',
  parsley: '#134F19',
  pastelgreen: '#77DD77',
  pastelpink: '#FFD1DC',
  patina: '#639A8F',
  pattensblue: '#DEF5FF',
  paua: '#260368',
  pavlova: '#D7C498',
  peach: '#FFE5B4',
  peachcream: '#FFF0DB',
  peachorange: '#FFCC99',
  peachschnapps: '#FFDCD6',
  peachyellow: '#FADFAD',
  peanut: '#782F16',
  pear: '#D1E231',
  pearlbush: '#E8E0D5',
  pearllusta: '#FCF4DC',
  peat: '#716B56',
  pelorous: '#3EABBF',
  peppermint: '#E3F5E1',
  perano: '#A9BEF2',
  perfume: '#D0BEF8',
  periglacialblue: '#E1E6D6',
  periwinkle: '#CCCCFF',
  periwinklegray: '#C3CDE6',
  persianblue: '#1C39BB',
  persiangreen: '#00A693',
  persianindigo: '#32127A',
  persianpink: '#F77FBE',
  persianplum: '#701C1C',
  persianred: '#CC3333',
  persianrose: '#FE28A2',
  persimmon: '#FF6B53',
  perutan: '#7F3A02',
  pesto: '#7C7631',
  petiteorchid: '#DB9690',
  pewter: '#96A8A1',
  pharlap: '#A3807B',
  picasso: '#FFF39D',
  pickledbean: '#6E4826',
  pickledbluewood: '#314459',
  pictonblue: '#45B1E8',
  pigpink: '#FDD7E4',
  pigeonpost: '#AFBDD9',
  pigmentindigo: '#4B0082',
  pinecone: '#6D5E54',
  pineglade: '#C7CD90',
  pinegreen: '#01796F',
  pinetree: '#171F04',
  pink: '#FFC0CB',
  pinkflamingo: '#FF66FF',
  pinkflare: '#E1C0C8',
  pinklace: '#FFDDF4',
  pinklady: '#FFF1D8',
  pinksalmon: '#FF91A4',
  pinkswan: '#BEB5B7',
  piper: '#C96323',
  pipi: '#FEF4CC',
  pippin: '#FFE1DF',
  pirategold: '#BA7F03',
  pistachio: '#9DC209',
  pixiegreen: '#C0D8B6',
  pizazz: '#FF9000',
  pizza: '#C99415',
  plantation: '#27504B',
  plum: '#843179',
  pohutukawa: '#8F021C',
  polar: '#E5F9F6',
  poloblue: '#8DA8CC',
  pomegranate: '#F34723',
  pompadour: '#660045',
  porcelain: '#EFF2F3',
  porsche: '#EAAE69',
  portgore: '#251F4F',
  portafino: '#FFFFB4',
  portage: '#8B9FEE',
  portica: '#F9E663',
  potpourri: '#F5E7E2',
  pottersclay: '#8C5738',
  powderash: '#BCC9C2',
  powderblue: '#B0E0E6',
  prairiesand: '#9A3820',
  prelude: '#D0C0E5',
  prim: '#F0E2EC',
  primrose: '#EDEA99',
  provincialpink: '#FEF5F1',
  prussianblue: '#003153',
  puce: '#CC8899',
  pueblo: '#7D2C14',
  puertorico: '#3FC1AA',
  pumice: '#C2CAC4',
  pumpkin: '#FF7518',
  pumpkinskin: '#B1610B',
  punch: '#DC4333',
  punga: '#4D3D14',
  purple: '#660099',
  purpleheart: '#652DC1',
  purplemountainsmajesty: '#9678B6',
  purplepizzazz: '#FF00CC',
  putty: '#E7CD8C',
  quarterpearllusta: '#FFFDF4',
  quarterspanishwhite: '#F7F2E1',
  quicksand: '#BD978E',
  quillgray: '#D6D6D1',
  quincy: '#623F2D',
  racinggreen: '#0C1911',
  radicalred: '#FF355E',
  raffia: '#EADAB8',
  rainee: '#B9C8AC',
  rajah: '#F7B668',
  rangitoto: '#2E3222',
  rangoongreen: '#1C1E13',
  raven: '#727B89',
  rawsienna: '#D27D46',
  rawumber: '#734A12',
  razzledazzlerose: '#FF33CC',
  razzmatazz: '#E30B5C',
  rebel: '#3C1206',
  red: '#FF0000',
  redbeech: '#7B3801',
  redberry: '#8E0000',
  reddamask: '#DA6A41',
  reddevil: '#860111',
  redorange: '#FF3F34',
  redoxide: '#6E0902',
  redribbon: '#ED0A3F',
  redrobin: '#80341F',
  redstage: '#D05F04',
  redviolet: '#C71585',
  redwood: '#5D1E0F',
  reef: '#C9FFA2',
  reefgold: '#9F821C',
  regalblue: '#013F6A',
  regentgray: '#86949F',
  regentstblue: '#AAD6E6',
  remy: '#FEEBF3',
  renosand: '#A86515',
  resolutionblue: '#002387',
  revolver: '#2C1632',
  rhino: '#2E3F62',
  ricecake: '#FFFEF0',
  riceflower: '#EEFFE2',
  richgold: '#A85307',
  riogrande: '#BBD009',
  ripelemon: '#F4D81C',
  ripeplum: '#410056',
  riptide: '#8BE6D8',
  riverbed: '#434C59',
  robroy: '#EAC674',
  robinseggblue: '#00CCCC',
  rock: '#4D3833',
  rockblue: '#9EB1CD',
  rockspray: '#BA450C',
  rodeodust: '#C9B29B',
  rollingstone: '#747D83',
  roman: '#DE6360',
  romancoffee: '#795D4C',
  romance: '#FFFEFD',
  romantic: '#FFD2B7',
  ronchi: '#ECC54E',
  roofterracotta: '#A62F20',
  rope: '#8E4D1E',
  rose: '#FF007F',
  rosebud: '#FBB2A3',
  rosebudcherry: '#800B47',
  rosefog: '#E7BCB4',
  rosewhite: '#FFF6F5',
  roseofsharon: '#BF5500',
  rosewood: '#65000B',
  roti: '#C6A84B',
  rouge: '#A23B6C',
  royalblue: '#4169E1',
  royalheath: '#AB3472',
  royalpurple: '#6B3FA0',
  rum: '#796989',
  rumswizzle: '#F9F8E4',
  russet: '#80461B',
  russett: '#755A57',
  rust: '#B7410E',
  rusticred: '#480404',
  rustynail: '#86560A',
  saddle: '#4C3024',
  saddlebrown: '#583401',
  saffron: '#F4C430',
  saffronmango: '#F9BF58',
  sage: '#9EA587',
  sahara: '#B7A214',
  saharasand: '#F1E788',
  sail: '#B8E0F9',
  salem: '#097F4B',
  salmon: '#FF8C69',
  salomie: '#FEDB8D',
  saltbox: '#685E6E',
  saltpan: '#F1F7F2',
  sambuca: '#3A2010',
  sanfelix: '#0B6207',
  sanjuan: '#304B6A',
  sanmarino: '#456CAC',
  sanddune: '#826F65',
  sandal: '#AA8D6F',
  sandrift: '#AB917A',
  sandstone: '#796D62',
  sandwisp: '#F5E7A2',
  sandybeach: '#FFEAC8',
  sandybrown: '#F4A460',
  sangria: '#92000A',
  sanguinebrown: '#8D3D38',
  santafe: '#B16D52',
  santasgray: '#9FA0B1',
  sapling: '#DED4A4',
  sapphire: '#2F519E',
  saratoga: '#555B10',
  satinlinen: '#E6E4D4',
  sauvignon: '#FFF5F3',
  sazerac: '#FFF4E0',
  scampi: '#675FA6',
  scandal: '#CFFAF4',
  scarlet: '#FF2400',
  scarletgum: '#431560',
  scarlett: '#950015',
  scarpaflow: '#585562',
  schist: '#A9B497',
  schoolbusyellow: '#FFD800',
  schooner: '#8B847E',
  scienceblue: '#0066CC',
  scooter: '#2EBFD4',
  scorpion: '#695F62',
  scotchmist: '#FFFBDC',
  screamingreen: '#66FF66',
  seabuckthorn: '#FBA129',
  seagreen: '#2E8B57',
  seamist: '#C5DBCA',
  seanymph: '#78A39C',
  seapink: '#ED989E',
  seagull: '#80CCEA',
  seance: '#731E8F',
  seashell: '#F1F1F1',
  seashellpeach: '#FFF5EE',
  seaweed: '#1B2F11',
  selago: '#F0EEFD',
  selectiveyellow: '#FFBA00',
  sepia: '#704214',
  sepiablack: '#2B0202',
  sepiaskin: '#9E5B40',
  serenade: '#FFF4E8',
  shadow: '#837050',
  shadowgreen: '#9AC2B8',
  shadylady: '#AAA5A9',
  shakespeare: '#4EABD1',
  shalimar: '#FBFFBA',
  shamrock: '#33CC99',
  shark: '#25272C',
  sherpablue: '#004950',
  sherwoodgreen: '#02402C',
  shilo: '#E8B9B3',
  shinglefawn: '#6B4E31',
  shipcove: '#788BBA',
  shipgray: '#3E3A44',
  shiraz: '#B20931',
  shocking: '#E292C0',
  shockingpink: '#FC0FC0',
  shuttlegray: '#5F6672',
  siam: '#646A54',
  sidecar: '#F3E7BB',
  silk: '#BDB1A8',
  silver: '#C0C0C0',
  silverchalice: '#ACACAC',
  silverrust: '#C9C0BB',
  silversand: '#BFC1C2',
  silvertree: '#66B58F',
  sinbad: '#9FD7D3',
  siren: '#7A013A',
  sirocco: '#718080',
  sisal: '#D3CBBA',
  skeptic: '#CAE6DA',
  skyblue: '#76D7EA',
  slategray: '#708090',
  smalt: '#003399',
  smaltblue: '#51808F',
  smoky: '#605B73',
  snowdrift: '#F7FAF7',
  snowflurry: '#E4FFD1',
  snowymint: '#D6FFDB',
  snuff: '#E2D8ED',
  soapstone: '#FFFBF9',
  softamber: '#D1C6B4',
  softpeach: '#F5EDEF',
  solidpink: '#893843',
  solitaire: '#FEF8E2',
  solitude: '#EAF6FF',
  sorbus: '#FD7C07',
  sorrellbrown: '#CEB98F',
  soyabean: '#6A6051',
  spanishgreen: '#819885',
  spectra: '#2F5A57',
  spice: '#6A442E',
  spicymix: '#885342',
  spicymustard: '#74640D',
  spicypink: '#816E71',
  spindle: '#B6D1EA',
  spray: '#79DEEC',
  springgreen: '#00FF7F',
  springleaves: '#578363',
  springrain: '#ACCBB1',
  springsun: '#F6FFDC',
  springwood: '#F8F6F1',
  sprout: '#C1D7B0',
  spunpearl: '#AAABB7',
  squirrel: '#8F8176',
  sttropaz: '#2D569B',
  stack: '#8A8F8A',
  stardust: '#9F9F9C',
  starkwhite: '#E5D7BD',
  starship: '#ECF245',
  steelblue: '#4682B4',
  steelgray: '#262335',
  stiletto: '#9C3336',
  stonewall: '#928573',
  stormdust: '#646463',
  stormgray: '#717486',
  stratos: '#000741',
  straw: '#D4BF8D',
  strikemaster: '#956387',
  stromboli: '#325D52',
  studio: '#714AB2',
  submarine: '#BAC7C9',
  sugarcane: '#F9FFF6',
  sulu: '#C1F07C',
  summergreen: '#96BBAB',
  sun: '#FBAC13',
  sundance: '#C9B35B',
  sundown: '#FFB1B3',
  sunflower: '#E4D422',
  sunglo: '#E16865',
  sunglow: '#FFCC33',
  sunsetorange: '#FE4C40',
  sunshade: '#FF9E2C',
  supernova: '#FFC901',
  surf: '#BBD7C1',
  surfcrest: '#CFE5D2',
  surfiegreen: '#0C7A79',
  sushi: '#87AB39',
  suvagray: '#888387',
  swamp: '#001B1C',
  swampgreen: '#ACB78E',
  swansdown: '#DCF0EA',
  sweetcorn: '#FBEA8C',
  sweetpink: '#FD9FA2',
  swirl: '#D3CDC5',
  swisscoffee: '#DDD6D5',
  sycamore: '#908D39',
  tabasco: '#A02712',
  tacao: '#EDB381',
  tacha: '#D6C562',
  tahitigold: '#E97C07',
  tahunasands: '#EEF0C8',
  tallpoppy: '#B32D29',
  tallow: '#A8A589',
  tamarillo: '#991613',
  tamarind: '#341515',
  tan: '#D2B48C',
  tanhide: '#FA9D5A',
  tana: '#D9DCC1',
  tangaroa: '#03163C',
  tangerine: '#F28500',
  tango: '#ED7A1C',
  tapa: '#7B7874',
  tapestry: '#B05E81',
  tara: '#E1F6E8',
  tarawera: '#073A50',
  tasman: '#CFDCCF',
  taupe: '#483C32',
  taupegray: '#B3AF95',
  tawnyport: '#692545',
  tepapagreen: '#1E433C',
  tea: '#C1BAB0',
  teagreen: '#D0F0C0',
  teak: '#B19461',
  teal: '#008080',
  tealblue: '#044259',
  temptress: '#3B000B',
  tenn: '#CD5700',
  tequila: '#FFE6C7',
  terracotta: '#E2725B',
  texas: '#F8F99C',
  texasrose: '#FFB555',
  thatch: '#B69D98',
  thatchgreen: '#403D19',
  thistle: '#D8BFD8',
  thistlegreen: '#CCCAA8',
  thunder: '#33292F',
  thunderbird: '#C02B18',
  tiamaria: '#C1440E',
  tiara: '#C3D1D1',
  tiber: '#063537',
  ticklemepink: '#FC80A5',
  tidal: '#F1FFAD',
  tide: '#BFB8B0',
  timbergreen: '#16322C',
  timberwolf: '#D9D6CF',
  titanwhite: '#F0EEFF',
  toast: '#9A6E61',
  tobaccobrown: '#715D47',
  toledo: '#3A0020',
  tolopea: '#1B0245',
  tomthumb: '#3F583B',
  tonyspink: '#E79F8C',
  topaz: '#7C778A',
  torchred: '#FD0E35',
  toreabay: '#0F2D9E',
  toryblue: '#1450AA',
  tosca: '#8D3F3F',
  totempole: '#991B07',
  towergray: '#A9BDBF',
  tradewind: '#5FB3AC',
  tranquil: '#E6FFFF',
  travertine: '#FFFDE8',
  treepoppy: '#FC9C1D',
  treehouse: '#3B2820',
  trendygreen: '#7C881A',
  trendypink: '#8C6495',
  trinidad: '#E64E03',
  tropicalblue: '#C3DDF9',
  tropicalrainforest: '#00755E',
  trout: '#4A4E5A',
  truev: '#8A73D6',
  tuatara: '#363534',
  tuftbush: '#FFDDCD',
  tuliptree: '#EAB33B',
  tumbleweed: '#DEA681',
  tuna: '#353542',
  tundora: '#4A4244',
  turbo: '#FAE600',
  turkishrose: '#B57281',
  turmeric: '#CABB48',
  turquoise: '#30D5C8',
  turquoiseblue: '#6CDAE7',
  turtlegreen: '#2A380B',
  tuscany: '#BD5E2E',
  tusk: '#EEF3C3',
  tussock: '#C5994B',
  tutu: '#FFF1F9',
  twilight: '#E4CFDE',
  twilightblue: '#EEFDFF',
  twine: '#C2955D',
  tyrianpurple: '#66023C',
  ultramarine: '#120A8F',
  underagepink: '#F9E6F4',
  valencia: '#D84437',
  valentino: '#350E42',
  valhalla: '#2B194F',
  vancleef: '#49170C',
  vanilla: '#D1BEA8',
  vanillaice: '#F3D9DF',
  varden: '#FFF6DF',
  venetianred: '#72010F',
  veniceblue: '#055989',
  venus: '#928590',
  verdigris: '#5D5E37',
  verdungreen: '#495400',
  vermilion: '#FF4D00',
  vesuvius: '#B14A0B',
  victoria: '#534491',
  vidaloca: '#549019',
  viking: '#64CCDB',
  vinrouge: '#983D61',
  viola: '#CB8FA9',
  violentviolet: '#290C5E',
  violet: '#240A40',
  violeteggplant: '#991199',
  violetred: '#F7468A',
  viridian: '#40826D',
  viridiangreen: '#678975',
  visvis: '#FFEFA1',
  vistablue: '#8FD6B4',
  vistawhite: '#FCF8F7',
  vividtangerine: '#FF9980',
  vividviolet: '#803790',
  voodoo: '#533455',
  vulcan: '#10121D',
  wafer: '#DECBC6',
  waikawagray: '#5A6E9C',
  waiouru: '#363C0D',
  walnut: '#773F1A',
  wasabi: '#788A25',
  waterleaf: '#A1E9DE',
  watercourse: '#056F57',
  waterloo: '#7B7C94',
  wattle: '#DCD747',
  watusi: '#FFDDCF',
  waxflower: '#FFC0A8',
  wepeep: '#F7DBE6',
  weborange: '#FFA500',
  wedgewood: '#4E7F9E',
  wellread: '#B43332',
  westcoast: '#625119',
  westside: '#FF910F',
  westar: '#DCD9D2',
  wewak: '#F19BAB',
  wheat: '#F5DEB3',
  wheatfield: '#F3EDCF',
  whiskey: '#D59A6F',
  whisper: '#F7F5FA',
  white: '#FFFFFF',
  whiteice: '#DDF9F1',
  whitelilac: '#F8F7FC',
  whitelinen: '#F8F0E8',
  whitepointer: '#FEF8FF',
  whiterock: '#EAE8D4',
  wildblueyonder: '#7A89B8',
  wildrice: '#ECE090',
  wildsand: '#F4F4F4',
  wildstrawberry: '#FF3399',
  wildwatermelon: '#FD5B78',
  wildwillow: '#B9C46A',
  william: '#3A686C',
  willowbrook: '#DFECDA',
  willowgrove: '#65745D',
  windsor: '#3C0878',
  wineberry: '#591D35',
  winterhazel: '#D5D195',
  wisppink: '#FEF4F8',
  wisteria: '#9771B5',
  wistful: '#A4A6D3',
  witchhaze: '#FFFC99',
  woodbark: '#261105',
  woodland: '#4D5328',
  woodrush: '#302A0F',
  woodsmoke: '#0C0D0F',
  woodybrown: '#483131',
  xanadu: '#738678',
  yellow: '#FFFF00',
  yellowgreen: '#C5E17A',
  yellowmetal: '#716338',
  yelloworange: '#FFAE42',
  yellowsea: '#FEA904',
  yourpink: '#FFC3C0',
  yukongold: '#7B6608',
  yuma: '#CEC291',
  zambezi: '#685558',
  zanah: '#DAECD6',
  zest: '#E5841B',
  zeus: '#292319',
  ziggurat: '#BFDBE2',
  zinnwaldite: '#EBC2AF',
  zircon: '#F4F8FF',
  zombie: '#E4D69B',
  zorba: '#A59B91',
  zuccini: '#044022',
  zumthor: '#EDF6FF'
});

Meteor.lumiere = Meteor.lumiere || {};
Meteor.lumiere.colors = colors;