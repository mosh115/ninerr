export const utilService = {
    makeId,
    makeLorem,
    getRandomIntInclusive,
    delay,
    makeLevel,
    makeRate,
    getReviewer
}

function makeId(length = 6) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return txt;
}

function makeLorem(size = 100) {
    var words = ['The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn'];
    var txt = '';
    while (size > 0) {
        size--;
        txt += words[Math.floor(Math.random() * words.length)] + ' ';
    }
    return txt;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

function delay(ms = 1500) {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}

function makeLevel() {
    const level = ['Top Rated Seller', 'Level 2 Seller', 'Level 1 Seller', 'Top Rated Seller']
    return level[getRandomIntInclusive(0, 3)]
}

function makeRate() {
    const rate = ['5.0', '4.1', '5.0', '4.4', '5.0', '4.6', '4.7', '5.0', '4.8', '4.9', '5.0']
    return rate[getRandomIntInclusive(0, 10)]
}


function getReviewer() {
    const data = [
        {
            "country": "CHL",
            "uname": "HCampbell"
        },
        {
            "country": "PHL",
            "uname": "IBario"
        },
        {
            "country": "TWN",
            "uname": "CHoward"
        },
        {
            "country": "BDI",
            "uname": "RWild"
        },
        {
            "country": "LBN",
            "uname": "LSprague"
        },
        {
            "country": "NAM",
            "uname": "MLiao"
        },
        {
            "country": "CRI",
            "uname": "DElliott"
        },
        {
            "country": "TJK",
            "uname": "KMaynard"
        },
        {
            "country": "VIR",
            "uname": "EHodgson"
        },
        {
            "country": "ROU",
            "uname": "LGreen"
        },
        {
            "country": "COK",
            "uname": "SChristopher"
        },
        {
            "country": "VNM",
            "uname": "CEarls"
        },
        {
            "country": "OMN",
            "uname": "CBernstein"
        },
        {
            "country": "ESP",
            "uname": "AHodgson"
        },
        {
            "country": "HMD",
            "uname": "SWesley"
        },
        {
            "country": "CAF",
            "uname": "EShafer"
        },
        {
            "country": "ATF",
            "uname": "LJaques"
        },
        {
            "country": "SHN",
            "uname": "JReith"
        },
        {
            "country": "TLS",
            "uname": "TBoynton"
        },
        {
            "country": "CIV",
            "uname": "TGuilfoyle"
        },
        {
            "country": "ESP",
            "uname": "LJarratt"
        },
        {
            "country": "DZA",
            "uname": "DDabbs"
        },
        {
            "country": "SYR",
            "uname": "SPatino"
        },
        {
            "country": "NCL",
            "uname": "KFruscione"
        },
        {
            "country": "VIR",
            "uname": "CHickey"
        },
        {
            "country": "SEN",
            "uname": "SPoer"
        },
        {
            "country": "ATF",
            "uname": "FEasterly"
        },
        {
            "country": "MRT",
            "uname": "KFultz"
        },
        {
            "country": "PRY",
            "uname": "CVera"
        },
        {
            "country": "NPL",
            "uname": "IAmick"
        },
        {
            "country": "JPN",
            "uname": "KKrout"
        },
        {
            "country": "MSR",
            "uname": "SPace"
        },
        {
            "country": "ARG",
            "uname": "GIbanez"
        },
        {
            "country": "PCN",
            "uname": "NFlanagan"
        },
        {
            "country": "NRU",
            "uname": "ARobertd"
        },
        {
            "country": "LTU",
            "uname": "MLevey"
        },
        {
            "country": "FRO",
            "uname": "RHaskin"
        },
        {
            "country": "CAF",
            "uname": "DTraverse"
        },
        {
            "country": "COM",
            "uname": "RCornwall"
        },
        {
            "country": "BLM",
            "uname": "YPatterson"
        },
        {
            "country": "GHA",
            "uname": "MBrinkley"
        },
        {
            "country": "FRA",
            "uname": "ESnyder"
        },
        {
            "country": "MUS",
            "uname": "LNemichand"
        },
        {
            "country": "AUT",
            "uname": "ACollier"
        },
        {
            "country": "NLD",
            "uname": "JCates"
        },
        {
            "country": "PRI",
            "uname": "DBogenschneider"
        },
        {
            "country": "VUT",
            "uname": "GLehman"
        },
        {
            "country": "IND",
            "uname": "IAntunes"
        },
        {
            "country": "FIN",
            "uname": "MImholtz"
        },
        {
            "country": "SOM",
            "uname": "DRamati"
        },
        {
            "country": "LBR",
            "uname": "LDawn"
        },
        {
            "country": "COL",
            "uname": "AHenke"
        },
        {
            "country": "TCD",
            "uname": "RCoffell"
        },
        {
            "country": "PRI",
            "uname": "BSmyth"
        },
        {
            "country": "NFK",
            "uname": "SWarren"
        },
        {
            "country": "PAN",
            "uname": "SChandler"
        },
        {
            "country": "NOR",
            "uname": "JBelcher"
        },
        {
            "country": "SLV",
            "uname": "MDouglas"
        },
        {
            "country": "TUV",
            "uname": "SBarnhorn"
        },
        {
            "country": "GNB",
            "uname": "GMccarthy"
        },
        {
            "country": "PYF",
            "uname": "OKaiser"
        },
        {
            "country": "FRA",
            "uname": "GCallison"
        },
        {
            "country": "FSM",
            "uname": "LScheider"
        },
        {
            "country": "MRT",
            "uname": "HEschenbacher"
        },
        {
            "country": "MKD",
            "uname": "MGeouque"
        },
        {
            "country": "MDG",
            "uname": "RVolz"
        },
        {
            "country": "PYF",
            "uname": "MJoachim"
        },
        {
            "country": "EST",
            "uname": "DGunter"
        },
        {
            "country": "SYC",
            "uname": "MCasariego"
        },
        {
            "country": "WLF",
            "uname": "CSchwartzberg"
        },
        {
            "country": "UMI",
            "uname": "MWilley"
        },
        {
            "country": "TCA",
            "uname": "PPainter"
        },
        {
            "country": "MDA",
            "uname": "EWeakliem"
        },
        {
            "country": "CHE",
            "uname": "WKnutson"
        },
        {
            "country": "AGO",
            "uname": "SGolaner"
        },
        {
            "country": "DZA",
            "uname": "DPresas"
        },
        {
            "country": "TUN",
            "uname": "BConk"
        },
        {
            "country": "NER",
            "uname": "CGilby"
        },
        {
            "country": "CAF",
            "uname": "EWalker"
        },
        {
            "country": "DJI",
            "uname": "LCarnu"
        },
        {
            "country": "GNB",
            "uname": "TLlewellyn"
        },
        {
            "country": "RUS",
            "uname": "EFaurest"
        },
        {
            "country": "SPM",
            "uname": "AWalley"
        },
        {
            "country": "TJK",
            "uname": "CTveter"
        },
        {
            "country": "MYT",
            "uname": "MBently"
        },
        {
            "country": "MRT",
            "uname": "KLlc"
        },
        {
            "country": "NGA",
            "uname": "ODebord"
        },
        {
            "country": "MRT",
            "uname": "BRipley"
        },
        {
            "country": "IND",
            "uname": "GLavallee"
        },
        {
            "country": "TGO",
            "uname": "BKasuganti"
        },
        {
            "country": "NER",
            "uname": "IAcosta"
        },
        {
            "country": "BGD",
            "uname": "GStabile"
        },
        {
            "country": "SRB",
            "uname": "KHobbs"
        },
        {
            "country": "SLV",
            "uname": "FCattanach"
        },
        {
            "country": "LBN",
            "uname": "GWathen"
        },
        {
            "country": "TUV",
            "uname": "TJarratt"
        },
        {
            "country": "NFK",
            "uname": "DLazier"
        },
        {
            "country": "SJM",
            "uname": "TDartmann"
        },
        {
            "country": "AFG",
            "uname": "KCoe"
        },
        {
            "country": "GNQ",
            "uname": "BAmacker"
        }
    ]

    return data[getRandomIntInclusive(0, 99)]
}

window.makeLevel = makeLevel

