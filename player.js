class Player {
    constructor() {
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.score = 0;
    }

    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data) => {
            playerCount = data.val();
        })
    }


    getScore() {
        var player1score = database.ref('players/player1/score');
        player1score.on("value", (data) => {
            player1score = data.val();
        })
        var player2score = database.ref('players/player2/score');
        player2score.on("value", (data) => {
            player2score = data.val();
        })
        var player1name = database.ref('players/player1/name');
        player1name.on("value", (data) => {
            player1name = data.val();
        })
        var player2name = database.ref('players/player2/name');
        player2name.on("value", (data) => {
            player2name = data.val();
        })
        textSize(20)
        fill("white")
        text(player1name +" : "+ player1score, 100, 100)
        text(player2name +" : "+ player2score, 100, 200)
    }


    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        });
    }

    update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance,
            score: this.score
        });
    }

    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }

    
}
