import {Drawable} from "./Drawable";
import {IAnimatable} from "./Types/IAnimatable";
import {settings} from "./settings";

export class Birdie extends Drawable implements IAnimatable{
    private x: number;
    private y: number;
    private width: number = 34;
    private height: number = 24;

    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, sprite: HTMLImageElement, x: number, y: number) {
        super(ctx, canvas, sprite);
        this.x = x;
        this.y = y;
    }

    draw(): void {
        this.ctx.drawImage(this.sprite, settings.birdie.frames[0].sx, settings.birdie.frames[0].sy, this.width, this.height);
    }

    update(): void {

    }

}