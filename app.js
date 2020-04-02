const pravila = [
    {id:0 , name: "Aleksandar Vulin", 
    desc: "Svakako se piće pije na eks. Igra se zove po njemu. Pažnja! Ima ih pojedinačno najviše, kao i Vulina u Vulinu.",
    src: "./img/vulin1.jpg"
    },
    {id:1 , name: "Aleksandar Vučić", 
    desc: "Poznat kao apsolutni vođa. To znači da igrač ima pravo da naredi kome želi da taj popije piće umesto njega (na eks ili će Vučićević da ga stavi na naslovnu Informera).",
    src: "./img/president.jpg"
    },
    {id:2 , name: "Goran Vesić", 
    desc: "Gradski menadžer preletačević, ali ne Beli. Pusti svoje piće da preleti kod osobe koja je pobedila izvlačenje, odnosno koja se izvukla da ne pije u ovom ili prošlom krugu.",
    src: "./img/gvesic.jpg"
    },
    {id:3 , name: "Ana Brnabić", 
    desc: "Pitaš se za svoju funkciju koliko i Ana Brnabić. Ko je poslednji izvukao Vučića, naređuje ti šta ćeš da radiš. Ako niko nije, onda piješ da častiš za dete.",
    src: "./img/abrnabic.jpg"
    },
    {id:4 , name: "Toni Bler", 
    desc: "Savetnik naše vlade. Postoji sumnja da neko ima oružje za masovno uništenje u sobi. Imaš ovlašećnje da izvršiš invaziju na osobu po želji. Naredi ko će da pije umesto tebe.",
    src: "./img/tbler.jpg"
    },
    {id:5 , name: "Nebojša Krstić", 
    desc: "Ukoliko pohvališ domaćina skupa, ne piješ.",
    src: "./img/nkrstic.jpg"
    },
    {id:6 , name: "Zoran Lutovac", 
    desc: "Ne znaš o kome se radi? Odlično. Piće ti je zalutalo.",
    src: "./img/zlutovac.jpg"
    },
    {id:7 , name: "Miša Vacić", 
    desc: "Koliko pojava Miše Vacića uništava neurona, toliko to radi i alkohol. Popij malo da se osvežiš.",
    src: "./img/mvacic.jpg"
    },
    {id:8 , name: "Siniša Mali", 
    desc: "Ministar finansija plagijator. Piješ mali gutljaj pića ili preuzimaš karticu od prethodnog igrača.",
    src: "./img/smali.jpg"
    },
    {id:9 , name: "Vojislav Šešelj", 
    desc: "Desničar. Igrač ne pije, nego osoba desno od nje.",
    src: "./img/vseselj.jpg"
    },
    {id:10 , name: "Ivica Dačić", 
    desc: "Kvazi-levičar. Igrač ne pije, nego osoba levo od nje.",
    src: "./img/idacic.jpg"
    },
    {id:11 , name: "#1od5miliona", 
    desc: "Ne piješ. Utopio si se u masu he he.",
    src: "./img/milion.jpg"
    },
    {id:12 , name: "Nenad Čanak", 
    desc: "Di su naši novci Beograđani? Di su naši alkoholi? Igrač, ako je Vojvođanin, prisvaja alkohol za sebe i pije na eks, a ako nije Vojvođanin onda ga daje Vojvođaninu po želji.",
    src: "./img/ncanak.jpg"
    },
    {id:13, name: "Saša Radulović", 
    desc: "Veruješ u teorije da globalisti, bankari i reptilijanci vladaju svetom. Ne moraš da piješ, i bez pića nisi sjajan.",
    src: "./img/sradulovic.jpg"
    },
    {id:14, name: "Branka Stamenković", 
    desc: "Astrolog bivša predsednica DJB. Ukoliko si vodeni znak u horoskopu, tečnost ti kroz grlo neće proteći u ovom krugu. Ne piješ.",
    src: "./img/bstamenkovic.jpg"
    },
    {id:15, name: "Sergej Trifunović", 
    desc: "Sklon je ludačkim izjavama. Prava su kocka. Pitaš tri fizički najbliže osobe da li piješ ili ne.",
    src: "./img/strifunovic.jpg"
    },
    {id:16, name: "Saša Janković", 
    desc: "Zaštitinik građana. Sačuvaj je kao imunitetsku karticu da te zaštiti od budućih izvlačenja ili nameštanja od strane drugih.",
    src: "./img/sjankovic.jpg"
    },
    {id:17, name: "Vuk Jeremić", 
    desc: "Predsedavao si skupštinom Ujedinjenih Nacija. Preuzmi predsedavanje žurkom i čitaj ova pravila. I da…pij piće na eks. Pukao si na izborima za predsednika Srbije.",
    src: "./img/vjeremic.jpg"
    },
    {id:18, name: "Boško Obradović", 
    desc: "Gde bežiiite? Gde bežiiite? Nema bežanja od pića, piješ odmah na eks.",
    src: "./img/bobradovic.jpg"
    },
    {id:19, name: "Velja Ilić", 
    desc: "Poznat da retko pije vodu.Opasniji od Vulin kartice. Igrač pije jedno piće na eks i u drugom krugu izvlačenja ne vuče karticu, već ponovo pije na eks.",
    src: "./img/vilic.jpg"
    },
    {id:20, name: "Beli Preletačević", 
    desc: "Ako si iz Mladenovca ili Sopota piješ na eks.",
    src: "./img/beli.jpg"
    },
    {id:21, name: "Borko Stefanović", 
    desc: "Piješ tačno 1% pića iz svoje čaše, jer si toliko osvojio na izborima.",
    src: "./img/bstefanovic.jpg"
    },
    {id:22, name: "Boris Tadić", 
    desc: "Imaš pristojne vizuelne karakteristike. Pomilovan si od pića.",
    src: "./img/btadic.jpg"
    },
    {id:23, name: "Čeda Jovanović", 
    desc: "Na tvom biračkom mestu si samo ti sa ženom glasao za sebe. Tako usamljen možeš jedino da piješ i to na eks.",
    src: "./img/cjovanovic.jpg"
    },
    {id:24, name: "Dragan J. Vučićević", 
    desc: "Hodajuća ljudska balega. Ne piješ čak i ako si novinar. Idi operi se u WC šolji.",
    src: "./img/dvucicevic.jpg"
    },
    {id:25, name: "Dragan Đilas", 
    desc: "Bio gradonačelnik. Beograd odlučuje, ljudi pobeđuju. Daješ Beograđanima na žurci da glasaju da li piješ ili ne.",
    src: "./img/ddjilas.jpg"
    },
    {id:26, name: "Nebojša Stefanović", 
    desc: "Kao što je Neša smuvao diplomu i doktorat, tako i igrač može da proba da „smuva“ za piće. Šalimo se, pitaš prethodnog igrača koji je izvukao Vučića da li piješ.",
    src: "./img/nstefanovic.jpg"
    },
    {id:27, name: "Dragan Šutanovac",
    desc: "Bio ministar odbrane. Odbranio si se.",
    src: "./img/dsutanovac.jpg"
    },
    {id:28, name: "Dragan Marković Palma", 
    desc: "Dve hiljade za gospodina, tri hiljade za gospođu. Dva kruga pića na eks ako si gospodin, tri kruga pića na eks ako si gospođa, bez izvlačenja kartice.",
    src: "./img/palma.jpg"
    },
    {id:29, name: "Milorad Radulović", 
    desc: "Dosta je bilo…pljačke, korupcije, lopovluka – lažni Radule. Skidaš glasove Raduloviću. Sačuvaj ovu karticu. Možeš da skineš vrednost kartice koju drugi izvuče, odnosno poništiš joj dejstvo.",
    src: "./img/mradulovic.jpg"
    },
    {id:30, name: "Žika Šarenica", 
    desc: "“Javljaju se pajaci, cirkuzanti, mediokriteti...Žika Šarenica”. Ako ti je piće šarena mešavina više pića, a ne klot alkohol, piješ na eks.",
    src: "./img/zsarenica.jpg"
    },
    {id:31, name: "Predrag Marković", 
    desc: "Nikola Pašić ZZ Top prop’o. Ako imaš bradu ne piješ, ako nemaš bradu piješ kralju/ice he he.",
    src: "./img/pmarkovic.jpg"
    },
    {id:32, name: "Dejan Anđus", 
    desc: "“Klošari iz Blica, prestanite da klošarišete u vašim klošarskim novinama”. Kartica sa dva dejstva. 1) Imunitet od Žika Šarenica kartice. 2) Ako u sledećem izvlačenju predvidiš lika kojeg ćeš izvući, kao Anđus da će Tramp odrati babu (Hilari) na izborima, imaš imunitet od pića do kraja svih izvlačenja.",
    src: "./img/dandjus.jpg"
    },
    {id:33, name: "Bard Živa", 
    desc: "“Ja volim mlade. Evo kako da pregurate dan. Ne pojedeš burek u 8h, nego u 11h. Onda gasiš vodom do 17h i tad pojedeš jabuku. Miran si za ceo dan“. Bard Živa voli mlade ljude. Daje im korisne savete. Ako imaš ispod 23 godine, ovo ti je imunitet za jedno buduće izvlačenje.",
    src: "./img/bziva.jpg"
    },
    {id:34, name: "Rasim Ljajić", 
    desc: "Bio u svakoj vladi. Ako si pio barem tri puta za redom, piješ opet.",
    src: "./img/rljajic.jpg"
    },
    {id:35, name: "Zlatibor Lončar", 
    desc: "Poznat kao vrhunski lekar i kriminalac u slobodno vreme. Ako si sa medicine piješ na eks.",
    src: "./img/zloncar.jpg"
    },
    {id:36, name: "Milan Krkobabić", 
    desc: "Ako ceniš političko mišljenje penzionera ne piješ.",
    src: "./img/mkrkobabic.jpg"
    },
    {id:37, name: "Marko Bastać", 
    desc: "Ako nemaš ništa protiv Vesić Gorana ne piješ.",
    src: "./img/mbastac.jpg"
    },
    {id:38, name: "Bojan Pajtić", 
    desc: "Već te zaboravili ljudi. Svi prisutni neka glasaju da li piješ ili ne.",
    src: "./img/bpajtic.jpg"
    },
    {id:39, name: "Andrej Vučić", 
    desc: "Izgubio si ličnu kartu. Ne moraš da piješ da ti ne stajemo na muku. Imaš pravo veta na odluke brata do kraja partije.",
    src: "./img/avucic.jpg"
    },
    {id:40, name: "Zoran Radojičić", 
    desc: "Imaš mogućnost da poništiš odluku Gorana Vesića. Zapravo nemaš. Popij malo da se utešiš.",
    src: "./img/zradojicic.jpg"
    },
    {id:41, name: "Hana Adrović", 
    desc: "Ako si novinar po struci ne piješ, jer ni Hana nije novinar.",
    src: "./img/hadrovic.jpg"
    },
    {id:42, name: "Aleksandar Vulin", 
    desc: "Svakako se piće pije na eks. Igra se zove po njemu. Pažnja! Ima ih pojedinačno najviše, kao i Vulina u Vulinu.",
    src: "./img/vulin2.jpg"
    },
    {id:43, name: "Aleksandar Vulin", 
    desc: "Svakako se piće pije na eks. Igra se zove po njemu. Pažnja! Ima ih pojedinačno najviše, kao i Vulina u Vulinu.",
    src: "./img/vulin3.jpg"
    },
    {id:44, name: "Aleksandar Vulin", 
    desc: "Svakako se piće pije na eks. Igra se zove po njemu. Pažnja! Ima ih pojedinačno najviše, kao i Vulina u Vulinu.",
    src: "./img/vulin4.jpg"
    },
    {id:45, name: "Aleksandar Vulin", 
    desc: "Svakako se piće pije na eks. Igra se zove po njemu. Pažnja! Ima ih pojedinačno najviše, kao i Vulina u Vulinu.",
    src: "./img/vulin5.jpg"
    },
    {id:46, name: "Aleksandar Vulin", 
    desc: "Svakako se piće pije na eks. Igra se zove po njemu. Pažnja! Ima ih pojedinačno najviše, kao i Vulina u Vulinu.",
    src: "./img/vulin6.jpg"
    },
    {id:47, name: "Aleksandar Vulin", 
    desc: "Svakako se piće pije na eks. Igra se zove po njemu. Pažnja! Ima ih pojedinačno najviše, kao i Vulina u Vulinu.",
    src: "./img/vulin7.jpg"
    },
    {id:48, name: "Aleksandar Vulin", 
    desc: "Svakako se piće pije na eks. Igra se zove po njemu. Pažnja! Ima ih pojedinačno najviše, kao i Vulina u Vulinu.",
    src: "./img/vulin8.jpg"
    },
    {id:49, name: "Aleksandar Vulin", 
    desc: "Svakako se piće pije na eks. Igra se zove po njemu. Pažnja! Ima ih pojedinačno najviše, kao i Vulina u Vulinu.",
    src: "./img/vulin9.jpg"
    },
    {id:50, name: "Aleksandar Vulin", 
    desc: "Svakako se piće pije na eks. Igra se zove po njemu. Pažnja! Ima ih pojedinačno najviše, kao i Vulina u Vulinu.",
    src: "./img/vulin10.jpg"
    },
    {id:51, name: "Aleksandar Vulin", 
    desc: "Svakako se piće pije na eks. Igra se zove po njemu. Pažnja! Ima ih pojedinačno najviše, kao i Vulina u Vulinu.",
    src: "./img/vulin11.jpg"
    },
    {id:52, name: "Marko Đurić", 
    desc: "Pošto ne umeš da sipaš piće pošteđen si ovog puta, ali moraš da pozdraviš domaćina!",
    src: "./img/mdjuric.jpg"
    },
    {id:53, name: "Aleksandar Martinović", 
    desc: "Čekaš zadatak igrača koji je prethodno izvukao Šešelja da ti kaže da li piješ ili ne. Prethodni Vučić ima pravo da stavi veto ako se ne slaže. Sve ovo se radi ako ne poletiš u međuvremenu.",
    src: "./img/amartinovic.jpg"
    },
    {id:54, name: "Zoran Babić", 
    desc: "Ako si sa VAZDUPLOHOVNE akademije, piješ na eks. Ako nisi, piješ jer se diviš domaćinu fizički i psihički.",
    src: "./img/zbabic.jpg"
    }


]

let started = false;

$(document).ready(function(){
    $("button").click(function(){
        if(started){
            let politicar = getRandom();
            $(".card-title").text(politicar.name);
            $(".card-text").text(politicar.desc);
            $(".card-img-top").attr("src",politicar.src);
        }
        else {
            $(".home").hide();
            started = true;
            let politicar = getRandom();
            $(".card-title").text(politicar.name);
            $(".card-text").text(politicar.desc);
            $(".card-img-top").attr("src",politicar.src);
            $(".card").show();
        }
    });
});

function getRandom(){
    let rnd = Math.floor(Math.random() * 55);

    let politicar = pravila[rnd];

    return politicar;
}