function done () {
    if (clark.isTouching(lex)) {
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.No)
            basic.clearScreen()
        }
        music.playMelody("B A B A G F E D ", 120)
        game.gameOver()
        if (game.isGameOver()) {
            control.reset()
        }
    }
}
// Determina la posición de personajes
let lex: game.LedSprite = null
let clark: game.LedSprite = null
clark = game.createSprite(0, 2)
lex = game.createSprite(randint(1, 4), randint(0, 4))
basic.forever(function () {
    while (input.buttonIsPressed(Button.AB)) {
        clark.change(LedSpriteProperty.Y, 1)
        basic.pause(100)
        done()
    }
    while (input.buttonIsPressed(Button.A)) {
        clark.change(LedSpriteProperty.X, -1)
        basic.pause(100)
        done()
    }
    while (input.buttonIsPressed(Button.B)) {
        clark.change(LedSpriteProperty.X, 1)
        basic.pause(100)
        done()
    }
    while (input.logoIsPressed()) {
        clark.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
        done()
    }
})
