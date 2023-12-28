import "./style.css";

const canvas = document.getElementById("canvas-1") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);

const playerImage = new Image();
