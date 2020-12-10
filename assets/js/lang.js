

let arrLang = {
  'en': {
    'services': 'Services',
    'values': 'Values',
    'startProject': 'Start a Project',
    'aboutUs': 'About',
    'contact': 'Contact',
    'mainText': 'Hi, I\'m Solya',
    'subText':'Located in Bremen, Germany',
    'ourServices': 'OUR SERVICES',
    'planning': 'HTML',
    'design': 'CSS/SASS',
    'development': 'JavaScript',
    'consulting': 'React.js',
    'optimization': 'Optimization',
    'support': 'Support'

  },
  'de': {
    'services': 'Services',
    'values': 'Werte',
    'startProject':'Project starten',
    'aboutUs':'Über Uns',
    'contact': 'Kontakt',
    'mainText':'Digitale Agentur der näсhsten Stufe',
    'subText':'Design. Entwicklung. Beratung',
    'ourServices': 'UNSERE SERVICES',
    'planning': 'Plannung',
    'design': 'Design',
    'development': 'Entwicklung',
    'consulting': 'Beratung',
    'optimization':'Optimierung',
    'support':'Unterstützung'
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
