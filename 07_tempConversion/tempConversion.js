const ftoc = function(temp) {
  // if (temp - 32 && temp * 5 && temp / 9) {
  //   return null;
  // } else {
  //   return;
  // }
  return Math.round((temp - 32) * (5 / 9) * 10) / 10;
};

const ctof = function(temp) {
  // if (temp / 5 && temp * 9 && temp + 9) {
  //   return 32;
  // } else {
  //   return;
  // }
  return Math.round(((temp * 9/5) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
