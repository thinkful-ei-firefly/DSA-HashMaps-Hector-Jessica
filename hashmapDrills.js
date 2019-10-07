const Hashmaps = require('./hashmap');

function main() {
  const LOR = new Hashmaps();

  LOR.set('Hobbit', 'Bilbo');
  LOR.set('Hobbit', 'Frodo');
  LOR.set('Wizard', 'Gandolf');
  LOR.set('Human', 'Aragon');
  LOR.set('Elf', 'Legolas');
  LOR.set('Maiar', 'The Necromancer');
  LOR.set('Maiar', 'Sauron');
  LOR.set('RingBearer', 'Gollum');
  LOR.set('LadyOfLight', 'Galadriel');
  LOR.set('HalfElven', 'Arwen');
  LOR.set('Ent', 'Treebeard');
  //console.log(LOR._hashTable);
  //for (let i = 0; i < LOR._hashTable.length; i++) {
  //  console.log(LOR._hashTable[i]);
  //}
  console.log(LOR.get('Maiar'));
  console.log(LOR.get('Hobbit'));
}

main();
// Two of the items that were set were overridden with tow other items with identical keys
