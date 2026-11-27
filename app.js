'use strict';

const translations = {
  ru: {
    skip:'К содержанию', navMenu:'Меню',navSpace:'Атмосфера',navContact:'Как нас найти',comeIn:'Заглянуть в гости',heroEyebrow:'ТВОЯ КОФЕЙНЯ В ЖЕЗКАЗГАНЕ',heroLine1:'Твой кофе.',heroLine2:'Твоё место.',heroDesc:'Заходи за любимым напитком. Оставайся ради тёплых разговоров и маленьких радостей.',viewMenu:'Посмотреть меню',findUs:'Мы рядом',alwaysOpen:'Для ранних пташек<br>и ночных разговоров',realPlace:'Кофе со вкусом уюта',ticker1:'ЛЮБИМЫЙ КОФЕ',ticker2:'ТЁПЛЫЕ ВСТРЕЧИ',ticker3:'СЛАДКИЕ МОМЕНТЫ',menuEyebrow:'ВЫБИРАЙ ПО НАСТРОЕНИЮ',menuTitle:'С чего начнём?',menuSubtitle:'От первого эспрессо до вечернего чая.<br>Твой любимый вкус уже здесь.',catCoffee:'Кофе',catTea:'Чай',catLemonade:'Лимонады',catCold:'Айс-напитки',catShakes:'Коктейли',tenge:'ЦЕНА В ₸',priceNote:'Объём напитка, состав, актуальные цены и наличие уточняйте у бариста.',menuAsideTitle:'Пусть всё подождёт.<br>Сначала — кофе.',menuAsideDesc:'В любимой чашке здесь.<br>Или с собой, в ритме города.',foodEyebrow:'ИДЕАЛЬНАЯ ПАРА К НАПИТКУ',foodTitle:'А к кофе — что-нибудь вкусное.',pastryTitle:'Румяная выпечка',pastryDesc:'Для неспешного перекуса и больших планов.',dessertTitle:'Маленькие радости',dessertDesc:'Десерт — всегда хорошая идея.',snackTitle:'Когда проголодался',snackDesc:'Бургеры, салаты и другие поводы заглянуть.',foodNote:'Изображения созданы для оформления сайта и иллюстрируют стиль подачи. Ассортимент и цены уточняйте у бариста.',spaceEyebrow:'НЕ ПРОСТО КОФЕЙНЯ',spaceTitle:'Место, где<br>можно быть собой.',spaceDesc:'Мягкое кресло, тёплый свет и чашка в ладонях. Встретиться с друзьями, побыть наедине с мыслями или просто сделать паузу посреди дня.',spaceTag1:'Уютные уголки',spaceTag2:'Кофе с собой',spaceTag3:'Открыты 24/7',visitEyebrow:'ДО ВСТРЕЧИ В ÖZIÑŞE',visitTitle:'Есть время<br>на чашечку?',visitDesc:'У нас для тебя всегда найдётся повод<br>остаться ещё немного.',route:'Построить маршрут в 2ГИС',addressLabel:'АДРЕС',address:'Жезказган,<br>проспект Мира, 1',onMap:'Посмотреть на карте',hoursLabel:'РЕЖИМ РАБОТЫ',hours:'Каждый день. Круглосуточно.',hoursDesc:'Утром, днём и когда весь город уже спит.',contactLabel:'НА СВЯЗИ',footerLine:'У каждого дня есть свой вкус.',source:'Контакты и график — 2ГИС',verified:'Проверено 27 ноября 2026',sizes:'ЦЕНА ЗАВИСИТ ОТ РАЗМЕРА',teaSizes:'СТАКАН / ЧАЙНИК',onePrice:'ЛЮБИМЫЕ ВКУСЫ',ask:'Цену уточняйте',availability:'Наличие уточняйте',close:'Закрыть',openNav:'Открыть меню',closeNav:'Закрыть меню'
  },
  kk: {
    skip:'Мазмұнға өту',navMenu:'Мәзір',navSpace:'Атмосфера',navContact:'Мекенжай',comeIn:'Қонаққа кел',heroEyebrow:'ЖЕЗҚАЗҒАНДАҒЫ СҮЙІКТІ КОФЕХАНАҢ',heroLine1:'Өз кофең.',heroLine2:'Өз орның.',heroDesc:'Сүйікті сусының үшін кел. Жылы әңгіме мен кішкентай қуаныштар үшін қал.',viewMenu:'Мәзірді көру',findUs:'Біз жақынбыз',alwaysOpen:'Таңғы кофеге де,<br>түнгі әңгімеге де',realPlace:'Жайлылық дәмі бар кофе',ticker1:'СҮЙІКТІ КОФЕ',ticker2:'ЖЫЛЫ КЕЗДЕСУЛЕР',ticker3:'ТӘТТІ СӘТТЕР',menuEyebrow:'КӨҢІЛ КҮЙІҢЕ ҚАРАЙ ТАҢДА',menuTitle:'Неден бастаймыз?',menuSubtitle:'Таңғы эспрессодан кешкі шайға дейін.<br>Сүйікті дәмің осында.',catCoffee:'Кофе',catTea:'Шай',catLemonade:'Лимонадтар',catCold:'Салқын сусындар',catShakes:'Коктейльдер',tenge:'БАҒАСЫ, ₸',priceNote:'Сусын көлемін, құрамын, қазіргі бағасын және бар-жоғын баристадан нақтылаңыз.',menuAsideTitle:'Бәрі күте тұрсын.<br>Алдымен — кофе.',menuAsideDesc:'Осында сүйікті кесеңмен.<br>Немесе өзіңмен бірге, қала ырғағында.',foodEyebrow:'СУСЫНҒА ТАМАША ҚОСЫМША',foodTitle:'Ал кофеге — дәмді бірдеңе.',pastryTitle:'Хош иісті пісірмелер',pastryDesc:'Асықпай тамақтанып, үлкен жоспар құруға.',dessertTitle:'Кішкентай қуаныштар',dessertDesc:'Десерт — әрқашан жақсы таңдау.',snackTitle:'Қарның ашқанда',snackDesc:'Бургер, салат және келуге тағы бір себеп.',foodNote:'Суреттер сайтты безендіру үшін жасалып, ұсыну стилін көрсетеді. Ассортимент пен бағаны баристадан нақтылаңыз.',spaceEyebrow:'КОФЕХАНАДАН ДА АРТЫҚ',spaceTitle:'Өзің бола алатын<br>жайлы мекен.',spaceDesc:'Жұмсақ кресло, жылы жарық, қолыңда бір кесе кофе. Достармен кездесуге, ойыңмен оңаша қалуға немесе күн ортасында бір сәт тынығуға арналған орын.',spaceTag1:'Жайлы бұрыштар',spaceTag2:'Өзіңмен бірге кофе',spaceTag3:'Тәулік бойы ашық',visitEyebrow:'ÖZIÑŞE-ДЕ КЕЗДЕСКЕНШЕ',visitTitle:'Бір кесе кофеге<br>уақытың бар ма?',visitDesc:'Тағы біраз отыруға<br>әрқашан себеп табылады.',route:'2GIS арқылы бағыт құру',addressLabel:'МЕКЕНЖАЙ',address:'Жезқазған,<br>Мира даңғылы, 1',onMap:'Картадан көру',hoursLabel:'ЖҰМЫС УАҚЫТЫ',hours:'Күн сайын. Тәулік бойы.',hoursDesc:'Таңертең де, күндіз де, қала ұйықтағанда да.',contactLabel:'БАЙЛАНЫС',footerLine:'Әр күннің өз дәмі бар.',source:'Байланыс пен жұмыс уақыты — 2GIS',verified:'Тексерілген күні: 27 қараша 2026',sizes:'БАҒАСЫ КӨЛЕМІНЕ БАЙЛАНЫСТЫ',teaSizes:'СТАҚАН / ШӘЙНЕК',onePrice:'СҮЙІКТІ ДӘМДЕР',ask:'Бағасын нақтылаңыз',availability:'Бар-жоғын нақтылаңыз',close:'Жабу',openNav:'Мәзірді ашу',closeNav:'Мәзірді жабу'
  }
};

// All published prices are transcribed from the supplied photographs, not estimates.
const menu = {
  coffee:[
    ['Капучино','Капучино',[1150,1250,1350]],['Латте','Латте',[1150,1250,1350]],['Раф','Раф',[1250,1350,1450]],['Флэт уайт','Флэт уайт',[1250]],['Тары раф','Тары раф',[1250]],['Моккачино','Моккачино',[1250,1350,1450]],['Эспрессо','Эспрессо',[700,800]],['Американо','Американо',[1090,1190,1290]],['Фильтр-кофе','Фильтр-кофе',[1600],'availability'],['Какао','Какао',[1000]],['Горячий шоколад','Ыстық шоколад',[1000]]
  ],
  tea:[
    ['Марокканский','Марокко шайы',[950,2100]],['Молочный улун','Сүтті улун',[950,2100]],['Ташкентский','Ташкент шайы',[950,2100]],['Облепиховый','Шырғанақ шайы',[950,2100]],['Имбирный','Зімбір шайы',[950,2100]],['Фруктовый','Жеміс шайы',[950,2100]],['Малиновый','Таңқурай шайы',[950,2100]],['Смородиновый','Қарақат шайы',[950,2100]],['Цитрусовый','Цитрус шайы',[950,2100]],['Манго-маракуйя','Манго-маракуйя шайы',[950,2100]],['Алоэ-виноград','Алоэ-жүзім шайы',[950,2100]],['Тары чай','Тары шайы',[950,2100]],['Карак чай','Карак шайы',[1200]],['Глинтвейн','Глинтвейн',[1000]],['Матча чай','Матча шайы',[]]
  ],
  lemonade:[
    ['Клубника-гранат','Құлпынай-анар',[950]],['Клубника-малина','Құлпынай-таңқурай',[950]],['Киви/клубника-лайм','Киви/құлпынай-лайм',[950]],['Мохито','Мохито',[950]],['Мохито-гранат','Мохито-анар',[950]],['Мохито-клубника','Мохито-құлпынай',[950]],['Арбуз-дыня','Қарбыз-қауын',[950]],['Манго-маракуйя','Манго-маракуйя',[950]],['Ананас-кокос','Ананас-кокос',[950]],['Ананас-маракуйя','Ананас-маракуйя',[950]],['Апельсин-малина','Апельсин-таңқурай',[950]]
  ],
  cold:[
    ['Айс латте','Айс латте',[1400]],['Айс американо','Айс американо',[1150]],['Айс фраппе классик','Айс фраппе классик',[1800]],['Айс фраппе банан','Айс фраппе банан',[1800]],['Айс глясе','Айс глясе',[1800]],['Айс маракуйя','Айс маракуйя',[1400]],['Айс вишня','Айс шие',[1400]],['Бамбл апельсин','Бамбл апельсин',[1600]],['Бамбл вишня','Бамбл шие',[1600]]
  ],
  shakes:[
    ['Ванильный коктейль','Ваниль коктейлі',[1600]],['Банановый коктейль','Банан коктейлі',[1600]],['Клубничный коктейль','Құлпынай коктейлі',[1600]],['Шоколадный коктейль','Шоколад коктейлі',[1600]],['Смузи «Ягодный микс»','«Жидек миксі» смузиі',[2190]],['Смузи «Фитнес»','«Фитнес» смузиі',[2190]],['Протеиновый коктейль','Протеин коктейлі',[1500],'availability']
  ]
};

let language='ru';
let category='coffee';
const panel=document.getElementById('menu-panel');
const imageDialog=document.getElementById('image-dialog');
let lastFocused=null;
const formatPrice=n=>new Intl.NumberFormat('ru-RU').format(n);

function renderMenu(){
  const t=translations[language];
  panel.replaceChildren();
  for(const item of menu[category]){
    const row=document.createElement('div');row.className='menu-row';
    const title=document.createElement('div');
    const name=document.createElement('h3');name.textContent=item[language==='ru'?0:1];title.append(name);
    if(item[3]){const detail=document.createElement('p');detail.textContent=t[item[3]];title.append(detail);}
    const price=document.createElement('div');price.className='menu-price';price.textContent=item[2].length?item[2].map(formatPrice).join(' / '):t.ask;
    row.append(title,price);panel.append(row);
  }
  document.getElementById('category-description').textContent=t[category==='coffee'?'sizes':category==='tea'?'teaSizes':'onePrice'];
  panel.setAttribute('aria-labelledby',`tab-${category}`);
  document.querySelectorAll('[data-category]').forEach(button=>{const active=button.dataset.category===category;button.setAttribute('aria-selected',String(active));button.tabIndex=active?0:-1;});
}

function setLanguage(lang){
  if(!translations[lang])return;
  language=lang;document.documentElement.lang=lang;
  document.querySelectorAll('[data-i18n]').forEach(el=>{const value=translations[lang][el.dataset.i18n];if(value!==undefined)el.innerHTML=value;});
  document.querySelectorAll('[data-lang]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.lang===lang)));
  document.title=lang==='ru'?'Ozinshe Coffee — твой кофе, твоё место в Жезказгане':'Ozinshe Coffee — Жезқазғандағы сүйікті кофеханаң';
  document.querySelector('.dialog-close').setAttribute('aria-label',translations[lang].close);
  const labels=lang==='kk'?['Ozinshe Coffee — басты бет','Навигация','Мобильді навигация','Мәзір бөлімдері','Кофе, шай, десерттер']:['Ozinshe Coffee — главная','Навигация','Мобильная навигация','Разделы меню','Кофе, чай, десерты'];
  ['.site-header .brand','.desktop-nav','.mobile-nav','.menu-tabs','.ticker'].forEach((selector,index)=>document.querySelector(selector).setAttribute('aria-label',labels[index]));
  const imageDescriptions=lang==='kk'?['Ағаш үстелдегі латте-артты капучино — көрнекі сурет','Жылы жарықтағы ағаш үстелде кофе — көрнекі сурет','Ағаш тақтайдағы самса мен бәліштер — көрнекі сурет','Синнабон, шоколадты торт пен моти — көрнекі сурет','Бургер мен балғын салат — көрнекі сурет','Ағаш үстелдегі екі кесе кофе — көрнекі сурет']:['Капучино с латте-артом на деревянном столе — иллюстрация настроения кофейни','Кофе на деревянном столе в тёплом свете — иллюстративное изображение','Самса и румяные пироги на деревянной доске — иллюстративное изображение','Синнабон, шоколадный торт и моти — иллюстративное изображение','Бургер и свежий салат — иллюстративное изображение','Две чашки кофе на деревянном столе — иллюстративное изображение'];
  document.querySelectorAll('main img').forEach((img,index)=>img.alt=imageDescriptions[index]);
  const galleryLabels=lang==='kk'?['Пісірмелер суретін үлкейту','Десерттер суретін үлкейту','Тағамдар суретін үлкейту','Суретті көру']:['Увеличить изображение выпечки','Увеличить изображение десертов','Увеличить изображение перекусов','Рассмотреть изображение'];
  document.querySelectorAll('.gallery-open').forEach((button,index)=>button.setAttribute('aria-label',galleryLabels[index]));
  updateMobileMenuLabel();renderMenu();
  try{localStorage.setItem('ozinshe-language',lang);}catch{}
}

document.querySelectorAll('[data-lang]').forEach(button=>button.addEventListener('click',()=>setLanguage(button.dataset.lang)));
const tabs=[...document.querySelectorAll('[data-category]')];
tabs.forEach((button,index)=>{
  button.addEventListener('click',()=>{category=button.dataset.category;renderMenu();});
  button.addEventListener('keydown',event=>{
    let next;
    if(event.key==='ArrowRight')next=(index+1)%tabs.length;
    else if(event.key==='ArrowLeft')next=(index-1+tabs.length)%tabs.length;
    else if(event.key==='Home')next=0;
    else if(event.key==='End')next=tabs.length-1;
    if(next!==undefined){event.preventDefault();tabs[next].click();tabs[next].focus();}
  });
});

const mobileButton=document.querySelector('.mobile-menu');
const mobileNav=document.getElementById('mobile-nav');
function updateMobileMenuLabel(){mobileButton.setAttribute('aria-label',translations[language][mobileButton.getAttribute('aria-expanded')==='true'?'closeNav':'openNav']);}
function closeNav(){mobileButton.setAttribute('aria-expanded','false');mobileNav.hidden=true;updateMobileMenuLabel();}
mobileButton.addEventListener('click',()=>{const open=mobileButton.getAttribute('aria-expanded')!=='true';mobileButton.setAttribute('aria-expanded',String(open));mobileNav.hidden=!open;updateMobileMenuLabel();});
mobileNav.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeNav));
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeNav();});

function openImage(src,caption){
  lastFocused=document.activeElement;
  document.getElementById('dialog-title').textContent=caption;
  const img=document.getElementById('dialog-image');img.src=src;img.alt=caption;
  imageDialog.showModal();document.body.style.overflow='hidden';
}
document.querySelectorAll('.gallery-open').forEach(button=>button.addEventListener('click',()=>openImage(button.dataset.image,button.dataset[language==='ru'?'captionRu':'captionKk'])));
document.querySelector('.dialog-close').addEventListener('click',()=>imageDialog.close());
imageDialog.addEventListener('click',event=>{if(event.target!==imageDialog)return;const rect=imageDialog.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)imageDialog.close();});
imageDialog.addEventListener('close',()=>{document.body.style.overflow='';if(lastFocused)lastFocused.focus();});
try{const saved=localStorage.getItem('ozinshe-language');if(translations[saved])language=saved;}catch{}
setLanguage(language);
