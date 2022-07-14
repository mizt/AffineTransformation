exports.Matrix = {
	create:function() {
		return [
			1,0,0,
			0,1,0,
			0,0,1
		];
	},
	identity:function(m) {
		m[0]=1; m[1]=0; m[2]=0;
		m[3]=0; m[4]=1; m[5]=0;
		m[6]=0; m[7]=0; m[8]=1;
		return m;
	},
	multiply:function(a,b) {
		return [
			(b[0]*a[0]+b[1]*a[3]),
			(b[0]*a[1]+b[1]*a[4]),
			0,
			(b[3]*a[0]+b[4]*a[3]),
			(b[3]*a[1]+b[4]*a[4]),
			0,
			(b[6]*a[0]+b[7]*a[3]+a[6]),
			(b[6]*a[1]+b[7]*a[4]+a[7]),
			1
		];
	},
	translate:function(m,tx,ty) {
		return Matrix.multiply([
			1,0,0,
			0,1,0,
			tx,ty,1
		],m);
		
	},
	scale:function(m,s) {
		return Matrix.multiply([
			s,0,0,
			0,s,0,
			0,0,1
		],m);
	},
	rotate:function(m,angle) {
		const rad = angle*(Math.PI/180.0);
		const s = Math.sin(rad);
		const c = Math.cos(rad);
		return Matrix.multiply([
			c,s,0,
			-s,c,0,
			0,0,1
		],m);
	},
	px:function(m,px,py) {
		return m[0]*px+m[3]*py+m[6];
	},
	py:function(m,px,py) {
		return m[1]*px+m[4]*py+m[7];
	}
};