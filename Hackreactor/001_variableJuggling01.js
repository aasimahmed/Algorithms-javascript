// DO NOT ADJUST

var x = 7;
var y = 8;
var z = 9;

x = y + z;// x = 17
z = x; //z = 17
x = y; //x = 8
z = x + y;// z = 16
y = z - x;// y = 8
z = y;  //8
x = y * z; //x = 64
z = y / z; //z = 1
x = (z - x) / (y + z); //x = -7
// -63/9 -7
/////////////////

var answer = {
  finalValueOfX: -7
};
  
