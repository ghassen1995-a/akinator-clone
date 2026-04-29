/* ============================================
   Multi-Language Translation System
   Supports: English, French, Arabic
   ============================================ */

const translations = {
    en: {
        welcome_title: 'Think of a Famous Person',
        welcome_subtitle: 'Can our AI guess who you\'re thinking of?',
        welcome_category: 'Select Category (Optional):',
        welcome_category_all: 'All Categories',
        welcome_category_politics: 'Politics & Leadership',
        welcome_category_science: 'Science & Innovation',
        welcome_category_arts: 'Arts & Culture',
        welcome_category_sports: 'Sports & Athletics',
        welcome_category_entertainment: 'Entertainment',
        welcome_category_military: 'Military & Warfare',
        welcome_category_religion: 'Religion & Philosophy',
        welcome_start: 'Start Game',
        stats_played: 'Games Played',
        stats_correct: 'Correct Guesses',
        stats_rate: 'Success Rate',
        stats_avg: 'Average Accuracy',
        stats_title: 'Your Statistics',
        game_answer_yes: 'Yes',
        game_answer_no: 'No',
        game_answer_maybe: 'Maybe',
        game_answer_dk: 'Don\'t Know',
        game_skip: 'Skip Question',
        game_possible: 'Possible',
        result_title: 'The Person Is...',
        result_correct: 'Correct!',
        result_incorrect: 'Wrong',
        result_play_again: 'Play Again',
        result_home: 'Home',
        feedback_amazing: '🎯 Amazing! I guessed it perfectly!',
        feedback_close: '👏 Very Close! Almost perfect!',
        feedback_almost: '🤔 Getting Closer... Not bad!',
        feedback_lucky: '😅 Lucky guess... I\'ll do better!',
        feedback_missed: '❌ Oops! I need to improve!',
        question_male_female: 'Is this person male?',
        question_alive: 'Is this person still alive?',
        question_ancient: 'Did this person live in ancient times (before 500 AD)?',
        question_medieval: 'Did this person live in medieval times (500-1500)?',
        question_modern: 'Is this person from the modern era (1800 onwards)?',
        question_contemporary: 'Is this person from the contemporary era (1950 onwards)?',
        question_politician: 'Is this person a politician or leader?',
        question_scientist: 'Is this person a scientist or inventor?',
        question_artist: 'Is this person an artist or cultural figure?',
        question_athlete: 'Is this person an athlete or sports figure?',
        question_entertainer: 'Is this person an entertainer or actor?',
        question_military: 'Is this person known for military achievements?',
        question_philosopher: 'Is this person a philosopher or religious figure?',
        question_western: 'Is this person primarily known in Western history?',
        question_eastern: 'Is this person primarily known in Eastern history?',
        question_violent: 'Was this person known for violence or war?',
        question_peaceful: 'Was this person known for peace or non-violence?',
        question_inventor: 'Did this person invent something significant?',
        question_writer: 'Is this person primarily known as a writer or author?',
        question_musician: 'Is this person primarily known as a musician?',
    },
    fr: {
        welcome_title: 'Pensez à une personne célèbre',
        welcome_subtitle: 'Notre IA peut-elle deviner qui vous pensez?',
        welcome_category: 'Sélectionnez une catégorie (Optionnel):',
        welcome_category_all: 'Toutes les catégories',
        welcome_category_politics: 'Politique & Leadership',
        welcome_category_science: 'Science & Innovation',
        welcome_category_arts: 'Arts & Culture',
        welcome_category_sports: 'Sports & Athlétisme',
        welcome_category_entertainment: 'Divertissement',
        welcome_category_military: 'Militaire & Guerre',
        welcome_category_religion: 'Religion & Philosophie',
        welcome_start: 'Commencer le jeu',
        stats_played: 'Jeux joués',
        stats_correct: 'Bonnes réponses',
        stats_rate: 'Taux de réussite',
        stats_avg: 'Précision moyenne',
        stats_title: 'Vos statistiques',
        game_answer_yes: 'Oui',
        game_answer_no: 'Non',
        game_answer_maybe: 'Peut-être',
        game_answer_dk: 'Je ne sais pas',
        game_skip: 'Passer',
        game_possible: 'Possible',
        result_title: 'Cette personne est...',
        result_correct: 'Correct!',
        result_incorrect: 'Faux',
        result_play_again: 'Rejouer',
        result_home: 'Accueil',
        feedback_amazing: '🎯 Incroyable! J\'ai deviné parfaitement!',
        feedback_close: '👏 Très proche! Presque parfait!',
        feedback_almost: '🤔 Plus près... Pas mal!',
        feedback_lucky: '😅 Coup de chance... Je ferai mieux!',
        feedback_missed: '❌ Oups! Je dois m\'améliorer!',
        question_male_female: 'Cette personne est-elle un homme?',
        question_alive: 'Cette personne est-elle toujours vivante?',
        question_ancient: 'Cette personne a-t-elle vécu dans l\'antiquité (avant 500)?',
        question_medieval: 'Cette personne a-t-elle vécu au Moyen Âge (500-1500)?',
        question_modern: 'Cette personne vient-elle de l\'ère moderne (1800 onwards)?',
        question_contemporary: 'Cette personne vient-elle de l\'ère contemporaine (1950)?',
        question_politician: 'Cette personne est-elle politicienne ou leader?',
        question_scientist: 'Cette personne est-elle scientifique ou inventrice?',
        question_artist: 'Cette personne est-elle artiste ou figure culturelle?',
        question_athlete: 'Cette personne est-elle athlète ou figure sportive?',
        question_entertainer: 'Cette personne est-elle divertisseur ou actrice?',
        question_military: 'Cette personne est-elle connue pour ses exploits militaires?',
        question_philosopher: 'Cette personne est-elle philosophe ou figure religieuse?',
        question_western: 'Cette personne est-elle surtout connue en histoire occidentale?',
        question_eastern: 'Cette personne est-elle surtout connue en histoire orientale?',
        question_violent: 'Cette personne était-elle connue pour la violence?',
        question_peaceful: 'Cette personne était-elle connue pour la paix?',
        question_inventor: 'Cette personne a-t-elle inventé quelque chose de significatif?',
        question_writer: 'Cette personne est-elle surtout connue comme écrivain?',
        question_musician: 'Cette personne est-elle surtout connue comme musicien?',
    },
    ar: {
        welcome_title: 'فكر في شخص مشهور',
        welcome_subtitle: 'هل يمكن لذكائنا الاصطناعي تخمين من تفكر فيه؟',
        welcome_category: 'اختر الفئة (اختياري):',
        welcome_category_all: 'جميع الفئات',
        welcome_category_politics: 'السياسة والقيادة',
        welcome_category_science: 'العلم والابتكار',
        welcome_category_arts: 'الفنون والثقافة',
        welcome_category_sports: 'الرياضة والألعاب الرياضية',
        welcome_category_entertainment: 'الترفيه',
        welcome_category_military: 'العسكرية والحروب',
        welcome_category_religion: 'الدين والفلسفة',
        welcome_start: 'ابدأ اللعبة',
        stats_played: 'الألعاب التي تم لعبها',
        stats_correct: 'الإجابات الصحيحة',
        stats_rate: 'معدل النجاح',
        stats_avg: 'متوسط الدقة',
        stats_title: 'إحصائياتك',
        game_answer_yes: 'نعم',
        game_answer_no: 'لا',
        game_answer_maybe: 'ربما',
        game_answer_dk: 'لا أعرف',
        game_skip: 'تخطي',
        game_possible: 'ممكن',
        result_title: 'هذا الشخص هو...',
        result_correct: 'صحيح!',
        result_incorrect: 'خطأ',
        result_play_again: 'العب مرة أخرى',
        result_home: 'الصفحة الرئيسية',
        feedback_amazing: '🎯 مذهل! لقد خمنت بشكل مثالي!',
        feedback_close: '👏 قريب جدا! تقريبا مثالي!',
        feedback_almost: '🤔 اقتراب أكثر... ليس سيئا!',
        feedback_lucky: '😅 تخمين محظوظ... سأفعل أفضل!',
        feedback_missed: '❌ عذرا! يجب أن أتحسن!',
        question_male_female: 'هل هذا الشخص ذكر؟',
        question_alive: 'هل هذا الشخص لا يزال على قيد الحياة؟',
        question_ancient: 'هل عاش هذا الشخص في العصور القديمة (قبل 500)؟',
        question_medieval: 'هل عاش هذا الشخص في العصور الوسطى (500-1500)؟',
        question_modern: 'هل هذا الشخص من العصر الحديث (1800 وما بعده)؟',
        question_contemporary: 'هل هذا الشخص من العصر المعاصر (1950 وما بعده)؟',
        question_politician: 'هل هذا الشخص سياسي أو قائد؟',
        question_scientist: 'هل هذا الشخص عالم أو مخترع؟',
        question_artist: 'هل هذا الشخص فنان أو شخصية ثقافية؟',
        question_athlete: 'هل هذا الشخص رياضي أو شخصية رياضية؟',
        question_entertainer: 'هل هذا الشخص ممثل أو شخصية ترفيهية؟',
        question_military: 'هل هذا الشخص معروف بإنجازات عسكرية؟',
        question_philosopher: 'هل هذا الشخص فيلسوف أو شخصية دينية؟',
        question_western: 'هل هذا الشخص معروف بشكل أساسي في التاريخ الغربي؟',
        question_eastern: 'هل هذا الشخص معروف بشكل أساسي في التاريخ الشرقي؟',
        question_violent: 'هل كان هذا الشخص معروفا بالعنف؟',
        question_peaceful: 'هل كان هذا الشخص معروفا بالسلام؟',
        question_inventor: 'هل اخترع هذا الشخص شيئا مهما؟',
        question_writer: 'هل هذا الشخص معروف بشكل أساسي ككاتب؟',
        question_musician: 'هل هذا الشخص معروف بشكل أساسي كموسيقار؟',
    }
};

// Get translation string
function t(key, language) {
    return (translations[language] && translations[language][key]) || key;
}

// Initialize language based on browser preference
function initializeLanguage() {
    let savedLang = localStorage.getItem('selectedLanguage');
    if (!savedLang) {
        const browserLang = navigator.language.split('-')[0];
        savedLang = (browserLang === 'fr' || browserLang === 'ar') ? browserLang : 'en';
    }
    setCurrentLanguage(savedLang);
    document.documentElement.lang = savedLang;
    if (savedLang === 'ar') {
        document.documentElement.dir = 'rtl';
    }
    return savedLang;
}

// Set current language
function setCurrentLanguage(lang) {
    localStorage.setItem('selectedLanguage', lang);
    document.documentElement.lang = lang;
    if (lang === 'ar') {
        document.documentElement.dir = 'rtl';
    } else {
        document.documentElement.dir = 'ltr';
    }
    return lang;
}
