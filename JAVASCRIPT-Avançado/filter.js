const ages = [41,35,64,76,23,45,87,65,43,21,12,31];

const result = ages.filter((age) =>{
  return age >= 55;
});

document.write(result);