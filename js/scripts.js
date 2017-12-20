function specGen() {
  var specArray = ["Human","Vulcan", "Klingon","Betazoid", "Trill", "Joined Trill", "Bajoran", "Cardassian", "Freed Borg drone"]
  var specNum = Math.floor(Math.random() * specArray.length);
  var species = specArray[specNum];
  return species;
}

function genderGen() {
  var genderArray = ["Male","Male", "Male", "Male", "Male", "Female", "Female", "Female", "Female", "Female", "Nonbinary",];
  var genderNum = Math.floor(Math.random() * genderArray.length);
  var gender = genderArray[genderNum];
  return gender;
}

function ageGen() {
  if (species === "Human" || species === "Betazoid" || species === "Trill" || species === "Bajoran" || species === "Cardassian" || species === "Freed Borg drone") {
    var ageNum = Math.floor(Math.random() * 30);
    var age = ageNum + 20;
    return age;
  } else if (species === "Vulcan") {
    var ageNum = Math.floor(Math.random() * 90);
    var age = ageNum + 20;
    return age;
  } else if (species === "Klingon") {
    var ageNum = Math.floor(Math.random() * 30);
    var age = ageNum + 20;
    return age;
  } else if (species === "Joined Trill"){
    var age1Num = Math.floor(Math.random() * 30);
    var age2Num = Math.floor(Math.random() * 550);
    var age = age1Num + 20 + " (host), "+ age2Num + " (symbiont)";
    return age;
  }
}

function rankGen() {
  var rankArray = ["Crewman", "Petty Officer","Chief Petty Officer", "Senior Chief Petty Officer", "Master Chief Petty Officer", "Ensign",  "Lieutenant", "Lieutenant Commander", "Commander", "Captain", "Commodore", "Rear Admiral", "Vice Admiral", "Admiral",]
  var rankNum = Math.floor(Math.random() * rankArray.length);
  var rank = rankArray[rankNum];
  return rank;
}

function skinGen() {
  var skinArray = ["pale", "brown", "dark",]
  var skinNum = Math.floor(Math.random() * skinArray.length);
  var skin = skinArray[skinNum]
  return skin;
}

function eyeGen() {
  if (species === "Betazoid"){
    eye = "black";
  } else {
    if (skin === "pale") {
      var eyeArray = ["blue", "green", "grey", "brown", "dark brown", "hazel",]
      var eyeNum = Math.floor(Math.random() * eyeArray.length);
      var eye =  eyeArray[eyeNum]
      return eye;
    } else {
      var eyeArray = ["blue", "green", "grey", "brown", "brown", "brown", "brown", "brown", "dark brown","dark brown", "dark brown", "dark brown", "dark brown", "dark brown","dark brown", "hazel",]
      var eyeNum = Math.floor(Math.random() * eyeArray.length);
      var eye =  eyeArray[eyeNum]
      return eye;
    }
  }
}

function posGen(){
  if (rank === "Lieutenant" || rank === "Lieutenant Commander" || rank === "Commander") {
    posArray = ["Chief Medical Officer", "Chief Science Officer", "Chief of Engineering", "Chief of Operations", "First officer", "Ship's counselor", "Chief of Communications"]
    var posNum = Math.floor(Math.random() * posArray.length);
    var pos = posArray[posNum];
    return pos;
  } else if (rank === "Captain") {
    return "Starship captain";
  } else if (rank === "Commodore" || rank === "Rear Admiral" || rank === "Vice Admiral" || rank === "Admiral"){
    return "Starfleet command";
  } else {
    var posArray = ["Engineering", "Medical", "Science", "Operations", "Communications"];
    var posNum = Math.floor(Math.random() * posArray.length);
    var pos = posArray[posNum];
    return pos;
  }
}

function persGen (){
  var persArray = ["Brilliant", "Active", "Adaptable", "Agreeable", "Amiable", "Benevolent", "Calm", "Caring", "Challenging", "Charismatic", "Cheerful", "Charming", "Clever", "Compassionate", "Conscientious", "Considerate", "Contemplative", "Courageous", "Courteous", "Creative", "Cultured", "Curious", "Daring", "Debonair", "Dedicated", "Dignified", "Disciplines", "Dramatic", "Dutiful", "Earnest", "Efficient", "Elegant", "Empathetic", "Energetic", "Enthusiastic", "Faithful", "Friendly", "Fun-loving", "Gallant", "Generous", "Gentle", "Good-natured", "Gracious", "Hearty", "Helpful", "Honest", "Honorable", "Humble", "Humorous", "Idealistic", "Imaginative", "Individualistic", "Knowledgeable", "Logical", "Loyal", "Methodical", "Modest", "Neat", "Optimistic", "Orderly", "Passionate","Patient", "Peaceful", "Perceptive", "Perfectionist", "Persuasive", "Playful", "Polished", "Principled", "Protective", "Prudent", "Rational", "Relaxed", "Responsible", "Romantic", "Sage", "Scholarly", "Selfless", "Sensitive", "Sentimental", "Serious", "Shrewd", "Sociable", "Spontaneous", "Steadfast", "Stoic", "Studious", "Suave", "Trusting", "Vivacious", "Wise", "Witty", "Absent-minded", "Ambitious", "Artful", "Breezy", "Businesslike", "Casual", "Competitive", "Confidential", "Crisp", "Determined", "Dry", "Emotional", "Enigmatic", "Formal","Guileless", "Impassive", "Impressionable", "Intense", "Irreverent", "Mellow", "Old-fashioned", "Placid", "Proud", "Quiet", "Reserved", "Restrained", "Retiring", "Sarcastic", "Self-conscious", "Solemn", "Stern", "Strict", "Stubborn",]
  var persNum = Math.floor(Math.random() * persArray.length);
  var pers = persArray[persNum];
  return pers;
}

function hairGen(){
  if (skin === "pale") {
      var hairColorArray = ["Red", "Brown", "Dark brown", "Black", "Blonde", "Dirty blonde", "White", "Grey", "Bald", "Shaved",]
  } else {
    var hairColorArray = ["Brown", "Brown", "Brown", "Dark brown", "Dark brown", "Dark brown", "Black", "Black", "Black", "Grey", "Grey", "Grey", "Bald", "Bald", "Bald", "Shaved", "Shaved", "Shaved", "Red", "Blonde", "Dirty blonde", "White",]
  }
  var hairColorNum = Math.floor(Math.random() * hairColorArray.length);
  var hairColor = hairColorArray[hairColorNum];
  if (hairColor === "Shaved" || hairColor === "Bald") {
    var hairStyle = "head";
  } else {
    var hairStyleArray = ["afro", "beehive", "asymmetric cut", "beehive", "bob", "bowl cut", "braids", "bun","combover", "crew cut", "cropped hair","fauxhawk", "feathered hair", "flattop","mullet", "ponytail","undercut","updo",]
    var hairStyleNum = Math.floor(Math.random() * hairStyleArray.length);
    var hairStyle = hairStyleArray[hairStyleNum];
  }
  var hair = hairColor + " " + hairStyle;
  return hair;
}

function nameGen(){
  if (species === "Vulcan" && gender === "Female") {
    var syl1Array = ["T'P","T'P","T'P","T'L","T'V","V'L", "T'H","T'Sh", "T'Kl","T'K","T'M",];
    var syl1Num = Math.floor(Math.random() * syl1Array.length);
    var syl2Array = ["ar","eel","es","aas","eni","ir","aal","an", "ara","au", "el","enna","ol", "ring","anik","atak","as","ain"];
    var syl2Num = Math.floor(Math.random() * syl2Array.length);
    var name = syl1Array[syl1Num] + syl2Array[syl2Num];
    return name;
  } else if (species === "Vulcan" && gender === "Male") {
    var syl1Array = ["Sp","St","S","Sur","Tuv","Syb","Syr","Sep","Sit", "Sol","Fal","Haad","Joss","Kin","K","Lor","Mur","Nir","Sar", "Sakk","Sas", "Sat", "Sav","Sel",];
    var syl1Num = Math.floor(Math.random() * syl1Array.length);
    var syl2Array = ["ock","ok", "ek","ak","on","ar","al","or","en","is","oss","ot","oc","ath", "elk",];
    var syl2Num = Math.floor(Math.random() * syl2Array.length);
    var name = syl1Array[syl1Num] + syl2Array[syl2Num];
    return name;
  } else if (species === "Vulcan" && gender === "Nonbinary") {
    var syl1Array = ["T'P","T'P","T'P","T'L","T'V","V'L", "T'H","T'Sh", "T'Kl","T'K","T'M","Sp","St","S","Sur","Tuv","Syb","Syr","Sep","Sit", "Sol","Fal","Haad","Joss","Kin","K","Lor","Mur","Nir","Sar", "Sakk","Sas", "Sat", "Sav","Sel",];
    var syl1Num = Math.floor(Math.random() * syl1Array.length);
    var syl2Array = ["ar","eel","es","aas","eni","ir","aal","an", "ara","au", "el","enna","ol", "ring","anik","atak","as","ain","ock","ok", "ek","ak","on","ar","al","or","en","is","oss","ot","oc","ath", "elk",];
    var syl2Num = Math.floor(Math.random() * syl2Array.length);
    var name = syl1Array[syl1Num] + syl2Array[syl2Num];
    return name;
  } else if (species === "Human") {
    var nationArray = ["England", "Russia", "France","Japan"]
    var nationNum = Math.floor(Math.random() * nationArray.length);
    nation = nationArray[nationNum];
    if (nation === "England") {
      var surArray = ["Johnson","Jackson", "Smith", "Tailor","Brown","Anderson", "Clark", "Wright", "Mitchell", "Thomas", "Rodriguez", "Lopez", "Perez", "Williams", "Lewis", "Hill", "Roberts", "Jones", "White", "Lee", "Scott", "Turner", "Harris", "Walker", "Green", "Phillips", "Davis", "Martin", "Hall", "Adams", "Campbell", "Miller", "Thompson", "Allen", "Baker", "Parker", "Wilson", "Garcia", "Young", "Gonzalez", "Evans", "Moore", "Martinez","Hernandez", "Nelson", "Edwards", "Taylor", "Robinson", "King", "Carter", "Collins",];
      var surNum = Math.floor(Math.random() * surArray.length);
      var surname = surArray[surNum];
      if (gender === "Male") {
        var firstArray = ["Mark","John","Jerry", "James", "Jake", "Benjamin", "Todd", "Scott","Robert", "Luke","David","Christopher", "George", "Ronald", "Richard", "Daniel", "Kenneth", "Anthony", "Charles", "Paul", "Steven", "Kevin", "Michael", "Joseph", "Edward", "Jason", "William", "Thomas", "Brian", "Jeff",];
        var firstNum = Math.floor(Math.random() * firstArray.length);

        var name = firstArray[firstNum] + " " + surArray[surNum];
        return name;
      } else if (gender === "Female") {
        var firstArray = ["Susan", "Deanna","Amelia","Beverly","Jane","Michelle","Katheryn", "Kate","Mary", "Jennifer", "Lisa", "Sandra", "Patricia", "Maria", "Nancy", "Donna", "Laura", "Linda", "Susan", "Karen", "Carol", "Sarah", "Barbara", "Margaret","Betty", "Ruth", "Kimberly", "Elizabeth", "Dorothy", "Helen", "Sharon", "Deborah",];
        var firstNum = Math.floor(Math.random() * firstArray.length);
        var name = firstArray[firstNum] + " " + surArray[surNum];
        return name;
      } else if (gender === "Nonbinary") {
        var firstArray = ["Susan", "Deanna","Amelia","Beverly","Jane","Michelle","Katheryn", "Kate","Mary", "Jennifer", "Lisa", "Sandra", "Patricia", "Maria", "Nancy", "Donna", "Laura", "Linda", "Susan", "Karen", "Carol", "Sarah", "Barbara", "Margaret","Betty", "Ruth", "Kimberly", "Elizabeth", "Dorothy", "Helen", "Sharon", "Deborah", "Mark","John","Jerry", "James", "Jake", "Benjamin", "Todd", "Scott","Robert", "Luke","David","Christopher", "George", "Ronald", "Richard", "Daniel", "Kenneth", "Anthony", "Charles", "Paul", "Steven", "Kevin", "Michael", "Joseph", "Edward", "Jason", "William", "Thomas", "Brian", "Jeff",];
        var firstNum = Math.floor(Math.random() * firstArray.length);
        var name = firstArray[firstNum] + " " + surArray[surNum];
        return name;
      }
  } else if (nation === "Russia") {
    var surArray = ["Ivanov", "Smirnov", "Kuznetsov","Popov", "Vasiliev", "Petrov", "Sokolov", "Mikhailov", "Fedorov", "Morozov", "Volkov", "Alexeev", "Lebedev", "Semenov", "Egorov", "Pavlov", "Kozlov", "Stepanov", "Nikolaev", "Orlov",];
    var surNum = Math.floor(Math.random() * surArray.length);
    var surname = surArray[surNum];
    if (gender === "Male") {
      var firstArray = ["Artem", "Aleksandr", "Maksim", "Ivan", "Mikhail", "Daniil", "Dmitry", "Kirill", "Andrey", "Egor", "Nikita", "Alexey", "Matvey", "Ilya", "Tomofey", "Roman", "Fedor", "Yaroslav", "Vladimir", "Sergey", "Arseny", "Nikolay", "Vladislav", "Gleb", "Konstantin", "Georgiy", "Pavel", "Stepan", "Denis"];
      var firstNum = Math.floor(Math.random() * firstArray.length);
      var patrArray = ["Andreevich","Stepanovich", "Yanovich", "Konstantinovich", "Ilyich", "Vladimovich", "Vladimirovich", "Yanovich", "Dmitrievich", "Ivanovich", "Makorovich", "Tarasovich", "Igorevich", "Nikitovich", "Larionovich", "Yakovich", "Alesnarovich", "Vitalievich", "Makarovich", "Valentinovich",];
      var patrNum = Math.floor(Math.random() * patrArray.length);
      var name = firstArray[firstNum] + " " + patrArray[patrNum] + " " + surArray[surNum];
      return name;
    } else if (gender === "Female") {
      var firstArray = ["Sophia", "Maria", "Anastasia", "Anna", "Daria", "Viktoria", "Elizaveta", "Varvara", "Polina", "Alisa", "Ksenia", "Ekaterina", "Aleksandra", "Veronika", "Arina", "Vasilisa","Valeria", "Milana", "Ulyana", "Yeva","Margarita", "Kristina", "Alena", "Vera", "Taisiya", "Alina", "Kira", "Diana", "Yulia", "Olga",];
      var firstNum = Math.floor(Math.random() * firstArray.length);
      var patrArray = ["Artemievna", "Zakharovna", "Yakovna", "Yevgenievna", "Ruslanovna", "Yevgenievna", "Olegovna", "Pavlovna", "Aleksandrovna", "Romanovna", "Andreevna", "Rodionovna", "Leonidovna", "Semyonovna", "Igorievna", "Vladimovna", "Danilovna", "Zakharovna",];
      var patrNum = Math.floor(Math.random() * patrArray.length);
      var name = firstArray[firstNum] + " " + patrArray[patrNum] + " " + surArray[surNum] + "a";
      return name;
    } else if (gender === "Nonbinary") {
      var firstArray = ["Sophia", "Maria", "Anastasia", "Anna", "Daria", "Viktoria", "Elizaveta", "Varvara", "Polina", "Alisa", "Ksenia", "Ekaterina", "Aleksandra", "Veronika", "Arina", "Vasilisa","Valeria", "Milana", "Ulyana", "Yeva","Margarita", "Kristina", "Alena", "Vera", "Taisiya", "Alina", "Kira", "Diana", "Yulia", "Olga","Artem", "Aleksandr", "Maksim", "Ivan", "Mikhail", "Daniil", "Dmitry", "Kirill", "Andrey", "Egor", "Nikita", "Alexey", "Matvey", "Ilya", "Tomofey", "Roman", "Fedor", "Yaroslav", "Vladimir", "Sergey", "Arseny", "Nikolay", "Vladislav", "Gleb", "Konstantin", "Georgiy", "Pavel", "Stepan", "Denis"];
      var firstNum = Math.floor(Math.random() * firstArray.length);
      var patrArray = ["Artemievna", "Zakharovna", "Yakovna", "Yevgenievna", "Ruslanovna", "Yevgenievna", "Olegovna", "Pavlovna", "Aleksandrovna", "Romanovna", "Andreevna", "Rodionovna", "Leonidovna", "Semyonovna", "Igorievna", "Vladimovna", "Danilovna", "Zakharovna",];
      var patrNum = Math.floor(Math.random() * patrArray.length);
      var name = firstArray[firstNum] + " " + patrArray[patrNum] + " " + surArray[surNum];
      return name;
    }
  } else if (nation === "France") {
    var surArray = ["Martin", "Bernard", "Duboi", "Thomas", "Robert", "Richard", "Petit", "Durand", "Leroy", "Moreau", "Simon", "Laurent", "Michel", "Garcia", "David", "Betrand","Roux", "Vincent", "Fournier", "Morel", "Girard", "Andre", "Lefevre", "Mercier", "Dupont", "Lambert", "Bonnet", "Francois", "Martinez", "Legrand", "Garnier", "Faure", "Rousseau", "Blanc", "Guerin", "Miller", "Henry", "Roussel", "Nicolas","Perrin", "Morin", "Mathieu", "Clement", "Gauthier", "Dumont", "Lopez", "Fontaine", "Chevalier", "Robin", "Masson", "Sanchez", "Gerard", "Nguyen", "Boyer", "Denis", "Lemaire", "Duval", "Gautier", "Roger", "Roche", "Roy", "Noel"];
    var surNum = Math.floor(Math.random() * surArray.length);
    var surname = surArray[surNum];
    if (gender === "Male") {
      var firstArray = ["Nathan", "Lucas", "Enzo", "Louis", "Hugo", "Gabriel", "Ethan", "Mathis", "Jules", "Arthur", "Tom", "Noah", "Maxime", "Yanis", "Adam", "Thomas", "Leo", "Paul", "Evan", "Nolan", "Axel", "Antoine","Timeo", "Mael", "Raphael", "Alexandre", "Theo", "Sacha", "Noa", "Baptiste", "Maxence", "Clement", "Mohamed", "Matheo", "Gabin", "Aexis", "Rayan", "Quentin", "Valentin", "Noe", "Mathys", "Victor", "Samuel", "Kylian", "Martin", "Romain",];
      var firstNum = Math.floor(Math.random() * firstArray.length);
      var name = firstArray[firstNum] + " " + surArray[surNum];
      return name;
    } else if (gender === "Female") {
      var firstArray = ["Emma", "Manon", "Lola", "Jade", "Camille", "Sarah", "Louise", "Lilou", "Lea", "Clara", "Chloe", "Eva", "Lina", "Ines", "Louna", "Romane", "Maelys", "Juliette", "Lucie", "Zoe", "Ambre", "Alice", "Lou", "Lena","Lisa", "Jeanne", "Louane", "Ines", "Mathilde", "Charlotte", "Marie", "Anna", "Nina", "Anais", "Pauline", "Lana", "Laura", "Lily", "Alicia", "Julie", "Julia", "Rose", "Margaux", "Noemie", "Luna","Elise", "Margot", "Elisa", "Zoe", "Elsa", "Lena", "Clemence", "Justine", "Oceane", "Celia", "Agatha", "Inaya", "Yasmine", "Emilie", "Faustine", "Maelle", "Maeva", "Leonie", "Gabrielle",];
      var firstNum = Math.floor(Math.random() * firstArray.length);
      var name = firstArray[firstNum] + " " + surArray[surNum];
      return name;
    } else if (gender === "Nonbinary") {
      var firstArray = ["Emma", "Manon", "Lola", "Jade", "Camille", "Sarah", "Louise", "Lilou", "Lea", "Clara", "Chloe", "Eva", "Lina", "Ines", "Louna", "Romane", "Maelys", "Juliette", "Lucie", "Zoe", "Ambre", "Alice", "Lou", "Lena","Lisa", "Jeanne", "Louane", "Ines", "Mathilde", "Charlotte", "Marie", "Anna", "Nina", "Anais", "Pauline", "Lana", "Laura", "Lily", "Alicia", "Julie", "Julia", "Rose", "Margaux", "Noemie", "Luna","Elise", "Margot", "Elisa", "Zoe", "Elsa", "Lena", "Clemence", "Justine", "Oceane", "Celia", "Agatha", "Inaya", "Yasmine", "Emilie", "Faustine", "Maelle", "Maeva", "Leonie", "Gabrielle","Nathan", "Lucas", "Enzo", "Louis", "Hugo", "Gabriel", "Ethan", "Mathis", "Jules", "Arthur", "Tom", "Noah", "Maxime", "Yanis", "Adam", "Thomas", "Leo", "Paul", "Evan", "Nolan", "Axel", "Antoine","Timeo", "Mael", "Raphael", "Alexandre", "Theo", "Sacha", "Noa", "Baptiste", "Maxence", "Clement", "Mohamed", "Matheo", "Gabin", "Aexis", "Rayan", "Quentin", "Valentin", "Noe", "Mathys", "Victor", "Samuel", "Kylian", "Martin", "Romain",];
      var firstNum = Math.floor(Math.random() * firstArray.length);
      var name = firstArray[firstNum] + " " + surArray[surNum];
      return name;
    }
  } else if (nation === "Japan") {
    var surArray = ["Sato", "Suzuki", "Takahashi", "Tanaka", "Watanabe", "Ito", "Yamamoto", "Nakamura", "Kobayashi", "Kato", "Yoshida", "Yamada", "Sasaki", "Yamaguchi", "Saito", "Matsumoto", "Inoue", "Kimura", "Hayashi", "Shimizu", "Yamazaki", "Mori", "Abe", "Ikeda", "Hashimoto", "Yamashita", "Ishikawa", "Nakajima", "Maed", "Fujita", "Ogawa", "Goto", "Okada", "Hasegawa", "Murakami", "Kondo", "Ishii", "Sakamoto", "Endo", "Aoki", "Fujii", "Nishimura", "Fukuda", "Ota", "Miura", "Fujiwara", "Okamoto", "Matsuda", "Nakagawa", "Nakano", "Harada", "Ono", "Tamura", "Takeuchi", "Kaneko", "Wada", "Nakayama", "Ishida", "Ueda", "Morita", "Hara", "Shibata", "Sakai", "Kudo", "Yokoyama", "Miyazaki", "Miyamoto", "Uchida", "Takagi", "Ando", "Taniguchi", "Ohno", "Maruyama", "Imai", "Takada", "Fujimoto", "Takeda"];
    var surNum = Math.floor(Math.random() * surArray.length);
    var surname = surArray[surNum];
    if (gender === "Male") {
      var firstArray = ["Haruto", "Yuto", "Sota","Yuki", "Hayato", "Haruki", "Ryusei", "Koki", "Sora", "Sosuke", "Riku", "Soma", "Ryota", "Rui", "Kaito", "Haru", "Kota", "Yusei", "Yuito", "Yuma", "Ren", "Takumi", "Minato", "Eita", "Shota", "Daiki", "Hiroto", "Kosei", "Takeru", "Hinata", "Toma", "Manato", "Ryuki", "Rikuto", "Aoto", "Ibuki", "Tatsuki", "Haruma", "Yamato", "Ryuto", "Taisei","Yuta", "Itsuki", "Soshi", "Taiga", "Kosuke", "Shoma", "Yushin", "Ryuga", "Ryo", "Rento",];
      var firstNum = Math.floor(Math.random() * firstArray.length);
      var name = firstArray[firstNum] + " " + surname;
      return name;
    } else if (gender === "Female") {
      var firstArray = ["Yui", "Rio", "Yuna", "Hina", "Koharu", "Hinata", "Mei", "Mio", "Saki", "Miyu", "Kokona", "Haruka", "Rin", "Akari", "Yuna", "Honoka", "Momoka", "Aoi", "Ichika", "Sakura", "Himari", "Yume", "Airi", "Sara", "Nanami", "Ayaka", "Yuka", "Riko", "Noa", "Mao", "Yua", "Ayane", "Hiyori", "Misaki", "Yuzuki", "Rina", "Sana", "Ria", "Ruka", "Kanon", "Kaho", "Hana", "Karin", "Risa", "Shiori", "Fuka", "Rino", "Anna", "Natsuki", "Nana", "Reina",];
      var firstNum = Math.floor(Math.random() * firstArray.length);
      var name = firstArray[firstNum] + " " + surname;
      return name;
    } else if (gender === "Nonbinary") {
      var firstArray = ["Haruto", "Yuto", "Sota","Yuki", "Hayato", "Haruki", "Ryusei", "Koki", "Sora", "Sosuke", "Riku", "Soma", "Ryota", "Rui", "Kaito", "Haru", "Kota", "Yusei", "Yuito", "Yuma", "Ren", "Takumi", "Minato", "Eita", "Shota", "Daiki", "Hiroto", "Kosei", "Takeru", "Hinata", "Toma", "Manato", "Ryuki", "Rikuto", "Aoto", "Ibuki", "Tatsuki", "Haruma", "Yamato", "Ryuto", "Taisei","Yuta", "Itsuki", "Soshi", "Taiga", "Kosuke", "Shoma", "Yushin", "Ryuga", "Ryo", "Rento", "Yui", "Rio", "Yuna", "Hina", "Koharu", "Hinata", "Mei", "Mio", "Saki", "Miyu", "Kokona", "Haruka", "Rin", "Akari", "Yuna", "Honoka", "Momoka", "Aoi", "Ichika", "Sakura", "Himari", "Yume", "Airi", "Sara", "Nanami", "Ayaka", "Yuka", "Riko", "Noa", "Mao", "Yua", "Ayane", "Hiyori", "Misaki", "Yuzuki", "Rina", "Sana", "Ria", "Ruka", "Kanon", "Kaho", "Hana", "Karin", "Risa", "Shiori", "Fuka", "Rino", "Anna", "Natsuki", "Nana", "Reina",];
      var firstNum = Math.floor(Math.random() * firstArray.length);
      var name = firstArray[firstNum] + " " + surname;
      return name;
    }
  }
} else if (species === "Klingon") {
  var syl1Array = ["W", "R", "K'R", "K'T", "Gow", "Mart", "M", "G", "Kr","K", "Br", "G'tr", "Kur", "V", "Mol", "Mow", "T'Gr","Tor","Dur","T","Gr","Kat",];
  var syl1Num = Math.floor(Math.random() * syl1Array.length);
  var syl1BNum = Math.floor(Math.random() * syl1Array.length);
  var syl2Array = ["orf", "org", "uge","oth", "ok",  "ot","ex","ulhe", "aang", "az","agh", "ogh", "oqh","oggra", "or", "orkka", "ath","al", "as", "afk"];
  var syl2Num = Math.floor(Math.random() * syl2Array.length);
  var syl2BNum = Math.floor(Math.random() * syl2Array.length);
  if (gender === "Male") {
    var name = syl1Array[syl1Num] + syl2Array[syl2Num] + ", son of " + syl1Array[syl1BNum] + syl2Array[syl2BNum];
    return name;
  } else if (gender === "Female") {
    var name = syl1Array[syl1Num] + syl2Array[syl2Num] + ", daughter of " + syl1Array[syl1BNum] + syl2Array[syl2BNum];
    return name;
  } else if (gender === "Nonbinary") {
    var name = syl1Array[syl1Num] + syl2Array[syl2Num] + ", child of " + syl1Array[syl1BNum] + syl2Array[syl2BNum];
    return name;
  }
} else if (species === "Betazoid"){
  if (gender === "Female") {
    var syl1Array = ["Cha", "Lwa", "Illi", "Ada", "Bya", "Pera", "Lano","Eu", "Mry", "Dre", "Mola","Yula"];
    var syl1Num = Math.floor(Math.random() * syl1Array.length);
    var syl2Array = ["xaza", "xana", "rra", "na", "xthar", "teca", "lan", "shara", "axa", "nnela", "ranna",];
    var syl2Num = Math.floor(Math.random() * syl2Array.length);
    var sur1Array = ["T","D","F","G","K","Pr","Th","Tr","V", "Dy","L", "X",]
    var sur1Num = Math.floor(Math.random() * sur1Array.length);
    var sur2Array = ["el", "eo", "an", "ort", "av", "if","on", "ir","ex"]
    var sur2Num = Math.floor(Math.random() * sur2Array.length);
    var name = syl1Array[syl1Num] + syl2Array[syl2Num] + " " + sur1Array[sur1Num] + sur2Array[sur2Num];
    return name;
  } else if (gender === "Male") {
    var syl1Array = ["Cha", "Lwa", "Illi", "Ada", "Bya", "Pera", "Lano","Eu", "Mry", "Dre", "Mola","Yula"];
    var syl1Num = Math.floor(Math.random() * syl1Array.length);
    var syl2Array = ["xazen", "xanum", "rran", "nar", "xthar", "tecan", "lan", "sharin", "axal", "nnelas", "rannin"];
    var syl2Num = Math.floor(Math.random() * syl2Array.length);
    var sur1Array = ["T","D","F","G","K","Pr","Th","Tr","V", "Dy","L", "X",]
    var sur1Num = Math.floor(Math.random() * sur1Array.length);
    var sur2Array = ["el", "eo", "an", "ort", "av", "if","on", "ir","ex"]
    var sur2Num = Math.floor(Math.random() * sur2Array.length);
    var name = syl1Array[syl1Num] + syl2Array[syl2Num] + " " + sur1Array[sur1Num] + sur2Array[sur2Num];
    return name;
  } else if (gender === "Nonbinary") {
    var syl1Array = ["Cha", "Lwa", "Illi", "Ada", "Bya", "Pera", "Lano","Eu", "Mry", "Dre", "Mola","Yula"];
    var syl1Num = Math.floor(Math.random() * syl1Array.length);
    var syl2Array = ["xazen", "xanum", "rran", "nar", "xthar", "tecan", "lan", "sharin", "axal", "nnelas", "rannin", "xaza", "xana", "rra", "na", "xthar", "teca", "lan", "shara", "axa", "nnela", "ranna",];
    var syl2Num = Math.floor(Math.random() * syl2Array.length);
    var sur1Array = ["T","D","F","G","K","Pr","Th","Tr","V", "Dy","L", "X",]
    var sur1Num = Math.floor(Math.random() * sur1Array.length);
    var sur2Array = ["el", "eo", "an", "ort", "av", "if","on", "ir","ex"]
    var sur2Num = Math.floor(Math.random() * sur2Array.length);
    var name = syl1Array[syl1Num] + syl2Array[syl2Num] + " " + sur1Array[sur1Num] + sur2Array[sur2Num];
    return name;
  }
} else if (species === "Trill") {
  var syl1Array = ["Aud","Cur", "Ez", "Jad", "Lor", "Lel", "Deil", "El", "Tau", "Jan", "Nil", "Jar", "Zir", "Brex", "Mad", "Meh", ];
  var syl1Num = Math.floor(Math.random() * syl1Array.length);
  var syl2Array = ["ri", "zia", "eta", "a", "as", "ista", "lin", "ra", "ani", "em","anne","en", "za","ta"];
  var syl2Num = Math.floor(Math.random() * syl2Array.length);
  var name = syl1Array[syl1Num] + syl2Array[syl2Num];
  return name;
} else if (species === "Joined Trill") {
  var syl1Array = ["Aud","Cur", "Ez", "Jad", "Lor", "Lel", "Deil", "El", "Tau", "Jan", "Nil", "Jar", "Zir", "Brex", "Mad", "Meh", ];
  var syl1Num = Math.floor(Math.random() * syl1Array.length);
  var syl2Array = ["ri", "zia", "eta", "a", "as", "ista", "lin", "ra", "ani", "em","anne","en", "za","ta"];
  var syl2Num = Math.floor(Math.random() * syl2Array.length);
  var sur1Array = ["B","Br", "Cl", "C", "D","F","G", "Gr", "K", "Ker", "Kal","Lex","M","N","Od","Per", ]
  var sur1Num = Math.floor(Math.random() * sur1Array.length);
  var sur2Array = ["ok", "al", "en", "yl", "if", "ax","ev","al", "ard", "ahn", "on", "az", "an", "ar",]
  var sur2Num = Math.floor(Math.random() * sur2Array.length);
  var name = syl1Array[syl1Num] + syl2Array[syl2Num] + " " + sur1Array[sur1Num] + sur2Array[sur2Num];
  return name;
} else if (species === "Bajoran") {
  var syl1Array = ["Ant", "Trom", "V", "El", "Ren", "Fal","Mer", "Ner","P","R","Tab","Kob","Lar", "G","Tal","Ad"];
  var syl1Num = Math.floor(Math.random() * syl1Array.length);
  var syl2Array = ["os", "ac", "ek", "em", "or","u", "ys", "ohl", "eon","an", "en","ale","ia", "ami",];
  var syl2Num = Math.floor(Math.random() * syl2Array.length);
  var sur1Array = ["Alen", "Bar", "Ben", "Dek", "Far", "Kir","Lath", "Lo","Mar", "R"]
  var sur1Num = Math.floor(Math.random() * sur1Array.length);
  var sur2Array = ["is", "eil", "ten", "on", "en","a","rit", "at", "o"]
  var sur2Num = Math.floor(Math.random() * sur2Array.length);
  var name = sur1Array[sur1Num] + sur2Array[sur2Num] + " " + syl1Array[syl1Num] + syl2Array[syl2Num] ;
  return name;
} else if (species === "Cardassian") {
  var syl1Array = ["El","Ul", "Korb", "Ill","Nat", "Nan","Aam", "Mil", "Dam", "Dan", "Duk", "Ev", "Gar","Ghem","Had","Kam", "Mad", "Mav", "Mac", "Mek","Mos", "Nad","Oc","Parm", "Pir",];
  var syl1Num = Math.floor(Math.random() * syl1Array.length);
  var syl2Num = Math.floor(Math.random() * syl1Array.length);
  var syl2Array = ["ani", "im","ian", "eny","in", "ar", "at","ek","ak", "or","red", "et","ett",];
  var syl3Num = Math.floor(Math.random() * syl2Array.length);
  var syl4Num = Math.floor(Math.random() * syl2Array.length);
  if (gender === "Female") {
    var name = syl1Array[syl1Num] + syl2Array[syl3Num] + "a" + " " + syl1Array[syl2Num] + syl2Array[syl4Num];
  } else {
    var name = syl1Array[syl1Num] + syl2Array[syl3Num] + " " + syl1Array[syl2Num] + syl2Array[syl4Num];
  }
  return name;
} else if (species === "Freed Borg drone") {
  var syl1Array = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven",]
  var syl2Array = ["Twelve", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven",]
  var syl2Num = Math.floor(Math.random() * syl1Array.length);
  var syl1Num = Math.floor(Math.random() * syl2Num);
  var name = syl1Array[syl1Num] + " of " + syl2Array[syl2Num];
  return name;
}
}


$(document).ready(function() {
  $('.add-button').click(function(){
    event.preventDefault();
    species = specGen();
    gender = genderGen();
    rank = rankGen();
    name = rank + " " + nameGen();
    age = ageGen();
    pos = posGen();
    pers = persGen();
    hair = hairGen();
    skin = skinGen();
    eye = eyeGen();
    $("#name").text(name);
    $("#species").text(species);
    $("#gender").text(gender);
    $("#age").text(age);
    $("#position").text(pos);
    $("#personality").text(pers);
    $("#skin").text(skin);
    $("#hair").text(hair);
    $("#eye").text(eye);
    $(".charbox").show();
  });

});
