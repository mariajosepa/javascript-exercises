const findTheOldest = function(people) {

  return ans = people.reduce((oldest, currentPerson) => {

    if (currentPerson.yearOfDeath === undefined) {
      currentPerson.yearOfDeath = new Date().getFullYear();
    }
    if (oldest.yearOfDeath === undefined) {
      oldest.yearOfDeath = new Date().getFullYear();
    }

    return (currentPerson.yearOfDeath - currentPerson.yearOfBirth) > (oldest.yearOfDeath - oldest.yearOfBirth) ? currentPerson : oldest;
  });

};


// Do not edit below this line
module.exports = findTheOldest;
