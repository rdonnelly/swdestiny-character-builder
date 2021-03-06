const cardBack = require('../../images/back.png');
const cardBackTexture = require('../../images/back-texture.jpg');

const cardImages = {
  '01001': require('../../images/characters/01001.jpg'),
  '01002': require('../../images/characters/01002.jpg'),
  '01003': require('../../images/characters/01003.jpg'),
  '01004': require('../../images/characters/01004.jpg'),
  '01009': require('../../images/characters/01009.jpg'),
  '01010': require('../../images/characters/01010.jpg'),
  '01011': require('../../images/characters/01011.jpg'),
  '01012': require('../../images/characters/01012.jpg'),
  '01019': require('../../images/characters/01019.jpg'),
  '01020': require('../../images/characters/01020.jpg'),
  '01021': require('../../images/characters/01021.jpg'),
  '01022': require('../../images/characters/01022.jpg'),
  '01027': require('../../images/characters/01027.jpg'),
  '01028': require('../../images/characters/01028.jpg'),
  '01029': require('../../images/characters/01029.jpg'),
  '01030': require('../../images/characters/01030.jpg'),
  '01035': require('../../images/characters/01035.jpg'),
  '01036': require('../../images/characters/01036.jpg'),
  '01037': require('../../images/characters/01037.jpg'),
  '01038': require('../../images/characters/01038.jpg'),
  '01045': require('../../images/characters/01045.jpg'),
  '01046': require('../../images/characters/01046.jpg'),
  '01047': require('../../images/characters/01047.jpg'),
  '01048': require('../../images/characters/01048.jpg'),

  '02001': require('../../images/characters/02001.jpg'),
  '02002': require('../../images/characters/02002.jpg'),
  '02003': require('../../images/characters/02003.jpg'),
  '02004': require('../../images/characters/02004.jpg'),
  '02009': require('../../images/characters/02009.jpg'),
  '02010': require('../../images/characters/02010.jpg'),
  '02011': require('../../images/characters/02011.jpg'),
  '02012': require('../../images/characters/02012.jpg'),
  '02018': require('../../images/characters/02018.jpg'),
  '02019': require('../../images/characters/02019.jpg'),
  '02020': require('../../images/characters/02020.jpg'),
  '02021': require('../../images/characters/02021.jpg'),
  '02026': require('../../images/characters/02026.jpg'),
  '02027': require('../../images/characters/02027.jpg'),
  '02028': require('../../images/characters/02028.jpg'),
  '02029': require('../../images/characters/02029.jpg'),
  '02034': require('../../images/characters/02034.jpg'),
  '02035': require('../../images/characters/02035.jpg'),
  '02036': require('../../images/characters/02036.jpg'),
  '02037': require('../../images/characters/02037.jpg'),
  '02043': require('../../images/characters/02043.jpg'),
  '02044': require('../../images/characters/02044.jpg'),
  '02045': require('../../images/characters/02045.jpg'),
  '02046': require('../../images/characters/02046.jpg'),

  '03001': require('../../images/characters/03001.jpg'),
  '03002': require('../../images/characters/03002.jpg'),
  '03003': require('../../images/characters/03003.jpg'),
  '03004': require('../../images/characters/03004.jpg'),
  '03008': require('../../images/characters/03008.jpg'),
  '03009': require('../../images/characters/03009.jpg'),
  '03010': require('../../images/characters/03010.jpg'),
  '03011': require('../../images/characters/03011.jpg'),
  '03016': require('../../images/characters/03016.jpg'),
  '03017': require('../../images/characters/03017.jpg'),
  '03018': require('../../images/characters/03018.jpg'),
  '03019': require('../../images/characters/03019.jpg'),
  '03024': require('../../images/characters/03024.jpg'),
  '03025': require('../../images/characters/03025.jpg'),
  '03026': require('../../images/characters/03026.jpg'),
  '03027': require('../../images/characters/03027.jpg'),
  '03031': require('../../images/characters/03031.jpg'),
  '03032': require('../../images/characters/03032.jpg'),
  '03033': require('../../images/characters/03033.jpg'),
  '03034': require('../../images/characters/03034.jpg'),
  '03038': require('../../images/characters/03038.jpg'),
  '03039': require('../../images/characters/03039.jpg'),
  '03040': require('../../images/characters/03040.jpg'),
  '03041': require('../../images/characters/03041.jpg'),

  '04001': require('../../images/characters/04001.jpg'),
  '04002': require('../../images/characters/04002.jpg'),
  '04024': require('../../images/characters/04024.jpg'),
  '04025': require('../../images/characters/04025.jpg'),

  '05001': require('../../images/characters/05001.jpg'),
  '05002': require('../../images/characters/05002.jpg'),
  '05003': require('../../images/characters/05003.jpg'),
  '05004': require('../../images/characters/05004.jpg'),
  '05009': require('../../images/characters/05009.jpg'),
  '05010': require('../../images/characters/05010.jpg'),
  '05011': require('../../images/characters/05011.jpg'),
  '05012': require('../../images/characters/05012.jpg'),
  '05013': require('../../images/characters/05013.jpg'),
  '05018': require('../../images/characters/05018.jpg'),
  '05019': require('../../images/characters/05019.jpg'),
  '05020': require('../../images/characters/05020.jpg'),
  '05021': require('../../images/characters/05021.jpg'),
  '05022': require('../../images/characters/05022.jpg'),
  '05029': require('../../images/characters/05029.jpg'),
  '05030': require('../../images/characters/05030.jpg'),
  '05031': require('../../images/characters/05031.jpg'),
  '05032': require('../../images/characters/05032.jpg'),
  '05033': require('../../images/characters/05033.jpg'),
  '05038': require('../../images/characters/05038.jpg'),
  '05039': require('../../images/characters/05039.jpg'),
  '05040': require('../../images/characters/05040.jpg'),
  '05041': require('../../images/characters/05041.jpg'),
  '05046': require('../../images/characters/05046.jpg'),
  '05047': require('../../images/characters/05047.jpg'),
  '05048': require('../../images/characters/05048.jpg'),
  '05049': require('../../images/characters/05049.jpg'),
  '05050': require('../../images/characters/05050.jpg'),
  '05065': require('../../images/characters/05065.jpg'),

  '06001': require('../../images/characters/06001.jpg'),
  '06002': require('../../images/characters/06002.jpg'),
  '06003': require('../../images/characters/06003.jpg'),
  '06004': require('../../images/characters/06004.jpg'),

  '07001': require('../../images/characters/07001.jpg'),
  '07002': require('../../images/characters/07002.jpg'),
  '07003': require('../../images/characters/07003.jpg'),
  '07004': require('../../images/characters/07004.jpg'),
  '07018': require('../../images/characters/07018.jpg'),
  '07019': require('../../images/characters/07019.jpg'),
  '07020': require('../../images/characters/07020.jpg'),
  '07021': require('../../images/characters/07021.jpg'),
  '07035': require('../../images/characters/07035.jpg'),
  '07036': require('../../images/characters/07036.jpg'),
  '07037': require('../../images/characters/07037.jpg'),
  '07038': require('../../images/characters/07038.jpg'),
  '07054': require('../../images/characters/07054.jpg'),
  '07055': require('../../images/characters/07055.jpg'),
  '07056': require('../../images/characters/07056.jpg'),
  '07057': require('../../images/characters/07057.jpg'),
  '07071': require('../../images/characters/07071.jpg'),
  '07072': require('../../images/characters/07072.jpg'),
  '07073': require('../../images/characters/07073.jpg'),
  '07074': require('../../images/characters/07074.jpg'),
  '07088': require('../../images/characters/07088.jpg'),
  '07089': require('../../images/characters/07089.jpg'),
  '07090': require('../../images/characters/07090.jpg'),
  '07091': require('../../images/characters/07091.jpg'),

  '08001': require('../../images/characters/08001.jpg'),
  '08002': require('../../images/characters/08002.jpg'),
  '08003': require('../../images/characters/08003.jpg'),
  '08004': require('../../images/characters/08004.jpg'),
  '08018': require('../../images/characters/08018.jpg'),
  '08019': require('../../images/characters/08019.jpg'),
  '08020': require('../../images/characters/08020.jpg'),
  '08021': require('../../images/characters/08021.jpg'),
  '08035': require('../../images/characters/08035.jpg'),
  '08036': require('../../images/characters/08036.jpg'),
  '08037': require('../../images/characters/08037.jpg'),
  '08055': require('../../images/characters/08055.jpg'),
  '08056': require('../../images/characters/08056.jpg'),
  '08057': require('../../images/characters/08057.jpg'),
  '08058': require('../../images/characters/08058.jpg'),
  '08072': require('../../images/characters/08072.jpg'),
  '08073': require('../../images/characters/08073.jpg'),
  '08074': require('../../images/characters/08074.jpg'),
  '08075': require('../../images/characters/08075.jpg'),
  '08089': require('../../images/characters/08089.jpg'),
  '08090': require('../../images/characters/08090.jpg'),
  '08091': require('../../images/characters/08091.jpg'),
  '08134': require('../../images/characters/08134.jpg'),
  '08135': require('../../images/characters/08135.jpg'),

  '09001': require('../../images/characters/09001.jpg'),
  '09002': require('../../images/characters/09002.jpg'),
  '09003': require('../../images/characters/09003.jpg'),
  '09004': require('../../images/characters/09004.jpg'),
  '09018': require('../../images/characters/09018.jpg'),
  '09019': require('../../images/characters/09019.jpg'),
  '09020': require('../../images/characters/09020.jpg'),
  '09021': require('../../images/characters/09021.jpg'),
  '09022': require('../../images/characters/09022.jpg'),
  '09035': require('../../images/characters/09035.jpg'),
  '09036': require('../../images/characters/09036.jpg'),
  '09037': require('../../images/characters/09037.jpg'),
  '09038': require('../../images/characters/09038.jpg'),
  '09054': require('../../images/characters/09054.jpg'),
  '09055': require('../../images/characters/09055.jpg'),
  '09056': require('../../images/characters/09056.jpg'),
  '09057': require('../../images/characters/09057.jpg'),
  '09058': require('../../images/characters/09058.jpg'),
  '09072': require('../../images/characters/09072.jpg'),
  '09073': require('../../images/characters/09073.jpg'),
  '09074': require('../../images/characters/09074.jpg'),
  '09075': require('../../images/characters/09075.jpg'),
  '09088': require('../../images/characters/09088.jpg'),
  '09089': require('../../images/characters/09089.jpg'),
  '09090': require('../../images/characters/09090.jpg'),
  '09091': require('../../images/characters/09091.jpg'),
  '09141': require('../../images/characters/09141.jpg'),
  '09142': require('../../images/characters/09142.jpg'),

  '10001': require('../../images/characters/10001.jpg'),
  '10006': require('../../images/characters/10006.jpg'),
  '10009': require('../../images/characters/10009.jpg'),
  '10013': require('../../images/characters/10013.jpg'),

  '11001': require('../../images/characters/11001.jpg'),
  '11002': require('../../images/characters/11002.jpg'),
  '11003': require('../../images/characters/11003.jpg'),
  '11004': require('../../images/characters/11004.jpg'),
  '11005': require('../../images/characters/11005.jpg'),
  '11020': require('../../images/characters/11020.jpg'),
  '11021': require('../../images/characters/11021.jpg'),
  '11022': require('../../images/characters/11022.jpg'),
  '11023': require('../../images/characters/11023.jpg'),
  '11038': require('../../images/characters/11038.jpg'),
  '11039': require('../../images/characters/11039.jpg'),
  '11040': require('../../images/characters/11040.jpg'),
  '11041': require('../../images/characters/11041.jpg'),
  '11056': require('../../images/characters/11056.jpg'),
  '11057': require('../../images/characters/11057.jpg'),
  '11058': require('../../images/characters/11058.jpg'),
  '11059': require('../../images/characters/11059.jpg'),
  '11075': require('../../images/characters/11075.jpg'),
  '11076': require('../../images/characters/11076.jpg'),
  '11077': require('../../images/characters/11077.jpg'),
  '11078': require('../../images/characters/11078.jpg'),
  '11093': require('../../images/characters/11093.jpg'),
  '11094': require('../../images/characters/11094.jpg'),
  '11095': require('../../images/characters/11095.jpg'),
  '11096': require('../../images/characters/11096.jpg'),
  '11097': require('../../images/characters/11097.jpg'),

  '12001': require('../../images/characters/12001.jpg'),
  '12002': require('../../images/characters/12002.jpg'),
  '12003': require('../../images/characters/12003.jpg'),
  '12004': require('../../images/characters/12004.jpg'),
  '12020': require('../../images/characters/12020.jpg'),
  '12021': require('../../images/characters/12021.jpg'),
  '12022': require('../../images/characters/12022.jpg'),
  '12023': require('../../images/characters/12023.jpg'),
  '12024': require('../../images/characters/12024.jpg'),
  '12038': require('../../images/characters/12038.jpg'),
  '12039': require('../../images/characters/12039.jpg'),
  '12040': require('../../images/characters/12040.jpg'),
  '12041': require('../../images/characters/12041.jpg'),
  '12042': require('../../images/characters/12042.jpg'),
  '12053': require('../../images/characters/12053.jpg'),
  '12054': require('../../images/characters/12054.jpg'),
  '12055': require('../../images/characters/12055.jpg'),
  '12056': require('../../images/characters/12056.jpg'),
  '12070': require('../../images/characters/12070.jpg'),
  '12071': require('../../images/characters/12071.jpg'),
  '12072': require('../../images/characters/12072.jpg'),
  '12073': require('../../images/characters/12073.jpg'),
  '12074': require('../../images/characters/12074.jpg'),
  '12088': require('../../images/characters/12088.jpg'),
  '12089': require('../../images/characters/12089.jpg'),
  '12090': require('../../images/characters/12090.jpg'),
  '12091': require('../../images/characters/12091.jpg'),
  '12092': require('../../images/characters/12092.jpg'),
  '12129': require('../../images/characters/12129.jpg'),
  '12147': require('../../images/characters/12147.jpg'),

  '13001A': require('../../images/characters/13001A.jpg'),
  '13001B': require('../../images/characters/13001B.jpg'),
  '13002A': require('../../images/characters/13002A.jpg'),
  '13002B': require('../../images/characters/13002B.jpg'),
  '13003A': require('../../images/characters/13003A.jpg'),
  '13005B': require('../../images/characters/13005B.jpg'),
  '13005C': require('../../images/characters/13005C.jpg'),
  '13005D': require('../../images/characters/13005D.jpg'),
  '13007B': require('../../images/characters/13007B.jpg'),
};

export { cardBack, cardBackTexture, cardImages };
