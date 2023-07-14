const ages = [37, 35, 45, 67, 15, 12, 11];
const result = ages.filter(checkAdult);

function checkAdult(age){
  return age >= 35;
}

document.write(result);