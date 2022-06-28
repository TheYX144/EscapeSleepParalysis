// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100004010102010202020202020606060606010101020101010101010106060606060101010201020101010101020206060601010102010202010101010202020606010101020101020202020102010206060101010202010201010101020101050201010101010102020102050201010102010102050202050501010102010101010101020101050502020102020101010102050201020202010201010501010101010101010202020101010202020205020101010206020101020202010101010101010102010501020202010101010101010102020102010102010202010101010202020105020101020101010101010102060101010102010101060201010103`, img`
. . . 2 . 2 2 2 2 2 2 . . . . . 
. . . 2 . . . . . . . . . . . . 
. . . 2 . 2 . . . . . 2 2 . . . 
. . . 2 . 2 2 . . . . 2 2 2 . . 
. . . 2 . . 2 2 2 2 . 2 . 2 . . 
. . . 2 2 . 2 . . . . 2 . . . 2 
. . . . . . 2 2 . 2 . 2 . . . 2 
. . 2 . 2 2 . . . . . 2 . . . . 
. . 2 . . . . 2 2 . 2 2 . . . . 
2 . 2 . 2 2 2 . 2 . . . . . . . 
. . . . 2 2 2 . . . 2 2 2 2 . 2 
. . . 2 . 2 . . 2 2 2 . . . . . 
. . . 2 . . . 2 2 2 . . . . . . 
. . 2 2 . 2 . . 2 . 2 2 . . . . 
2 2 2 . . 2 . . 2 . . . . . . . 
2 . . . . . 2 . . . . 2 . . . . 
`, [myTiles.transparency16,sprites.swamp.swampTile9,sprites.builtin.brick,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
