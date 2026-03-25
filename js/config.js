// Main student-editable configuration file.
// Most gameplay changes should happen here, not in engine files.

export const GAME_CONFIG = {
    tileSize: 32,

    // Map size is counted in tiles, not pixels.
    map: {
        imageSrc: "assets/map/map.png",
        widthTiles: 40,
        heightTiles: 30,
    },

    // Camera size is in pixels.
    // Smaller values feel more zoomed in.
    camera: {
        widthPx: 320,
        heightPx: 240,
    },

    // Player setup.
    player: {
        startTile: { x: 20, y: 5 },
        moveDurationMs: 150,
        defaultFacing: "down",
        spriteSheetSrc: "assets/player/player_sheet.png",
        frameWidth: 32,
        frameHeight: 32,

        // Direction rows in the sprite sheet.
        // Frames can stay at 1 if you do not want animation.
        directions: {
            up: { row: 0, frames: 4 },
            down: { row: 1, frames: 1 },
            left: { row: 2, frames: 1 },
            right: { row: 3, frames: 1 },
        },
    },

    // Simple player data that triggers can read and change.
    // Use items for keys, coins, quest items, and collectibles.
    // Use stats for numbers like health, score, energy, or strength.
    // Example trigger checks:
    // { scope: "items", key: "coin", op: ">=", value: 1 }
    // { scope: "stats", key: "health", op: "<=", value: 2 }
    playerState: {

    },

    // Event -> sound key mapping.
    // These are built-in engine events.
    audioEvents: {
        interact: "click",
        ui_open_modal: "click",
        teleport: "whoosh",
    },


    // Sound key -> file path mapping.
    // Add your own keys here, then use them in trigger actions.
    sounds: {
        engine: "assets/sfx/engine.mp3",
        turn: "assets/sfx/turn.mp3",
        intro: "assets/sfx/intro.mp3",
        music: "assets/sfx/music.mp3",
        click: "assets/sfx/click.mp3",
        whoosh: "assets/sfx/whoosh.mp3"
    },


    // Non-walkable cells.
    // Use either:
    // - Single tile: { x: 10, y: 4 }
    // - Filled range (line or rectangle): { x1: 8, y1: 4, x2: 12, y2: 4 }
    // Good for walls, water, furniture, and room borders.
    solidTiles: [
    { x1: 0, y1: 0, x2: 39, y2: 0 }, { x1: 0, y1: 1, x2: 39, y2: 1},
        {x1: 0, y1: 0, x2: 0, y2: 39}, {x1: 0, y1: 1, x2: 1, y2: 39},
        {x1: 0, y1: 0, x2: 0, y2: 39}, {x1: 0, y1: 1, x2: 1, y2: 39},
        {x1: 8, y1: 8, x2: 27, y2: 8}, {x1: 8, y1: 9, x2: 27, y2: 9},
        {x1: 18, y1: 8, x2: 27, y2: 15}, {x1: 26, y1: 15, x2: 27, y2: 21},
        {x1: 18, y1: 22, x2: 19, y2: 27}, {x1: 0, y1: 30, x2: 39, y2: 28},
        {x1: 39, y1: 28, x2: 34, y2: 2}


    ],

    // Triggers are the main way to build gameplay.
    // One trigger can do multiple things by using actions: [...]
    //
    // Trigger types:
    // - onEnterCell: runs when the player steps on the tile
    // - onInteractCell: runs when the player faces the tile and presses Space/Enter
    //
    // Trigger helper keys:
    // - isSolid: true (blocks movement on that tile)
    // - sprite: "assets/sprites/your_image.png" (draws a 32x32 image on the tile)
    // - sprite: "assets/sprites/portal.gif" (animated gif)
    // - sprite: { src: "assets/sprites/portal.png", frames: 4, speed: 150 } (spritesheet)
    // - conditions: [{ scope: "items", key: "coin", op: ">=", value: 1 }]
    // - actions: [{ kind: "playSound", soundKey: "interact" }, { kind: "giveItem", itemKey: "coin", amount: 1 }]
    // - elseAction: { kind: "openModalText", title: "...", text: "..." }
    //
    // Supported action kinds:
    // - playSound
    // - openModalText
    // - openModalVideo
    // - openModalHtml
    // - teleport
    // - giveItem
    // - removeItem
    // - changeStat
    // - setStat
    // - makePassable
    //
    // Small action examples:
    // { kind: "playSound", soundKey: "interact" }
    // { kind: "giveItem", itemKey: "coin", amount: 1 }
    // { kind: "changeStat", statKey: "health", amount: -1 }
    // { kind: "openModalText", title: "Hello", text: "Welcome!" }
    // { kind: "teleport", targetX: 10, targetY: 4 }
    // { kind: "makePassable", passableSprite: null }
    triggers: [
        {
            id: "portal_left_jump12",
            type: "onEnterCell",
            x: 12,
            y: 15,
            sprite: {
                src: "assets/sprites/portal_overlay.png",
                frames: 4,
                speed: 150,
            },
            actions: [
                {
                    kind: "teleport",
                    targetX: 12,
                    targetY: 22,
                    sfx: "teleport",
                    sprite: {
                        src: "assets/sprites/portal_action.png",
                        frames: 4,
                        speed: 150,
                    },
                },
            ],
        },
        {
            id: "portal_left_jump13",
            type: "onEnterCell",
            x: 13,
            y: 15,
            sprite: {
                src: "assets/sprites/portal_overlay.png",
                frames: 4,
                speed: 150,
            },
            actions: [
                {
                    kind: "teleport",
                    targetX: 13,
                    targetY: 22,
                    sfx: "teleport",
                    sprite: {
                        src: "assets/sprites/portal_action.png",
                        frames: 4,
                        speed: 150,
                    },
                },
            ],
        },
        {
            id: "portal_left_jump14",
            type: "onEnterCell",
            x: 14,
            y: 15,
            sprite: {
                src: "assets/sprites/portal_overlay.png",
                frames: 4,
                speed: 150,
            },
            actions: [
                {
                    kind: "teleport",
                    targetX: 14,
                    targetY: 22,
                    sfx: "teleport",
                    sprite: {
                        src: "assets/sprites/portal_action.png",
                        frames: 4,
                        speed: 150,
                    },
                },
            ],
        },
        {
            id: "portal_left_jump15",
            type: "onEnterCell",
            x: 15,
            y: 15,
            sprite: {
                src: "assets/sprites/portal_overlay.png",
                frames: 4,
                speed: 150,
            },
            actions: [
                {
                    kind: "teleport",
                    targetX: 15,
                    targetY: 22,
                    sfx: "teleport",
                    sprite: {
                        src: "assets/sprites/portal_action.png",
                        frames: 4,
                        speed: 150,
                    },
                },
            ],
        },
        {
            id: "portal_left_jump16",
            type: "onEnterCell",
            x: 16,
            y: 15,
            sprite: {
                src: "assets/sprites/portal_overlay.png",
                frames: 4,
                speed: 150,
            },
            actions: [
                {
                    kind: "teleport",
                    targetX: 16,
                    targetY: 22,
                    sfx: "teleport",
                    sprite: {
                        src: "assets/sprites/portal_action.png",
                        frames: 4,
                        speed: 150,
                    },
                },
            ],
        },
        {
            id: "portal_left_jump17",
            type: "onEnterCell",
            x: 17,
            y: 15,
            sprite: {
                src: "assets/sprites/portal_overlay.png",
                frames: 4,
                speed: 150,
            },
            actions: [
                {
                    kind: "teleport",
                    targetX: 17,
                    targetY: 22,
                    sfx: "teleport",
                    sprite: {
                        src: "assets/sprites/portal_action.png",
                        frames: 4,
                        speed: 150,
                    },
                },
            ],
        },

        {
            id: "portal_right_jump12",
            type: "onEnterCell",
            x: 12,
            y: 21,

            actions: [
                {
                    kind: "teleport",
                    targetX: 12,
                    targetY: 15,
                    sfx: "teleport",

                },
            ],
        },
        {
            id: "portal_right_jump13",
            type: "onEnterCell",
            x: 13,
            y: 21,

            actions: [
                {
                    kind: "teleport",
                    targetX: 13,
                    targetY: 15,
                    sfx: "teleport",

                },
            ],
        },
        {
            id: "portal_right_jump14",
            type: "onEnterCell",
            x: 14,
            y: 21,

            actions: [
                {
                    kind: "teleport",
                    targetX: 14,
                    targetY: 15,
                    sfx: "teleport",

                },
            ],
        },
        {
            id: "portal_right_jump15",
            type: "onEnterCell",
            x: 15,
            y: 21,

            actions: [
                {
                    kind: "teleport",
                    targetX: 15,
                    targetY: 15,
                    sfx: "teleport",

                },
            ],
        },
        {
            id: "portal_right_jump16",
            type: "onEnterCell",
            x: 16,
            y: 21,

            actions: [
                {
                    kind: "teleport",
                    targetX: 16,
                    targetY: 15,
                    sfx: "teleport",

                },
            ],
        },
        {
            id: "portal_right_jump17",
            type: "onEnterCell",
            x: 17,
            y: 21,

            actions: [
                {
                    kind: "teleport",
                    targetX: 17,
                    targetY: 15,
                    sfx: "teleport",

                },
            ],
        },
    ],
};
