const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => {
  const minDamage = Math.floor(Math.random() * 16);
  const maxDamage = dragon.strength;
  const damage = Math.floor((Math.random() * (maxDamage - minDamage + 1)) + minDamage);
  return damage;
}

const warriorDamage = () => {
  const minDamage = warrior.strength;
  const maxDamage = warrior.strength * warrior.weaponDmg;
  const damage = Math.floor((Math.random() * (maxDamage - minDamage + 1)) + minDamage);
  return damage;
}

const mageDamage = () => {
  const minDamage = mage.intelligence;
  const maxDamage = mage.intelligence * 2;
  const damage = Math.floor((Math.random() * (maxDamage - minDamage + 1)) + minDamage);
  const damageMana = {
    damage: damage,
    manaGasta: 0,
  }
  if (mage.mana < 15) {
    damageMana.damage = 'Não possui mana suficiente';
  } else {
    damageMana.manaGasta = 15;
  }
  return damageMana;
};

const gameActions = {
  warriorTurn: (func) => {
    warrior.damage = func();
    dragon.healthPoints -= warrior.damage;
  },
  mageTurn: (func) => {
    const obj = func();
    mage.damage = obj.damage;
    mage.mana -= obj.manaGasta;
    dragon.healthPoints -= mage.damage;
  },
  dragonTurn: (func) => {
    dragon.damage = func();
    warrior.healthPoints -= dragon.damage;
    mage.healthPoints -= dragon.damage;
  },
  battleInfos: (obj) => {
    console.log(obj);
  },
};

while ((mage.healthPoints > 0 || warrior.healthPoints > 0) === true && dragon.healthPoints > 0 === true) {
  if (warrior.healthPoints > 0) {
    gameActions.warriorTurn(warriorDamage);
  }
  if (mage.healthPoints > 0) {
    gameActions.mageTurn(mageDamage);
  }
  gameActions.dragonTurn(dragonDamage);
}

gameActions.battleInfos(battleMembers);