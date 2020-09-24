//C86

var canvas = new fabric.Canvas("myCanvas");

var block_image_width = 30;
var block_image_height = 30;

var player_x = 10;
var player_y = 10;

var player_object;
var block_object;

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}

function new_image(IMAGE) {
    fabric.Image.fromURL(IMAGE, function (Img) {
        block_object = Img;
        block_object.scaleToWidth(block_image_width);
        block_object.scaleToHeight(block_image_height);
        block_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_object);
    });
}

//C87

window.addEventListener("keydown", keycodes);

function keycodes(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '109' || keyPressed == '189') {
        //-
        console.log("-");
        block_image_width -= 10;
        block_image_height -= 10;
        jQuery("#CW").text(block_image_width);
        jQuery("#CH").text(block_image_height);
    } else if (keyPressed == '107' || keyPressed == '187') {
        //+
        console.log("+");
        block_image_width += 10;
        block_image_height += 10;
        jQuery("#CW").text(block_image_width);
        jQuery("#CH").text(block_image_height);
    } else if (keyPressed == '38') {
        //up
        console.log("up");
        move_player("up");
    } else if (keyPressed == '40') {
        //down
        console.log("down");
        move_player("down");
    } else if (keyPressed == '37') {
        //left
        console.log("left");
        move_player("left");
    } else if (keyPressed == '39') {
        //right
        console.log("right");
        move_player("right");
    } else if (keyPressed == '83') {
        //stone
        console.log("stone");
        new_image("stone.jpg");
    } else if (keyPressed == '85') {
        //unknown
        console.log("unknown");
        new_image("unknown.png");
    } else if (keyPressed == '79') {
        //oak log
        console.log("oak log");
        new_image("oak_log.jpg");
    } else if (keyPressed == '78') {
        //netherack
        console.log("netherack");
        new_image("netherck.jpg");
    } else if (keyPressed == '76') {
        //lightgreen carpet
        console.log("light green carpet");
        new_image("light_green_carpet.png");
    } else if (keyPressed == '81') {
        //grass block
        console.log("grass block");
        new_image("grass_block.png");
    } else if (keyPressed == '71') {
        //glowstone
        console.log("glowstone");
        new_image("glowstone.png");
    } else if (keyPressed == '68') {
        //darkgreen_carpet
        console.log("dark green carpet");
        new_image("darkgreen_carpet.png");
    } else if (keyPressed == '66') {
        //brick
        console.log("brick");
        new_image("brick.jpg");
    }
}

function move_player(direction) {
    if (direction == "up") {
        if (player_y > 0) {
            player_y -= 10;
        }
    } else if (direction == "down") {
        if (player_y < 450) {
            player_y += 10;
        }
    } else if (direction == "left") {
        if (player_x > 0) {
            player_x -= 10;
        }
    } else if (direction == "right") {
        if (player_x < 860) {
            player_x += 10;
        }
    }
    canvas.remove(player_object);
    player_update();
}

//C88

jQuery(document).ready(function() {
    player_update();
});