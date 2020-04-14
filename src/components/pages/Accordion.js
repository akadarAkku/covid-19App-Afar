import React, { useState } from 'react';
import Header from './Header';
import FAQ from './Faqs';
import './index.css';
// import Contact from './Contact';

function Accordion () {
  const [faqs, setfaqs] = useState([
    {
      question: <p>Kurona Vayrus Macaay?</p>,
      answer: <p>KuroonaVayrus/ Coronaviruses Vayrus xaariyak kaxxah yan qaynatay saqa kee adam baxal kaxxa biyak katassu dudda kinni. <br/> 
      Adam baxal ufuy ruubiyyi taqabi katassaah, axcih umman naaxige goson qasô ceelak tabdiqeeh, sarrak gubuulo kee ufuy ruubiyyi<br/>
      taqabi katassu dudda. ahaak dumal tannah tan vayrusittek (MERS) kee (SARS) il muggaaqisen qaynatitte taturteeh, away qusubih <br/>
      Yemeeteh geytima qaynatah COVID-19 migaq yecee. Coronavirus disease 2019 /KuroonaVayrus Biyak 2019 yaanama!</p>,
      open: true
    },
    {
      question: <p>Baxsa luk Kovid19 kak iyyanam Macaay?</p>,

      answer: <p>Kovid19/ COVID-19 tabaatabta dalkay qusubih timixxigeh yeceen migaaqa.<br/>
               Ta Vayrus dalka Chaayinak Wuhaan magaalal Desember alasa 2019 tambulleemik naharal amixxiguk masuginna.</p>,
      open: false
    },
    {
      question: <p>Astooti teetik macaay?</p>,

      answer: <p> Kaxxaam tamixxige astootih tu gactek: xagar niqnaay, xagar taqabiiy/ taanu, kafin kixa/ kacuwu. 
      inki inkki mari kaxxa qansaru hinnammay xagar biyaakaay, santi daleela, sanak tamaate leey, 
      qunti daleela tonnah kaaduk baggexo yalleenim bictah. ta astooti manggih dagohuuy, dagoom, dagoomul tabdiqe.
      <br/> inki inki mari veyres ken yabbixeemih hebelto asta mayaybullaanaay, umannah mabiyakitan. 
      veyers yibbixe marak mango gaba 80% hebeltô dayla faxe kal qaffooten. kulli 6 numuy biyak ybbixeh yanik 1 num kaxxaam biyaakitaah, ufuy rubti taqabi baahan.
      Baxsa luk idoola kee isih biyaakitte luk suge mara,<br/> axcih qabli manggaay, lubbi biyakaay, tannah tan biyaakitte leh yan mari kaxxaam biyaakiitonu duudan.
      Faxe num kixaay, ufuy rubti taqabi kee niqna isik ubulla heek sissikuk dayli qokol gonnisam faxximta.</p>,
      open: false
    },

    {
      question: <p>KOVID-19 biyak mannal tabaah?</p>,

      answer: <p> Kovid-19 leh yan numuuk aki numut tabu duudah. ta dalka numuuk numut qunxxuffek ximmô baxay ambulle waytah tanik tabu duudah.
            <br/> Biyak leh num kixitah yan waqdi sanak takku afak takku inki ximmô nee xagtek biyak ne geyu duudah. tonnah kaaduk biyak leh num 
            <br/> elle kixitah yanikkel, foocal kaak tan duyyel, uwwaytil radu duudah. tokkeek gersi mari too duyye gaba xaga waqdi veyres ken gabal raaqa. <br/> 
                  tokkeek, woo gaba fooca kee sanaay af xagasan. tohih sabbata biyaakita numuk 1m50 (3 maaqatta yaxxeerenim kaxxaam faxximta).</p>,
      open: false
    },

    {
      question: <p>KOVID-19 biyak silaytuk maay tabaah?</p>,
      answer: <p>
      KOVID-19 manggih elle tabam leh yan numuk af kee sanak tawqu dudda wiin/uun duyye/ qunxxuffey <br/>
      baxsa luk num kixite afak yaabe yakke waqdi nel xifixxu duudda.
      Takkay ta qunxxuffe silayti numuuk numut tabsah gide qaraanal masugta. takkay ikkah vayres leh yan numu<br/>
      kee ku fanat 1 mitir ane week ufuyuk kot tabu duudah.
      
     </p>,
      open: false
    },

    {
      question: <p>KOVID-19 biyak asta elle ambulle wayta marak net tabu maay duudaah?</p>,

      answer: <p>Biyaak kaxxaam kak tabam leh yan numuk af kee sanak tawqeh tan wiinim/ uunim gabah xage kee foocal nek rade 
              takke waqdi kinni. <br/> KOVID-19 vayrus hebeltoh asta alle waa marak sinaamat elle tabanni kaxxaam dago.
              <br/>Takkay ikkah ta dalka tabbixeh tan marak mango gaba kaxxa astooti keenil matambulla.<br/>tohuk gexaak dagoo kixi baxâ leh yanumu
              biyak alle waah yanik net tabu duudah. takkay ikkah biyak uxih baadal qusba biyakaay, <br/> qaalamak qaafiyat egla kee kalah tan tu taaxago uxih
              kusaaqat kak geytimtaamih sabbatah kulli caddol sinni cubbusaanam faxximta.</p>,
      open: false
    },

    {
      question: <p>KOVID-19 biyak daacok maay tabaah?</p>,
      answer: <p>Biyaakitah yan numih daacook VAYRES meysi kaxxaam dago. naharal dagoo kusaqitte <br/>vayrus daacok tabu duudah itta way
      taway yan caalatal kaxxaam net macelta.<br/> takkay way faxeemih baxsa luk zuuli culleek lakal <br/>gaba af kee sanal xayyose kal gaba manggom kaqlisaanam kaxxam faxximta.
    </p>,
      open: false
    },

    {
      question: <p>Biyaakak inni dacrisuh maca abam faxximtaah?</p>,

      answer: 
          <p>KOVID-19 wagsisaak qaalamak qaafiyat egla kee, tonnah kaaduk ku baaxok qaafiyat cagiidah saqolti tayyaaqe xaagu kattat.<br/> 
          manggo baaxooxa qaalam caddol KOVID-19 dalkah qawwalaylat geytimta. chaayina kee kalah dagoo baxooxa dalaka tabaatabsa daggoyse kee 
          soolise yakkoonuh aben gabbatul kaxxa xalu geen. takkay ikkah caalat elle gexanni sissikuk oyta kattaatanam elle bictanna hinna.<br/>
          tahaak gubal tan ximmooma gabbatak isi dacrissam duddah. <br/>
          <li>Manggo uddur, elle faxximtannal gaba saabun kee leet kacqlis.</li> Macahaay? lee kee saabunut gaba umman kaqlissek
          Gabal kok yan veyresiy xagarat kok cule xaare koo abbixe kal bayu duudah.<br/>
          <br/><li>Isi kee faxe numuy biyak astay ahaak dagal edde yabne lem akak tblek 3 maaqatta exxeer.</li><br/>
          <li>Fooca kee sanaay, af gabah xagaanam soolis!</li>
          <li>Isi kee kollik yan marak inkih san kee afak tawqeh tan duyyek sinni kee gersi mara dacrisaanam cubbit hayis.</li><br/>
          thoh yaanam kixitek san kee afal saro (softi) haanam faxximta. hinnammay kaaduk toh alle waytek, cusulut alifaanam.
          <li>Biyaakitte kaxxaam elle baxacte rasitte/ magaloolik exxeer, baxsa luk qumrik kaxxa num tekkek 
            (lubbi biyak kee gabuulo biyak tellek.)</li><br/> Macahaay? idoola kee isih qaafiyat taqabi leh yan mari sissikuk biyak ken yabbiixeemih
            nasiib fayya iyyaamih sabbatah.

          <li>Biyaakitte kaxxaam elle warsan baaxo gufteh tuduurek 14 ayro dibuh dibuh sugtam faxximta.</li>
          </p>,
      open: false
    },

    {
      question: <p>KOVID-19 dalkak sinam qaffossa dawa maay taniih?</p>,
      answer: <p>
      inki inki ayro kormâ baxooxal Qaadâ daylitte kee buxal bicsan daylitte KURONAH biyak le marah abaanam gabbataanam <br/> 
      takke way taham fan aban gibbatitte dayla takku aftabu takku abtaamak dudda le sumaq mayan. qaalamak qaafiyat egla (WHO)<br/>
      faxe mari isi moyyaak isi daylisam gabbataam (faxe qaynatih dawoowi) axcih Qansari kaniin/ 'antibiotics' innah tanim xagaanam<br/>
      makassissa!
    </p>,
      open: false
    },

    {
      question: <p>Aftabi dawaata kak maay taniih ?</p>,
      answer: <p>
      UXIH MATAN! taham fan aftabu takku, baxsa le dayla/ aftabi KOVID-2019 wagsisaak mayana. <br/>
      takkay ikkah kaxxaam biyaakitah yan mari kixa kee kalah tan astootih qokol giyaanâ gidah <br/>
       daktar eleelitaanam faxximta.
       Baxsa le aftabu kee dawaatah tu gactek away qusbih gibbati caddol geytimta, WHO kee kalah tan<br/> 
       dayli tutaaxago elle taamitak geytimta.
       taham fan dubuh aftabuh tanim nazaafatta dacrisaanam/ axcih gaba manggom kaqlisaanama.
    </p>,
      open: false
    },

    {
      question: <p>KOVID-19 kee SARS deqsita biyak inki biyak maay kinni?</p>,
      answer: <p>
      Hinna! KOVID-19 biyaakaay away yani kee SARS il muggaaqiseenih suge biyaakay sanat 2003 Yemeeteh suge<br/>
      Ramadak inki ramdad kinnim takkay ikkay, away qusbih yan KOVID-19 SARSik dagoom baxsa le.
      SARS manggom <br/>qidak sugeeh, tabaatbsi kaak daguk suge, KOVID-19 luk nable waqdi. 
      kaaduk 2003 uk widir qaalamak rekel mantabbinna.
    </p>,
      open: false
    },

    {
      question: <p>KOVID-19 biyak daacok maay tabaah?</p>,
      answer: <p>Biyaakitah yan numih daacook VAYRES meysi kaxxaam dago. naharal dagoo kusaqitte <br/>vayrus daacok tabu duudah itta way
      taway yan caalatal kaxxaam net macelta.<br/> takkay way faxeemih baxsa luk zuuli culleek lakal <br/>gaba af kee sanal xayyose kal gaba manggom kaqlisaanam kaxxam faxximta.
    </p>,
      open: false
    },

    {
      question: <p>Foocal Maski haam maay faxximtaah?</p>,
      answer: <p>
      Maski haytam faxximtam dubuh biyaakitte koo tekkek, (baxsa luk kixa kee tonnah tan astooti tellek)<br/>
      Hinnammay kaaduk KOVID biyaakah biyaakitah yan marih qokolut tenek/ ken luk tenek.<br/>
      akke waytek away baadal inkih maski dagna taniih kulli num haam mafaxximta. <br/>
      WHO maski cubbil yantifiqeenim kassissa.<br/>
    </p>,
      open: false
    },

    {
      question: <p>Biyak ambulle kalah xagarat magide sugu dudaah?</p>,
      answer: <p>
      Manggih KOVID-19  elle nablennal 1-14 ayroh fana. takkay ikkah addah ittek 5 ayroh innah taniimi. <br/>
      Baar le addafakoot ciggiilisak raaqenno. </p>,
      open: false
    },

    {
      question: <p>KOVID-19 biyak alluwak/ saqak net tabu maay duudaah?</p>,

      answer: <p>
      KuroonaVayrus deqsittam ittat kaxxah tan vayresittey manggih saqa/ alluwa biyaakak suge kinni. <br/>
      takkay ikkah ahay duma ta dalka saqa/ alluwaak sinaamat tabteh sarrak sinam gari garut tabisak <br/>
      baxacteh suge. ceelalloh: SARS-KOV/ SARS-CoV dummu(bissak) sinaamat tabte dalkak sugte. <br/>
      MARS-KOV/ MERS-CoV Gaalak sinaamat tabeh suge.<br/>
      KOVID-19 kak temeete/ saqi/allu tanu bictah uxih diggowtem kak matana.<br/>
      Takkay ikkah, saq takku aki alluwak yaxxeerenim qaafiyat tutaaxago kassissa.<br/>
      Tah dubuh hinnay, saqak xaganah nan can kee cado nagay alayse/ facse kal xage waynam faxximta.
    </p>,
      open: false
    },

    {
      question: <p>Vayres duyye/ uwwayti bagul magideh saaqat rooci luk sugu duuda?</p>,

      answer: <p>
      Duyye/uwwa kak innam caxxaay, xaay, saraay, elle nakmeh naaqube duyye kee nakmeh naaqubem edde tanu duddah.<br/>
      Gaba telefonuuy, elle daffeyna caxxaay, www.
      Kusaqitte elle tascassennal, yimixxige waktiy tagide kak iyyaana ane waa way dagoo saqootaak ila ayroora fan suge<br/>
      duudah iyyan. ceelalloh: duyye elle tan aracal niqna elle aninnaan innat axawah yan iyyan.
      Callih tanim duyyeeya kaxxaam kaqlisaanam faxximta.
     </p>,
      open: false
    },

    {
      question: <p>Anu abe waam faxximtam macaay?</p>,

      answer: <p>
      <h4>tahak gubal tan ximmooma VAYRES maqiddaay qaafiyatah mameqe.</h4>
     <li> Sigaara yaaqubeenim</li>
     <li> Maskitte sittak bagul hayya heenih af alfaanam</li>
     <li>Qansari kaniina kee kalah dayla akke le axcuk dawaata gabbataanam.</li>
    </p>,
      open: false
    },

    {
      question: <p>KOVID-19 biyak alluwak/ saqak net tabu maay duudaah?</p>,

      answer: <p>Biyaakitah yan numih daacook VAYRES meysi kaxxaam dago. naharal dagoo kusaqitte <br/>vayrus daacok tabu duudah itta way
      taway yan caalatal kaxxaam net macelta.<br/> takkay way faxeemih baxsa luk zuuli culleek lakal <br/>gaba af kee sanal xayyose kal gaba manggom kaqlisaanam kaxxam faxximta.
    </p>,
      open: false
    },


    
  ]);

  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq;
    }))
  }


  return (
    <div className="App">
      <Header />
      <div className="faqs">
        {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
        {/* <Contact/> */}
      </div>
    </div>
  );
}

export default Accordion;
