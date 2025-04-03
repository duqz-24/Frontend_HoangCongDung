const rectangle = {
  width: 10,
  height: 5,
  getArea: function getArea() {
    return this.width * this.height;
  }
}
area = rectangle.getArea();

console.log("Diện tích hình chữ nhật: " + area);

