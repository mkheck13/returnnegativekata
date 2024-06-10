// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.


// if the number is greater than 0 then it will return the number multiplied by -1 which will give the number in negitive.
// if its less then 0 then it will just return the number
function makeNegative(num) {
    if(num>0){
        return num * -1;
    }else{
        return num;
    }
  }