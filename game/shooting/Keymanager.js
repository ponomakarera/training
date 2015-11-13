//0:up 1:down 2:left 3:right 4:space

function Keymanager() {
keys = new Array(5);
window.document.onkeydown = this.onkeydown;
window.document.onkeyup = this.onkeyup;
}

Keymanager.prototype.onkeydown = function (e) {
switch (e.keyCode) {
        case 38: //up
            keys[0] = true;
            break;
        case 40: //down
            keys[1] = true;
            break;
        case 37: //left
            keys[2] = true;
            break;
        case 39: //right
            keys[3] = true;
            break;
		case 32:
			keys[4] = true;
			break;
        default:
            break;
    }
}

Keymanager.prototype.onkeyup = function (e) {
switch (e.keyCode) {
        case 38: //up
            keys[0] = false;
            break;
        case 40: //down
            keys[1] = false;
            break;
        case 37: //left
            keys[2] = false;
            break;
        case 39: //right
            keys[3] = false;
            break;
		case 32:
			keys[4] = false;
			break;
        default:
            break;
    }
}

Keymanager.prototype.up = function () {
return keys[0];
}

Keymanager.prototype.down = function () {
return keys[1];
}

Keymanager.prototype.left = function () {
return keys[2];
}

Keymanager.prototype.right = function () {
return keys[3];
}

Keymanager.prototype.space = function () {
return keys[4];
}
