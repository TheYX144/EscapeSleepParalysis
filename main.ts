namespace SpriteKind {
    export const other = SpriteKind.create()
}
namespace StatusBarKind {
    export const timeoflife = StatusBarKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    game.over(true, effects.splatter)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    game.over(false, effects.dissolve)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false, effects.dissolve)
})
game.splash("Welcome to the dream world", "Escape, avoid the demons")
game.splash("Hurry", "You only have 20 seconds")
let Paralyzed = sprites.create(assets.image`paralyzed`, SpriteKind.Player)
controller.moveSprite(Paralyzed)
Paralyzed.setPosition(7, 14)
Paralyzed.setStayInScreen(true)
scene.cameraFollowSprite(Paralyzed)
tiles.setCurrentTilemap(tilemap`level1`)
let demon = sprites.create(assets.image`paralysis man1`, SpriteKind.Enemy)
tiles.placeOnRandomTile(Paralyzed, assets.tile`myTile0`)
let rulingdemon = sprites.create(assets.image`paralysis man1`, SpriteKind.Enemy)
rulingdemon.follow(Paralyzed, 50)
rulingdemon.setPosition(62, 16)
let demonofidk = sprites.create(assets.image`paralysis man1`, SpriteKind.Enemy)
demonofidk.follow(Paralyzed, 50)
demonofidk.setPosition(77, 21)
info.startCountdown(20)
let mySprite = sprites.create(assets.image`myImage`, SpriteKind.other)
forever(function () {
    pause(200)
    demon.setPosition(randint(0, 500), randint(0, 500))
})
