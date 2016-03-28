
var atticus={
  name: 'Atticus',
  employeeNumber: '2405',
  salary:'47000',
  rating: 3,
};
var jem={
  name: 'Jem',
  employeeNumber: '62347',
  salary: '63500',
  rating: 4,
};
var boo={
  name: 'Boo',
  employeeNumber: '11435',
  salary: '54000',
  rating: 3,
};
var scout= {
  name: 'Scout',
  employeeNumber: '6243',
  salary: '74750',
  rating: 5,
};

var employees=[atticus, jem, boo, scout];

 for ( var i = 0; i < employees.length; i++) {
  console.log(generating(employees[i]));
}

function generating(person){
  var salary=parseInt(person.salary);
  var bonusPercent=calcBonus(person);//calling
  var totalBonus=Math.round(bonusPercent * salary);
  var totalComp=totalBonus + salary;
  var newArray=[];

  newArray.push(person.name);
  newArray.push(bonusPercent);
  newArray.push(totalComp);
  newArray.push(totalBonus);
  return newArray;
}

function calcBonus(individual) {
  var name = individual.name;
  var employeeNumber = individual.employeeNumber;
  var salary = parseInt(individual.salary);
  var rating=individual.rating;
  var bonusPercent=0;


  switch(individual["rating"]){
    case 3:
      bonusPercent=0.04;
      break;
    case 4:
      bonusPercent=0.06;
      break;
    case 5:
      bonusPercent=0.10;
      break;
    default:
      bonusPercent=0;
	}

  if (employeeNumber.length == 4){
    bonusPercent+=0.05;
  }

  if(salary > 65000){
    bonusPercent-=0.01;

  }

  if(bonusPercent > 0.13){
    bonusPercent = 0.13;
  }
   return bonusPercent
}
