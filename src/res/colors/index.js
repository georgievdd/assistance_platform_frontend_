export class Color {
  constructor(r, g, b, a) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
    if (a == undefined) {
      this.a = 1;
    }
  }

  add_v(v) {
    return new Color(
      this.r + v < 255 ? this.r + v : 255, 
      this.g + v < 255 ? this.g + v : 255, 
      this.b + v < 255 ? this.b + v : 255, 
      this.a + v < 255 ? this.a + v : 255);
  }

  value() {
    return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
  }

  set_a(a) {
    return new Color(this.r, this.g, this.b, a)
  }
}


export const rejectedColor = new Color(253,76,36);
export const closedTaskByAuthorColor = new Color(189,68,253);
export const setIplementerColor = new Color(253,217,74);
export const acceptApplicationColor = new Color(86,148,255);
export const newApplicationColor = new Color(254,218,155);
export const rewieColor = new Color(110,127,128);