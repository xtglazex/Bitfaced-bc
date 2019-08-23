const {Builder, By, Key, until} = require('selenium-webdriver');
const {ignore,suite} = require('selenium-webdriver/testing');
const {assert} = require('assert');

    var firstNameList = ['Josephine',	'Art',	'Lenna',	'Donette',	'Simona',	'Mitsue',	'Leota',	'Sage',	'Kris',	'Minna',	'Abel',	'Kiley',	'Graciela',	'Cammy',	'Mattie',	'Meaghan',	'Gladys',	'Yuki',	'Fletcher',	'Bette',	'Veronika',	'Willard',	'Maryann',	'Alisha',	'Allene',	'Chanel',	'Ezekiel',	'Willow',	'Bernardo',	'Ammie',	'Francine',	'Ernie',	'Albina',	'Alishia',	'Solange',	'Jose',	'Rozella',	'Valentine',	'Kati',	'Youlanda',	'Dyan',	'Roxane',	'Lavera',	'Erick',	'Fatima',	'Jina',	'Kanisha',	'Emerson',	'Blair',	'Brock',	'Lorrie',	'Sabra',	'Marjory',	'Karl',	'Tonette',	'Amber',	'Shenika',	'Delmy',	'Deeanna',	'Blondell',	'Jamal',	'Cecily',	'Carmelina',	'Maurine',	'Tawna',	'Penney',	'Elly',	'Ilene',	'Vallie',	'Kallie',	'Johnetta',	'Bobbye',	'Micaela',	'Tamar',	'Moon',	'Laurel',	'Delisa',	'Viva',	'Elza',	'Devorah',	'Timothy',	'Arlette',	'Dominque',	'Lettie',	'Myra',	'Stephaine',	'Lai',	'Stephen',	'Tyra',	'Tammara',	'Cory',	'Danica',	'Wilda',	'Elvera',	'Carma',	'Malinda',	'Natalie',	'Lisha',	'Arlene',	'Alease',	'Louisa',	'Angella',	'Cyndy',	'Rosio',	'Celeste',	'Twana',	'Estrella',	'Donte',	'Tiffiny',	'Edna',	'Sue',	'Jesusa',	'Rolland',	'Pamella',	'Glory',	'Shawna',	'Brandon',	'Scarlet',	'Oretha',	'Ty',	'Xuan',	'Lindsey',	'Devora',	'Herman',	'Rory',	'Talia',	'Van',	'Lucina',	'Bok',	'Rolande',	'Howard',	'Kimbery',	'Thurman',	'Becky',	'Beatriz',	'Marti',	'Nieves',	'Leatha',	'Valentin',	'Melissa',	'Sheridan',	'Bulah',	'Audra',	'Daren',	'Fernanda',	'Gearldine',	'Chau',	'Theola',	'Cheryl',	'Laticia',	'Carissa',	'Lezlie',	'Ozell',	'Arminda',	'Reita',	'Yolando',	'Lizette',	'Gregoria',	'Carin',	'Chantell',	'Dierdre',	'Larae',	'Latrice',	'Kerry',	'Dorthy',	'Fannie',	'Evangelina',	'Novella',	'Clay',	'Jennifer',	'Irma',	'Eun',	'Sylvia',	'Nana',	'Layla',	'Joesph',	'Annabelle',	'Stephaine',	'Nelida',	'Marguerita',	'Carmela',	'Junita',	'Claribel',	'Benton',	'Hillary',	'Merilyn',	'Teri',	'Merlyn',	'Georgene',	'Jettie',	'Lemuel',	'Melodie',	'Candida',	'Karan',	'Andra',	'Felicidad',	'Belen',	'Gracia',	'Jolanda',	'Barrett',	'Helga',	'Ashlyn',	'Fausto',	'Ronny',	'Marge',	'Norah',	'Aliza',	'Mozell',	'Viola',	'Franklyn',	'Willodean',	'Beckie',	'Rebecka',	'Frederica',	'Glen',	'Freeman',	'Vincent',	'Rima',	'Glendora',	'Avery',	'Cristy',	'Nicolette',	'Tracey',	'Virgina',	'Tiera',	'Alaine',	'Earleen',	'Leonida',	'Ressie',	'Justine',	'Eladia',	'Chaya',	'Gwenn',	'Salena',	'Yoko',	'Taryn',	'Katina',	'Rickie',	'Alex',	'Lashon',	'Lauran',	'Ceola',	'My',	'Lorrine',	'Peggie',	'Marvel',	'Daron',	'An',	'Portia',	'Rhea',	'Benedict',	'Alyce',	'Heike',	'Carey',	'Dottie',	'Deandrea',	'Kimberlie',	'Martina',	'Skye',	'Jade',	'Charlene',	'Geoffrey',	'Stevie',	'Pamella',	'Harrison',	'Johnna',	'Buddy',	'Dalene',	'Jerry',	'Haydee',	'Joseph',	'Deonna',	'Raymon',	'Alecia',	'Ma',	'Detra',	'Terrilyn',	'Salome',	'Garry',	'Matthew',	'Theodora',	'Noah',	'Carmen',	'Lavonda',	'Junita',	'Herminia',	'Casie',	'Reena',	'Mirta',	'Cathrine',	'Filiberto',	'Raul',	'Sarah',	'Lucy',	'Judy',	'Yvonne',	'Kayleigh',	'Felix',	'Tresa',	'Kristeen',	'Jenelle',	'Renea',	'Olive',	'Ligia',	'Christiane',	'Goldie',	'Loreta',	'Fabiola',	'Amie',	'Raina',	'Erinn',	'Cherry',	'Kattie',	'Lilli',	'Whitley',	'Barbra',	'Hermila',	'Jesusita',	'Caitlin',	'Roosevelt',	'Helaine',	'Lorean',	'France',	'Justine',	'Adelina',	'Derick',	'Jerry',	'Leota',	'Jutta',	'Aja',	'Kirk',	'Leonora',	'Winfred',	'Tarra',	'Corinne',	'Dulce',	'Kate',	'Kaitlyn',	'Sherita',	'Lashawnda',	'Ernest',	'Nobuko',	'Lavonna',	'Lashaunda',	'Mariann',	'Helene',	'Roselle',	'Samira',	'Margart',	'Kristofer',	'Weldon',	'Shalon',	'Denise',	'Louvenia',	'Audry',	'Kristel',	'Vincenza',	'Elouise',	'Venita',	'Kasandra',	'Xochitl',	'Maile',	'Krissy',	'Pete',	'Linn',	'Paris',	'Wynell',	'Quentin',	'Regenia',	'Sheron',	'Izetta',	'Rodolfo',	'Zona',	'Serina',	'Paz',	'Markus',	'Jaclyn',	'Cyril',	'Gayla',	'Erick',	'Jennie',	'Mitsue',	'Ciara',	'Galen',	'Truman',	'Gail',	'Dalene',	'Gertude',	'Lizbeth',	'Glenn',	'Lashandra',	'Lenna',	'Laurel',	'Mireya',	'Annelle',	'Dean',	'Levi',	'Sylvie',	'Sharee',	'Cordelia',	'Mollie',	'Brett',	'Teddy',	'Tasia',	'Hubert',	'Arthur',	'Vilma',	'Billye',	'Glenna',	'Mitzie',	'Bernardine',	'Staci',	'Nichelle',	'Janine',	'Ettie',	'Eden',	'Lynelle',	'Merissa',	'Golda',	'Catarina',	'Virgie',	'Jolene',	'Keneth',	'Rikki',	'Elke',	'Hoa',	'Trinidad',	'Mari',	'Selma',	'Antione',	'Luisa',	'Clorinda',	'Dick',	'Ahmed',	'Iluminada',	'Joanna',	'Caprice',	'Stephane',	'Quentin',	'Annmarie',	'Shonda',	'Cecil',	'Jeanice',	'Josphine',	'Daniel',	'Cassi',	'Britt',	'Adell',	'Jacqueline',	'Lonny',	'Lonna',	'Cristal',	'Kenneth',	'Elli',	'Alline',	'Sharika',	'Nu',	'Daniela',	'Cecilia',	'Leslie',	'Nan',	'Izetta',	'Tegan',	'Ruthann',	'Joni',	'Vi',	'Colette',	'Malcolm',	'Ryan',	'Jess',	'Sharen',	'Nickolas',	'Gary',	'Diane',	'Roslyn',	'Glory',	'Rasheeda',	'Alpha',	'Refugia',	'Shawnda',	'Mona',	'Gilma',	'Janey',	'Lili',	'Loren',	'Dorothy',	'Gail',	'Catalina',	'Lawrence',	'Carlee',	'Thaddeus',	'Jovita',	'Alesia',	'Lai',	'Brittni',	'Raylene',	'Flo',	'Jani',	'Chauncey'];
    var lastNameList = ['Mcneil',	'Taylor',	'Clark',	'Petersen',	'Manning',	'Davenport',	'Shah',	'Moyer',	'Crawford',	'Weaver',	'Mayo',	'Cook',	'English',	'Archer',	'Anderson',	'Lewis',	'Fritz',	'Ruiz',	'Lane',	'Boone',	'Blanchard',	'Hardy',	'Sanchez',	'Lozano',	'Wolf',	'Tucker',	'Berger',	'Guerra',	'Coleman',	'Coffey',	'Parks',	'Foley',	'Pratt',	'Golden',	'Tate',	'Choi',	'Simmons',	'Knapp',	'Moody',	'Blankenship',	'Crosby',	'Schneider',	'Logan',	'Montes',	'James',	'Rodgers',	'Ho',	'Arellano',	'Hutchinson',	'Byrd',	'Keith',	'Riley',	'Townsend',	'Mcknight',	'Buck',	'Strickland',	'Pope',	'Goodwin',	'Key',	'Charles',	'Callahan',	'Sharp',	'Buckley',	'Brennan',	'Hahn',	'Reed',	'Peters',	'Spence',	'Sloan',	'Atkins',	'Potter',	'Reilly',	'Guerrero',	'Hood',	'Morgan',	'Salazar',	'Mccann',	'Krause',	'Bruce',	'Drake',	'Conway',	'Oliver',	'Stuart',	'Ewing',	'Shaw',	'Alvarado',	'Kemp',	'Houston',	'Brooks',	'Macdonald',	'Wilcox',	'Hanson',	'Freeman',	'Parsons',	'Beltran',	'Thompson',	'Robinson',	'Nichols',	'Bishop',	'Stout',	'Vazquez',	'Fleming',	'Perkins',	'Chase',	'Alvarez',	'Riddle',	'Espinoza',	'Chen',	'Campbell',	'Gregory',	'Paul',	'Walter',	'Thornton',	'Stevenson',	'Moses',	'Kent',	'Figueroa',	'Benton',	'Delacruz',	'Luna',	'Holden',	'Stevens',	'Phelps',	'Blackburn',	'Rocha',	'Henry',	'Everett',	'Zimmerman',	'Rasmussen',	'Trevino',	'Hart',	'Pearson',	'Daniel',	'Lynn',	'Park',	'Oneal',	'Giles',	'Maddox',	'Fry',	'Montgomery',	'Sandoval',	'Dudley',	'Glass',	'Roth',	'Erickson',	'Woodward',	'Schultz',	'Meza',	'Graham',	'Harvey',	'Hancock',	'Moore',	'Lambert',	'Clarke',	'Fernandez',	'Mcconnell',	'Owens',	'Roy',	'Woodard',	'Hardin',	'Booth',	'Haynes',	'Stanton',	'Bradshaw',	'Dodson',	'Booker',	'Gilmore',	'Hoffman',	'Hubbard',	'Cooley',	'Raymond',	'Solis',	'Villegas',	'Hendrix',	'Small',	'Stephens',	'Schmidt',	'Deleon',	'Hill',	'Kelly',	'Waters',	'Griffin',	'Jennings',	'Conley',	'Lyons',	'Nolan',	'Miranda',	'Whitney',	'Ritter',	'Savage',	'Acosta',	'Grant',	'Ochoa',	'Ellison',	'Mccall',	'Ware',	'Bowers',	'Maldonado',	'Dorsey',	'Cannon',	'Branch',	'Mathews',	'Oconnell',	'Pacheco',	'Weber',	'Long',	'Morrow',	'Burgess',	'Pierce',	'Edwards',	'Hull',	'Lawrence',	'Rice',	'Beasley',	'Williams',	'Ball',	'Payne',	'Mcpherson',	'Lucas',	'Stanley',	'Harding',	'Cunningham',	'King',	'Kaiser',	'Harper',	'Mcclure',	'Cortez',	'Mcgrath',	'Porter',	'Green',	'Klein',	'Curry',	'Gallegos',	'Mccoy',	'Pitts',	'David',	'Mosley',	'Warren',	'Blake',	'Obrien',	'Wiley',	'Davidson',	'Holloway',	'Galloway',	'Hunter',	'Alexander',	'Nelson',	'Compton',	'Valenzuela',	'Baird',	'Duarte',	'Schwartz',	'Carlson',	'Pennington',	'Sanford',	'Wade',	'Robles',	'Hernandez',	'Dyer',	'Kirk',	'Carroll',	'Daniels',	'Morris',	'Haas',	'Hawkins',	'Mcmahon',	'Frank',	'Travis',	'Campos',	'Swanson',	'Jenkins',	'Hamilton',	'Suarez',	'Greene',	'Reese',	'Brady',	'Henderson',	'Estrada',	'Flynn',	'Norton',	'Lester',	'Vasquez',	'Mooney',	'Villanueva',	'Hartman',	'Nielsen',	'Craig',	'Glenn',	'Cline',	'Knox',	'Baxter',	'Mann',	'Arias',	'Cooke',	'Tyler',	'Page',	'Burton',	'Meyers',	'Bautista',	'Contreras',	'Gardner',	'Padilla',	'Chan',	'Braun',	'Anthony',	'Mccarthy',	'Barber',	'Hurst',	'Sexton',	'Hines',	'Cruz',	'Fischer',	'Bell',	'Andersen',	'Mclaughlin',	'Thomas',	'Bolton',	'Esparza',	'Webb',	'Ayers',	'Martin',	'Garrison',	'Jensen',	'Lutz',	'Christian',	'Sweeney',	'Miller',	'Barron',	'Yates',	'Frazier',	'Orozco',	'Kidd',	'Yu',	'Mercer',	'Russo',	'Hicks',	'Krueger',	'Snyder',	'Leonard',	'Kelley',	'Mendoza',	'Rios',	'Johns',	'Roman',	'Olson',	'Case',	'Mcintyre',	'Bauer',	'Perez',	'Huynh',	'Farmer',	'Fitzgerald',	'Pollard',	'Ray',	'Franco',	'Singh',	'Miles',	'Yang',	'Barry',	'Brandt',	'Duncan',	'Davies',	'Waller',	'Morton',	'Herman',	'Gross',	'Hooper',	'Nicholson',	'Schaefer',	'Graves',	'Silva',	'Medina',	'Maxwell',	'Roberson',	'Curtis',	'Grimes',	'Hickman',	'Landry',	'Frye',	'Mckinney',	'Chaney',	'Rosario',	'Nguyen',	'Mckay',	'Smith',	'Schroeder',	'Steele',	'Gibbs',	'Mcdonald',	'Cox',	'Barker',	'Ashley',	'Pittman',	'Kline',	'Walton',	'Richard',	'Dominguez',	'Butler',	'George',	'Cantu',	'Rubio',	'Wise',	'Fowler',	'Young',	'Mays',	'Hogan',	'Gibson',	'House',	'Winters',	'Duffy',	'Dickson',	'Singleton',	'Barton',	'Trujillo',	'Forbes',	'Carpenter',	'Solomon',	'Mejia',	'Rodriguez',	'Tran',	'Cross',	'Hughes',	'Bright',	'Allison',	'Wilkins',	'Terry',	'Horton',	'Noble',	'Good',	'Cochran',	'Harris',	'Mahoney',	'West',	'Donaldson',	'Fitzpatrick',	'Strong',	'Davila',	'Heath',	'Holt',	'Wong',	'Jimenez',	'Pineda',	'Larsen',	'Newton',	'Mora',	'Michael',	'Weiss',	'Macias',	'Colon',	'Gates',	'Melendez',	'Rose',	'Patel',	'Marsh',	'Vega',	'Maynard',	'Cameron',	'Garner',	'Norman',	'Hudson',	'Martinez',	'Benson',	'Chapman',	'Cowan',	'Hebert',	'Richmond',	'Abbott',	'Villa',	'Calhoun',	'Turner',	'Becker',	'Santana',	'Stone',	'Howard',	'Romero',	'Cohen',	'Soto',	'Bonilla',	'Walker',	'Kaufman',	'Gay',	'Lindsey',	'Whitaker',	'Herrera',	'Velazquez',	'Shea',	'Wang',	'Baldwin',	'Rosales',	'Diaz',	'Fuller',	'Mills',	'Hunt',	'Hess',	'Mitchell',	'Mullen',	'Spencer',	'Underwood',	'Levine',	'Castillo'];
    function creatFirstName(){
    randomFirst = firstNameList[Math.floor(Math.random() * firstNameList.length)]
        return randomFirst
}
    function createLastName(){
    randomLast = lastNameList[Math.floor(Math.random() * lastNameList.length)]
        return randomLast
}
    var firstName = (creatFirstName())
    var lastName = (createLastName())

    var trialEmailFiller = (firstName + lastName)

    var Trial_Email = ('tyler.glaze+' + trialEmailFiller + '@bombbomb.com') 

const Create_Quicky_Trial = async (driver) => {
    await driver.get('http://dev.app.bombbomb.com/app')
    await driver.findElement(By.name('email')).sendKeys('tyler.glaze@bombbomb.com')
    await driver.findElement(By.name('password')).sendKeys("vg1dyv68", Key.RETURN)
    await driver.wait(until.elementsLocated(By.className('myAccountDownArrow')))
    await driver.findElement(By.className('myAccountDownArrow')).click()
    await driver.findElement(By.css("#myAccount > div.myAccountDropDown")).click()
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#myAccount > div.myAccountDropDown > ul:nth-child(2) > li:nth-child(3) > a"))))
    await driver.findElement(By.css("#myAccount > div.myAccountDropDown > ul:nth-child(2) > li:nth-child(3) > a")).click()
    await driver.findElement(By.css("body > div.admin-grey-box > div.admin-header-links.header-padding > a:nth-child(14)")).click()
    Trial_First_Name = await driver.findElement(By.name("firstname")).getAttribute("value")
    Trial_Last_Name = await driver.findElement(By.name("lastname")).getAttribute("value")
    await driver.findElement(By.name("email")).clear()
    await driver.findElement(By.name("email")).sendKeys(Trial_Email)
    await driver.findElement(By.css(".quickieForm > input:nth-child(13)")).click() 
}

const Logout = async (driver) => {
    await driver.get('http://dev.app.bombbomb.com/app')
    await driver.wait(until.elementsLocated(By.className('myAccountDownArrow')))
    await driver.findElement(By.css("#myAccount > div.myAccountDropDown")).click()
    await driver.wait(until.elementIsVisible(driver.findElement(By.css('#myAccount > div.myAccountDropDown > ul:nth-child(2) > li.myAccountDropDownItem.logout > a'))))
    await driver.findElement(By.css('#myAccount > div.myAccountDropDown > ul:nth-child(2) > li.myAccountDropDownItem.logout > a')).click()
}

const Create_Normal_Trial = async (driver) => {
    await driver.get('http://dev.app.bombbomb.com/app')
    await driver.findElement(By.css('body > article > div > div.clearfix.links-container.multi-link > div.link-container.signupButton > a')).click()
    await driver.findElement(By.name('email')).sendKeys(Trial_Email)
    await driver.findElement(By.name('password')).sendKeys('Asdf123!@0')
    await driver.findElement(By.css('#sso-signup-one')).click()
    await driver.findElement(By.id('firstname')).sendKeys(firstName)
    await driver.findElement(By.id('lastname')).sendKeys(lastName)
    await driver.findElement(By.id('phone_number')).sendKeys('7191231234')
    await driver.findElement(By.css('#newTrial > div:nth-child(4) > div:nth-child(1) > select > option:nth-child(5)')).click()
    await driver.findElement(By.id('companyName')).sendKeys('Test Company')
    await driver.findElement(By.css('#getAddedUserInformation > div:nth-child(3) > select > option:nth-child(2)')).click()
    await driver.findElement(By.id('sso-signup-two')).click()
    await driver.wait(until.elementLocated(By.className('button-bluebee')))
    await driver.findElement(By.css('span.page-flow-step:nth-child(3)')).click()
    await driver.findElement(By.css('input.button-taos-sky:nth-child(4)')).click()
}

const Login_To_Admin = async (driver) => {
    await driver.get('http://dev.app.bombbomb.com/app')
    await driver.findElement(By.name('email')).sendKeys('qa@bombbomb.com')
    await driver.findElement(By.name('password')).sendKeys('Asdf123!@0')
    await driver.findElement(By.id('sso-login-one')).click()
    await driver.wait(until.elementLocated(By.className('myAccountDownArrow')))
    await driver.findElement(By.className('myAccountDownArrow')).click()
    await driver.findElement(By.css("#myAccount > div.myAccountDropDown > ul:nth-child(2) > li:nth-child(3) > a")).click()
}

const Client_Seach_Chargify = async (driver) => {
    await driver.findElement(By.id('search_term')).sendKeys(Trial_Email)
    await driver.findElement(By.css('html body.admin div#wrapper.clients div.admin-clients form#search_clients div.formContainer input.clients')).click()
    await driver.wait(until.elementsLocated(By.css('.admin-clients-search-profile-images > img:nth-child(1)')))
    await driver.findElement(By.xpath('/html/body/div[4]/div/table/tbody/tr/td[4]/a[1]')).click()
}

const Payment_Module_Test = async (driver) => {
    
    await driver.get('http://bombbomb:knowing-grade@bombbomb.staging.wpengine.com/movement-mortgage/ind/')
    //insert asserts for buttons and pages
    await driver.findElement(By.className('src-javascript-modules-PaymentForm-styles__submit-button___2PQxg')).click()
    //insert asserts for all initial error messages 
    await driver.findElement(By.name('firstName')).sendKeys(firstName)
    await driver.findElement(By.name('lastName')).sendKeys(lastName)
    await driver.findElement(By.name('emailAddress')).sendKeys('a')
    await driver.findElement(By.className('src-javascript-modules-PaymentForm-styles__submit-button___2PQxg')).click()
    //insert assert for email too short error
    await driver.findElement(By.name('emailAddress')).clear()
    await driver.findElement(By.name('emailAddress')).sendKeys(Trial_Email)
    await driver.findElement(By.name('address')).sendKeys('1234 Paper St')
    await driver.findElement(By.name('city')).sendKeys('Colorado Springs')
    await driver.findElement(By.name('state')).sendKeys('a')
    //insert assert for Invalid State. Example: CO
    await driver.findElement(By.name('state')).sendKeys('aaa')
    //insert assert for Invalid State. Example: CO
    await driver.findElement(By.name('state')).clear()
    await driver.findElement(By.name('state')).sendKeys('CO')
    await driver.findElement(By.name('postalCode')).sendKeys('80920')
    await driver.findElement(By.name('creditCardNumber')).sendKeys('4')
    await driver.findElement(By.name('creditCardExpirationMonth')).sendKeys('1')
    // insert assert for Not a valid expiration month. Example: MM
    await driver.findElement(By.name('creditCardExpirationMonth')).sendKeys('19')
    // insert assert for Not a valid expiration month. Example: MM
    await driver.findElement(By.name('creditCardExpirationMonth')).clear()
    await driver.findElement(By.name('creditCardExpirationMonth')).sendKeys('19')
    await driver.findElement(By.name('creditCardExpirationYear')).sendKeys('1')
    // insert assert for Not a valid expiration year. Example: YY
    await driver.findElement(By.name('creditCardExpirationYear')).sendKeys('19')
    // insert assert for Not a valid expiration year. Example: YY
    await driver.findElement(By.name('creditCardExpirationYear')).clear()
    await driver.findElement(By.name('creditCardExpirationYear')).sendKeys('18')
    await driver.findElement(By.name('creditCardCvc')).sendKeys('1')
    // insert assert for Not a valid code. Example: 123
    await driver.findElement(By.name('creditCardCvc')).sendKeys('1234')
    // insert assert for Not a valid code. Example: 123
    await driver.findElement(By.name('creditCardCvc')).clear()
    await driver.findElement(By.name('creditCardCvc')).sendKeys('123')
    // insert asser for errors 'Credit card expiration month: must be a valid month. Credit card: cannot be expired. Credit card number: must be a valid credit card number.' 
    await driver.findElement(By.name('emailAddress')).clear()
    await driver.findElement(By.name('creditCardNumber')).clear()
    await driver.findElement(By.name('creditCardExpirationMonth')).clear()
    await driver.findElement(By.name('creditCardExpirationYear')).clear()
    await driver.findElement(By.name('emailAddress')).sendKeys('tyler.glaze+invalidemail@bombbomb.com')
    await driver.findElement(By.name('creditCardNumber')).sendKeys('1')
    await driver.findElement(By.name('creditCardExpirationMonth')).sendKeys('10')
    await driver.findElement(By.name('creditCardExpirationYear')).sendKeys('20')
    await driver.findElement(By.className('src-javascript-modules-PaymentForm-styles__submit-button___2PQxg')).click()
    // insert assert for errors Either billing details or email address were invalid
    await driver.findElement(By.name('emailAddress')).clear()
    await driver.findElement(By.name('emailAddress')).sendKeys(Trial_Email)
}

    module.exports={
        Client_Seach_Chargify,
        Login_To_Admin,
        Payment_Module_Test,
        Create_Quicky_Trial,
        Logout,
        Create_Normal_Trial,
    }
