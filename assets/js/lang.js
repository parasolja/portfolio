

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
    'design': 'UI Design',
    'development': 'Development',
    'optimization': 'Optimization',
    'support': 'Support',
    'aboutMe': 'ABOUT',
    'aboutPO': 'Hi! My name is Solya',
    'aboutPT': 'some text',
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
    'oledoDesr': 'Here will be description',
    'gameSub': 'A turn-based board game',
    'gameDesrc': 'This is the game',
    'hedonismSub': 'Restaurant review website',
    'hedonismDesr': 'This website',
    'viewProject': 'View Project',
    'getInTouch': 'GET IN TOUCH',
    'contactMe': 'Ready to start your next project? That\'s great! You can write me a message, give me a call, write an email, or use the contact form above.',
    'contactMedp': 'Got some questions? Please write me a message, an email, or call, and I will gladly answer them.',
    'imprintText': 'Imprint & Data Protection'




  
    



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
    'design': 'UI Design',
    'development': 'Entwicklung',
    'optimization': 'Optimierung',
    'support': 'Unterstützung',
    'aboutMe': 'ÜBER MICH',
    'aboutPO': 'Hallo! Ich bin Solya',
    'aboutPT': 'some text',
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
    'oledoDesr': 'Here will be description',
    'gameSub': 'Ein rundenbasiertes Brettspiel',
    'gameDesrc': 'This is the game',
    'hedonismSub': 'Website für Restaurantbewertungen',
    'hedonismDesr': 'This website', 
    'viewProject': 'Project ansehen',
    'getInTouch': 'NIMM KONTAKT AUF',
    'contactMe': 'Bist du bereit dein nächstes Projekt zu starten? Toll! Du kannst mir eine Nachricht schreiben, mich anrufen, eine E-Mail schreiben oder das Kontaktformular oben verwenden.',
    'contactMedp': 'Haben sie Fragen? Bitte schreib mir eine Nachricht oder eine E-Mail, und ich werde sie gerne beantworten.',
    'imprintText': 'Impressum & Datenschutzerklärung'



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
