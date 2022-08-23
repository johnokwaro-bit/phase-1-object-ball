const gameObject = () =>{
    const game = {
    home:{
        teamName:'Brooklyn Nets',
        colors: ['Black', 'White'],
        players: [
            {playerName: "Alan Anderson",Number: 0, Shoe: 16, Points: 22, Rebounds: 12, Assists: 12, Steals: 3, Blocks: 1, SlamDunks: 1},
            {playerName: "Reggie Evans", Number: 30, Shoe: 14, Points: 12, Rebounds: 12, Assists: 12, Steals: 12, Blocks: 12, SlamDunks: 7},
            {playerName: "Brook Lopez", Number: 11, Shoe: 17, Points: 17, Rebounds: 19, Assists: 10, Steals: 3, Blocks: 1, SlamDunks: 15},
            {playerName: "Mason Plumlee", Number: 1, Shoe: 19, Points: 26, Rebounds: 12, Assists: 6, Steals: 3, Blocks: 8, SlamDunks: 5},	
            {playerName: "Jason Terry", Number: 31, Shoe: 15, Points: 19, Rebounds: 2, Assists: 2, Steals: 4, Blocks: 11, SlamDunks: 1}
        ]
    },
    away:{
        teamName: 'Charlotte Hornets',
        colors:['Turquoise', 'Purple'],
        players:[
            {playerName: "Jeff Adrien", Number: 4, Shoe: 18, Points: 10, Rebounds: 1, Assists: 1, Steals: 2, Blocks: 7, SlamDunks: 2},
            {playerName: "Bismak Biyombo", Number: 0, Shoe: 16, Points: 12, Rebounds: 4, Assists: 7, Steals: 7,Blocks: 15, SlamDunks: 10},	
            {playerName: "DeSagna Diop", Number: 2, Shoe: 14, Points: 24, Rebounds: 12, Assists: 12, Steals: 4, Blocks: 5, SlamDunks: 5 },	
            {playerName: "Ben Gordon", Number: 8, Shoe: 15, Points: 33, Rebounds: 3, Assists: 2, Steals: 1, Blocks: 1,SlamDunks: 0},	
            {playerName: "Brendan Haywood", Number: 33, Shoe: 15, Points: 6, Rebounds: 12, Assists: 12, Steals: 22, Blocks: 5, SlamDunks: 12}
        ]
    }
    }
    debugger
    return game;
}

function numPointsScored(name){
    for(const item in game){
        if(item.playes.playerName === name){
            debugger
            return item.players.playerName.Points;
        }
        
    }
}


function shoeSize(name){
    for(const item in game){
        if(item.players.PlayerName === name){
            debugger
            return item.players.playerName.Shoe;
        }
    }
}

function teamColors(teamName){
    for(const item in game){
        if(item.teamName === teamName){
            debugger
            return item.colors;
        }
    }
}

function teamNames(){
    teamsArray = [];
    for(const item in game){
        debugger
        teamsArray.push(item.teamName)
    }
    return teamsArray;   
}

function playerNumbers(teamName){
    jerseyNumbers = [];
    for(const item in game){
        if(item.teamName === teamName){
            jerseyNumbers.push(item.players.number);
            debugger
        }
    }
    return jerseyNumbers;

}

function playerStats(name){
    statsObject = {};
    for(const item in game){
        debugger
        if(item.players.playerName === name){
            statsObject.push(item.players.playerName);
        }
    }
}

function bigShoeRebounds(){
    for(const item in game){

    }
}