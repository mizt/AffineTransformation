const { Matrix } = require("./Matrix");

const w = 1920;
const h = 1080;

const Jimp = require("jimp");
const buffer = new Jimp(w,h);

let mat = Matrix.create();

for(var i=0; i<h; i++) {
	for(var j=0; j<w; j++) {
		
		mat = Matrix.translate(Matrix.identity(mat),-w*0.5,-h*0.5);
		mat = Matrix.rotate(mat,-45);
		mat = Matrix.translate(mat,w*0.5,h*0.5);

		const px = Matrix.px(mat,j,i);
		const py = Matrix.py(mat,j,i);
		
		const addr = i*w+j;
		const x = (0x5555+(px*8.0))>>0;
		const y = (0x5555+(py*8.0))>>0;
		buffer.setPixelColor(((y&0xFF)<<24|(y>>8)<<16|(x&0xFF)<<8|(x>>8))>>>0,j,i);
	}
}

buffer.write("Map.png");
