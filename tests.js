const argv = process.argv;

if (argv.length != 3) {
  throw new Error("Wrong usage. Use: 'node test.js [file]'");
}

const file = argv[2];

if (!["linkedListRecursive.js", "linkedListIterative.js"].includes(file)) {
  throw new Error(`File './${file}' not found`);
}

const filePath = `./${file}`;

const run = async () => {
  const { LinkedList } = await import(filePath);

  const list = LinkedList();

  list.append("dog");
  list.append("cat");
  list.append("parrot");
  list.prepend("maçã");
  list.append("hamster");
  list.append("snake");
  list.append("turtle");
  list.prepend("uva");

  console.log(`\nHead node: ${list.head().value}`);
  console.log(`Tail node: ${list.tail().value}`);
  console.log(`Size: ${list.size()}`);

  console.log(`\nAt index 0: ${list.at(0).value}`);
  console.log(`At index 7: ${list.at(7).value}`);
  console.log(`At index 8 (out of bounds): ${list.at(8)}`);

  console.log(list.toString());

  list.pop();
  console.log(`\nAfter pop() function...`);
  console.log(`Head node: ${list.head().value}`);
  console.log(`Tail node: ${list.tail().value}`);
  console.log(`Size: ${list.size()}`);
  console.log(list.toString());

  console.log(`\nList contains 'parrot': ${list.contains("cat")}`);
  console.log(`List contains 'table': ${list.contains("table")}`);
  console.log(`parrot's index: ${list.find("parrot")}`);
  console.log(`table's index: ${list.find("table")}`);

  list.insertAt("pera", 2);
  console.log(`\nAfter iserting 'pera' at index 2`);
  console.log(`Size: ${list.size()}`);
  console.log(list.toString());

  list.removeAt(1);
  console.log(`\nAfter removing at index 1`);
  console.log(`Size: ${list.size()}`);
  console.log(list.toString());
};

run();
