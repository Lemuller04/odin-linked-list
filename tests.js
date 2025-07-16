const argv = process.argv;

if (argv.length != 3) {
  throw new Error("Wrong usage. Use: 'node tests.js [file]'");
}

const file = argv[2];

if (!["linkedListRecursive.js", "linkedListIterative.js"].includes(file)) {
  throw new Error(`File './${file}' not found`);
}

const filePath = `./${file}`;

const run = async () => {
  const { LinkedList } = await import(filePath);

  // Write tests below:

  const list = LinkedList();

  // append function tests:

  list.append("dog");
  list.append("cat");
  list.append("parrot");
  list.append("hamster");
  list.append("snake");
  list.append("turtle");

  console.log("\nAfter append:\n" + list.toString());
  console.log(
    `Head: ${list.head().value} --- Tail: ${list.tail().value} --- Size: ${list.size()}`,
  );

  // prepend function tests:

  list.prepend("maçã");
  list.prepend("uva");

  console.log("\nAfter prepend:\n" + list.toString());
  console.log(
    `Head: ${list.head().value} --- Tail: ${list.tail().value} --- Size: ${list.size()}`,
  );

  // at function tests:

  console.log(`\nAt index 0: ${list.at(0).value}`);
  console.log(`At index 7: ${list.at(7).value}`);
  console.log(`At index 8 (out of bounds): ${list.at(8)}`);

  // pop function tests:

  list.pop();
  console.log("\nAfter pop:\n" + list.toString());
  console.log(
    `Head: ${list.head().value} --- Tail: ${list.tail().value} --- Size: ${list.size()}`,
  );

  // contains function tests:

  console.log(`\nList contains 'parrot'? ${list.contains("cat")}`);
  console.log(`List contains 'table'? ${list.contains("table")}`);

  // find function tests:

  console.log(`parrot's index: ${list.find("parrot")}`);
  console.log(`table's index: ${list.find("table")}`);

  // insertAt function tests:

  list.insertAt("pera", 2);
  console.log("\nAfter inserting 'pera' at index 2:\n" + list.toString());
  console.log(
    `Head: ${list.head().value} --- Tail: ${list.tail().value} --- Size: ${list.size()}`,
  );

  // removeAt function tests:

  list.removeAt(1);
  console.log("\nAfter removing at index 1 (maça):\n" + list.toString());
  console.log(
    `Head: ${list.head().value} --- Tail: ${list.tail().value} --- Size: ${list.size()}`,
  );
};

run();
