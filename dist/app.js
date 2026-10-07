'use strict';

const copy = {
  tr: {
    skip:'İçeriğe geç', navIsland:'Ada hayatı', navChallenges:'Yarışmalar', navDemo:'İnteraktif demo', navDevelopment:'Geliştirme', enterIsland:'Adaya adım at',
    heroKicker:'Bir ada. Bir kamp. Tek kazanan.', heroTitle:'AYNI ADA.<br>FARKLI<br><span>NİYETLER.</span>', heroDescription:'Birlikte bir kamp kur. Parkurda sınırlarını zorla. Akşam, kime güveneceğine karar ver.', heroCta:'Ada döngüsünü dene', heroStage:'Erken geliştirme aşamasındaki indie PC oyunu', conceptArt:'Konsept görseli', scroll:'Kıyının ötesinde', strip:'KAMP KUR / YARIŞ / PAYLAŞ / OY VER /',
    islandKicker:'Gündüz takım arkadaşın. Akşam rakibin.', islandTitle:'ONLARA<br>İHTİYACIN VAR.<br><span>ONLARI YENMEN DE.</span>', islandBody:'Çatıyı birlikte yaparsınız. Son yemeği paylaşırsınız. Sonra aynı ödül için yarışırsınız. Adada yaptığın her şey, bir sonraki yarışmayı ve insanların sana bakışını etkiler.', campNoteTitle:'Yağmur yaklaşıyor', campNoteBody:'Çatıyı mı bitireceksin, ateşi mi koruyacaksın, yoksa dinlenecek misin?', voiceNoteTitle:'Yakınlık mikrofonu', voiceNoteBody:'Kamp ateşinde sohbet. Ormanda özel konuşmalar. Konseyde herkesin duyduğu kararlar.', campStamp:'KAMP / AKŞAM', campCaption:'Önce birlikte hayatta kalırsınız.',
    challengeKicker:'Becerin konuşsun', challengeTitle:'ADA SENİ<br><span>HAREKETE GEÇİRİR.</span>', challengeIntro:'Suya gir. Dengeni bul. Hedefi vur.<br>Sonucu senin hareketlerin belirlesin.', swimTitle:'Şamandıra kapmaca', swimType:'Yüzme / Rota seçimi', balanceTitle:'Islak iskele', balanceType:'Denge / Parkur', throwTitle:'Son atış', throwType:'Fırlatma / Zamanlama', carryTitle:'Birlikte taşı', carryType:'Koordinasyon / Takım oyunu', plannedChallenge:'Planlanan yarışma',
    swimDescription:'Bayrağa ulaşmak için güvenli uzun rotayı mı, açık sudaki kısa yolu mu seçeceksin? Bayrağı kıyıya ilk getiren kazanır.', balanceDescription:'Dar ahşap platformları geç. Hızlanmak süre kazandırır, bir düşüş seni yeniden suya gönderir. Son platformdaki hedefi vur.', throwDescription:'Sınırlı sayıda atışın var. Hedeflerin sırasını seç, zamanlamanı ayarla ve son atışına kadar yarışta kal.', carryDescription:'Uzun bir kalası takım arkadaşınla birlikte taşı. Dönüşleri konuşarak koordine et; biriniz acele ederse ikiniz de dengeyi kaybedebilirsiniz.',
    demoKicker:'Okumak yerine bir karar ver', demoTitle:'ADADA BİR GÜN.<br><span>SENİN KARARLARIN.</span>', demoIntro:'Kampı hazırla, atışını yap, ödül için oy ver.<br>Oyun döngüsünün tarayıcıdaki küçük bir önizlemesi.', demoLabel:'İnteraktif konsept demosu', reset:'Günü yeniden başlat', localDemo:'Yerel demo', energy:'Enerji', campMood:'Kamp ilişkisi', demoStatsNote:'Simülasyon değerleri', stageCamp:'Kamp', stageChallenge:'Yarışma', stageCouncil:'Konsey',
    campChoiceTitle:'Vaktini neye ayırırsın?', campChoiceBody:'Tek bir hazırlık seç. Sonucu parkura taşı.', shelterChoice:'Çatıyı tamamla', shelterHint:'Kamp kuru kalır. Birlikte toparlanırsınız.', foodChoice:'Yemek hazırla', foodHint:'Enerji kazanırsın. Yemeği paylaşırsın.', restChoice:'Kendin için dinlen', restHint:'Enerjin dolar. Kamp işi bekler.', campEmpty:'Henüz bir hazırlık seçmedin.', toChallenge:'Atış yarışmasına katıl',
    throwDemoTitle:'Tek hedef. Üç atış.', throwDemoBody:'İşaret merkezdeki bölgeye geldiğinde atış yap. Klavyede boşluk tuşunu da kullanabilirsin.', target:'HEDEF', manualAim:'Atış konumu', points:'puan', throwButton:'Atış yap', aimMode:'Elle nişan al', movingAim:'Hareketli hedefe dön', throwReady:'Hazır olduğunda ilk atışını yap.', toCouncil:'Kamp konseyine geç',
    councilTitle:'Ödül kime yarasın?', councilBody:'Kampın ödülünü nasıl kullanacağına oy ver. Bu önizlemede yalnızca senin oyun sayılır.', voteMeal:'Ortak yemek', voteRoof:'Barınak malzemesi', votePractice:'Antrenman ekipmanı', voteEmpty:'Oyunu kullan, günün sonucunu gör.', dayResult:'Günün hikâyesi', playAgain:'Farklı bir karar dene', demoError:'Önizleme başlatılamadı. Günü yeniden başlatıp tekrar deneyebilirsin.', retry:'Tekrar dene', demoFootnote:'Bu, oyun fikrinin çalışan bir tarayıcı önizlemesidir. Tam 3D oyun, çevrimiçi oyuncular ve mikrofon bağlantısı bu demoda yer almaz.',
    socialKicker:'Ada sadece fiziksel bir sınav değil', socialTitle:'EN İYİ ATIŞIN<br><span>SON SÖZ OLMAYABİLİR.</span>', socialBody:'Konseydeki oyun kimin risk alacağını değiştirebilir. Düellodaki becerin seni kurtarabilir. İzleyiciler de sıradaki yarışmayı veya adanın hava koşullarını seçebilir.', socialRule:'Planlanan ilke: oylama riski belirler, oyuncu sonucu oynayarak değiştirir.', developmentKicker:'Adayı birlikte şekillendiriyoruz', developmentTitle:'HİKÂYE<br><span>DAHA YENİ BAŞLIYOR.</span>', developmentBody:'Outvoters, Steam için planlanan erken aşama bir indie PC oyunu. Bu sayfa oyun vizyonunu ve ilk interaktif konsepti paylaşıyor.', backToDemo:'Konsepte geri dön', nowTitle:'Şimdi', nowBody:'Ada, kamp ve yarışma döngüsünü gösteren bu interaktif önizleme.', nextTitle:'Sıradaki adım', nextBody:'Küçük bir adada hareket, yüzme, atış ve ortak barınak sistemlerini deneyen oyun prototipi.', aiTitle:'Planlanan Claude kullanımı', aiBody:'Geliştirme ve test desteği; ileride sınırlandırılmış sunucu anlatımı ve sezon özetleri. API entegrasyonu henüz canlı değil. Kurallar ve kazanan oyun sistemi tarafından belirlenir.', footerStage:'Bağımsız bir oyun. Erken geliştirme.', pauseMotion:'Hareketi durdur', resumeMotion:'Hareketi başlat',
    undecided:'Kararsız', trusted:'Güven kazanıldı', shared:'Yemek paylaşıldı', alone:'Kendi başına', beforeEvening:'AKŞAM ÖNCESİ', challengeTime:'YARIŞMA VAKTİ', councilTime:'KONSEY VAKTİ', worldCampTitle:'Kampın sana<br>ihtiyacı var.', worldCampBody:'Herkese yardım edecek bir hazırlık mı, kendin için dinlenmek mi?', worldChallengeKicker:'Sonuç senin elinde', worldChallengeTitle:'Sıradaki atış<br>her şeyi değiştirir.', worldChallengeBody:'Kamp hazırlığı hedef alanını biraz etkiler. Asıl farkı atış zamanlaman yaratır.', worldCouncilKicker:'Şimdi söz senin', worldCouncilTitle:'Bir ödül.<br>Farklı ihtiyaçlar.', worldCouncilBody:'Yarışma sona erdi. Ödülün kampta nasıl kullanılacağına karar ver.', shelterFeedback:'Çatı hazır. Enerjin 86, kampın güvenini kazandın. Hedef alanın biraz genişledi.', foodFeedback:'Yemeği paylaştın. Enerjin 94, kamp birlikte toparlandı. Hedef alanın biraz genişledi.', restFeedback:'Enerjin 100. Dinlendin, fakat kamp işi bekledi. Standart hedef alanıyla yarışacaksın.', throwsLeft:'Kalan atış', throwPerfect:'Hedef bölgesini yakaladın!', throwGood:'Merkeze yakın bir atış.', throwMiss:'Bir sonraki atışta merkeze yaklaş.', scoreTotal:'Toplam', challengeDone:'Üç atış tamamlandı. Şimdi kamp ödülüne karar verebilirsin.', voteRecorded:'Oyun kaydedildi', mealResult:'Ortak yemek seçtin. Ödül tüm kampın toparlanmasına ayrılıyor.', roofResult:'Barınak malzemesini seçtin. Ödül, sonraki yağmura hazırlık için ayrılıyor.', practiceResult:'Antrenman ekipmanı seçtin. Ödül, sonraki yarışmaya birlikte hazırlanmak için ayrılıyor.', resultShelter:'Güne çatıyı tamamlayarak başladın.', resultFood:'Güne yemek hazırlayıp paylaşarak başladın.', resultRest:'Güne kendin için dinlenerek başladın.', resultScore:'Atış yarışmasında {score} puan topladın.', resultClosing:'Aynı gün, başka kararlarla farklı bir hikâyeye dönüşebilir.', imageError:'Konsept görseli yüklenemedi.', menuOpen:'Menüyü aç', menuClose:'Menüyü kapat',
  },
  en: {
    skip:'Skip to content', navIsland:'Island life', navChallenges:'Challenges', navDemo:'Interactive demo', navDevelopment:'Development', enterIsland:'Step onto the island',
    heroKicker:'One island. One camp. One winner.', heroTitle:'SAME ISLAND.<br>DIFFERENT<br><span>INTENTIONS.</span>', heroDescription:'Build a camp together. Push yourself on the course. At night, decide who you trust.', heroCta:'Play the island loop', heroStage:'An indie PC game in early development', conceptArt:'Concept artwork', scroll:'Beyond the shore', strip:'BUILD CAMP / COMPETE / SHARE / VOTE /',
    islandKicker:'Your teammate by day. Your rival by night.', islandTitle:'YOU NEED THEM.<br><span>YOU NEED TO<br>BEAT THEM.</span>', islandBody:'You build the roof together. Share the last meal. Then compete for the same reward. Everything you do on the island shapes the next challenge and how people see you.', campNoteTitle:'Rain is on the way', campNoteBody:'Finish the roof, protect the fire, or take a rest before the challenge?', voiceNoteTitle:'Proximity voice chat', voiceNoteBody:'Conversations around the fire. Private talks in the forest. Decisions everyone hears at council.', campStamp:'CAMP / DUSK', campCaption:'First, you survive together.',
    challengeKicker:'Let your skill do the talking', challengeTitle:'THIS ISLAND<br><span>GETS YOU MOVING.</span>', challengeIntro:'Hit the water. Find your balance. Make the shot.<br>Let your actions decide the result.', swimTitle:'Race to the buoy', swimType:'Swimming / Route choice', balanceTitle:'The wet dock', balanceType:'Balance / Obstacle course', throwTitle:'The final throw', throwType:'Throwing / Timing', carryTitle:'Carry together', carryType:'Coordination / Teamwork', plannedChallenge:'Planned challenge',
    swimDescription:'Will you take the longer, safer route or the shortcut through open water? Bring the flag back to shore first to win.', balanceDescription:'Cross narrow wooden platforms. Going faster saves time, but one slip sends you back into the water. Hit the target on the final platform.', throwDescription:'You have a limited number of throws. Choose your targets, find your timing, and stay in the contest until your final shot.', carryDescription:'Carry a long wooden beam with a teammate. Talk your way through each turn. If one of you rushes, both of you can lose your balance.',
    demoKicker:'Make a decision, not just a visit', demoTitle:'A DAY ON THE ISLAND.<br><span>YOUR DECISIONS.</span>', demoIntro:'Prepare the camp, make your throws, vote on the reward.<br>A small browser preview of the game loop.', demoLabel:'Interactive concept demo', reset:'Restart the day', localDemo:'Local demo', energy:'Energy', campMood:'Camp relationship', demoStatsNote:'Simulation values', stageCamp:'Camp', stageChallenge:'Challenge', stageCouncil:'Council',
    campChoiceTitle:'How will you spend your time?', campChoiceBody:'Choose one preparation. Take its result into the challenge.', shelterChoice:'Finish the roof', shelterHint:'The camp stays dry. Everyone recovers together.', foodChoice:'Prepare a meal', foodHint:'Recover energy. Share the food.', restChoice:'Rest on your own', restHint:'Your energy fills up. The camp work waits.', campEmpty:'You have not chosen a preparation yet.', toChallenge:'Enter the throwing challenge',
    throwDemoTitle:'One target. Three throws.', throwDemoBody:'Throw when the marker reaches the middle zone. You can also use the space bar.', target:'TARGET', manualAim:'Throw position', points:'points', throwButton:'Make the throw', aimMode:'Aim manually', movingAim:'Return to moving aim', throwReady:'Make your first throw when you are ready.', toCouncil:'Head to camp council',
    councilTitle:'Who should the reward help?', councilBody:'Vote on how the camp uses its reward. Only your vote is counted in this preview.', voteMeal:'A shared meal', voteRoof:'Shelter materials', votePractice:'Training equipment', voteEmpty:'Cast your vote to see the story of your day.', dayResult:'The story of your day', playAgain:'Try a different decision', demoError:'The preview could not start. Restart the day and try again.', retry:'Try again', demoFootnote:'This is a working browser preview of the game concept. The full 3D game, online players and microphone connection are not part of this demo.',
    socialKicker:'The island tests more than your reflexes', socialTitle:'YOUR BEST SHOT<br><span>MIGHT NOT BE<br>THE FINAL WORD.</span>', socialBody:'A council vote can change who takes the risk. Your skill in a duel can save you. Viewers could choose the next challenge or the weather on the island.', socialRule:'Planned principle: votes set the stakes. Players can change the outcome through play.', developmentKicker:'Shaping the island together', developmentTitle:'THE STORY<br><span>IS JUST BEGINNING.</span>', developmentBody:'Outvoters is an early-stage indie PC game planned for Steam. This page shares the game vision and its first interactive concept.', backToDemo:'Return to the concept', nowTitle:'Now', nowBody:'This interactive preview of the island, camp and challenge loop.', nextTitle:'Next step', nextBody:'A small-island game prototype exploring movement, swimming, throwing and shared shelter systems.', aiTitle:'Planned use of Claude', aiBody:'Development and testing support; later, bounded host narration and season summaries. The API integration is not live yet. The game system determines the rules and the winner.', footerStage:'An independent game. Early development.', pauseMotion:'Pause motion', resumeMotion:'Resume motion',
    undecided:'Undecided', trusted:'Trust earned', shared:'Meal shared', alone:'On your own', beforeEvening:'BEFORE DUSK', challengeTime:'CHALLENGE TIME', councilTime:'COUNCIL TIME', worldCampTitle:'Your camp<br>needs you.', worldCampBody:'Prepare something for everyone, or take a rest for yourself?', worldChallengeKicker:'The result is in your hands', worldChallengeTitle:'The next throw<br>changes everything.', worldChallengeBody:'Camp preparation slightly changes the target zone. Your timing makes the real difference.', worldCouncilKicker:'Your turn to speak', worldCouncilTitle:'One reward.<br>Different needs.', worldCouncilBody:'The challenge is over. Decide how the camp will use its reward.', shelterFeedback:'Roof finished. Energy: 86. You earned the camp’s trust and a slightly wider target zone.', foodFeedback:'Meal shared. Energy: 94. The camp recovered together and your target zone is slightly wider.', restFeedback:'Energy: 100. You rested, but the camp work waited. You will use the standard target zone.', throwsLeft:'Throws left', throwPerfect:'You hit the target zone!', throwGood:'A throw close to the center.', throwMiss:'Try to get closer to the center next time.', scoreTotal:'Total', challengeDone:'Three throws complete. You can now decide how the camp uses its reward.', voteRecorded:'Vote recorded', mealResult:'You chose a shared meal. The reward helps the whole camp recover.', roofResult:'You chose shelter materials. The reward prepares the camp for the next rain.', practiceResult:'You chose training equipment. The reward helps everyone prepare for the next challenge.', resultShelter:'You started the day by finishing the roof.', resultFood:'You started the day by preparing and sharing a meal.', resultRest:'You started the day by resting on your own.', resultScore:'You scored {score} points in the throwing challenge.', resultClosing:'The same day can become a different story with different decisions.', imageError:'Concept artwork could not load.', menuOpen:'Open menu', menuClose:'Close menu',
  },
};

let language = 'tr';
let activeChallenge = 'swim';
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let motionPaused = reducedMotion.matches;
let state;
let frame = 0;
let aimPosition = 20;
let aimStart = 0;
let lastThrow = null;
const $ = (id) => document.getElementById(id);
const t = (key) => copy[language][key] || key;
const choices = {shelter:{energy:86,trust:'trusted',zone:12},food:{energy:94,trust:'shared',zone:10},rest:{energy:100,trust:'alone',zone:8}};

function updateChallenge(key) {
  activeChallenge = key;
  document.querySelectorAll('[data-challenge]').forEach(button => {
    const active = button.dataset.challenge === key;
    button.classList.toggle('active',active);
    button.setAttribute('aria-selected',String(active));
    button.tabIndex = active ? 0 : -1;
  });
  $('challenge-detail').setAttribute('aria-labelledby',`challenge-tab-${key}`);
  $('challenge-name').textContent = t(`${key}Title`);
  $('challenge-description').textContent = t(`${key}Description`);
}

function fillRhythmStrip() {
  const strip = document.querySelector('.rhythm-strip');
  const groups = strip.querySelectorAll('.rhythm-group');
  const first = groups[0];
  const phrase = first.firstElementChild;
  first.replaceChildren(phrase);
  const phraseWidth = phrase.getBoundingClientRect().width;
  if (!phraseWidth) return;
  const count = Math.ceil(strip.clientWidth / phraseWidth) + 1;
  for (let index = 1; index < count; index++) first.append(phrase.cloneNode(true));
  groups[1].replaceChildren(...Array.from(first.children, item => item.cloneNode(true)));
}

function updateLanguage() {
  document.documentElement.lang = language;
  document.querySelectorAll('[data-i18n]').forEach(el => {el.innerHTML = t(el.dataset.i18n);});
  fillRhythmStrip();
  $('language-button').textContent = language === 'tr' ? 'EN' : 'TR';
  $('language-button').setAttribute('aria-label', language === 'tr' ? 'Switch to English' : 'Türkçeye geç');
  $('menu-button').setAttribute('aria-label',t($('menu-button').getAttribute('aria-expanded') === 'true' ? 'menuClose' : 'menuOpen'));
  document.title = language === 'tr' ? 'Outvoters | Aynı ada. Farklı niyetler.' : 'Outvoters | Same island. Different intentions.';
  document.querySelector('meta[name="description"]').content = language === 'tr' ? 'Ada yaşamı, fiziksel yarışmalar ve sosyal strateji üzerine kurulu bir indie PC oyunu. İnteraktif konsept önizlemesini deneyimle.' : 'An indie multiplayer PC game combining island life, physical challenges and social strategy. Play the interactive concept preview.';
  const alts = language === 'tr' ? ['Gün batımında tropik ada, ormanlık kayalıklar ve kıyıdaki küçük kamp','Palmiye çatılı barınak ve kumsaldaki kamp ateşi','Tropik kıyıda ahşap denge parkuru, şamandıralar ve atış hedefleri'] : ['A tropical island at sunset, forested cliffs and a small coastal camp','A palm-thatched shelter and a campfire on the beach','Wooden balance courses, swimming buoys and throwing targets on a tropical coast'];
  document.querySelector('.hero-image').alt = alts[0];
  document.querySelector('.camp-figure img').alt = alts[1];
  document.querySelector('.course-figure img').alt = alts[2];
  const labels = language === 'tr' ? ['Ana menü','Mobil menü','Yarışma konseptleri','Demo aşamaları','Ödül seçimi'] : ['Main navigation','Mobile navigation','Challenge concepts','Demo stages','Reward choice'];
  ['.desktop-nav','.mobile-nav','.challenge-list','.stage-track','.vote-options'].forEach((selector,index)=>document.querySelector(selector).setAttribute('aria-label',labels[index]));
  document.querySelectorAll('.asset-error').forEach(el=>{el.textContent=t('imageError');});
  updateChallenge(activeChallenge);
  updateMotionButton();
  if (state) renderDemo();
}

function updateMotionButton() {
  $('motion-toggle').textContent = t(motionPaused ? 'resumeMotion' : 'pauseMotion');
  $('motion-toggle').setAttribute('aria-pressed',String(motionPaused));
}

function setMotion(paused) {
  motionPaused = paused;
  document.documentElement.classList.toggle('motion-paused',paused);
  updateMotionButton();
  if (state && paused && !state.manual) {
    state.manual = true;
    stopAim();
    aimPosition = Math.round(aimPosition);
    $('aim-slider').value = String(aimPosition);
    renderDemo();
  }
}

function closeMenu(restoreFocus=false) {
  $('mobile-nav').hidden = true;
  $('menu-button').setAttribute('aria-expanded','false');
  $('menu-button').setAttribute('aria-label',t('menuOpen'));
  document.body.classList.remove('menu-open');
  if (restoreFocus) $('menu-button').focus();
}

function resetDemo(focus=false) {
  stopAim();
  lastThrow = null;
  aimPosition = 20;
  state = {stage:'camp',choice:null,energy:72,trust:'undecided',throws:3,score:0,vote:null,manual:motionPaused};
  $('demo-error').hidden = true;
  $('aim-slider').value = '20';
  renderDemo();
  if (focus) document.querySelector('[data-choice]').focus({preventScroll:true});
}

function renderDemo() {
  const stageNames = ['camp','challenge','council'];
  const stageIndex = stageNames.indexOf(state.stage);
  document.querySelectorAll('[data-stage]').forEach(el => {
    const index = stageNames.indexOf(el.dataset.stage);
    el.classList.toggle('active',index === stageIndex);
    el.classList.toggle('done',index < stageIndex);
    if (index === stageIndex) el.setAttribute('aria-current','step'); else el.removeAttribute('aria-current');
  });
  stageNames.forEach(stage=>{$(`${stage}-scene`).hidden = stage !== state.stage;});
  $('demo-world').classList.toggle('challenge',state.stage === 'challenge');
  $('demo-world').classList.toggle('sheltered',state.choice === 'shelter');
  const image = state.stage === 'challenge' ? 'assets/course.webp' : 'assets/camp.webp';
  if ($('demo-image').getAttribute('src') !== image) $('demo-image').src = image;
  $('demo-image').alt = language === 'tr' ? 'İnteraktif demodaki ada sahnesinin konsept görseli' : 'Concept artwork for the island scene in the interactive demo';
  $('demo-daytime').textContent = t(state.stage === 'camp' ? 'beforeEvening' : state.stage === 'challenge' ? 'challengeTime' : 'councilTime');
  $('world-kicker').textContent = t(state.stage === 'camp' ? 'campNoteTitle' : state.stage === 'challenge' ? 'worldChallengeKicker' : 'worldCouncilKicker');
  $('world-title').innerHTML = t(state.stage === 'camp' ? 'worldCampTitle' : state.stage === 'challenge' ? 'worldChallengeTitle' : 'worldCouncilTitle');
  $('world-description').textContent = t(state.stage === 'camp' ? 'worldCampBody' : state.stage === 'challenge' ? 'worldChallengeBody' : 'worldCouncilBody');
  $('energy-value').innerHTML = `${state.energy}<span>/100</span>`;
  $('energy-bar').style.setProperty('--value',`${state.energy}%`);
  $('trust-value').textContent = t(state.trust);
  document.querySelectorAll('[data-choice]').forEach(button=>{
    const selected = button.dataset.choice === state.choice;
    button.classList.toggle('selected',selected);
    button.setAttribute('aria-pressed',String(selected));
  });
  $('camp-feedback').textContent = t(state.choice ? `${state.choice}Feedback` : 'campEmpty');
  $('to-challenge').disabled = !state.choice;
  $('throws-left').textContent = `${t('throwsLeft')}: ${state.throws}`;
  $('score-value').innerHTML = `${state.score} <span>${t('points')}</span>`;
  $('throw-button').disabled = state.throws === 0;
  $('to-council').hidden = state.throws !== 0;
  $('aim-control').hidden = !state.manual || state.throws === 0;
  $('aim-mode').hidden = state.throws === 0;
  $('aim-mode').textContent = t(state.manual ? 'movingAim' : 'aimMode');
  $('aim-mode').setAttribute('aria-pressed',String(state.manual));
  const zone = state.choice ? choices[state.choice].zone : 8;
  document.querySelector('.target-zone').style.left = `${50-zone}%`;
  document.querySelector('.target-zone').style.right = `${50-zone}%`;
  $('throw-feedback').textContent = state.throws === 0 ? `${t('challengeDone')} ${t('scoreTotal')}: ${state.score} ${t('points')}.` : lastThrow ? `${t(lastThrow.type)} +${lastThrow.points} ${t('points')}.` : t('throwReady');
  document.querySelectorAll('[data-vote]').forEach(button=>{
    const selected = button.dataset.vote === state.vote;
    button.classList.toggle('selected',selected);
    button.setAttribute('aria-pressed',String(selected));
  });
  $('vote-feedback').textContent = state.vote ? `${t('voteRecorded')}. ${t(`${state.vote}Result`)}` : t('voteEmpty');
  $('day-result').hidden = !state.vote;
  if (state.vote) {
    const intro = t(`result${state.choice[0].toUpperCase()+state.choice.slice(1)}`);
    $('result-copy').textContent = `${intro} ${t('resultScore').replace('{score}',String(state.score))} ${t(`${state.vote}Result`)} ${t('resultClosing')}`;
  }
  drawAim();
}

function drawAim() {
  const width = Math.max(0,$('timing-game').clientWidth-6);
  $('timing-cursor').style.transform = `translateX(${width*aimPosition/100}px)`;
}

function stopAim() {
  if (frame) cancelAnimationFrame(frame);
  frame = 0;
}

function startAim() {
  stopAim();
  if (state.stage !== 'challenge' || state.manual || state.throws === 0) return;
  aimStart = performance.now();
  function tick(now) {
    if (state.stage !== 'challenge' || state.manual || state.throws === 0) {frame=0;return;}
    const phase = ((now-aimStart)/1400) % 2;
    aimPosition = (phase < 1 ? phase : 2-phase)*100;
    drawAim();
    frame = requestAnimationFrame(tick);
  }
  frame = requestAnimationFrame(tick);
}

function makeThrow() {
  if (state.stage !== 'challenge' || state.throws === 0) return;
  const distance = Math.abs(aimPosition-50);
  const zone = choices[state.choice].zone;
  const points = distance <= zone ? 100 : Math.max(0,Math.round(100*(50-distance)/(50-zone)));
  lastThrow = {points,type:distance <= zone ? 'throwPerfect' : distance < 25 ? 'throwGood' : 'throwMiss'};
  state.score += points;
  state.throws -= 1;
  state.energy = Math.max(0,state.energy-4);
  if (state.throws === 0) stopAim();
  renderDemo();
  if (state.throws === 0) $('to-council').focus({preventScroll:true});
}

function initialize() {
  $('language-button').addEventListener('click',()=>{language=language === 'tr' ? 'en' : 'tr';updateLanguage();});
  $('menu-button').addEventListener('click',()=>{
    const open = $('menu-button').getAttribute('aria-expanded') !== 'true';
    $('mobile-nav').hidden = !open;
    $('menu-button').setAttribute('aria-expanded',String(open));
    $('menu-button').setAttribute('aria-label',t(open ? 'menuClose' : 'menuOpen'));
    document.body.classList.toggle('menu-open',open);
  });
  $('mobile-nav').querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>closeMenu()));
  document.addEventListener('keydown',event=>{if(event.key==='Escape' && !$('mobile-nav').hidden)closeMenu(true);});
  window.matchMedia('(min-width:64rem)').addEventListener('change',event=>{if(event.matches)closeMenu();});
  const tabs = [...document.querySelectorAll('[data-challenge]')];
  tabs.forEach((button,index)=>{
    button.addEventListener('click',()=>updateChallenge(button.dataset.challenge));
    button.addEventListener('keydown',event=>{
      let next;
      if (event.key==='ArrowDown'||event.key==='ArrowRight') next=(index+1)%tabs.length;
      if (event.key==='ArrowUp'||event.key==='ArrowLeft') next=(index+tabs.length-1)%tabs.length;
      if (event.key==='Home') next=0;
      if (event.key==='End') next=tabs.length-1;
      if (next!==undefined) {event.preventDefault();updateChallenge(tabs[next].dataset.challenge);tabs[next].focus();}
    });
  });
  document.querySelectorAll('[data-choice]').forEach(button=>button.addEventListener('click',()=>{
    if (state.stage !== 'camp') return;
    state.choice=button.dataset.choice;
    state.energy=choices[state.choice].energy;
    state.trust=choices[state.choice].trust;
    renderDemo();
  }));
  $('to-challenge').addEventListener('click',()=>{
    if (!state.choice) return;
    state.stage='challenge';renderDemo();startAim();$('throw-button').focus({preventScroll:true});
  });
  $('throw-button').addEventListener('click',makeThrow);
  $('aim-slider').addEventListener('input',event=>{aimPosition=Number(event.target.value);drawAim();});
  $('aim-mode').addEventListener('click',()=>{
    if (state.manual && motionPaused) setMotion(false);
    state.manual=!state.manual;stopAim();renderDemo();
    if (state.manual) {$('aim-slider').value=String(Math.round(aimPosition));$('aim-slider').focus({preventScroll:true});}
    else startAim();
  });
  document.addEventListener('keydown',event=>{
    if (event.code==='Space' && state.stage==='challenge' && !/^(BUTTON|INPUT|A|TEXTAREA|SELECT)$/.test(event.target.tagName)) {event.preventDefault();makeThrow();}
  });
  $('to-council').addEventListener('click',()=>{
    if (state.throws!==0) return;
    state.stage='council';stopAim();renderDemo();document.querySelector('[data-vote]').focus({preventScroll:true});
  });
  document.querySelectorAll('[data-vote]').forEach(button=>button.addEventListener('click',()=>{
    if (state.stage !== 'council') return;
    state.vote=button.dataset.vote;renderDemo();
  }));
  ['reset-demo','play-again','retry-demo'].forEach(id=>$(id).addEventListener('click',()=>resetDemo(true)));
  $('motion-toggle').addEventListener('click',()=>setMotion(!motionPaused));
  reducedMotion.addEventListener('change',event=>setMotion(event.matches));
  window.addEventListener('resize',drawAim,{passive:true});
  document.addEventListener('visibilitychange',()=>{if(document.hidden)stopAim();else if(state.stage==='challenge')startAim();});
  document.querySelectorAll('img').forEach(img=>{
    const fail=()=>{
      if(img.classList.contains('brand-mark')){img.hidden=true;return;}
      if(img.parentElement.querySelector('.asset-error'))return;
      const message=document.createElement('span');message.className='asset-error';message.textContent=t('imageError');
      img.parentElement.append(message);
    };
    img.addEventListener('error',fail);
    img.addEventListener('load',()=>{if(img.classList.contains('brand-mark'))img.hidden=false;img.parentElement.querySelector('.asset-error')?.remove();});
    if(img.complete && img.naturalWidth===0)fail();
  });
  if ('IntersectionObserver' in window) {
    document.documentElement.classList.add('js-motion');
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.08});
    document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
  }
  resetDemo();setMotion(motionPaused);updateLanguage();
  const rhythmResize = new ResizeObserver(fillRhythmStrip);
  rhythmResize.observe(document.querySelector('.rhythm-strip'));
  document.fonts.ready.then(fillRhythmStrip);
  const context=document.modelContext;
  if(context?.registerTool){
    const lifecycle=new AbortController();
    const register=tool=>{try{Promise.resolve(context.registerTool(tool,{signal:lifecycle.signal})).catch(()=>{});}catch{/* The preview remains usable without WebMCP. */}};
    register({name:'read_island_demo',description:'Read the current local island concept demo state.',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:true},execute:()=>({...state})});
    register({name:'choose_camp_preparation',description:'Choose a camp preparation in the local concept demo. Does not affect a live game.',inputSchema:{type:'object',properties:{choice:{type:'string',enum:['shelter','food','rest']}},required:['choice'],additionalProperties:false},execute:input=>{
      if(!input||!Object.hasOwn(choices,input.choice))throw new Error('Invalid camp preparation');
      if(state.stage!=='camp')throw new Error('Restart the day before choosing a camp preparation');
      document.querySelector(`[data-choice="${input.choice}"]`).click();return {...state};
    }});
    window.addEventListener('pagehide',()=>lifecycle.abort(),{once:true});
  }
}

try {initialize();} catch (error) {
  console.error('Island concept preview failed to initialize.',error);
  document.documentElement.classList.remove('js-motion');
  $('demo-error').hidden=false;
}
