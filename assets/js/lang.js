

let arrLang = {
  'en': {
    'services': 'Services',
    'about': 'About',
    'startProject': 'Work With Me',
    'portfolio': 'Projects',
    'contact': 'Contact',
    'mainText': 'Web Developer and UI Designer',
    'subText': 'Hi, I\'m Solya',
    'workWithUsBtn':'Let\'s Talk!',
    'service': 'WHAT I DO',
    'planning': 'Planning',
    'planningDescr': 'With care and efficiency, I help to find out what customer wants and business needs.',
    'design': 'UI Design',
    'designDescr': 'Design and prototype an engaging and charming Landing Page, Web, or Mobile App.',
    'development': 'Development',
    'developmentDescr': 'HTML/CSS, JavaScript, ReactJS, Responsive Websites, WordPress, Shopify.',
    'optimization': 'Optimization',
    'optimizDescr': 'Your website can look better and work faster.',
    'support': 'Support',
    'supportDescr': 'All my projects get full support and regular check-ups.',
    'aboutMe': 'ABOUT',
    'aboutPO': 'Hi, I\'m Solya! I\'m a web developer and UI designer originally from Lviv, Ukraine, living and working in Bremen, Germany. I specialize in the development and design of web apps with attention to detail.',
    'aboutPT': 'I use modern web technologies to build simple, intuitive, and visually pleasing products while keeping an eye on clean code, performance, and maintainability. I help businesses and individual projects stand out by creating unique and strong visual identities. ',
    'languages': 'Languages I speak',
    'english': 'English',
    'engLevel': 'C1 Level',
    'german': 'German',
    'gerLevel': 'B2 Level',
    'ukrainian': 'Ukrainian',
    'ukrLevel': 'Native',
    'russian': 'Russian',
    'rusLevel': 'C2 Level',
    'formHeader': 'LET\'S TALK',
    'phone': 'Phone',
    'message': 'Message',
    'sucMessage': 'Success! Your message was sent.',
    'formBtn': 'Send',
    'projects': 'PROJECTS',
    'oledoSub': 'LED Mirrors and Screens',
    'oledoDescr': 'Design, visual concept, and development of the website for OLEDO (LED mirrors and screens manufacturer).',
    'gameSub': 'A turn-based board game',
    'gameDescr': 'A simple turn-based board game for two players. Based and inspired by "Adventure Time" characters.',
    'hedonismSub': 'Restaurant review website',
    'hedonismDescr': 'Find and rate the best restaurants in the area and around the world.  Created using React.js, React Material UI, and Google API.',
    'viewProject': 'View Project',
    'getInTouch': 'GET IN TOUCH',
    'contactMe': 'Ready to start your next project? That\'s great! You can write me a message, give me a call, write an email, or use the contact form above.',
    'contactMedp': 'Got some questions? Please write me a message, an email, or call, and I will gladly answer them.',
    'imprintText': 'Imprint',
    'dataprotectionText': 'Data Protection',
    'imprHeading': 'IMPRINT',
    'dpHeading': 'DATA PROTECTION'

  },
  'de': {
    'services': 'Services',
    'about': 'Über Mich',
    'startProject':'Project starten',
    'portfolio': 'Projecte',
    'contact': 'Kontakt',
    'mainText':'Webentwicklerin und UI Designerin',
    'subText':'Hallo, ich bin Solya',
    'workWithUsBtn':'Projekt starten',
    'service': 'SERVICES',
    'planning': 'Plannung',
    'planningDescr': 'Mit viel Sorgfalt und Effizienz helfe ich herausfinden, was die Kunden wollen und was die Geschäftsanforderungen benötigen.',
    'design': 'UI Design',
    'designDescr': 'Ich entwerfe und prototypisiere eine ansprechende und reizvolle Landing Page, Web oder Mobile App.',
    'development': 'Entwicklung',
    'developmentDescr': 'HTML/CSS, JavaScript, ReactJS, Responsive Websites, WordPress, Shopify.',
    'optimization': 'Optimierung',
    'optimizDescr': 'Ihre Website kann besser aussehen und schneller arbeiten.',
    'support': 'Unterstützung',
    'supportDescr': 'Alle meine Projekte erhalten volle Unterstützung und regelmäßige Überprüfungen.',
    'aboutMe': 'ÜBER MICH',
    'aboutPO': 'Hallo, ich bin Solya! Ich bin ein Webentwicklerin und UI-Designerin aus Bremen (ursprünglich komme ich aus Lwiw, Ukraine). Ich bin spezialisiert auf die Entwicklung und Gestaltung von Web-Apps mit Liebe zum Detail.',
    'aboutPT': 'Ich helfe Unternehmen und einzelnen Projekten dabei, sich von anderen abzuheben, indem ich einzigartige und starke visuelle Identitäten schaffe.',
    'languages': 'Ich spreche',
    'english': 'Englisch',
    'engLevel': 'C1 Niveau',
    'german': 'Deutsch',
    'gerLevel': 'B2 Niveau',
    'ukrainian': 'Ukrainisch',
    'ukrLevel': 'Muttersprache',
    'russian': 'Russisch',
    'rusLevel': 'C2 Niveau',
    'formHeader': 'PROJECT STARTEN',
    'phone': 'Telefonnummer',
    'message': 'Nachricht',
    'sucMessage': 'Hurra! Ihre Nachricht wurde verschickt.',
    'formBtn': 'Senden',
    'projects': 'PROJEKTE',
    'oledoSub': 'LED-Spiegel und Bildschirme',
    'oledoDescr': 'Design, visuelles Konzept und Entwicklung der Website für OLEDO (Hersteller von LED-Spiegeln und Bildschirmen).',
    'gameSub': 'Ein rundenbasiertes Brettspiel',
    'gameDescr': 'Ein einfaches rundenbasiertes Brettspiel für zwei Spieler. Basierend und inspiriert von "Adventure Time" Charakteren',
    'hedonismSub': 'Website für Restaurantbewertungen',
    'hedonismDescr': 'Finden und bewerten Sie die besten Restaurants in der Region und auf der ganzen Welt. Erstellt mit React.js, React Material UI und Google API.', 
    'viewProject': 'Project ansehen',
    'getInTouch': 'NIMM KONTAKT AUF',
    'contactMe': 'Sind Sie bereit dein nächstes Projekt zu starten? Toll! Sie können mir eine Nachricht schreiben, mich anrufen, eine E-Mail schreiben oder das Kontaktformular oben verwenden.',
    'contactMedp': 'Haben Sie Fragen? Bitte schreiben Sie mir eine Nachricht oder schicken Sie eine E-Mail.',
    'imprintText': 'Impressum',
    'dataprotectionText': 'Datenschutz',
    'imprHeading': 'IMPRESSUM',
    'dpHeading': 'DATENSCHUTZ'


  }
};

// Process translation
$(function() {
  let lang = localStorage.getItem('translate');
  if (lang == null) {
   // default case
   lang = "en";
   localStorage.setItem('translate', lang);
  }
  translatePageInto(lang);
  setActiveLanguageBtn(lang);
});

$('.translate').click(function() {
  let lang = $(this).attr('id');
  localStorage.setItem('translate', lang);
  translatePageInto(lang);
  setActiveLanguageBtn(lang);
});

function translatePageInto(language) {
  $('.lang').each(function(index, item) {
    $(this).text(arrLang[language][$(this).attr('name')]);
  });
}

// add active class to a language button
function setActiveLanguageBtn(language) {
  document.getElementsByClassName("activeLanguage")[0].classList.remove('activeLanguage');
  document.getElementById(language).parentElement.classList.add('activeLanguage');
}
