const services = [
  {
    id: '1',
    heading: 'Beljenje Zuba',
    imageUrl: '/assets/services/teeth-whitening.jpg',
    iconUrl: '/assets/icons/teeth_shiny.svg',
    category: 'opsta-stomatologija',
    description: `Beljenjem zuba možemo vratiti njihov prirodan ton ili ih još više izbeliti. Danas pacijenti zahtevaju estetiku, stoga je estetska stomatologija zapravo sastavni deo svake stomatološke grane. 
    
    Postoje različiti činioci koji dovode do toga da zubi izgube svoju svetlinu, kao i mnogo načina da se njihova prirodna nijansa vrati ili da oni postanu još belji nego prirodni zubi.
    
    NEKOLIKO NIJANSI SVETLIJI ZUBI 
    
    Beljenje zuba podrazumeva uklanjanje različitih diskoloracija (pigmentacija) koje zube čine tamnijim. Beljenjem Vaši zubi postaju svetliji za nekoliko nijansi, a u nekim slučajevima i potpuno beli u zavisnosti od želje pacijenta.`,
  },
  {
    id: '2',
    heading: 'Uklanjanje Zubnog Kamenca',
    imageUrl: '/assets/services/removing-dental-calculus.png',
    iconUrl: '/assets/icons/removing-dental-calculus_icon.svg',
    category: 'opsta-stomatologija',
    description: `Uklanjanje zubnog kamenca je zapravo procedura uklanjanja tvrdih i mekih naslaga sa njihove površine. Osnovni ciljevi uklanjanja zubnog kamenca su preventivni (sprečava nastanak parodontopatije) ili terapijski (zaustavlja ili usporava njeno dalje napredovanje).

    Uklanjanje zubnog kamenca treba sprovoditi na 4 do 6 meseci, a u nekim slučajevima i češće. Ako se sprovodi redovno, uklanjanje zubnog kamenca je potpuno bezbolna procedura i spada pod preventivnu terapiju parodontopatije, ali i pod terapiju u okviru njenog lečenja. U preventivnom smislu preporučuju se minimalno dve terapije godišnje ukoliko stomatolog drugačije ne odredi.

    Zubni kamenac je glavni pomoćni faktor u nastanku parodontopatije. Svojim oštrim ivicama dovodi do oštećenja desni te se kao posledica javlja krvarenje prilikom pranja zuba. Njegova mikroskopska struktura u vidu rupica predstavlja idealno mesto za skrivanje bakterija i mikroostataka hrane od vlakana četkice, što otežava adekvatnu oralnu higijenu.

    Kamenac se može naći ispod desni i on se ne vidi golim okom, već ga jedino stomatolog može otkriti pregledom. Ovaj kamenac koji nazivamo subgingivalnim (ispod gingive) upravo je najopasniji i dovodi do nastanka parodontopatije.`,
  },
  {
    id: '3',
    heading: 'Endodoncija',
    imageUrl: '/assets/services/endodontics.jpg',
    iconUrl: '/assets/icons/endodontics_icon.svg',
    category: 'opsta-stomatologija',
    description: `Lečenje kanala korena zuba tj. vađenje živca često je procedura koja zahteva strpljenje i duže sedenje u stolici. Zato smo se potrudili da svojim klijentima obezbedimo što komfornije i brže lečenje, a da pri tome ne ugrozimo kvalitet.

    U lečenju kanala korena zuba bitna je kvalitetna obrada koju pacijenti najčešće povezuju sa radom tj. struganjem različitim iglicama. Potrebno je zub proširiti do tačno određene granice, a zatim ga do te granice precizno definitivno napuniti.
    
    Endodoncija se bavi oboljenjima sadržaja kanala korena zuba tj. zubne pulpe. Zubna pulpa može da oboli iz različitih razloga, a jedan od njih je svakako zubni karijes. Kada bakterije i njihovi toksini prodru u komoru zuba dolazi do njene upale koja se naziva pulpitis. Daljim dejstvom bakterija i njihovih toksina dolazi do prekida snabdevanja zuba krvlju i odumiranja sadržaja kanala korena, a tada nastaje gangrena. Bakterije takođe mogu da preko vrha korena zuba prodru u viličnu kost, a kao posledica nastaje proces na vrhu korena.
    
    Trauma npr. udarac moze dovesti do prekida snabdevanja zubne pulpe (sadržaja kanala korena) hranljivim materijama, nakon čega dolazi do njenog postepenog odumiranja. Često ovakav proces ostane sakriven pa se jedna takva cista primeti ili kada dostigne značajne razmere ili na rutinskom rendgen snimku. Ukoliko tokom traume dođe do prodora infektivnih agenasa nastaće gangrena.`,
  },
  {
    id: '4',
    heading: 'Karijes',
    imageUrl: '/assets/services/caries.jpg',
    iconUrl: '/assets/icons/caries_icon.svg',
    category: 'opsta-stomatologija',
    description: `Karijes je definitivno najčešći uzročnik oštećenja na zubima i zahteva konzervativnu popravku, a često i lečenje zuba. Nastaje kao posledica krajnjeg proizvoda metabolizma šećera od strane bakterija-kiselina. Kiseline koje bakterije stvaraju zapravo dovode do oštećenja zuba i nastanka zubnog karijesa.`,
  },
  {
    id: '5',
    heading: 'Lečenje Zuba',
    imageUrl: '/assets/services/dental-treatment.jpg',
    iconUrl: '/assets/icons/dental_treatment_icon.svg',
    category: 'opsta-stomatologija',
    description: `Lečenje zuba podrazumeva primenu različitih medikamenata na zub. Ovako se zub dovodi u stanje u kom se može izvršiti popravljanje na bezbedan način ili se može postaviti adekvatna nadoknada. Pod lečenje zuba spada postavka leka u cilju lečenja dubokog karijesa, ali ukoliko karijes prodre u komoru pulpe i javi se upala živca, lečenje zuba podrazumeva`,
  },
  {
    id: '6',
    heading: 'Popravka Zuba',
    imageUrl: '/assets/services/tooth-repair.jpg',
    iconUrl: '/assets/icons/tooth_repair_icon.png',
    category: 'opsta-stomatologija',
    description: `Popravkom zuba nadoknađuje se izgubljeni deo zuba, bilo da je uzročnik karijes ili nešto drugo što je dovelo do njegovog oštećenja.`,
  },
  {
    id: '7',
    heading: 'Fluorizacija Zuba',
    imageUrl: '/assets/services/tooth-fluorization.jpg',
    iconUrl: '/assets/icons/shiny_protection_icon.png',
    category: 'decija-stomatologija',
    description: `U studiu Biševac Dental vršimo fluorizaciju zuba primenom preparata visoke koncentracije. Fluor jača površinu zubne gleđi i tako je čini otpornijom na dejstvo kiselina bakterijskog porekla u usnoj duplji. Ceo tretman traje između 15 i 20 minuta.

    Fluor je mineral koji se nalazi u dosta namirnica i pijaćoj vodi. Čini zube jačim i otpornijim na zubni karijes, smanjuje količinu kiseline koju luče oralne bakterije i tako štiti zube od nastanka karijesa. Dodavanje fluorida u vodu za piće provereno smanjuje karijes za 40 do 60%.
    
    Sistemska fluorizacija se može vršiti sistemskom primenom preko tableta, pijeće vode, kuhinjske soli. Ona je najefikasnija u vreme razvoja zuba jer se u tom periodu fluor ugrađuje u tvrda zubna tkiva.`,
  },
  {
    id: '8',
    heading: 'Zalivanje Flisura Zuba',
    imageUrl: '/assets/services/dentist-428649_640.jpg',
    iconUrl: '/assets/icons/healthy_medical_protection_icon.png',
    category: 'decija-stomatologija',
    description: `Fisure su udubljenja tj. pukotine na gornjoj površini bočnih zuba. Često su te pukotine toliko duboke da u njima dolazi do zaglavljivanja i zadržavanja hrane. Tako dolazi do stvaranja povoljnih uslova za razvoj bakterija i stvaranje karijesa. Postupak zalivanja fisura podrazumeva ubacivanje mase slične tečnom kompozitu u fisure kako bi se one ispunile i smanjila njihova dubina. Na ovaj način se sprečava retencija ostataka hrane i preventira karijes.

    Ova intervencija traje oko 10 minuta po jednom zubu. Zub se ne obrađuje, pa je procedura apsolutno bezbolna i prijatna za dete. Nakon poliranja zuba ovo je idealna intervencija da se dete upozna sa svojim stomatologom.`,
  },
  {
    id: '9',
    heading: 'Sinus Lift',
    imageUrl: '/assets/services/opsta.jpg',
    iconUrl:
      '/assets/icons/352222344_dental_healthcare_healthy_medical_protection_icon.png',
    category: 'oralna-hirurgija',
    description: `Sinus lift je intervencija prilikom koje se u bočnom segmentu gornje vilice odiže membrana sinusa kako bi se ugradila veštačka kost i stvorili uslovi za ugradnju zubnih implantata.`,
  },
  {
    id: '10',
    heading: 'Cistektomija',
    imageUrl: '/assets/services/engin-akyurt-WQ5fGfFHGZ0-unsplash.jpg',
    iconUrl:
      '/assets/icons/352222344_dental_healthcare_healthy_medical_protection_icon.png',
    category: 'oralna-hirurgija',
    description: `Cistektomija je hirurški zahvat uklanjanja zubnih cisti.`,
  },
  {
    id: '11',
    heading: 'Nivelacija Grebena',
    imageUrl: '/assets/services/kenny-eliason-y8fWicGsv4g-unsplash.jpg',
    iconUrl: '/assets/icons/nivelacija.png',
    category: 'oralna-hirurgija',
    description: `NEPRAVILAN OBLIK VILIČNE KOSTI

    Nepravilan oblik vilične kosti u zoni fiksnog rada ili proteze predstavlja problem, kako u funkcionalnom, tako i u estetskom smislu. Nivelacijom grebena ovaj problem se eliminiše i stvaraju se uslovi za izradu kvalitetnog protetskog rada.`,
  },
  {
    id: '12',
    heading: 'Resekcija Freneluma',
    imageUrl: '/assets/services/opsta.jpg',
    iconUrl: '/assets/icons/resekcija-freneluma_icon.png',
    category: 'oralna-hirurgija',
    description: `SPREČAVA POVLAČENJE DESNI

    Resekcija frenuluma radi se u slučajevima kada je visok pripoj frenuluma za desni. Na taj način se sprečava povlačenje desni i razvoj parodontopatije. Radi se kao preprotetska priprema kod totalnih i parcijalnih proteza bez prednjih zuba.`,
  },
  {
    id: '13',
    heading: 'Režanj Operacija',
    imageUrl:
      '/assets/services/HeritageParkDental_GumDisease_May-768x432.jpg.optimal.jpg',
    iconUrl: '/assets/icons/rezanj-operacija_icon.png',
    category: 'oralna-hirurgija',
    description: `OTVORENA KIRETAŽA PARODONTALNOG DŽEPA

    Režanj operacija se drugačije naziva otvorena kiretaža parodontalnog džepa. Koristi se u situacijama kada je neophodno učiniti kiretažu parodontalnog džepa. Cilj režanj operacije je uklanjanje štetnog patološkog tkiva, regeneracija potpornog aparata zuba i redukcija dubine parodontalnih džepova. Često se kombinuje sa ubacivanjem veštačke kosti.
    
    Režanj operacija je intevencija tokom koje se hirurški pristupa potpornom aparatu zuba kako bi se uklonile granulacije, mrtvo tkivo, kamenac, nekrotični cement. Zbog podizanja desni ova intervencija je još poznata i kao otvorena kiretaža parodontalnih džepova.`,
  },
  {
    id: '14',
    heading: 'Apikotomija',
    imageUrl: '/assets/services/APIKOTOMIJA-2.jpg',
    iconUrl: '/assets/icons/shiny_protection_icon.png',
    category: 'oralna-hirurgija',
    description: `RESEKCIJA VRHA KORENA ZUBA

    Kada infekcija zbog karijesa prodre u kanal korena zuba ona napreduje prema njegovom vrhu. Odavde prelazi u okolnu kost u kojoj se vremenom stvara infektivni proces. Tokom apikotomije uklanja se infektivni proces iz okoline vrha korena zuba zajedno sa vrhom korena.
    
    Cilj apikotomije je da se ukloni zaostala infekcija u predelu vrha korena kada je to nemoguće učiniti samim lečenjem kanala korena zuba tj. endodocijom.
    
    Apikotomija je potpuno bezbolna procedura, izvodi se u lokalnoj anesteziji i traje oko 30 minuta. Kada su u pitanju anksiozni pacijenti ili oni koji se preterano plaše stomatoloških i hirurških intervencija, može se primeniti analgosedacija, koju u našoj poliklinici vodi specijalista anesteziolog.
    
    PROCEDURA
    Apikotomija se izvodi tako što se u predelu vrha korena zuba odignu desni, a zatim se iz tog predela ukloni inficirano tkivo i deo vrha korena koji bi mogao da sadrži bakterije. Kako bi intervencija imala smisla, u toku ili pre nje neophodno je sprovesti endodontsku terapiju kako bi se osiguralo da u samom zubu više nema zaostalih bakterija koje bi je mogle kompromitovati.`,
  },
  {
    id: '15',
    heading: 'Vađenje Zuba',
    imageUrl: '/assets/services/tooth-repair.jpg',
    iconUrl: '/assets/icons/pliers_icon.png',
    category: 'oralna-hirurgija',
    description: `Vađenje zuba predstavlja uklanjanje istog iz zubne čašice tj. iz vilice. Ono je poslednja solucija kojoj se pribegava samo kada nema drugih boljih rešenja da se zub zadrži. Razlozi za vađenje zuba su mnogobrojni.

    Postoji više razloga za vađenje zuba. Jedan od njih može biti uznapredovali karijes, proces na vrhu korena koji prevazilazi mogućnosti lečenja. Razlozi mogu biti i ortodontski, kada nema mesta u vilici da se smeste svi zubi. Impaktirani zubi, najčešće umnjaci, se vade jer guraju ili ugrožavaju druge zube ili se oko njih stvara bolna upala.
    
    Umerana bol nakon običnog vađenja zuba je normalna pojava. U takvoj situaciji od pomoći su analgetici (Brufen, Nimulid). Treba izbegavati analgetike na bazi acetilsalicilne kiseline zato što pojačavaju krvarenje. U slučaju pojave jakih bolova vrlo je verovatno da je došlo do pojave alveolita tj. infekcije ekstrakcione rane. Ovo je minorna komplikacija, ali je ipak potrebno da se javite svom stomatologu radi sanacije.`,
  },
  {
    id: '16',
    heading: 'Vađenje Umnjaka',
    imageUrl: '/assets/services/umnjak.jpg',
    iconUrl: '/assets/icons/pliers_icon.png',
    category: 'oralna-hirurgija',
    description: `IMPAKTNI UMNJACI
    
    Pod umnjacima tj. osmicama podrazumevamo poslednje zube u vilicama sa svake strane. Vađenje umnjaka je procedura njihovog hirurškog uklanjanja, premda u nekim slučajevima oni mogu predstavljati problem.
    
    Zašto se vade umnjaci?
    
    Nicanje umnjaka može biti sprečeno koštanom preprekom ili drugim zubom i tada se javlja neprijatan osećaj ili čak bol. Guranjem susedne sedmice mogu dovesti do defekta na njenom korenu ili poremećaja u rasporedu zuba u vilici. Ako su uspeli da niknu delimično između njih i gingive (desni) dolazi do zapadanja hrane i nakupljanja bakterija. Ovo dovodi do čestih upala i pojave bola, a zubna kost se povlači i produbljuje se prostor između zuba i desni.
    
    Da li vađenje umnjaka boli?
    
    Vađenje umnjaka je apsolutno bezbolna intervencija. Izvodi se u uslovima lokalne anestezije. Kada su u pitanju anksiozni pacijenti ili oni koji se preterano plaše stomatologa može se primeniti analgosedacija prilikom koje je pacijent u polusnu. Sa intervencijom se počinje isključivo onda kada se obezbedi apsolutan komfor za pacijenta.
    
    Šta posle vađenje umnjaka?
    
    U većini slučajeva postoperativni period protiče manje-više komforno. Neposredno nakon intervencije aplikuje se injekcija kortikosteroida kako bi se sprečio nastanak otoka. Pacijet dobija gel za hlađenje i detaljna uputstva kako da se ponaša u postoperativnom periodu. Obavezno se prepisuju antibiotici. Za slučaj pojave bola koriste se lekovi protiv bolova.
    
    PROCEDURA
    Sama procedura traje u proseku 30 minuta. Na desnima u predelu umnjaka se načini rez, zatim se ukloni deo kosti oko njega kako bi se oslobodio i omogućilo njegovo vađenje. Na kraju se rana ispere antibiotikom i ušije resorptivnim koncem koji sam vremenom nestaje tako da njegovo skidanje nije neophodno.`,
  },
  {
    id: '17',
    heading: 'Kauzalna Terapija',
    imageUrl: '/assets/services/kauzalna-terapija.jpg',
    iconUrl: '/assets/icons/kauzalna-terapija_icon.png',
    category: 'parodontologija',
    description: `PRVI KORAK U LEČENJU PARODONTOPATIJE

    Kauzalna terapija predstavlja prvi korak u lečenju parodontopatije. Ovom procedurom se iz parodontalnih džepova uklanjaju obolela nekrotična gingiva i zubni konkrementi koje se nakupljaju ispod nivoa desni. Na taj način se stvaraju uslovi za smanjenje parodontalnog dreža i usporava se dalji razvoj parodontopatije.
    
    Cilj kauzalne terapije je da se eliminiše prisutno zapaljenje desni i parodoncijuma.
    
    - Prednosti Kauzalne terapije
    - potpuno je bezbolno, jer se sprovodi uz primenu anestezije
    - dovoljna je jedna poseta za vidne rezultate
    - sprovodi je specijalista parodontologije uz pomoc specijalno dizajniranih instrumenata.
    - u nekim slučjevima je neophodna pre izrade novih protetskih radova, kako bi nove krunice ili fasete imali zdravu potporu`,
  },
  {
    id: '18',
    heading: 'Režanj Operacija',
    imageUrl: '/assets/services/rezanj-operacija.jpg',
    iconUrl: '/assets/icons/needle_icon.png',
    category: 'parodontologija',
    description: `OTVORENA KIRETAŽA PARODONTALNOG DŽEPA

    Režanj operacija se drugačije naziva otvorena kiretaža parodontalnog džepa. Koristi se u situacijama kada je neophodno učiniti kiretažu parodontalnog džepa. Cilj režanj operacije je uklanjanje štetnog patološkog tkiva, regeneracija potpornog aparata zuba i redukcija dubine parodontalnih džepova. Često se kombinuje sa ubacivanjem veštačke kosti.`,
  },
  {
    id: '19',
    heading: 'Kiretaža',
    imageUrl: '/assets/services/kiretaza-paradontalnog-dzepa.jpg',
    iconUrl: '/assets/icons/needle_icon.png',
    category: 'parodontologija',
    description: `OBRADA I ČIŠĆENJE PARODONTALNIH DŽEPOVA

    Kiretaža ili obrada parodontalnih džepova predstavlja parodontološku proceduru kojom se iz parodontalnih džepova uklanjaju obolela nekrotična gingiva i cement. Na taj način se stvaraju uslovi za smanjenje parodontalnog džepa i usporava se dalji razvoj parodontopatije. Procedura se izvodi u lokalnoj anesteziji i potpuno je bezbolna.`,
  },
  {
    id: '20',
    heading: 'Gingivetkomija',
    imageUrl: '/assets/services/ging.jpg',
    iconUrl: '/assets/icons/ging_icon.png',
    category: 'parodontologija',
    description: `GINGIVITIS

    Upala desni ili gingivitis je zapaljenje gingive (zubnog mesa). Nastaje kao posledica loše oralne higijene i dejstva bakterija. Ukoliko se ne leči prelazi u parodontopatiju.
    
    Neki od simptoma upale desni su crvena i otečena gingiva, krvarenje prilikom pranja zuba ili nakon njega.
    
    Gingivektomija i gingivoplastika predstavljaju uklanjanje viška gingive i preoblikovanje kako bi se smanjili gingivalni džepovi i omogućila njihova pravilna higijena.`,
  },
  {
    id: '21',
    heading: 'Uklanjanje kamenca',
    imageUrl: '/assets/services/uklanjanje-zubnog-kamenca.jpg',
    iconUrl: '/assets/icons/teeth_shiny.svg',
    category: 'parodontologija',
    description: `PREVENTIVNO ČIŠĆENJE ZUBA

    Uklanjanje zubnog kamenca je zapravo procedura uklanjanja tvrdih i mekih naslaga sa njihove površine. Osnovni ciljevi uklanjanja zubnog kamenca su preventivni (sprečava nastanak parodontopatije) ili terapijski (zaustavlja ili usporava njeno dalje napredovanje).
    
    Uklanjanje zubnog kamenca treba sprovoditi na 4 do 6 meseci, a u nekim slučajevima i češće. Ako se sprovodi redovno, uklanjanje zubnog kamenca je potpuno bezbolna procedura i spada pod preventivnu terapiju parodontopatije, ali i pod terapiju u okviru njenog lečenja. U preventivnom smislu preporučuju se minimalno dve terapije godišnje ukoliko stomatolog drugačije ne odredi.
    
    Zubni kamenac je glavni pomoćni faktor u nastanku parodontopatije. Svojim oštrim ivicama dovodi do oštećenja desni te se kao posledica javlja krvarenje prilikom pranja zuba. Njegova mikroskopska struktura u vidu rupica predstavlja idealno mesto za skrivanje bakterija i mikroostataka hrane od vlakana četkice, što otežava adekvatnu oralnu higijenu.
    
    Kamenac se može naći ispod desni i on se ne vidi golim okom, već ga jedino stomatolog može otkriti pregledom. Ovaj kamenac koji nazivamo subgingivalnim (ispod gingive) upravo je najopasniji i dovodi do nastanka parodontopatije`,
  },
  {
    id: '22',
    heading: 'Ortodoncija',
    imageUrl: '/assets/services/ortodoncija1.jpg',
    iconUrl: '/assets/icons/resekcija-freneluma_icon.png',
    category: 'estetska-stomatologija',
    description: `RAVNI I ZDRAVI ZUBI

    Ortodoncija se bavi dijagnostikom, lečenjem i prevencijom nepravilnosti položaja i razvoja zuba, vilica i lica. Ortodontske nepravilnosti mogu dovesti do poremećaja u govoru, žvakanju i gutanju. Nepravilan raspored zuba otežava oralnu higijenu, pa se usled toga javljaju karijes i parodontopatija. Neretko ove anomalije utiču i na celokupan izgled lica, odnosno njegovu fizionomiju. Postavljanjem fiksnog aparata takvi problemi se mogu rešiti.
    
    Prednosti Ortodoncije

    ESTETIKA I FUNKCIONALNOST
    
    Benefit nije samo u domenu estetike, dobićete i lepši i zdraviji osmeh jer ćete posle tretmana moći mnogo lakše da održavate oralnu higijenu i samim tim očuvate zdravlje svojih zuba još dugi niz godina.`,
  },
  {
    id: '23',
    heading: 'Beljenje Zuba',
    imageUrl: '/assets/services/beljenje-zuba-1-min.jpg',
    iconUrl: '/assets/icons/teeth_shiny.svg',
    category: 'estetska-stomatologija',
    description: `BLISTAVO BELI OSMEH

    Beljenjem zuba možemo vratiti njihov prirodan ton ili ih još više izbeliti. Danas pacijenti zahtevaju estetiku, stoga je estetska stomatologija zapravo sastavni deo svake stomatološke grane.
    
    Postoje različiti činioci koji dovode do toga da zubi izgube svoju svetlinu, kao i mnogo načina da se njihova prirodna nijansa vrati ili da oni postanu još belji nego prirodni zubi.
    
    Prednosti Beljenja zuba
    NEKOLIKO NIJANSI SVETLIJI ZUBI
    
    Beljenje zuba podrazumeva uklanjanje različitih diskoloracija (pigmentacija) koje zube čine tamnijim. Beljenjem Vaši zubi postaju svetliji za nekoliko nijansi, a u nekim slučajevima i potpuno beli u zavisnosti od želje pacijenta.`,
  },
  {
    id: '24',
    heading: 'Metalokeramičke Krunice',
    imageUrl: '/assets/services/metalokeramicke-krunice.jpg',
    iconUrl: '/assets/icons/teeth_shiny.svg',
    category: 'estetska-stomatologija',
    description: `KERAMIKA U BOJI ZUBA
    Metalokeramičke krunice poseduju metalnu osnovu na koju se nanosi keramika u boji prirodnog zuba. Zbog metalne osnove slabije propuštaju svetlost, što ih čini estetski inferiornijim u odnosu na bezmetalne krunice. Prevaziđene su i rade se u slučajevima kada je to neophodno.`,
  },
  {
    id: '25',
    heading: 'Krunice na Implantima',
    imageUrl: '/assets/services/krunice-na-implantima.jpg',
    iconUrl: '/assets/icons/teeth_shiny.svg',
    category: 'estetska-stomatologija',
    description: `OKLUZALNO ŠRAFLJENE KRUNICE

    Zubne krunice na implantima se ne razlikuju od onih koje se postavljaju na zube kada je reč o vrsti. Mogu biti bezmetalne, cirkonijum ili metalokeramičke krunice. Ipak odabir veze implantat-krunica značajno utiče na dugotrajnost samog rada.
    
    U Bisevac dental studio odabrali smo okluzalno šrafljene krunice. Reč je o krunicama koje se za implantat fiksiraju mikro zavrtnjem. Ovakve krunice imaju  prednost jer se ne koristi cement. Kada se krunice na implantatima cementiraju, koliko god se stomatolog trudio da sam cement ukloni mali deo oko samog implantata zaostane i stvara upalu koja ne mora biti primetna. To negativno utiče na vek trajanja implantata.`,
  },
  {
    id: '26',
    heading: 'Cirkonijum Krunice',
    imageUrl: '/assets/services/cirkonijum-krunice.jpg',
    iconUrl: '/assets/icons/teeth_shiny.svg',
    category: 'estetska-stomatologija',
    description: `ESTETIKA NA PRVOM MESTU
    
    Keramičke fasete su isključivo estetske keramičke zubne nadoknade. O njima treba razmišljati kao o keramičkim „veštačkim noktima“ koji prekrivaju prednju površinu zuba. Služe prvenstveno za promenu oblika i boje zuba.
    
    U pojedinim slučajevima mogu poslužiti i za promenu položaja zuba, kada ortodoncija nije neophodna.
    
    Izrađuju se od vrhunske bezmetalne keramike koja osigurava potpuno prirodnu boju i ton. Suprotno verovanjima, dobro izrađene keramičke fasete ne spadaju, sa njima se može potpuno normalno funkcionisati kada je bilo koja vrsta hrane u pitanju.
    
    Prednosti Keramičkih faseta
    NE RAZLIKUJU SE OD PRIRODNIH ZUBA
    
    Bezmetalna keramika od koje se fasete izrađuju, idealno provodi svetlost što omogućava izradu keramičkih faseta potpuno prirodnog izgleda, takvog da se ne razlikuju od prirodnih zuba. Sa druge strane, ukoliko pacijent to želi, fasete se mogu izraditi i u izuzetno beloj boji.
    
    ČUVAJU ZUB
    
    Od svih nadoknada koje se postavljaju na same zube, keramičke fasete zahtevaju najmanje brušenja. U nekim varijantama brušenje nije ni potrebno (no-prep viniri). Zahvaljujući tome, one maksimalno čuvaju zubnu supstancu. Po nekim istraživanjima produžuju vek prirodnog zuba koji se nalazi ispod njih za čak 60% u odnosu na druge vrste nadoknada.
    
    IDEALNO PRIJANJAJU UZ ZUB NOSAČ
    
    Zbog izuzetne preciznosti izrade u tehnici ili na CAD-CAM mašini, ove nadoknade idealno prijanjaju uz zub nosač, koji prate u glatkim prelazima kao da su njegov prirodan deo. Usled toga ne dolazi do zapadanja hrane, niti nadražajnog dejstva samog materijala (bezmetalne keramike) na meka tkiva.`,
  },
  {
    id: '27',
    heading: 'Bezmetalne Krunice',
    imageUrl: '/assets/services/bezmetalne-krunice.jpg',
    iconUrl: '/assets/icons/teeth_shiny.svg',
    category: 'estetska-stomatologija',
    description: `KRUNICE KOJE SU NAJBOLJE REŠENJE

    Bezmetalne krunice su, uz vinire, najbolje estetsko rešenje koje današnja stomatologija ima da ponudi pacijentima. Pored toga, otpornost ovih krunica je takva da se bez bojazni mogu koristiti u bočnoj regiji, gde su sile žvakanja znatno veće. Bezmetalne krunice su aspolutno biokompatibilne i na njih nema alergijskih reakcija.
    
    Prednosti Bezmetalnih krunica
    POUZDANOST I DUGOTRAJNOST
    
    Sa ubrzanim napretkom tehnologije u stomatologiji, intenzivnim razvojem u keramičkim sistemima i materijalima, bezmetalne odnosno keramičke krunice koje se danas koriste su odraz pouzdanosti i dugotrajnosti. Keramičke krunice zadovoljavaju najviše estetske kriterijume.
    
    SAVRŠENO SE UKLAPAJU SA OSTALIM ZUBIMA
    
    Zahvaljujući prozirnosti i prozračnosti, kao i činjenici da svetlost propuštaju gotovo isto kao i prirodni zubi, krunica će se savršeno uklopiti sa Vašim ostalim zubima bez vidljive razlike.
    
    DUŽI VEK TRAJANJA
    
    Zahvaljujući njihovoj visokoj preciznosti i vrlo kvalitetnim materijalima, ove krunice imaju i do 70% duži vek trajanja od ranije korišćenih.
    
    Sprovodi se jedna hirurška intervencija. U roku od 24 sata dobijate zube koji se ne skidaju.`,
  },
  {
    id: '28',
    heading: 'Bezmetalne Krunice za 1 Sat',
    imageUrl: '/assets/services/KRUNICE.jpg',
    iconUrl: '/assets/icons/teeth_shiny.svg',
    category: 'estetska-stomatologija',
    description: `Krunice možemo da izradimo za samo jedan dan ili čak za nekoliko sati, zahvaljujući SIRONA CAD-CAM sistemu, a one će prevazići sva Vaša očekivanja!

    PREDNOSTI
    JEDNOM POSETOM DO NOVE KRUNICE
    
    Za razliku od primene standardnih stomatoloških metoda s kojima je potrebno bar 4 dolaska u polikliniku u minimalnom periodu od 7 dana, u samo jednoj poseti dobićete bezmetalnu krunicu!
    
    Ceo slučaj izrade i ugradnje krunice rešava se u nekoliko koraka za nepunih sat i po vremena, a Vi ćete dobiti
    
    ESTETIKA
    
    Kako bi naši pacijenti bili u potpunosti zadovoljni svojim novim osmehom, razmatrali smo više vrsta bezmetalne keramike i odlučili se za Ivoclar E-MAX bezmetalnu keramiku na bazi litijum disilikata, neprevaziđenih estetskih i fizičkih svojstava.
    
    PROCEDURA
    
    Prvo se ugrađuju 3 titanijumska kočića kako bi se zub ojačao i izrađuje se kompozitna nadogradnja kao nosač buduće krunice.
    
    Zatim se pristupa izradi bezmetalne E-MAX krunice CAD-CAM tehnikom. Snimaju se zubi gornje i donje vilice uz pomoć 3D kamere na osnovu koje kompjuter izrađuje 3D modele. Kada su modeli gotovi, pristupa se podešavanju individualnih parametara i podešava jačina kontakta. Po završetku podešavanja parametara pomoću softvera izrađuje se 3D model buduće krunice, koji se, kada je završen, šalje putem mreže direktno na mašinu za izradu krunice. Za samo 13 minuta krunica je gotova!
    
    Nakon potvrde da krunica dobro leži na zubu, tehničar radi karakterizaciju i tehničku obradu krunice, čime se postiže funkcionalnost i visoka estetika, kao i idealan spoj zuba i krunice.`,
  },
  {
    id: '29',
    heading: 'UKLANJANJE ZUBNOG KAMENCA',
    imageUrl: '/assets/services/decija.jpg',
    iconUrl: '/assets/icons/healthy_medical_protection_icon.png',
    category: 'decija-stomatologija',
    description: `Uklanjanje zubnog kamenca je zapravo procedura uklanjanja tvrdih i mekih naslaga sa njihove površine. Osnovni ciljevi uklanjanja zubnog kamenca su preventivni (sprečava nastanak parodontopatije) ili terapijski (zaustavlja ili usporava njeno dalje napredovanje).

    Uklanjanje zubnog kamenca treba sprovoditi na 4 do 6 meseci, a u nekim slučajevima i češće. Ako se sprovodi redovno, uklanjanje zubnog kamenca je potpuno bezbolna procedura i spada pod preventivnu terapiju parodontopatije, ali i pod terapiju u okviru njenog lečenja. U preventivnom smislu preporučuju se minimalno dve terapije godišnje ukoliko stomatolog drugačije ne odredi.
    
    Zubni kamenac je glavni pomoćni faktor u nastanku parodontopatije. Svojim oštrim ivicama dovodi do oštećenja desni te se kao posledica javlja krvarenje prilikom pranja zuba. Njegova mikroskopska struktura u vidu rupica predstavlja idealno mesto za skrivanje bakterija i mikroostataka hrane od vlakana četkice, što otežava adekvatnu oralnu higijenu.
    
    Kamenac se može naći ispod desni i on se ne vidi golim okom, već ga jedino stomatolog može otkriti pregledom. Ovaj kamenac koji nazivamo subgingivalnim (ispod gingive) upravo je najopasniji i dovodi do nastanka parodontopatije.`,
  },
];

export default services;
