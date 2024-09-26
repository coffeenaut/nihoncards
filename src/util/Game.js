export default Game = () => {
    const game = {
        player: {
            score: 0,
        },
    }
    const addScore = (points) => {
        game.player.score += points
    }
    return game
}