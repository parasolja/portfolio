

let arrLang = {
  'en': {
    'services': 'Services',
    'about': 'About',
    'startProject': 'Work With Me',
    'portfolio': 'Projects',
    'contact': 'Contact',
    'mainText': 'Web Developer and UI Designer',
    'subText':'Hi, I\'m Solya',
    'ourServices': 'OUR SERVICES',
    'planning': 'Planning',
    'design': 'UI Design',
    'development': 'Development',
    'consulting': 'Consulting',
    'optimization': 'Optimization',
    'support': 'Support'

  },
  'de': {
    'services': 'Services',
    'about': 'Über Mich',
    'startProject':'Project starten',
    'portfolio': 'Projecte',
    'contact': 'Kontakt',
    'mainText':'Webentwicklerin und UI Designerin',
    'subText':'Hallo, ich bin Solya',
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
