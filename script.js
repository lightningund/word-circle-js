const WIDTH = 800, HEIGHT = 800;

const body = document.body;

const canv = document.createElement("canvas");
canv.width = WIDTH;
canv.height = HEIGHT;
body.appendChild(canv);
const ctxt = canv.getContext("2d");

