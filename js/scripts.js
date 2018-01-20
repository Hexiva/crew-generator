function specGen() {
  var specArray = ["Half",  "Vulcan", "Klingon","Betazoid", "Trill", "Bajoran", "Cardassian","Joined Trill", "Human", "Freed Borg drone"]
  var specNum = Math.floor(Math.random() * specArray.length);
  var species = specArray[specNum];
  if (species === "Half") {
    var halfArray = ["Vulcan", "Klingon","Betazoid", "Trill", "Bajoran", "Cardassian",]
    var halfNum = Math.floor(Math.random() * halfArray.length);

    var ifHuman = Math.floor(Math.random() * 5);
    if (ifHuman === 0) {
      var half2Num = Math.floor(Math.random() * halfArray.length);
      if (half2Num != halfNum) {
        species = "Half " + halfArray[halfNum] + ", half " + halfArray[half2Num];
      } else {
        species = "Half Bajoran, half Cardassian";
      }
    } else if (ifHuman === 1) {
      species = "Half Bajoran, half Cardassian";
    } else {
      species = "Half human, half " + halfArray[halfNum];
    }
  }
  return species;
}

function hobGen() {
  var hobArray = ["Sports", "Reading", "Holodeck", "Gymnastics", "Drawing", "Painting", "Digitial art", "Illustration", "Drawing with pastels", "Sketching", "Sketching with charcoal", "Oil painting", "Drawing with markers", "Sculpture", "Writing",  "Journalling", "Chess", "3D Chess", "Go", "Poker", "Backgammon", "Playing bridge", "Mahjong", "Dominoes", "Gardening", "Cooking", "Calligraphy", "Slight of hand", "Pets","Instrument", "Music", "Puzzles", "Holo-photography","Collecting","Astronomy", "Bodybuilding", "Weightlifting", "Debating", "Building models","Fashion"]
  var hobNum = Math.floor(Math.random() * hobArray.length);
  var hobby = hobArray[hobNum];
  if (hobby === "Sports") {
    var sportsArray = ["Baseball", "Football", "Soccer", "Archery", "Fencing", "Volleyball", "Rock-climbing", "Cricket", "Horse-riding", "Hockey", "Golf", "Martial arts", "Bowling", "Ice skating", "Swimming", "Tennis",];
    var sportsNum = Math.floor(Math.random() * sportsArray.length);
    hobby = sportsArray[sportsNum];
  } else if (hobby === "Reading") {
    var readArray = ["Reading science fiction novels", "Reading classic literature", "Reading scientific papers", "Reading adventure novels", "Reading philosophy", "Reading historical fiction", "Reading history books", "Reading books on advanced mathematics", "Reading books on popular science", "Reading books on computer science", "Reading books on theology", "Reading books on psychology", "Reading books on language", "Reading books on technology", "Reading books on art", "Reading romance novels", "Reading mystery novels", "Reading poetry",];
    var readNum = Math.floor(Math.random() * readArray.length);
    hobby = readArray[readNum];
  } else if (hobby === "Holodeck") {
    var holoArray = ["Playing historical programs in the holodeck", "Playing science fiction programs in the holodeck", "Playing romantic programs in the holodeck","Creating holodeck programs", "Playing martial arts programs in the holodeck", "Playing mystery programs in the holodeck", "Holodeck puzzles", "Playing adventure programs in the holodeck",]
    var holoNum = Math.floor(Math.random() * holoArray.length);
    hobby = holoArray[holoNum];
  } else if (hobby === "Sculpture") {
    var sculptArray = ["Wood carving", "Clay scultping", "Making pottery", "Sculpting stone", "Holo-sculpture", "Metal-working", "Glass-blowing"];
    var sculptNum = Math.floor(Math.random() * sculptArray.length);
    hobby = sculptArray[sculptNum];
  } else if (hobby === "Writing") {
    var writeArray = ["Writing poetry", "Writing science fiction", "Writing romance novels", "Writing adventure stories", "Writing historical fiction", "Writing mystery novels"];
    var writeNum = Math.floor(Math.random() * writeArray.length);
    hobby = writeArray[writeNum];
  } else if (hobby === "Pets") {
    var petArray = ["cats", "dogs", "snakes", "insects", "lizards", "turtles", "fish", "exotic fish", "ferrets", "rats", "ferrets", "rabbits", "gerbils", "birds", "snails", "frogs", "tarantulas", "hamsters","sehlats","targs", "tribbles"];
    var petNum = Math.floor(Math.random() * petArray.length);
    var pet = petArray[petNum];
    hobby = "Keeping " + pet;
  } else if (hobby === "Instrument") {
    var instArray = ["violin", "trumpet", "trombone", "piano", "guitar", "ukelele", "xylophone", "marimba", "drums", "accordion", "bagpipes", "bassoon", "clarinet", "French horn", "harmonica", "ocarina", "piccolo", "pipe organ", "fleet", "tuba", "organ", "saxophone", "harp", "banjo", "harpsichord", "theremin","Singing",];
    var instNum = Math.floor(Math.random() * instArray.length);
    var instrument = instArray[instNum];
    if (instrument === "Singing") {
      hobby = "Singing"
    } else {
      hobby = "Playing the " + instrument;
    }
  } else if (hobby === "Music") {
    var musicArray = ["metal", "symphonic metal", "classical music", "electronic music", "folk music", "rock music", "classic rock", "rap", "blues", "jazz", "reggae","popular music", "opera", "punk rock", "musicals", "Klingon opera", "Andorian blues",];
    var musicNum = Math.floor(Math.random() * musicArray.length);
    hobby = "Listening to " + musicArray[musicNum];
  } else if (hobby === "Collecting") {
    var collectArray = ["antique books", "antiques", "cards", "art", "coins","fossils", "stamps","rocks", "gems", "seashells",]
    var collectNum = Math.floor(Math.random() * collectArray.length);
    hobby = "Collecting " + collectArray[collectNum];
  }
return hobby;
}

function genderGen() {
  var genderArray = ["Male","Male", "Male", "Male", "Male", "Female", "Female", "Female", "Female", "Female", "Nonbinary",];
  var genderNum = Math.floor(Math.random() * genderArray.length);
  var gender = genderArray[genderNum];
  return gender;
}

function ageGen() {
  var half = species.split(",");
  if (species === "Human" || species === "Betazoid" || species === "Trill" || species === "Bajoran" || species === "Cardassian" || species === "Freed Borg drone" || species === "Half human, half Bajoran" || species === "Half human, half Betazoid" || species === "Half human, half Trill" || species === "Half human, half Cardassian"|| half[0] === "Half Betazoid"|| half[0] === "Half Trill"|| half[0] === "Half Bajoran"|| half[0] === "Half Cardassian") {
    var ageNum = Math.floor(Math.random() * 30);
    var age = ageNum + 20;
    return age;
  } else if (species === "Vulcan" || species === "Half human, half Vulcan"|| half[0] === "Half Vulcan") {
    var ageNum = Math.floor(Math.random() * 90);
    var age = ageNum + 20;
    return age;
  } else if (species === "Klingon" || species === "Half human, half Klingon"|| half[0] === "Half Klingon") {
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

function shipGen() {
  var shipArray = ["Activity", "Adamant", "Advantage", "Adventure", "Allegiance", "Ambassador","Atlas", "Audacity", "Bravery", "Cavalier","Centurion", "Challenger","Champion","Daedalus", "Defender","Diligence", "Duty","Gallant", "Gladiator", "Glory","Guardian","Eagle", "Eclipse", "Echo", "Eden", "Endeavor", "Escapade","Excalibur","Excellence","Expedition", "Explorer","Fearless","Fidelity","Formidable","Fortitude","Fortune", "Fortitude","Hope","Icarus", "Illustrious", "Implacable", "Integrity","Intrepid", "Loyalty","Nomad", "Nobility","Obdurate", "Obedience", "Onslaught", "Opportunity","Paragon", "Pathfinder","Polaris","Progress", "Providence","Ranger", "Reliance", "Resolute", "Scout","Sentinel","Traveller","Ultimatum", "Undaunted", "United", "Unity", "Universal", "Valor", "Venture", "Wanderer", "Galaxy", "Constellation", "Nebula","Soyuz", "Mercury", "Gemini", "Apollo","Vostok","Gagarin", "Armstrong",]
  var shipNum = Math.floor(Math.random() * shipArray.length);
  var ship = shipArray[shipNum];
  return ship;
}

function skinGen() {
  var half = species.split(",");
  if (species === "Cardassian") {
    var skin = "grey";
    return skin;
  } else {
    var skinArray = ["pale", "brown", "dark",]
    var skinNum = Math.floor(Math.random() * skinArray.length);
    var skin = skinArray[skinNum]
    return skin;
  }
}

function bodyGen() {
  var bodyArray = ["heavy-set", "muscular", "skinny", "lean", "stocky", "fat", "bone-thin", "fit"];
  var bodyNum = Math.floor(Math.random() * bodyArray.length);
  var heightArray = ["tall",  "short",  "average-height", "tall",  "short",  "average-height", "tall",  "short",  "average-height", "tall",  "short",  "average-height", "very tall","very short",];
  var heightNum = Math.floor(Math.random() * heightArray.length);
  var body = heightArray[heightNum] + " and " + bodyArray[bodyNum];
  return body;
}

function eyeGen() {
    var half = species.split(",");
  if (species === "Betazoid" || half[0] === "Half Betazoid"){
    eye = "black";
    return eye;
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
  var persArray = ["Brilliant", "Active", "Adaptable", "Agreeable", "Amiable", "Benevolent", "Calm", "Caring", "Challenging", "Charismatic", "Cheerful", "Charming", "Clever", "Compassionate", "Conscientious", "Considerate", "Contemplative", "Courageous", "Courteous", "Creative", "Cultured", "Curious", "Daring", "Debonair", "Dedicated", "Dignified", "Disciplined", "Dramatic", "Dutiful", "Earnest", "Efficient", "Elegant", "Empathetic", "Energetic", "Enthusiastic", "Faithful", "Friendly", "Fun-loving", "Gallant", "Generous", "Gentle", "Good-natured", "Gracious", "Hearty", "Helpful", "Honest", "Honorable", "Humble", "Humorous", "Idealistic", "Imaginative", "Individualistic", "Knowledgeable", "Logical", "Loyal", "Methodical", "Modest", "Neat", "Optimistic", "Orderly", "Passionate","Patient", "Peaceful", "Perceptive", "Perfectionist", "Persuasive", "Playful", "Polished", "Principled", "Protective", "Prudent", "Rational", "Relaxed", "Responsible", "Romantic", "Sage", "Scholarly", "Selfless", "Sensitive", "Sentimental", "Serious", "Shrewd", "Sociable", "Spontaneous", "Steadfast", "Stoic", "Studious", "Suave", "Trusting", "Vivacious", "Wise", "Witty", "Absent-minded", "Ambitious", "Artful", "Breezy", "Businesslike", "Casual", "Competitive", "Confidential", "Crisp", "Determined", "Dry", "Emotional", "Enigmatic", "Formal","Guileless", "Impassive", "Impressionable", "Intense", "Irreverent", "Mellow", "Old-fashioned", "Placid", "Proud", "Quiet", "Reserved", "Restrained", "Retiring", "Sarcastic", "Self-conscious", "Solemn", "Stern", "Strict", "Stubborn",]
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

function Character(name, surname, gender, age, species, personality, hobby) {
  this.name = name;
  this.surname = surname;
  this.gender = gender;
  this.age = age;
  this.species= species;
  this.personality = personality;
  this.hobby = hobby;
}

function nationGen(){
  var nationArray = ["England", "Russia", "France","Japan"]
  var nationNum = Math.floor(Math.random() * nationArray.length);
  nation = nationArray[nationNum];
  return nation;
}

function notesGen(){
  if (gender === "Male") {
    var pronoun = "his";
    var pronoun2 = "He";
  } else if (gender === "Female") {
    var pronoun = "her";
    var pronoun2 = "She";
  } else {
    var pronoun = "xir";
    var pronoun = "Xe";
  }
  var half = species.split(",");
  if (species === "Klingon" || species === "Trill" || species === "Vulcan" || species === "Freed Borg drone" || species === "Bajoran" || species === "Half human, half Klingon" || species === "Half human, half Trill" || species === "Half human, half Vulcan" || species == "Half human, half Bajoran" || half[0] === "Half Klingon" || half[0] === "Half Trill" || half[0] === "Half Vulcan" || half[0] === "Half Bajoran") {
    var appearName = " " + name;
  } else {
    var appearName = surname;
  }

  var isDisabledArray = ["true", "false",  "false",  "false","false",  "false",  "false",];
  var isDisabledNum = Math.floor(Math.random() * isDisabledArray.length);
  var isDisabled = isDisabledArray[isDisabledNum];
  if (isDisabled === "true") {
    var disabilityArray = ["is blind", "walks with a limp", "is missing an arm", "is missing a leg", "is missing an eye", "is paraplegic", "uses a wheelchair due to arthritis", "walks with a cane","walks with crutches", "slurs " + pronoun + " words due to brain damage", "is deaf"]
    var disabilityNum = Math.floor(Math.random() * disabilityArray.length);
    var disability = disabilityArray[disabilityNum]
  }

  var isMentallyIllArray = ["true", "false", "false", "false","false",  "false",  "false",];
  var isMentallyIllNum = Math.floor(Math.random() * isMentallyIllArray.length);
  var isMentallyIll = isMentallyIllArray[isMentallyIllNum];
  if (isMentallyIll === "true") {
    var mentalIllnessArray = ["is autistic", "has psychotic symptoms", "is clinically depressed", "is bipolar", "has a personality disorder", "has ADHD","has PTSD"]
    var mentalIllnessNum = Math.floor(Math.random() * mentalIllnessArray.length);
    var mentalIllness = mentalIllnessArray[mentalIllnessNum];
  }

  if (species === "Joined Trill") {
    var hostArray = ["no", "one", "two", "three", "four", "five", "six", "seven", "eight"]
    var hostNum = Math.floor(Math.random() * hostArray.length);
    if (hostNum === 1) {
      var host = hostArray[hostNum] + " previous host";
    } else {
      var host = hostArray[hostNum] + " previous hosts";
    }
  }

  if (species === "Joined Trill" && isDisabled === "true" && isMentallyIll === "true") {
      var notes = appearName + " " + disability + ", " + mentalIllness + ", and has had " + host + ".";
  } else if (species != "Joined Trill" && isDisabled === "true" && isMentallyIll === "true") {
    var notes = appearName + " " + disability + " and " + mentalIllness + ".";
  } else if (species === "Joined Trill" && isDisabled === "false" && isMentallyIll === "true") {
    var notes = appearName + " " + mentalIllness + " and has had " + host +".";
  } else if (species === "Joined Trill" && isDisabled === "true" && isMentallyIll === "false") {
    var notes = appearName + " " + disability + " and has had " + host +".";
  } else if (species === "Joined Trill" && isDisabled === "false" & isMentallyIll === "false") {
    var notes = appearName + " has had " + host + ".";
  } else if (species != "Joined Trill" && isDisabled === "false" && isMentallyIll === "true") {
    var notes = appearName + " " + mentalIllness + ".";
  } else if (species != "Joined Trill" && isDisabled === "true" && isMentallyIll === "false") {
    var notes = appearName + " " + disability + ".";
  } else {
    var notes = "None.";
  }
  return notes;
}

function appearanceGen(body, skin, eye, hair) {
  var half = species.split(",");
  var splitHair = hair.split(" ");
  var hair = hair.toLowerCase();
  if (species === "Klingon" || species === "Trill" || species === "Vulcan" || species === "Freed Borg drone" || species === "Bajoran" || species === "Half human, half Klingon" || species === "Half human, half Trill" || species === "Half human, half Vulcan" || species == "Half human, half Bajoran" || half[0] === "Half Klingon" || half[0] === "Half Trill" || half[0] === "Half Vulcan" || half[0] === "Half Bajoran") {
    var appearName = " " + name;
  } else {
    var appearName = surname;
  }
  if (splitHair[1] === "braids" || splitHair[1] === "cropped" || splitHair[1] === "feathered"|| splitHair[2] === "braids" || splitHair[2] === "cropped" || splitHair[2] === "feathered") {
    var appearance = appearName + " is " + body + ", with " + skin + " skin, " + eye + " eyes, and " + hair + ".";
  } else {
    var appearance = appearName + " is " + body + ", with " + skin + " skin, " + eye + " eyes, and a " + hair + ".";
  }
  return appearance;
}

function surNameGen() {
  var half = species.split(",");
  if (species==="Human") {
    if (nation === "England") {
      var surArray = ["Johnson","Jackson", "Smith", "Tailor","Brown","Anderson", "Clark", "Wright", "Mitchell", "Thomas", "Rodriguez", "Lopez", "Perez", "Williams", "Lewis", "Hill", "Roberts", "Jones", "White", "Lee", "Scott", "Turner", "Harris", "Walker", "Green", "Phillips", "Davis", "Martin", "Hall", "Adams", "Campbell", "Miller", "Thompson", "Allen", "Baker", "Parker", "Wilson", "Garcia", "Young", "Gonzalez", "Evans", "Moore", "Martinez","Hernandez", "Nelson", "Edwards", "Taylor", "Robinson", "King", "Carter", "Collins","Lloyd", "Knight", "Butler", "Russell", "Barker", "Fisher", "Stevens", "Jenkins", "Murray", "Dixon", "Harvey", "Graham", "Pearson", "Ahmed", "Fletcher", "Walsh", "Kaur", "Gibson", "Howard", "Andrews", "Stewart", "Elliott", "Reynolds", "Saunders", "Payne", "Fox", "Ford", "Pearce", "Day", "Brooks", "West", "Lawrence", "Cole", "Atkinson", "Bradley", "Spencer", "Dawson", "Burton", "Watts", "Rose", "Perry","Ryan", "Grant", "Wells", "Armstrong", "Francis", "Hayes",];
      var surNum = Math.floor(Math.random() * surArray.length);
      var surname = " " + surArray[surNum];
      return surname;
    } else if (nation === "Russia") {
      var surArray = ["Ivanov", "Smirnov", "Kuznetsov","Popov", "Vasiliev", "Petrov", "Sokolov", "Mikhailov", "Fedorov", "Morozov", "Volkov", "Alexeev", "Lebedev", "Semenov", "Egorov", "Pavlov", "Kozlov", "Stepanov", "Nikolaev", "Orlov","Abramov", "Abramovich", "Agapov", "Azarov", "Alexandrov", "Aexeyev", "Andreyev", "Andronikov", "Andropov", "Anisimov", "Asimov", "Anosov", "Antipov", "Antonov", "Antonovich", "Aristov","Babikov", "Babichev", "Bagrov", "Bazin", "Balashov", "Baranovsky","Baryshev", "Baskin", "Belinsky", "Belov", "Bolshakov", "Bolshov", "Borovkov", "Brezhnev","Vavilov", "Vasilevsky", "Vasilyev", "Vasnetsov", "Vetrov", "Gagarin", "Gorev", "Grekov", "Grankin", "Dvornikov","Delov", "Dmitriyev","Dolzhikov", "Domashev", "Dorokhov", "Dostoyevsky", "Dragomirov", "Dyatlov", "Yegorov", "Yezhov", "Yelagin", "Yeltsin", "Yelchin", "Yenin", "Zharkov", "Zhukov","Zolotov", "Ivazov", "Ivakin", "Ivankov", "Ivanov", "Ivchenko", "Ilyin", "Ilyasov", "Ilyushin", "Kabinov", "Kadnikov", "Kazakov", "Kalganov", "Karev", "Komarov", "Kochenkov","Krasnov", "Kurakin", "Ledovskoy", "Malakhov", "Mednikov", "Melikov", "Mirnov", "Mironov", "Mikhalev", "Necheyev", "Nikonov", "Novikov", "Olenov", "Osinov","Pavlenko", "Pavlov", "Petrenko", "Pankin", "Pankov", "Pankiv", "Patrushev", "Romanov", "Rostov", "Ruchkin", "Rodin", "Sadovsky", "Salnikov", "Samsonov", "Sokolov", "Soldatov", "Smekhov", "Fyodorov", "Dein", "Fedosov", ];
      var surNum = Math.floor(Math.random() * surArray.length);
      if (gender === "Female") {
        var surname = " " + surArray[surNum] + "a";
        return surname;
      } else {
        var surname = " " + surArray[surNum];
        return surname;
      }
    } else if (nation === "France") {
      var surArray = ["Martin", "Bernard", "Duboi", "Thomas", "Robert", "Richard", "Petit", "Durand", "Leroy", "Moreau", "Simon", "Laurent", "Michel", "Garcia", "David", "Betrand","Roux", "Vincent", "Fournier", "Morel", "Girard", "Andre", "Lefevre", "Mercier", "Dupont", "Lambert", "Bonnet", "Francois", "Martinez", "Legrand", "Garnier", "Faure", "Rousseau", "Blanc", "Guerin", "Miller", "Henry", "Roussel", "Nicolas","Perrin", "Morin", "Mathieu", "Clement", "Gauthier", "Dumont", "Lopez", "Fontaine", "Chevalier", "Robin", "Masson", "Sanchez", "Gerard", "Nguyen", "Boyer", "Denis", "Lemaire", "Duval", "Gautier", "Roger", "Roche", "Roy", "Noel"];
      var surNum = Math.floor(Math.random() * surArray.length);
      var surname = " " + surArray[surNum];
      return surname;
    } else if (nation === "Japan") {
      var surArray = ["Sato", "Suzuki", "Takahashi", "Tanaka", "Watanabe", "Ito", "Yamamoto", "Nakamura", "Kobayashi", "Kato", "Yoshida", "Yamada", "Sasaki", "Yamaguchi", "Saito", "Matsumoto", "Inoue", "Kimura", "Hayashi", "Shimizu", "Yamazaki", "Mori", "Abe", "Ikeda", "Hashimoto", "Yamashita", "Ishikawa", "Nakajima", "Maed", "Fujita", "Ogawa", "Goto", "Okada", "Hasegawa", "Murakami", "Kondo", "Ishii", "Sakamoto", "Endo", "Aoki", "Fujii", "Nishimura", "Fukuda", "Ota", "Miura", "Fujiwara", "Okamoto", "Matsuda", "Nakagawa", "Nakano", "Harada", "Ono", "Tamura", "Takeuchi", "Kaneko", "Wada", "Nakayama", "Ishida", "Ueda", "Morita", "Hara", "Shibata", "Sakai", "Kudo", "Yokoyama", "Miyazaki", "Miyamoto", "Uchida", "Takagi", "Ando", "Taniguchi", "Ohno", "Maruyama", "Imai", "Takada", "Fujimoto", "Takeda"];
      var surNum = Math.floor(Math.random() * surArray.length);
      var surname = " " + surArray[surNum];
      return surname;
    }
  } else if (species === "Klingon" || half[0] === "Half Klingon" || species === "Half human, half Klingon") {
    var syl1Array = ["W", "R", "K'R", "K'T", "Gow", "Mart", "M", "G", "Kr","K", "Br", "G'tr", "Kur", "V", "Mol", "Mow", "T'Gr","Tor","Dur","T","Gr","Kat","Grilk","D'Gh", "Tum", "Koz", "Karg", "Kl", "Vekm","K'mp", "Kahl"];
    var syl1Num = Math.floor(Math.random() * syl1Array.length);
    var syl2Array = ["orf", "org", "uge","oth", "ok",  "ot","ex","ulhe", "aang", "az","agh", "ogh", "oqh","oggra", "or", "orkka", "ath","al", "as", "afk","ek","ak", "an", "ag","ec","urn","est", "ess"];
    var syl2Num = Math.floor(Math.random() * syl2Array.length);
    if (gender === "Male") {
      var surname = ", son of " + syl1Array[syl1Num] + syl2Array[syl2Num];
      return surname;
    } else if (gender === "Female") {
      var surname = ", daughter of " + syl1Array[syl1Num] + syl2Array[syl2Num];
      return surname;
    } else if (gender === "Nonbinary") {
      var surname = ", child of " + syl1Array[syl1Num] + syl2Array[syl2Num];
      return surname;
    }
  } else if (species === "Betazoid" || half[0] === "Half Betazoid"|| species === "Half human, half Betazoid"){
      var sur1Array = ["T","D","F","G","K","Pr","Th","Tr","V", "Dy","L", "X",]
      var sur1Num = Math.floor(Math.random() * sur1Array.length);
      var sur2Array = ["el", "eo", "an", "ort", "av", "if","on", "ir","ex"]
      var sur2Num = Math.floor(Math.random() * sur2Array.length);
      var surname = " " + sur1Array[sur1Num] + sur2Array[sur2Num];
      return surname;
  } else if (species === "Joined Trill") {
    var sur1Array = ["B","Br", "Cl", "C", "D","F","G", "Gr", "K", "Ker", "Kal","Lex","M","N","Od","Per", ]
    var sur1Num = Math.floor(Math.random() * sur1Array.length);
    var sur2Array = ["ok", "al", "en", "yl", "if", "ax","ev","al", "ard", "ahn", "on", "az", "an", "ar",]
    var sur2Num = Math.floor(Math.random() * sur2Array.length);
    var surname = " " + sur1Array[sur1Num] + sur2Array[sur2Num];
    return surname;
  } else if (species === "Bajoran" || half[0] === "Half Bajoran"|| species === "Half human, half Bajoran") {
    var syl1Array = ["Ant", "Trom", "V", "El", "Ren", "Fal","Mer", "Ner","P","R","Tab","Kob","Lar", "G","Tal","Ad", "Ess", "Nal"];
    var syl1Num = Math.floor(Math.random() * syl1Array.length);
    var syl2Array = ["os", "ac", "ek", "em", "or","u", "ys", "ohl", "eon","an", "en","ale","ia", "ami","a", "as"];
    var syl2Num = Math.floor(Math.random() * syl2Array.length);
    var surname = " " + syl1Array[syl1Num] + syl2Array[syl2Num] ;
    return surname;
  } else if (species === "Cardassian" || half[0] === "Half Cardassian"|| species === "Half human, half Cardassian") {
    var syl1Array = ["El","Ul", "Korb", "Ill","Nat", "Nan","Aam", "Mil", "Dam", "Dan", "Duk", "Ev", "Gar","Ghem","Had","Kam", "Mad", "Mav", "Mac", "Mek","Mos", "Nad","Oc","Parm", "Pir",];
    var syl2Num = Math.floor(Math.random() * syl1Array.length);
    var syl2Array = ["ani", "im","ian", "eny","in", "ar", "at","ek","ak", "or","red", "et","ett",];
    var syl4Num = Math.floor(Math.random() * syl2Array.length);
    var surname = " " + syl1Array[syl2Num] + syl2Array[syl4Num];
    return surname;
  } else {
    return " ";
  }
}


function nameGen(){
  var half = species.split(",");
  if (species === "Vulcan" || half[0] === "Half Vulcan" || species === "Half human, half Vulcan" && gender === "Female") {
    var syl1Array = ["T'P","T'P","T'P","T'L","T'V","V'L", "T'H","T'Sh", "T'Kl","T'K","T'M",];
    var syl1Num = Math.floor(Math.random() * syl1Array.length);
    var syl2Array = ["ar","eel","es","aas","eni","ir","aal","an", "ara","au", "el","enna","ol", "ring","anik","atak","as","ain"];
    var syl2Num = Math.floor(Math.random() * syl2Array.length);
    var name = syl1Array[syl1Num] + syl2Array[syl2Num];
    return name;
  } else if (species === "Vulcan" || half[0] === "Half Vulcan" || species === "Half human, half Vulcan" && gender === "Male") {
    var syl1Array = ["Sp","St","S","Sur","Tuv","Syb","Syr","Sep","Sit", "Sol","Fal","Haad","Joss","Kin","K","Lor","Mur","Nir","Sar", "Sakk","Sas", "Sat", "Sav","Sel",];
    var syl1Num = Math.floor(Math.random() * syl1Array.length);
    var syl2Array = ["ock","ok", "ek","ak","on","ar","al","or","en","is","oss","ot","oc","ath", "elk",];
    var syl2Num = Math.floor(Math.random() * syl2Array.length);
    var name = syl1Array[syl1Num] + syl2Array[syl2Num];
    return name;
  } else if (species === "Vulcan" || half[0] === "Half Vulcan" || species === "Half human, half Vulcan" && gender === "Nonbinary") {
    var syl1Array = ["T'P","T'P","T'P","T'L","T'V","V'L", "T'H","T'Sh", "T'Kl","T'K","T'M","Sp","St","S","Sur","Tuv","Syb","Syr","Sep","Sit", "Sol","Fal","Haad","Joss","Kin","K","Lor","Mur","Nir","Sar", "Sakk","Sas", "Sat", "Sav","Sel",];
    var syl1Num = Math.floor(Math.random() * syl1Array.length);
    var syl2Array = ["ar","eel","es","aas","eni","ir","aal","an", "ara","au", "el","enna","ol", "ring","anik","atak","as","ain","ock","ok", "ek","ak","on","ar","al","or","en","is","oss","ot","oc","ath", "elk",];
    var syl2Num = Math.floor(Math.random() * syl2Array.length);
    var name = syl1Array[syl1Num] + syl2Array[syl2Num];
    return name;
  } else if (species === "Human") {
    if (nation === "England") {
      if (gender === "Male") {
        var firstArray = ["Mark","John","Jerry", "James", "Jake", "Benjamin", "Todd", "Scott","Robert", "Luke","David","Christopher", "George", "Ronald", "Richard", "Daniel", "Kenneth", "Anthony", "Charles", "Paul", "Steven", "Kevin", "Michael", "Joseph", "Edward", "Jason", "William", "Thomas", "Brian", "Jeff",];
        var firstNum = Math.floor(Math.random() * firstArray.length);
        var name = firstArray[firstNum];
        return name;
      } else if (gender === "Female") {
        var firstArray = ["Susan", "Deanna","Amelia","Beverly","Jane","Michelle","Katheryn", "Kate","Mary", "Jennifer", "Lisa", "Sandra", "Patricia", "Maria", "Nancy", "Donna", "Laura", "Linda", "Susan", "Karen", "Carol", "Sarah", "Barbara", "Margaret","Betty", "Ruth", "Kimberly", "Elizabeth", "Dorothy", "Helen", "Sharon", "Deborah",];
        var firstNum = Math.floor(Math.random() * firstArray.length);
        var name = firstArray[firstNum];
        return name;
      } else if (gender === "Nonbinary") {
        var firstArray = ["Susan", "Deanna","Amelia","Beverly","Jane","Michelle","Katheryn", "Kate","Mary", "Jennifer", "Lisa", "Sandra", "Patricia", "Maria", "Nancy", "Donna", "Laura", "Linda", "Susan", "Karen", "Carol", "Sarah", "Barbara", "Margaret","Betty", "Ruth", "Kimberly", "Elizabeth", "Dorothy", "Helen", "Sharon", "Deborah", "Mark","John","Jerry", "James", "Jake", "Benjamin", "Todd", "Scott","Robert", "Luke","David","Christopher", "George", "Ronald", "Richard", "Daniel", "Kenneth", "Anthony", "Charles", "Paul", "Steven", "Kevin", "Michael", "Joseph", "Edward", "Jason", "William", "Thomas", "Brian", "Jeff",];
        var firstNum = Math.floor(Math.random() * firstArray.length);
        var name = firstArray[firstNum];
        return name;
      }
  } else if (nation === "Russia") {
    if (gender === "Male") {
      var firstArray = ["Artem", "Aleksandr", "Maksim", "Ivan", "Mikhail", "Daniil", "Dmitry", "Kirill", "Andrey", "Egor", "Nikita", "Alexey", "Matvey", "Ilya", "Tomofey", "Roman", "Fedor", "Yaroslav", "Vladimir", "Sergey", "Arseny", "Nikolay", "Vladislav", "Gleb", "Konstantin", "Georgiy", "Pavel", "Stepan", "Denis"];
      var firstNum = Math.floor(Math.random() * firstArray.length);
      var patrArray = ["Andreevich","Stepanovich", "Yanovich", "Konstantinovich", "Ilyich", "Vladimovich", "Vladimirovich", "Yanovich", "Dmitrievich", "Ivanovich", "Makorovich", "Tarasovich", "Igorevich", "Nikitovich", "Larionovich", "Yakovich", "Alesnarovich", "Vitalievich", "Makarovich", "Valentinovich",];
      var patrNum = Math.floor(Math.random() * patrArray.length);
      var name = firstArray[firstNum] + " " + patrArray[patrNum];
      return name;
    } else if (gender === "Female") {
      var firstArray = ["Sophia", "Maria", "Anastasia", "Anna", "Daria", "Viktoria", "Elizaveta", "Varvara", "Polina", "Alisa", "Ksenia", "Ekaterina", "Aleksandra", "Veronika", "Arina", "Vasilisa","Valeria", "Milana", "Ulyana", "Yeva","Margarita", "Kristina", "Alena", "Vera", "Taisiya", "Alina", "Kira", "Diana", "Yulia", "Olga",];
      var firstNum = Math.floor(Math.random() * firstArray.length);
      var patrArray = ["Artemievna", "Zakharovna", "Yakovna", "Yevgenievna", "Ruslanovna", "Yevgenievna", "Olegovna", "Pavlovna", "Aleksandrovna", "Romanovna", "Andreevna", "Rodionovna", "Leonidovna", "Semyonovna", "Igorievna", "Vladimovna", "Danilovna", "Zakharovna",];
      var patrNum = Math.floor(Math.random() * patrArray.length);
      var name = firstArray[firstNum] + " " + patrArray[patrNum];
      return name;
    } else if (gender === "Nonbinary") {
      var firstArray = ["Sophia", "Maria", "Anastasia", "Anna", "Daria", "Viktoria", "Elizaveta", "Varvara", "Polina", "Alisa", "Ksenia", "Ekaterina", "Aleksandra", "Veronika", "Arina", "Vasilisa","Valeria", "Milana", "Ulyana", "Yeva","Margarita", "Kristina", "Alena", "Vera", "Taisiya", "Alina", "Kira", "Diana", "Yulia", "Olga","Artem", "Aleksandr", "Maksim", "Ivan", "Mikhail", "Daniil", "Dmitry", "Kirill", "Andrey", "Egor", "Nikita", "Alexey", "Matvey", "Ilya", "Tomofey", "Roman", "Fedor", "Yaroslav", "Vladimir", "Sergey", "Arseny", "Nikolay", "Vladislav", "Gleb", "Konstantin", "Georgiy", "Pavel", "Stepan", "Denis"];
      var firstNum = Math.floor(Math.random() * firstArray.length);
      var patrArray = ["Artemievna", "Zakharovna", "Yakovna", "Yevgenievna", "Ruslanovna", "Yevgenievna", "Olegovna", "Pavlovna", "Aleksandrovna", "Romanovna", "Andreevna", "Rodionovna", "Leonidovna", "Semyonovna", "Igorievna", "Vladimovna", "Danilovna", "Zakharovna",];
      var patrNum = Math.floor(Math.random() * patrArray.length);
      var name = firstArray[firstNum] + " " + patrArray[patrNum];
      return name;
    }
  } else if (nation === "France") {
    if (gender === "Male") {
      var firstArray = ["Nathan", "Lucas", "Enzo", "Louis", "Hugo", "Gabriel", "Ethan", "Mathis", "Jules", "Arthur", "Tom", "Noah", "Maxime", "Yanis", "Adam", "Thomas", "Leo", "Paul", "Evan", "Nolan", "Axel", "Antoine","Timeo", "Mael", "Raphael", "Alexandre", "Theo", "Sacha", "Noa", "Baptiste", "Maxence", "Clement", "Mohamed", "Matheo", "Gabin", "Aexis", "Rayan", "Quentin", "Valentin", "Noe", "Mathys", "Victor", "Samuel", "Kylian", "Martin", "Romain",];
      var firstNum = Math.floor(Math.random() * firstArray.length);
      var name = firstArray[firstNum];
      return name;
    } else if (gender === "Female") {
      var firstArray = ["Emma", "Manon", "Lola", "Jade", "Camille", "Sarah", "Louise", "Lilou", "Lea", "Clara", "Chloe", "Eva", "Lina", "Ines", "Louna", "Romane", "Maelys", "Juliette", "Lucie", "Zoe", "Ambre", "Alice", "Lou", "Lena","Lisa", "Jeanne", "Louane", "Ines", "Mathilde", "Charlotte", "Marie", "Anna", "Nina", "Anais", "Pauline", "Lana", "Laura", "Lily", "Alicia", "Julie", "Julia", "Rose", "Margaux", "Noemie", "Luna","Elise", "Margot", "Elisa", "Zoe", "Elsa", "Lena", "Clemence", "Justine", "Oceane", "Celia", "Agatha", "Inaya", "Yasmine", "Emilie", "Faustine", "Maelle", "Maeva", "Leonie", "Gabrielle",];
      var firstNum = Math.floor(Math.random() * firstArray.length);
      var name = firstArray[firstNum];
      return name;
    } else if (gender === "Nonbinary") {
      var firstArray = ["Emma", "Manon", "Lola", "Jade", "Camille", "Sarah", "Louise", "Lilou", "Lea", "Clara", "Chloe", "Eva", "Lina", "Ines", "Louna", "Romane", "Maelys", "Juliette", "Lucie", "Zoe", "Ambre", "Alice", "Lou", "Lena","Lisa", "Jeanne", "Louane", "Ines", "Mathilde", "Charlotte", "Marie", "Anna", "Nina", "Anais", "Pauline", "Lana", "Laura", "Lily", "Alicia", "Julie", "Julia", "Rose", "Margaux", "Noemie", "Luna","Elise", "Margot", "Elisa", "Zoe", "Elsa", "Lena", "Clemence", "Justine", "Oceane", "Celia", "Agatha", "Inaya", "Yasmine", "Emilie", "Faustine", "Maelle", "Maeva", "Leonie", "Gabrielle","Nathan", "Lucas", "Enzo", "Louis", "Hugo", "Gabriel", "Ethan", "Mathis", "Jules", "Arthur", "Tom", "Noah", "Maxime", "Yanis", "Adam", "Thomas", "Leo", "Paul", "Evan", "Nolan", "Axel", "Antoine","Timeo", "Mael", "Raphael", "Alexandre", "Theo", "Sacha", "Noa", "Baptiste", "Maxence", "Clement", "Mohamed", "Matheo", "Gabin", "Aexis", "Rayan", "Quentin", "Valentin", "Noe", "Mathys", "Victor", "Samuel", "Kylian", "Martin", "Romain",];
      var firstNum = Math.floor(Math.random() * firstArray.length);
      var name = firstArray[firstNum];
      return name;
    }
  } else if (nation === "Japan") {
    if (gender === "Male") {
      var firstArray = ["Haruto", "Yuto", "Sota","Yuki", "Hayato", "Haruki", "Ryusei", "Koki", "Sora", "Sosuke", "Riku", "Soma", "Ryota", "Rui", "Kaito", "Haru", "Kota", "Yusei", "Yuito", "Yuma", "Ren", "Takumi", "Minato", "Eita", "Shota", "Daiki", "Hiroto", "Kosei", "Takeru", "Hinata", "Toma", "Manato", "Ryuki", "Rikuto", "Aoto", "Ibuki", "Tatsuki", "Haruma", "Yamato", "Ryuto", "Taisei","Yuta", "Itsuki", "Soshi", "Taiga", "Kosuke", "Shoma", "Yushin", "Ryuga", "Ryo", "Rento",];
      var firstNum = Math.floor(Math.random() * firstArray.length);
      var name = firstArray[firstNum];
      return name;
    } else if (gender === "Female") {
      var firstArray = ["Yui", "Rio", "Yuna", "Hina", "Koharu", "Hinata", "Mei", "Mio", "Saki", "Miyu", "Kokona", "Haruka", "Rin", "Akari", "Yuna", "Honoka", "Momoka", "Aoi", "Ichika", "Sakura", "Himari", "Yume", "Airi", "Sara", "Nanami", "Ayaka", "Yuka", "Riko", "Noa", "Mao", "Yua", "Ayane", "Hiyori", "Misaki", "Yuzuki", "Rina", "Sana", "Ria", "Ruka", "Kanon", "Kaho", "Hana", "Karin", "Risa", "Shiori", "Fuka", "Rino", "Anna", "Natsuki", "Nana", "Reina",];
      var firstNum = Math.floor(Math.random() * firstArray.length);
      var name = firstArray[firstNum];
      return name;
    } else if (gender === "Nonbinary") {
      var firstArray = ["Haruto", "Yuto", "Sota","Yuki", "Hayato", "Haruki", "Ryusei", "Koki", "Sora", "Sosuke", "Riku", "Soma", "Ryota", "Rui", "Kaito", "Haru", "Kota", "Yusei", "Yuito", "Yuma", "Ren", "Takumi", "Minato", "Eita", "Shota", "Daiki", "Hiroto", "Kosei", "Takeru", "Hinata", "Toma", "Manato", "Ryuki", "Rikuto", "Aoto", "Ibuki", "Tatsuki", "Haruma", "Yamato", "Ryuto", "Taisei","Yuta", "Itsuki", "Soshi", "Taiga", "Kosuke", "Shoma", "Yushin", "Ryuga", "Ryo", "Rento", "Yui", "Rio", "Yuna", "Hina", "Koharu", "Hinata", "Mei", "Mio", "Saki", "Miyu", "Kokona", "Haruka", "Rin", "Akari", "Yuna", "Honoka", "Momoka", "Aoi", "Ichika", "Sakura", "Himari", "Yume", "Airi", "Sara", "Nanami", "Ayaka", "Yuka", "Riko", "Noa", "Mao", "Yua", "Ayane", "Hiyori", "Misaki", "Yuzuki", "Rina", "Sana", "Ria", "Ruka", "Kanon", "Kaho", "Hana", "Karin", "Risa", "Shiori", "Fuka", "Rino", "Anna", "Natsuki", "Nana", "Reina",];
      var firstNum = Math.floor(Math.random() * firstArray.length);
      var name = firstArray[firstNum];
      return name;
    }
  }
} else if (species === "Klingon" || half[0] === "Half Klingon" || species === "Half human, half Klingon") {
  var syl1Array = ["W", "R", "K'R", "K'T", "Gow", "Mart", "M", "G", "Kr","K", "Br", "G'tr", "Kur", "V", "Mol", "Mow", "T'Gr","Tor","Dur","T","Gr","Kat","T'K",];
  var syl1Num = Math.floor(Math.random() * syl1Array.length);
  var syl2Array = ["orf", "org", "uge","oth", "ok",  "ot","ex","ulhe", "aang", "az","agh", "ogh", "oqh","oggra", "or", "orkka", "ath","al", "as", "afk", "arr"];
  var syl2Num = Math.floor(Math.random() * syl2Array.length);
  if (gender === "Male") {
    var name = syl1Array[syl1Num] + syl2Array[syl2Num];
    return name;
  } else if (gender === "Female") {
    var name = syl1Array[syl1Num] + syl2Array[syl2Num];
    return name;
  } else if (gender === "Nonbinary") {
    var name = syl1Array[syl1Num] + syl2Array[syl2Num];
    return name;
  }
} else if (species === "Betazoid" || half[0] === "Half Betazoid" || species === "Half human, half Betazoid"){
  if (gender === "Female") {
    var syl1Array = ["Cha", "Lwa", "Illi", "Ada", "Bya", "Pera", "Lano","Eu", "Mry", "Dre", "Mola","Yula", "Gwa","Sla", "Qua","Qui", "Mla","Jya", "Shla","Shwa", "Jha","Swa","Gya","Illo", "Olla","Za", "Zo", "Jh", "Oll",];
    var syl1Num = Math.floor(Math.random() * syl1Array.length);
    var syl2Array = ["xaza", "xana", "rra", "na", "xthar", "teca", "lan", "shara", "axa", "nnela", "ranna","sarna", "xzara","xthara","zaxara", "liana", "xyana","jha"];
    var syl2Num = Math.floor(Math.random() * syl2Array.length);
    var name = syl1Array[syl1Num] + syl2Array[syl2Num];
    return name;
  } else if (gender === "Male") {
    var syl1Array = ["Cha", "Lwa", "Illi", "Ada", "Bya", "Pera", "Lano","Eu", "Mry", "Dre", "Mola","Yula", "Gwa","Sla", "Qua","Qui", "Mla","Jya", "Shla","Shwa", "Jha","Swa","Gya","Illo", "Olla","Za", "Zo", "Jh", "Oll",];
    var syl1Num = Math.floor(Math.random() * syl1Array.length);
    var syl2Array = ["xazen", "xanum", "rran", "nar", "xthar", "tecan", "lan", "sharin", "axal", "nnelas", "rannin", "xaran","xzaran", "xtharan", "zaxar", "lian","xyan","jhan","xazo", "rro", "xtho", "zaxo","xzo", "zaxaro", "teco", ];
    var syl2Num = Math.floor(Math.random() * syl2Array.length);
    var name = syl1Array[syl1Num] + syl2Array[syl2Num];
    return name;
  } else if (gender === "Nonbinary") {
    var syl1Array = ["Cha", "Lwa", "Illi", "Ada", "Bya", "Pera", "Lano","Eu", "Mry", "Dre", "Mola","Yula", "Gwa","Sla", "Qua","Qui", "Mla","Jya", "Shla","Shwa", "Jha","Swa","Gya","Illo", "Olla","Za", "Zo", "Jh", "Oll",];
    var syl1Num = Math.floor(Math.random() * syl1Array.length);
    var syl2Array = ["xaza", "xana", "rra", "na", "xthar", "teca", "lan", "shara", "axa", "nnela", "ranna","sarna", "xzara","xthara","zaxara", "liana", "xyana","jha", "xazen", "xanum", "rran", "nar", "xthar", "tecan", "lan", "sharin", "axal", "nnelas", "rannin", "xaran","xzaran", "xtharan", "zaxar", "lian","xyan","jhan","xazo", "rro", "xtho", "zaxo","xzo", "zaxaro", "teco",];
    var syl2Num = Math.floor(Math.random() * syl2Array.length);
    var name = syl1Array[syl1Num] + syl2Array[syl2Num];
    return name;
  }
} else if (species === "Trill" || half[0] === "Half Trill" || species === "Half human, half Trill") {
  var syl1Array = ["Aud","Cur", "Ez", "Jad", "Lor", "Lel", "Deil", "El", "Tau", "Jan", "Nil", "Jar", "Zir", "Brex", "Mad", "Meh", "Ren","Jor", "Bel", "Yol", "Tim","Ver"];
  var syl1Num = Math.floor(Math.random() * syl1Array.length);
  var syl2Array = ["ri", "zia", "eta", "a", "as", "ista", "lin", "ra", "ani", "em","anne","en", "za","ta", "hol", "an","ar", "ad", "or",];
  var syl2Num = Math.floor(Math.random() * syl2Array.length);
  var name = syl1Array[syl1Num] + syl2Array[syl2Num];
  return name;
} else if (species === "Joined Trill") {
  var syl1Array = ["Aud","Cur", "Ez", "Jad", "Lor", "Lel", "Deil", "El", "Tau", "Jan", "Nil", "Jar", "Zir", "Brex", "Mad", "Meh", "Ren","Jor", "Bel", "Yol", "Tim","Ver"];
  var syl1Num = Math.floor(Math.random() * syl1Array.length);
  var syl2Array = ["ri", "zia", "eta", "a", "as", "ista", "lin", "ra", "ani", "em","anne","en", "za","ta", "hol", "an","ar", "ad", "or",];
  var syl2Num = Math.floor(Math.random() * syl2Array.length);
  var name = syl1Array[syl1Num] + syl2Array[syl2Num];
  return name;
} else if (species === "Bajoran"|| half[0] === "Half Bajoran" || species === "Half human, half Bajoran") {
  var sur1Array = ["Alen", "Bar", "Ben", "Dek", "Far", "Kir","Lath", "Lo","Mar", "Ret", "Jar",]
  var sur1Num = Math.floor(Math.random() * sur1Array.length);
  var sur2Array = ["is", "eil", "ten", "on", "en","a","rit", "at", "o"]
  var sur2Num = Math.floor(Math.random() * sur2Array.length);
  var name = sur1Array[sur1Num] + sur2Array[sur2Num];
  return name;
} else if (species === "Cardassian"|| half[0] === "Half Cardassian" || species === "Half human, half Cardassian") {
  var syl1Array = ["El","Ul", "Korb", "Ill","Nat", "Nan","Aam", "Mil", "Dam", "Dan", "Duk", "Ev", "Gar","Ghem","Had","Kam", "Mad", "Mav", "Mac", "Mek","Mos", "Nad","Oc","Parm", "Pir",];
  var syl1Num = Math.floor(Math.random() * syl1Array.length);
  var syl2Array = ["ani", "im","ian", "eny","in", "ar", "at","ek","ak", "or","red", "et","ett",];
  var syl3Num = Math.floor(Math.random() * syl2Array.length);
  if (gender === "Female") {
    var name = syl1Array[syl1Num] + syl2Array[syl3Num] + "a";
  } else {
    var name = syl1Array[syl1Num] + syl2Array[syl3Num];
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

function relGen(x, characterArray){

  var relArray = [];
  if (characterArray[x].gender === "Female") {
    pronoun = "She";
  } else if (characterArray[x].gender === "Male") {
    pronoun = "He";
  } else {
    pronoun = "Xe";
  }
  var charIndex = 0;
  characterArray.forEach(function(character) {
    rankArray2 = ["Captain", "First Officer", "Science Officer", "Security Officer", "Dr.", "Chief Engineer", "Counselor",];
    if (characterArray[x].name != character.name) {
      if (characterArray[x].gender === "Female") {
        var sibling = "sister";
      } else if (characterArray[x].gender === "Male") {
        var sibling = "brother";
      } else {
        var sibling = "sibling";
      }
      var relationArray = ["looks down on", "hates", "admires", "respects", "is irritated by", "is best friends with", "is a rival to", "used to be friends with", "doesn't trust", "is aggravated by", "is cautious about", "is confused by",  "is curious about", "envies", "is intimidated by","is like a " + sibling + " to","is amused by", "is critical of", "resents",];

      if (characterArray[x].species === "Joined Trill") {
        var trillAge1 = String(characterArray[x].age);
        var charAge1 = trillAge1.substring(0, 2);
      } else {
        var charAge1 = characterArray[x].age;
      }

      if (character.species === "Joined Trill") {
        var trillAge2 = String(characterArray[x].age);
        var charAge2 = trillAge2.substring(0, 2);
      } else {
        var charAge2 = character.age;
      }

      if (charAge1*0.840909091-0.05 > charAge2 || charAge2*0.840909091-0.05 > charAge1) {
        // console.log(characterArray[x].name + ": " + charAge1);
        // console.log(character.name + ": " + charAge2);
        // console.log("can't date");
      } else {
        var romanceArray = ["is in love with", "used to be in a relationship with", "is dating",];
        relationArray = relationArray.concat(romanceArray);
        // console.log(characterArray[x].name + ": " + charAge1);
        // console.log(character.name + ": " + charAge2);
        // console.log("can date");
      }
      if (Math.abs(characterArray[x].age - character.age) <= 5){
        relationArray.push("is childhood friends with");
      }

      if (characterArray[x].age - character.age >= 20){
        if (characterArray[x].gender === "Female"){
          var parent = "mother";
          var uncle = "aunt";
        } else if (characterArray[x].gender === "Male") {
          var parent = "father";
          var uncle = "uncle";
        } else {
          var parent = "parent";
          var uncle = "uncle";
        }
        relationArray.push("is like a " + parent + " to", "is like an " + uncle + " to");
      }

      var relNum = Math.floor(Math.random() * relationArray.length);
      var half = character.species.split(",");
      if (character.species === "Trill" || character.species === "Klingon" || character.species === "Vulcan" || character.species === "Freed Borg drone" || character.species === "Half human, half Trill" || character.species === "Half human, half Klingon" || character.species === "Half human, half Vulcan" || half[0] === "Half Trill" || half[0] === "Half Klingon" || half[0] === "Half Vulcan") {
        var relationships = " " + relationArray[relNum] + " " + rankArray2[charIndex] + " " +  character.name;
      } else {
        var relationships = " " + relationArray[relNum] + " " + rankArray2[charIndex] + " " +  character.surname;
      }

      relArray.push(relationships);
    }
    charIndex +=1;
  });
  var half = characterArray[x].species.split(",");
  if (characterArray[x].species === "Trill" || characterArray[x].species === "Klingon" || characterArray[x].species === "Vulcan" || characterArray[x].species === "Freed Borg drone"|| characterArray[x].species === "Half human, half Trill" || characterArray[x].species === "Half human, half Klingon" || characterArray[x].species === "Half human, half Vulcan" || half[0] === "Half Trill" || half[0] === "Half Klingon" || half[0] === "Half Vulcan") {
    var relList = rankArray2[x] + " " + characterArray[x].name +  relArray[0] + ". " + pronoun + relArray[1] + ". " + pronoun + relArray[2] + ". " + pronoun + relArray[3] + ". " + pronoun + relArray[4] + ". " + pronoun  + relArray[5] + ". ";
    return relList;
  } else {
    var relList = rankArray2[x] + " " + characterArray[x].surname +  relArray[0] + ". " + pronoun + relArray[1] + ". " + pronoun + relArray[2] + ". " + pronoun + relArray[3] + ". " + pronoun + relArray[4] + ". " + pronoun  + relArray[5] + ". ";
    return relList;
  }

}

var characterArray = [];

$(document).ready(function() {
  $('.add-button').click(function(){
    event.preventDefault();

    characterArray = [];

    species = specGen();
    nation = nationGen();
    gender = genderGen();
    rank = rankGen();
    name = nameGen();
    surname = surNameGen();
    age = ageGen();
    pos = posGen();
    pers = persGen();
    skin = skinGen();
    hair = hairGen();
    body = bodyGen();
    eye = eyeGen();
    hobby = hobGen();
    appearance = appearanceGen(body, skin, eye, hair);
    notes = notesGen()
    var captain = new Character(name, surname, gender, age,species, pers, hobby);
    characterArray.push(captain);
    $("#captain .name").text(name + surname);
    $("#captain .species").text(species);
    $("#captain .gender").text(gender);
    $("#captain .age").text(age);
    $("#captain .position").text(pos);
    $("#captain .personality").text(pers);
    $("#captain .appearance").text(appearance);
    $("#captain .notes").text(notes);
    $("#captain .hobby").text(hobby);



    species = specGen();
    nation = nationGen();
    gender = genderGen();
    rank = rankGen();
    name = nameGen();
    surname = surNameGen();
    age = ageGen();
    pos = posGen();
    pers = persGen();
    skin = skinGen();
    hair = hairGen();
    eye = eyeGen();
    body = bodyGen();
    hobby = hobGen();
    notes = notesGen();
    appearance = appearanceGen(body, skin, eye, hair);
    var firstOfficer = new Character(name, surname, gender, age,species, pers, hobby);
    characterArray.push(firstOfficer);
    $("#first-officer .name").text(name + surname);
    $("#first-officer .species").text(species);
    $("#first-officer .gender").text(gender);
    $("#first-officer .age").text(age);
    $("#first-officer .position").text(pos);
    $("#first-officer .personality").text(pers);
    $("#first-officer .appearance").text(appearance);
    $("#first-officer .hobby").text(hobby);
    $("#first-officer .notes").text(notes);

    species = specGen();
    nation = nationGen();
    gender = genderGen();
    rank = rankGen();
    name = nameGen();
    surname = surNameGen();
    age = ageGen();
    pos = posGen();
    pers = persGen();
    skin = skinGen();
    hair = hairGen();
    eye = eyeGen();
    body = bodyGen();
    hobby = hobGen();
    notes = notesGen();
    appearance = appearanceGen(body, skin, eye, hair);
    var scienceOfficer = new Character(name, surname, gender, age,species, pers, hobby);
    characterArray.push(scienceOfficer);
    $("#science-officer .name").text(name + surname);
    $("#science-officer .species").text(species);
    $("#science-officer .gender").text(gender);
    $("#science-officer .age").text(age);
    $("#science-officer .position").text(pos);
    $("#science-officer .personality").text(pers);
    $("#science-officer .appearance").text(appearance);
    $("#science-officer .hobby").text(hobby);
    $("#science-officer .notes").text(notes);

    species = specGen();
    nation = nationGen();
    gender = genderGen();
    rank = rankGen();
    name = nameGen();
    surname = surNameGen();
    age = ageGen();
    pos = posGen();
    pers = persGen();
    skin = skinGen();
    hair = hairGen();
    eye = eyeGen();
    body = bodyGen();
    hobby = hobGen();
    notes = notesGen();
    appearance = appearanceGen(body, skin, eye, hair);
    var securityOfficer = new Character(name, surname, gender, age,species, pers, hobby);
    characterArray.push(securityOfficer);
    $("#security-officer .name").text(name + surname);
    $("#security-officer .species").text(species);
    $("#security-officer .gender").text(gender);
    $("#security-officer .age").text(age);
    $("#security-officer .position").text(pos);
    $("#security-officer .personality").text(pers);
    $("#security-officer .appearance").text(appearance);
    $("#security-officer .hobby").text(hobby);
    $("#security-officer .notes").text(notes);

    species = specGen();
    nation = nationGen();
    gender = genderGen();
    rank = rankGen();
    name = nameGen();
    surname = surNameGen();
    age = ageGen();
    pos = posGen();
    pers = persGen();
    skin = skinGen();
    hair = hairGen();
    eye = eyeGen();
    body = bodyGen();
    hobby = hobGen();
    notes = notesGen();
    appearance = appearanceGen(body, skin, eye, hair);
    var doctor = new Character(name, surname, gender, age,species, pers, hobby);
    characterArray.push(doctor);
    $("#doctor .name").text(name + surname);
    $("#doctor .species").text(species);
    $("#doctor .gender").text(gender);
    $("#doctor .age").text(age);
    $("#doctor .position").text(pos);
    $("#doctor .personality").text(pers);
    $("#doctor .appearance").text(appearance);
    $("#doctor .hobby").text(hobby);
    $("#doctor .notes").text(notes);

    species = specGen();
    nation = nationGen();
    gender = genderGen();
    rank = rankGen();
    name = nameGen();
    surname = surNameGen();
    age = ageGen();
    pos = posGen();
    pers = persGen();
    skin = skinGen();
    hair = hairGen();
    eye = eyeGen();
    body = bodyGen();
    hobby = hobGen();
    notes = notesGen();
    appearance = appearanceGen(body, skin, eye, hair);
    var engineer = new Character(name, surname, gender, age,species, pers, hobby);
    characterArray.push(engineer);
    $("#engineer .name").text(name + surname);
    $("#engineer .species").text(species);
    $("#engineer .gender").text(gender);
    $("#engineer .age").text(age);
    $("#engineer .position").text(pos);
    $("#engineer .personality").text(pers);
    $("#engineer .appearance").text(appearance);
    $("#engineer .hobby").text(hobby);
    $("#engineer .notes").text(notes);

    species = specGen();
    nation = nationGen();
    gender = genderGen();
    rank = rankGen();
    name = nameGen();
    surname = surNameGen();
    age = ageGen();
    pos = posGen();
    pers = persGen();
    skin = skinGen();
    hair = hairGen();
    eye = eyeGen();
    body = bodyGen();
    hobby = hobGen();
    notes = notesGen();
    appearance = appearanceGen(body, skin, eye, hair);
    var counselor = new Character(name, surname, gender, age,species, pers, hobby);
    characterArray.push(counselor);
    $("#counselor .name").text(name + surname);
    $("#counselor .species").text(species);
    $("#counselor .gender").text(gender);
    $("#counselor .age").text(age);
    $("#counselor .position").text(pos);
    $("#counselor .personality").text(pers);
    $("#counselor .appearance").text(appearance);
    $("#counselor .hobby").text(hobby);
    $("#counselor .notes").text(notes);


    ship = shipGen();
    $("#ship").text(ship);
    $("#captain .relationships").text(relGen(0, characterArray));
    $("#first-officer .relationships").text(relGen(1, characterArray));
    $("#science-officer .relationships").text(relGen(2, characterArray));
    $("#security-officer .relationships").text(relGen(3, characterArray));
    $("#doctor .relationships").text(relGen(4, characterArray));
    $("#engineer .relationships").text(relGen(5, characterArray));
    $("#counselor .relationships").text(relGen(6, characterArray));
    $("#chargen").show();
  });
  $('#captain-button').click(function(){
    species = specGen();
    nation = nationGen();
    gender = genderGen();
    rank = rankGen();
    name = nameGen();
    surname = surNameGen();
    age = ageGen();
    pos = posGen();
    pers = persGen();
    skin = skinGen();
    hair = hairGen();
    body = bodyGen();
    eye = eyeGen();
    hobby = hobGen();
    appearance = appearanceGen(body, skin, eye, hair);
    notes = notesGen()
    var captain = new Character(name, surname, gender, age,species, pers, hobby);
    characterArray[0] = captain;
    // relationship = relGen(0, characterArray);
    $("#captain .name").text(name + surname);
    $("#captain .species").text(species);
    $("#captain .gender").text(gender);
    $("#captain .age").text(age);
    $("#captain .position").text(pos);
    $("#captain .personality").text(pers);
    $("#captain .appearance").text(appearance);
    $("#captain .notes").text(notes);
    $("#captain .hobby").text(hobby);
    $("#captain .relationships").text(relGen(0, characterArray));
    $("#first-officer .relationships").text(relGen(1, characterArray));
    $("#science-officer .relationships").text(relGen(2, characterArray));
    $("#security-officer .relationships").text(relGen(3, characterArray));
    $("#doctor .relationships").text(relGen(4, characterArray));
    $("#engineer .relationships").text(relGen(5, characterArray));
    $("#counselor .relationships").text(relGen(6, characterArray));}
  );

$('#first-button').click(function(){
  species = specGen();
  nation = nationGen();
  gender = genderGen();
  rank = rankGen();
  name = nameGen();
  surname = surNameGen();
  age = ageGen();
  pos = posGen();
  pers = persGen();
  skin = skinGen();
  hair = hairGen();
  eye = eyeGen();
  body = bodyGen();
  hobby = hobGen();
  notes = notesGen();
  appearance = appearanceGen(body, skin, eye, hair);
  var firstOfficer = new Character(name, surname, gender, age,species, pers, hobby);
  characterArray[1] = firstOfficer;
  $("#first-officer .name").text(name + surname);
  $("#first-officer .species").text(species);
  $("#first-officer .gender").text(gender);
  $("#first-officer .age").text(age);
  $("#first-officer .position").text(pos);
  $("#first-officer .personality").text(pers);
  $("#first-officer .appearance").text(appearance);
  $("#first-officer .hobby").text(hobby);
  $("#first-officer .notes").text(notes);
  $("#captain .relationships").text(relGen(0, characterArray));
  $("#first-officer .relationships").text(relGen(1, characterArray));
  $("#science-officer .relationships").text(relGen(2, characterArray));
  $("#security-officer .relationships").text(relGen(3, characterArray));
  $("#doctor .relationships").text(relGen(4, characterArray));
  $("#engineer .relationships").text(relGen(5, characterArray));
  $("#counselor .relationships").text(relGen(6, characterArray))});

$('#science-button').click(function(){
  species = specGen();
  nation = nationGen();
  gender = genderGen();
  rank = rankGen();
  name = nameGen();
  surname = surNameGen();
  age = ageGen();
  pos = posGen();
  pers = persGen();
  skin = skinGen();
  hair = hairGen();
  eye = eyeGen();
  body = bodyGen();
  hobby = hobGen();
  notes = notesGen();
  appearance = appearanceGen(body, skin, eye, hair);
  var scienceOfficer = new Character(name, surname, gender, age,species, pers, hobby);
  characterArray[2] = scienceOfficer;
  $("#science-officer .name").text(name + surname);
  $("#science-officer .species").text(species);
  $("#science-officer .gender").text(gender);
  $("#science-officer .age").text(age);
  $("#science-officer .position").text(pos);
  $("#science-officer .personality").text(pers);
  $("#science-officer .appearance").text(appearance);
  $("#science-officer .hobby").text(hobby);
  $("#science-officer .notes").text(notes);
  $("#captain .relationships").text(relGen(0, characterArray));
  $("#first-officer .relationships").text(relGen(1, characterArray));
  $("#science-officer .relationships").text(relGen(2, characterArray));
  $("#security-officer .relationships").text(relGen(3, characterArray));
  $("#doctor .relationships").text(relGen(4, characterArray));
  $("#engineer .relationships").text(relGen(5, characterArray));
  $("#counselor .relationships").text(relGen(6, characterArray))
});

$('#security-button').click(function(){
  species = specGen();
  nation = nationGen();
  gender = genderGen();
  rank = rankGen();
  name = nameGen();
  surname = surNameGen();
  age = ageGen();
  pos = posGen();
  pers = persGen();
  skin = skinGen();
  hair = hairGen();
  eye = eyeGen();
  body = bodyGen();
  hobby = hobGen();
  notes = notesGen();
  appearance = appearanceGen(body, skin, eye, hair);
  var securityOfficer = new Character(name, surname, gender, age,species, pers, hobby);
  characterArray[3] = securityOfficer;
  $("#security-officer .name").text(name + surname);
  $("#security-officer .species").text(species);
  $("#security-officer .gender").text(gender);
  $("#security-officer .age").text(age);
  $("#security-officer .position").text(pos);
  $("#security-officer .personality").text(pers);
  $("#security-officer .appearance").text(appearance);
  $("#security-officer .hobby").text(hobby);
  $("#security-officer .notes").text(notes);
  $("#captain .relationships").text(relGen(0, characterArray));
  $("#first-officer .relationships").text(relGen(1, characterArray));
  $("#science-officer .relationships").text(relGen(2, characterArray));
  $("#security-officer .relationships").text(relGen(3, characterArray));
  $("#doctor .relationships").text(relGen(4, characterArray));
  $("#engineer .relationships").text(relGen(5, characterArray));
  $("#counselor .relationships").text(relGen(6, characterArray))});

$('#doc-button').click(function(){
  species = specGen();
  nation = nationGen();
  gender = genderGen();
  rank = rankGen();
  name = nameGen();
  surname = surNameGen();
  age = ageGen();
  pos = posGen();
  pers = persGen();
  skin = skinGen();
  hair = hairGen();
  eye = eyeGen();
  body = bodyGen();
  hobby = hobGen();
  notes = notesGen();
  appearance = appearanceGen(body, skin, eye, hair);
  var doctor = new Character(name, surname, gender, age,species, pers, hobby);
  characterArray[4] = doctor;
  $("#doctor .name").text(name + surname);
  $("#doctor .species").text(species);
  $("#doctor .gender").text(gender);
  $("#doctor .age").text(age);
  $("#doctor .position").text(pos);
  $("#doctor .personality").text(pers);
  $("#doctor .appearance").text(appearance);
  $("#doctor .hobby").text(hobby);
  $("#doctor .notes").text(notes);
  $("#captain .relationships").text(relGen(0, characterArray));
  $("#first-officer .relationships").text(relGen(1, characterArray));
  $("#science-officer .relationships").text(relGen(2, characterArray));
  $("#security-officer .relationships").text(relGen(3, characterArray));
  $("#doctor .relationships").text(relGen(4, characterArray));
  $("#engineer .relationships").text(relGen(5, characterArray));
  $("#counselor .relationships").text(relGen(6, characterArray))});

$('#engineer-button').click(function(){
  species = specGen();
  nation = nationGen();
  gender = genderGen();
  rank = rankGen();
  name = nameGen();
  surname = surNameGen();
  age = ageGen();
  pos = posGen();
  pers = persGen();
  skin = skinGen();
  hair = hairGen();
  eye = eyeGen();
  body = bodyGen();
  hobby = hobGen();
  notes = notesGen();
  appearance = appearanceGen(body, skin, eye, hair);
  var engineer = new Character(name, surname, gender, age,species, pers, hobby);
  characterArray[5] = engineer;
  $("#engineer .name").text(name + surname);
  $("#engineer .species").text(species);
  $("#engineer .gender").text(gender);
  $("#engineer .age").text(age);
  $("#engineer .position").text(pos);
  $("#engineer .personality").text(pers);
  $("#engineer .appearance").text(appearance);
  $("#engineer .hobby").text(hobby);
  $("#engineer .notes").text(notes);
  $("#captain .relationships").text(relGen(0, characterArray));
  $("#first-officer .relationships").text(relGen(1, characterArray));
  $("#science-officer .relationships").text(relGen(2, characterArray));
  $("#security-officer .relationships").text(relGen(3, characterArray));
  $("#doctor .relationships").text(relGen(4, characterArray));
  $("#engineer .relationships").text(relGen(5, characterArray));
  $("#counselor .relationships").text(relGen(6, characterArray))});

$('#counselor-button').click(function(){
  species = specGen();
  nation = nationGen();
  gender = genderGen();
  rank = rankGen();
  name = nameGen();
  surname = surNameGen();
  age = ageGen();
  pos = posGen();
  pers = persGen();
  skin = skinGen();
  hair = hairGen();
  eye = eyeGen();
  body = bodyGen();
  hobby = hobGen();
  notes = notesGen();
  appearance = appearanceGen(body, skin, eye, hair);
  var counselor = new Character(name, surname, gender, age,species, pers, hobby);
  characterArray[6] = counselor;
  $("#counselor .name").text(name + surname);
  $("#counselor .species").text(species);
  $("#counselor .gender").text(gender);
  $("#counselor .age").text(age);
  $("#counselor .position").text(pos);
  $("#counselor .personality").text(pers);
  $("#counselor .appearance").text(appearance);
  $("#counselor .hobby").text(hobby);
  $("#counselor .notes").text(notes);
  $("#captain .relationships").text(relGen(0, characterArray));
  $("#first-officer .relationships").text(relGen(1, characterArray));
  $("#science-officer .relationships").text(relGen(2, characterArray));
  $("#security-officer .relationships").text(relGen(3, characterArray));
  $("#doctor .relationships").text(relGen(4, characterArray));
  $("#engineer .relationships").text(relGen(5, characterArray));
  $("#counselor .relationships").text(relGen(6, characterArray))});

$('#ship-button').click(function(){
  ship = shipGen();
  $("#ship").text(ship);
});

});
