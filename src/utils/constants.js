const imageUrls = [
    'https://content.rotowire.com/images/teamlogo/football/100BAL.png?v=3',
    'https://content.rotowire.com/images/teamlogo/football/100BUF.png?v=3',
    'https://content.rotowire.com/images/teamlogo/football/100CIN.png?v=3',
    'https://content.rotowire.com/images/teamlogo/football/100CLE.png?v=3',
    'https://content.rotowire.com/images/teamlogo/football/100DEN.png?v=3',
    'https://content.rotowire.com/images/teamlogo/football/100HOU.png?v=3',
    'https://content.rotowire.com/images/teamlogo/football/100IND.png?v=3',
    'https://content.rotowire.com/images/teamlogo/football/100JAX.png?v=3',
    'https://content.rotowire.com/images/teamlogo/football/100KC.png?v=3',
    'https://content.rotowire.com/images/teamlogo/football/100LAC.png?v=3',
    'https://content.rotowire.com/images/teamlogo/football/100LV.png?v=3',
    'https://content.rotowire.com/images/teamlogo/football/100MIA.png?v=3',
    'https://content.rotowire.com/images/teamlogo/football/100NE.png?v=3',
    'https://content.rotowire.com/images/teamlogo/football/100NYJ.png?v=3',
    'https://content.rotowire.com/images/teamlogo/football/100PIT.png?v=3',
    'https://content.rotowire.com/images/teamlogo/football/100TEN.png?v=3',
    'https://content.rotowire.com/images/teamlogo/football/100ARI.png?v=3',
    'https://content.rotowire.com/images/teamlogo/football/100ATL.png?v=3',
    'https://content.rotowire.com/images/teamlogo/football/100CAR.png?v=3',
    'https://content.rotowire.com/images/teamlogo/football/100CHI.png?v=3',
    'https://content.rotowire.com/images/teamlogo/football/100DAL.png?v=3',
    'https://content.rotowire.com/images/teamlogo/football/100DET.png?v=3',
    'https://content.rotowire.com/images/teamlogo/football/100GB.png?v=3',
    'https://content.rotowire.com/images/teamlogo/football/100LAR.png?v=3',
    'https://content.rotowire.com/images/teamlogo/football/100MIN.png?v=3',
    'https://content.rotowire.com/images/teamlogo/football/100NO.png?v=3',
    'https://content.rotowire.com/images/teamlogo/football/100NYG.png?v=3',
    'https://content.rotowire.com/images/teamlogo/football/100PHI.png?v=3',
    'https://content.rotowire.com/images/teamlogo/football/100SEA.png?v=3',
    'https://content.rotowire.com/images/teamlogo/football/100SF.png?v=3',
    'https://content.rotowire.com/images/teamlogo/football/100TB.png?v=3',
    'https://content.rotowire.com/images/teamlogo/football/100WAS.png?v=3',
];

const teams = [
    {
        abbr: 'FA',
        name: 'Agent libre',
    },
    {
        abbr: 'ARI',
        name: 'Cardinals Arizona',
    },
    {
        abbr: 'ATL',
        name: 'Falcons Atlanta',
    },
    {
        abbr: 'BAL',
        name: 'Ravens Baltimore',
    },
    {
        abbr: 'BUF',
        name: 'Bills Buffalo',
    },
    {
        abbr: 'CAR',
        name: 'Panthers Caroline',
    },
    {
        abbr: 'CHI',
        name: 'Bears Chicago',
    },
    {
        abbr: 'CIN',
        name: 'Bengals Cincinnati',
    },
    {
        abbr: 'CLE',
        name: 'Browns Cleveland',
    },
    {
        abbr: 'DAL',
        name: 'Cowboys Dallas',
    },
    {
        abbr: 'DEN',
        name: 'Broncos Denver',
    },
    {
        abbr: 'DET',
        name: 'Lions Detroit',
    },
    {
        abbr: 'GB',
        name: 'Packers Green Bay',
    },
    {
        abbr: 'HOU',
        name: 'Texans Houston',
    },
    {
        abbr: 'IND',
        name: 'Colts Indianapolis',
    },
    {
        abbr: 'JAX',
        name: 'Jaguars Jacksonville',
    },
    {
        abbr: 'KC',
        name: 'Chiefs Kansas City',
    },
    {
        abbr: 'MIA',
        name: 'Dolphins Miami',
    },
    {
        abbr: 'MIN',
        name: 'Vikings Minnesota',
    },
    {
        abbr: 'NE',
        name: 'Patriots N. - Angleterre',
    },
    {
        abbr: 'NO',
        name: 'Saints N. - Orléans',
    },
    {
        abbr: 'NYG',
        name: 'Giants New-York',
    },
    {
        abbr: 'NYJ',
        name: 'Jets New-York',
    },
    {
        abbr: 'LV',
        name: 'Raiders Las Vegas',
    },
    {
        abbr: 'PHI',
        name: 'Eagles Philadelphie',
    },
    {
        abbr: 'PIT',
        name: 'Steelers Pittsburgh',
    },
    {
        abbr: 'LAC',
        name: 'Chargers Los Angeles',
    },
    {
        abbr: 'SEA',
        name: 'Seahawks Seattle',
    },
    {
        abbr: 'SF',
        name: '49ers San Francisco',
    },
    {
        abbr: 'LAR',
        name: 'Rams Los Angeles',
    },
    {
        abbr: 'TB',
        name: 'Buccaneers Tampa Bay',
    },
    {
        abbr: 'TEN',
        name: 'Titans Tennesse',
    },
    {
        abbr: 'WAS',
        name: 'Redskins Washington',
    },
];

const positions = [
    {
        abbr: 'QB',
        name: 'Quart-arrière',
    },
    {
        abbr: 'RB',
        name: 'Porteur de ballon',
    },
    {
        abbr: 'TE',
        name: 'Ailier rapproché',
    },
    {
        abbr: 'WR',
        name: 'Receveur',
    },
    {
        abbr: 'S',
        name: 'Maraudeur',
    },
    {
        abbr: 'LB',
        name: 'Secondeur',
    },
    {
        abbr: 'DT',
        name: 'Bloqueur défensif',
    },
    {
        abbr: 'DE',
        name: 'Ailier défensif',
    },
    {
        abbr: 'OT',
        name: 'Bloqueur offensif',
    },
    {
        abbr: 'K',
        name: 'Botteur de précision',
    },
    {
        abbr: 'P',
        name: 'Botteur de dégagement',
    },
];

const resultsSample = [
    {
        team: 'Jacksonville Jaguars',
        player: 'Leonard Fournette',
        news:
            'Fournette (neck) is a possible name that could get traded in the coming weeks, Adam Schefter of ESPN reports.',
        headline: 'Discussed in trade rumors',
        teamAbbr: 'JAX',
        position: 'RB',
        injury: 'Neck',
        date: 'April 18, 2020',
        headlineFR: 'Discuté dans les rumeurs commerciales',
        newsFR:
            "Fournette (cou) est un nom possible qui pourrait s'échangé dans les semaines à venir, Adam Schefter des rapports ESPN.",
        _id: '5e9b996852d2b29b3443480c',
    },
    {
        team: 'Atlanta Falcons',
        player: 'Brian Hill',
        news:
            "Hill signed his original-round tender with the Falcons on Saturday, Will McFadden of the team's official site reports.",
        headline: 'Signs tender',
        teamAbbr: 'ATL',
        position: 'RB',
        injury: '',
        date: 'April 18, 2020',
        headlineFR: 'Signes tendres',
        newsFR:
            "Colline a signé son offre originale-ronde avec les Falcons samedi, Will McFadden des rapports sur le site officiel de l'équipe.",
        _id: '5e9b996852d2b29b3443480d',
    },
    {
        team: 'Free Agent',
        player: 'Laviska Shenault',
        news:
            'Shenault, who underwent core muscle surgery in early April, is expected to be 100 percent healthy in the coming week according to Dr. William Meyers, Ian Rapoport of NFL Network reports.',
        headline: 'Almost 100 percent healthy',
        teamAbbr: 'FA',
        position: 'WR',
        injury: 'Abdomen',
        date: 'April 18, 2020',
        headlineFR: 'Près de 100 pour cent en bonne santé',
        newsFR:
            'Shenault, qui a subi une chirurgie musculaire de base au début Avril, devrait être de 100 pour cent en bonne santé la semaine prochaine selon le Dr William Meyers, Ian Rapoport des rapports NFL Network.',
        _id: '5e9b996852d2b29b3443480e',
    },
    {
        team: 'Cleveland Browns',
        player: 'Kareem Hunt',
        news:
            'Hunt has signed his second-round contract tender with the Browns, Mary Kay Cabot of The Cleveland Plain Dealer reports.',
        headline: 'Inks contract tender',
        teamAbbr: 'CLE',
        position: 'RB',
        injury: '',
        date: 'April 17, 2020',
        headlineFR: 'Encres offres de contrat',
        newsFR:
            'Hunt a signé son deuxième tour tendre contrat avec les Browns, Mary Kay Cabot des rapports Cleveland Plain Dealer.',
        _id: '5e9b996852d2b29b3443480f',
    },
    {
        team: 'Free Agent',
        player: 'Trey Burton',
        news: 'The Bears will release Burton (hip), Adam Schefter of ESPN reports.',
        headline: 'Let go by Bears',
        teamAbbr: 'FA',
        position: 'TE',
        injury: 'Hip - Labrum',
        date: 'April 17, 2020',
        headlineFR: 'Lâchez par Bears',
        newsFR: 'Les Bears sortira Burton (hanche), Adam Schefter des rapports ESPN.',
        _id: '5e9b996852d2b29b34434810',
    },
    {
        team: 'Detroit Lions',
        player: 'Matthew Stafford',
        news:
            "General manager Bob Quinn said Stafford (back/hip) would be a full participant if the Lions were able to start their offseason program next week, Tim Twentyman of the Lions' official site reports.",
        headline: 'Healthy enough to practice',
        teamAbbr: 'DET',
        position: 'QB',
        injury: '',
        date: 'April 17, 2020',
        headlineFR: 'assez bonne santé pour la pratique',
        newsFR:
            "le directeur général Bob Quinn a déclaré Stafford (retour / hanche) serait un participant à part entière si les Lions ont pu commencer leur programme d'intersaison la semaine prochaine, Tim Twentyman des rapports sur le site officiel de Lions.",
        _id: '5e9b996852d2b29b34434811',
    },
    {
        team: 'Houston Texans',
        player: 'Will Fuller',
        news:
            "Fuller (sports hernia) has resumed working out, Drew Dougherty of the Texans' official site reports.",
        headline: 'Making progress with rehab',
        teamAbbr: 'HOU',
        position: 'WR',
        injury: 'Sports Hernia',
        date: 'April 17, 2020',
        headlineFR: 'Progresser avec rehab',
        newsFR:
            "Fuller (hernie sportive) a repris l'élaboration, Drew Dougherty des rapports sur le site officiel de Texans.",
        _id: '5e9b996852d2b29b34434812',
    },
    {
        team: 'New York Jets',
        player: 'Jamal Adams',
        news:
            "Adams doesn't intend to participate in the Jets' virtual, voluntary offseason program, Adam Schefter of ESPN reports.",
        headline: 'Skipping virtual offseason program',
        teamAbbr: 'NYJ',
        position: 'S',
        injury: '',
        date: 'April 17, 2020',
        headlineFR: 'Programme intersaison Skipping virtuel',
        newsFR:
            "Adams n'a pas l'intention de participer aux Jets de programme durant la saison morte virtuelle, volontaire, Adam Schefter des rapports ESPN.",
        _id: '5e9b996852d2b29b34434813',
    },
    {
        team: 'Cincinnati Bengals',
        player: 'Jacques Patrick',
        news:
            'Patrick signed a three-year contract with the Bengals on Thursday, Ben Baby of ESPN.com reports.',
        headline: 'Links up with Bengals',
        teamAbbr: 'CIN',
        position: 'RB',
        injury: '',
        date: 'April 16, 2020',
        headlineFR: 'Liens vers le haut avec Bengals',
        newsFR:
            'Patrick a signé un contrat de trois ans avec les Bengals jeudi, Ben bébé des rapports ESPN.com.',
        _id: '5e9b996852d2b29b34434814',
    },
    {
        team: 'San Francisco 49ers',
        player: 'Matt Breida',
        news:
            'Breida signed his restricted free agent tender Thursday, Adam Schefter of ESPN reports.',
        headline: 'Re-ups with 49ers',
        teamAbbr: 'SF',
        position: 'RB',
        injury: '',
        date: 'April 16, 2020',
        headlineFR: 'Re-ups avec 49ers',
        newsFR:
            "Breida signé son offre d'agent libre restrictif jeudi, Adam Schefter des rapports ESPN.",
        _id: '5e9b996852d2b29b34434815',
    },
    {
        team: 'Denver Broncos',
        player: 'Von Miller',
        news: 'Miller has a confirmed case of COVID-19, per Ian Rapoport of NFL Network.',
        headline: 'Confirmed case of COVID-19',
        teamAbbr: 'DEN',
        position: 'LB',
        injury: 'Illness',
        date: 'April 16, 2020',
        headlineFR: 'Cas confirmé de Covid-19',
        newsFR: 'Miller a un cas confirmé de Covid-19, par Ian Rapoport de NFL Network.',
        _id: '5e9b996852d2b29b34434816',
    },
    {
        team: 'Minnesota Vikings',
        player: 'Tajae Sharpe',
        news:
            "Sharpe's one-year, $1 million contract with the Vikings includes $675,000 guaranteed and another $500,000 available via incentives, Tom Pelissero of NFL Network reports.",
        headline: 'Gets $675k guaranteed',
        teamAbbr: 'MIN',
        position: 'WR',
        injury: '',
        date: 'April 16, 2020',
        headlineFR: 'Obtient 675k $ garantis',
        newsFR:
            'un an de Sharpe, 1 million $ contrat avec les Vikings comprend 675000 $ garantis et un autre 500 000 $ disponibles via des incitations, Tom Pelissero des rapports NFL Network.',
        _id: '5e9b996852d2b29b34434817',
    },
    {
        team: 'Los Angeles Chargers',
        player: 'Hunter Henry',
        news:
            'Henry, who agreed to sign his franchise tag, is still expected to sign a multi-year deal with the Chargers, Jeff Miller of the Los Angeles Times reports.',
        headline: 'Long-term extension looming?',
        teamAbbr: 'LAC',
        position: 'TE',
        injury: '',
        date: 'April 16, 2020',
        headlineFR: 'extension à long terme qui se profile?',
        newsFR:
            'Henry, qui a accepté de signer son étiquette de franchise, devrait encore signer un accord de plusieurs années avec les chargeurs, Jeff Miller du Los Angeles Times.',
        _id: '5e9b996852d2b29b34434818',
    },
    {
        team: 'Free Agent',
        player: 'Brandon Aiyuk',
        news:
            "NFL teams are pleased with the medical records from Aiyuk's recent core muscle surgery, Ian Rapoport of NFL Network reports.",
        headline: 'Looking good after surgery',
        teamAbbr: 'FA',
        position: 'WR',
        injury: 'Abdomen',
        date: 'April 16, 2020',
        headlineFR: 'Vous cherchez une bonne après la chirurgie',
        newsFR:
            'équipes de la NFL sont satisfaits des dossiers médicaux de la chirurgie musculaire de base récente Aiyuk, Ian Rapoport des rapports NFL Network.',
        _id: '5e9b996852d2b29b34434819',
    },
    {
        team: 'Free Agent',
        player: 'Laviska Shenault',
        news:
            "Shenault's core muscle surgery was completed without any problems, Ian Rapoport of NFL Network reports.",
        headline: 'Doing well after surgery',
        teamAbbr: 'FA',
        position: 'WR',
        injury: 'Abdomen',
        date: 'April 16, 2020',
        headlineFR: 'Faire bien après la chirurgie',
        newsFR:
            'la chirurgie musculaire de base de Shenault a été réalisée sans aucun problème, Ian Rapoport des rapports NFL Network.',
        _id: '5e9b996852d2b29b3443481a',
    },
    {
        team: 'Arizona Cardinals',
        player: 'Kenyan Drake',
        news:
            'General manager Steve Keim said Wednesday that the Cardinals want to sign Drake to a long-term contract.',
        headline: 'Discussing long-term deal',
        teamAbbr: 'ARI',
        position: 'RB',
        injury: '',
        date: 'April 16, 2020',
        headlineFR: 'Discuter entente à long terme',
        newsFR:
            'directeur général Steve Keim a déclaré mercredi que les Cardinals veulent signer Drake à un contrat à long terme.',
        _id: '5e9b996852d2b29b3443481b',
    },
    {
        team: 'Tampa Bay Buccaneers',
        player: 'O.J. Howard',
        news:
            'The Buccaneers have been shopping Howard to other teams ahead of the 2020 NFL Draft, Greg Auman of The Athletic reports.',
        headline: 'Rumored to be on trade block',
        teamAbbr: 'TB',
        position: 'TE',
        injury: '',
        date: 'April 15, 2020',
        headlineFR: 'Répandu pour être sur le bloc commercial',
        newsFR:
            "Les Buccaneers ont été courses Howard à d'autres équipes avant le repêchage de la NFL 2020, Greg Auman des rapports d'athlétisme.",
        _id: '5e9b996852d2b29b3443481c',
    },
    {
        team: 'Free Agent',
        player: 'Demaryius Thomas',
        news:
            'Thomas (hamstring) said Wednesday in an interview with Sportsradio 104.3 The Fan Denver on Wednesday that he feels good and wants to continue his playing career in 2020.',
        headline: 'Still planning to play',
        teamAbbr: 'FA',
        position: 'WR',
        injury: 'Hamstring',
        date: 'April 15, 2020',
        headlineFR: 'planification encore à jouer',
        newsFR:
            "Thomas (ischio-jambiers) a déclaré mercredi dans une interview avec SportsRadio 104,3 The Fan Denver mercredi qu'il se sent bien et veut continuer sa carrière de joueur en 2020.",
        _id: '5e9b996852d2b29b3443481d',
    },
    {
        team: 'Los Angeles Rams',
        player: 'Josh Reynolds',
        news:
            "Reynolds is a candidate for more work in 2020 following last week's trade of Brandin Cooks from the Rams to the Texans, Lindsey Thiry of ESPN.com reports.",
        headline: 'In line for more snaps?',
        teamAbbr: 'LAR',
        position: 'WR',
        injury: '',
        date: 'April 15, 2020',
        headlineFR: 'En ligne pour plus de boutons-pression?',
        newsFR:
            'Reynolds est un candidat pour plus de travail en 2020 suite à la commerce de la semaine dernière des Brandin cuisiniers des Rams aux Texans, Lindsey Thiry des rapports ESPN.com.',
        _id: '5e9b996852d2b29b3443481e',
    },
    {
        team: 'Los Angeles Rams',
        player: 'Jared Goff',
        news:
            'Goff will be working without running back Todd Gurley and wide receiver Brandin Cooks in 2020, Lindsey Thiry of ESPN.com reports.',
        headline: 'Lost skill talent during offseason',
        teamAbbr: 'LAR',
        position: 'QB',
        injury: '',
        date: 'April 15, 2020',
        headlineFR: 'talent de compétences perdues au cours de la saison morte',
        newsFR:
            'Goff va travailler sans courir en arrière Todd Gurley et receveur Brandin Cooks en 2020, Lindsey Thiry des rapports ESPN.com.',
        _id: '5e9b996852d2b29b3443481f',
    },
    {
        team: 'Houston Texans',
        player: 'David Johnson',
        news:
            'Johnson passed his physical Wednesday, making his trade to the Texans official, Aaron Wilson of the Houston Chronicle reports.',
        headline: 'Passes physical',
        teamAbbr: 'HOU',
        position: 'RB',
        injury: '',
        date: 'April 15, 2020',
        headlineFR: 'Laissez-passer physique',
        newsFR:
            'Johnson a passé son mercredi physique, ce qui rend son métier au fonctionnaire Texans, Aaron Wilson des rapports Houston Chronicle.',
        _id: '5e9b996852d2b29b34434820',
    },
    {
        team: 'Las Vegas Raiders',
        player: 'Foster Moreau',
        news:
            'Raiders general manager Mike Mayock said Tuesday that Moreau is "ahead of schedule" in his rehab from the left knee injury he suffered in December, Jerry McDonald of The San Jose Mercury News reports.',
        headline: 'Progressing well in recovery',
        teamAbbr: 'LV',
        position: 'TE',
        injury: 'Knee',
        date: 'April 15, 2020',
        headlineFR: 'En bonne voie dans la récupération',
        newsFR:
            'Raiders directeur général Mike Mayock a déclaré mardi que Moreau est « en avance » dans sa cure de désintoxication de la blessure au genou gauche, il a souffert en Décembre, Jerry McDonald des rapports San Jose Mercury News.',
        _id: '5e9b996852d2b29b34434821',
    },
    {
        team: 'Baltimore Ravens',
        player: 'Mark Ingram',
        news:
            "Ingram believes he can play at a high level for at least four or five more years, Tom Valente of the Ravens' official website reports.",
        headline: 'Anticipates playing into mid-30s',
        teamAbbr: 'BAL',
        position: 'RB',
        injury: '',
        date: 'April 15, 2020',
        headlineFR: 'Anticipe jouer en milieu des années 30',
        newsFR:
            "Ingram croit qu'il peut jouer à un niveau élevé pendant au moins quatre ou cinq ans, Tom Valente des rapports de site officiel de Ravens.",
        _id: '5e9b996852d2b29b34434822',
    },
    {
        team: 'Cincinnati Bengals',
        player: 'Joe Mixon',
        news:
            "The Bengals and Mixon haven't yet agreed on a contract extension, and while there haven't been any reports of acrimony between the two sides, a holdout remains a possibility, Paul Dehner Jr. of The Athletic reports.",
        headline: 'Holdout candidate',
        teamAbbr: 'CIN',
        position: 'RB',
        injury: '',
        date: 'April 15, 2020',
        headlineFR: 'candidat Irréductible',
        newsFR:
            "Les Bengals et Mixon n'a pas encore d'accord sur une prolongation de contrat, et bien qu'il n'y a pas eu de rapports d'acrimonie entre les deux parties, un élément de maintien reste une possibilité, Paul Jr. Dehner des rapports d'athlétisme.",
        _id: '5e9b996852d2b29b34434823',
    },
    {
        team: 'Houston Texans',
        player: 'Jordan Thomas',
        news:
            "Thomas doesn't appear to have much job security heading into training camp, Aaron Reiss of The Athletic reports.",
        headline: 'Teetering on roster bubble',
        teamAbbr: 'HOU',
        position: 'TE',
        injury: '',
        date: 'April 15, 2020',
        headlineFR: 'Chancelant sur la bulle liste',
        newsFR:
            "Thomas ne semble pas avoir beaucoup de tête de sécurité de l'emploi dans le camp d'entraînement, Aaron Reiss des rapports d'athlétisme.",
        _id: '5e9b996852d2b29b34434824',
    },
];

module.exports = {
    imageUrls,
    teams,
    positions,
    resultsSample,
};
