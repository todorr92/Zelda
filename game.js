kaboom({
    global: true,
    fullscreen: true,
    scale: 1,
    debug: true,
});

scene("game", () => {

})

loadSprite('link-going-left', 'sprites/link-going-left.png')
loadSprite('link-going-right', 'sprites/link-going-right.png')
loadSprite('link-going-down', 'sprites/link-going-down.png')
loadSprite('link-going-up', 'sprites/link-going-up.png')
loadSprite('left-wall', 'sprites/left-wall.png')
loadSprite('top-wall', 'sprites/top-wall.png')
loadSprite('bottom-wall', 'sprites/bottom-wall.png')
loadSprite('right-wall', 'sprites/right-wall.png')
loadSprite('bottom-left-wall', 'sprites/bottom-left-wall.png')
loadSprite('bottom-right-wall', 'sprites/bottom-right-wall.png')
loadSprite('top-left-wall', 'sprites/top-left-wall.png')
loadSprite('top-right-wall', 'sprites/top-right-wall.png')
loadSprite('top-door', 'sprites/top-door.png')
loadSprite('fire-pot', 'sprites/fire-pot.png')
loadSprite('left-door', 'sprites/left-door.png')
loadSprite('lanterns', 'sprites/lanterns.png')
loadSprite('slicer', 'sprites/slicer.png')
loadSprite('skeletor', 'sprites/skeletor.png')
loadSprite('kaboom', 'sprites/kaboom.png')
loadSprite('stairs', 'sprites/stairs.png')
loadSprite('bg', 'sprites/bg.png')

start("game")
