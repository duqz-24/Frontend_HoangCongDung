function binhPhuongVaLocSoChan(mangSo){
  let mangBinhPhuong = mangSo.map(function(so){
      return so * so;
  });
  let mangSoChan = mangBinhPhuong.filter(function(so){
      return so % 2 === 0;
  });
  return mangSoChan;
}
function nhapVaXuLy(){
  let nhap = prompt("Nhap vao 10 so nguyen, cach nhau bang dau phay ");
  let mangSo = nhap.split(',').map(function(so){
      return parseInt(so.trim()); 
  });
  if (mangSo.length === 10 && mangSo.every(function(so){
      return !isNaN(so);
  })){
      let ketQua = binhPhuongVaLocSoChan(mangSo);
      alert("Ket qua la: " + ketQua.join(", "));
  }else{
      alert("Vui long nhap chinh xac 10 so nguyen.");
  }
}
nhapVaXuLy();