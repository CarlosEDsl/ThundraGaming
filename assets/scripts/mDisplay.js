const valorantIcon = '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="background-color: red; bo"><title>Valorant</title><path d="M23.792 2.152a.252.252 0 0 0-.098.083c-3.384 4.23-6.769 8.46-10.15 12.69-.107.093-.025.288.119.265 2.439.003 4.877 0 7.316.001a.66.66 0 0 0 .552-.25c.774-.967 1.55-1.934 2.324-2.903a.72.72 0 0 0 .144-.49c-.002-3.077 0-6.153-.003-9.23.016-.11-.1-.206-.204-.167zM.077 2.166c-.077.038-.074.132-.076.205.002 3.074.001 6.15.001 9.225a.679.679 0 0 0 .158.463l7.64 9.55c.12.152.308.25.505.247 2.455 0 4.91.003 7.365 0 .142.02.222-.174.116-.265C10.661 15.176 5.526 8.766.4 2.35c-.08-.094-.174-.272-.322-.184z"/></svg>'
const lolIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" version="1.1" viewBox="0 0 64 64"> <path style="opacity:0.2" d="M 4.043,31.828 A 28,28 0 0 0 4,33 28,28 0 0 0 32,61 28,28 0 0 0 60,33 28,28 0 0 0 59.958,32.172 28,28 0 0 1 32,59 28,28 0 0 1 4.044,31.828 Z"/> <path style="fill:#c88937" d="M 32,4 A 28,28 0 0 0 4,32 28,28 0 0 0 32,60 28,28 0 0 0 60,32 28,28 0 0 0 32,4 Z"/> <path style="opacity:0.2;fill:#ffffff" d="M 31.998047 4 A 28 28 0 0 0 4 32 A 28 28 0 0 0 4.0214844 32.40625 A 28 28 0 0 1 31.998047 5 L 32 5 A 28 28 0 0 1 59.976562 32.585938 A 28 28 0 0 0 59.998047 32 A 28 28 0 0 0 32 4 L 31.998047 4 z"/> <path style="opacity:0.2;fill-rule:evenodd" d="m 18,17 h 14 l -4,4 v 21 l 4,1 10,-1 6,-5 -3,12 H 18 l 4,-3 V 21 Z"/> <path style="fill:#ffffff;fill-rule:evenodd" d="m 18,16 h 14 l -4,4 v 21 l 4,1 10,-1 6,-5 -3,12 H 18 l 4,-3 V 20 Z"/> </svg>'
var members = {
    0: {
        name: 'Anjinho',
        age: 20,
        bio:'É O FODENDO SURICATO',
        games: `${valorantIcon} ${lolIcon}`
    },
    1: {
        name: 'Alves',
        age: 20,
        bio:'É O FODENDO ESQUILO',
        games: `${valorantIcon} ${lolIcon}`
    },
    2: {
        name: 'Maciel',
        age: 20,
        bio:'É O FODENDO MAACIEL CRA',
        games: `${valorantIcon} ${lolIcon}`

    },
    3: {
        name: 'Muralha',
        age: 20,
        bio:'É O FODENDO Migas',
        games: `${valorantIcon} ${lolIcon}`
    },
    4: {
        name: 'Ovelha',
        age: 20,
        bio:'É O FODENDO OREIAS',
        games: `${valorantIcon} ${lolIcon}`
    },
    5: {
        name: 'Trax',
        age: 20,
        bio:'É O FODENDO ALECAO',
        games: `${valorantIcon} ${lolIcon}`
    },
    6: {
        name: 'Samucão',
        age: 20,
        bio:'É O FODENDO SABUGÃO',
        games: `${valorantIcon} ${lolIcon}`
    },
    7: {
        name: 'Luizinho',
        age: 20,
        bio:'É O FODENDO LUIZÃO',
        games: `${valorantIcon} ${lolIcon}`
    },
    8: {
        name: 'Otávio',
        age: 20,
        bio:'É O FODENDO 400KG DE QUEIJO PRATO',
        games: `${valorantIcon} ${lolIcon}`
    },
    9: {
        name: 'Carlinhos',
        age: 20,
        bio:'É LITERALMENTE EU',
        games: `${valorantIcon} ${lolIcon}`
    },
    10: {
        name: 'CALEBÃO',
        age: 20,
        bio:'É O FODENDO CALEBAS',
        games: `${valorantIcon} ${lolIcon}`
    },
    11: {
        name: 'VITINHO',
        age: 20,
        bio:'É O FODENDO XRL8',
        games: `${valorantIcon} ${lolIcon}`
    },
    12: {
        name: 'Gusatavo',
        age: 20,
        bio:'É O FODENDO GANJAS',
        games: `${valorantIcon} ${lolIcon}`
    }
}

    for (var i = 0; i < Object.keys(members).length; i++) {
        var memberDisplay = `
        <div class='memberDiv'>
            <hr>
            <img src="../assets/imgs/membros/${members[i]['name']}.jpg"></img>
            <h1>${members[i]['name']}</h1>
            <h3>Idade: ${members[i]['age']} anos</h3>
            <p>Biografia: ${members[i]['bio']}</p>
            <hr>
        </div>`;

        var member = $(memberDisplay);
        member.attr('id', members[i]['name']);

        $('.members').append(member);
    }

    function memberSelect(memberSelected) {
        $('.members').empty();
        var memberDisplay = `
        <div class='memberDiv animate__animated animate__fadeInLeftBig'>
            <hr>
            <img src="../assets/imgs/membros/${members[memberSelected]['name']}.jpg"></img>
            <h1>${members[memberSelected]['name']}</h1>
            <h3>Idade: ${members[memberSelected]['age']} anos</h3>
            <p>Biografia: ${members[memberSelected]['bio']}</p>
            ${members[memberSelected]['games']}
            <hr>
        </div>`;
    
        var member = $(memberDisplay);
        member.attr('id', members[memberSelected]['name']);

        $('.members').append(member);
    }