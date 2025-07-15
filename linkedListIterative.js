const Node = () => {
  let value = null;
  let nextNode = null;

  return {
    value,
    nextNode,
  };
};

const LinkedList = () => {
  let listHead = null;
  let listTail = null;
  let listSize = 0;

  function append(value) {
    let newNode = Node();
    newNode.value = value;

    if (listTail) listTail.nextNode = newNode;

    listHead = listHead ? listHead : newNode;
    listTail = newNode;
    listSize++;
  }

  function prepend(value) {
    let newNode = Node();
    newNode.value = value;

    if (listHead) {
      newNode.nextNode = listHead;
    }

    listHead = newNode;

    if (!listTail) listTail = newNode;
    listSize++;
  }

  function size() {
    return listSize;
  }

  function head() {
    return listHead;
  }

  function tail() {
    return listTail;
  }

  function at(index) {
    let current = listHead;
    let endOfList = false;
    let counter = 0;

    while (!endOfList) {
      if (!current.nextNode) endOfList = true;
      if (counter === index) {
        return current;
      }
      current = current.nextNode;
      counter++;
    }

    return null;
  }

  function pop() {
    if (listSize < 1) {
      console.log("List already empty");
      return;
    }

    if (listSize === 1) {
      listHead = null;
      listTail = null;
      listSize = 0;
      return;
    }

    listTail = at(listSize - 2);
    listTail.nextNode = null;
    listSize--;
  }

  function contains(value) {
    let current = listHead;
    let endOfList = false;

    while (!endOfList) {
      if (!current.nextNode) endOfList = true;
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }

    return false;
  }

  function find(value) {
    let current = listHead;
    let endOfList = false;
    let counter = 0;

    while (!endOfList) {
      if (!current.nextNode) endOfList = true;
      if (current.value === value) {
        return counter;
      }
      counter++;
      current = current.nextNode;
    }

    return null;
  }

  function toString() {
    let current = listHead;
    let endOfList = false;
    let str = "";

    while (!endOfList) {
      if (!current.nextNode) endOfList = true;
      str += `( ${current.value} ) -> `;
      current = current.nextNode;
    }

    return str.slice(0, -4);
  }

  function insertAt(value, index) {
    if (index >= listSize) {
      console.log("Index out of bounds, value appended to list");
      append(value);
      return;
    }

    if (index <= 0) {
      console.log("Value prepended to list");
      prepend(value);
      return;
    }

    let newNode = Node();
    newNode.value = value;
    newNode.nextNode = at(index);

    at(index - 1).nextNode = newNode;
    listSize++;
  }

  function removeAt(index) {
    if (index > listSize - 1 || index < 0) {
      console.log("Error: Index out of bounds.");
      return;
    }

    if (index === 0) {
      listHead = at(1);
      listSize--;
      return;
    }

    at(index - 1).nextNode = at(index + 1);

    listSize--;
  }

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
};
