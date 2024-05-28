class LinkedList {
  constructor() {
    this.head = null;
  }
  prepend(value) {
    const node = new Node(value);
    node.nextNode = this.head;
    this.head = node;
  }
  append(value) {
    //edge case no nodes
    let tmp = this.head;
    const node = new Node(value);
    if (tmp === null) {
      this.head = node;
    } else {
      while (tmp.nextNode !== null) {
        tmp = tmp.nextNode;
      }
      tmp.nextNode = node;
    }
  }
  size() {
    let tmp = this.head;
    let counter = 0;
    while (tmp !== null) {
      counter++;
      tmp = tmp.nextNode;
    }
    console.log(counter);
  }
  getHead() {
    let tmp = this.head;
    if (tmp === null) return console.log("list is empty");
    console.log(tmp.value);
  }
  getTail() {
    let tmp = this.head;
    if (tmp === null) return console.log("list is empty");
    while (tmp.nextNode !== null) {
      tmp = tmp.nextNode;
    }
    console.log(tmp.value);
  }
  at(index) {
    let tmp = this.head;
    for (let i = 0; i < index; i++) {
      tmp = tmp.nextNode;
      if (tmp === null)
        return console.log("the list is shorter then this number");
    }
    console.log(tmp.value);
  }
  popNode() {
    let tmp = this.head;
    if (tmp === null) return console.log("list is empty");
    if (this.head.nextNode === null) {
      this.head = null;
      return console.log("removed the last and only node");
    }
    while (tmp.nextNode.nextNode !== null) {
      tmp = tmp.nextNode;
    }
    tmp.nextNode = null;

    console.log("removed last node");
  }
  contains(value) {
    let tmp = this.head;
    if (tmp === null) return false;
    while (tmp !== null) {
      if (tmp.value === value) return true;
      tmp = tmp.nextNode;
    }
    return false;
  }
  find(value) {
    let tmp = this.head;
    if (tmp === null) return null;
    for (let i = 0; tmp !== null; i++) {
      if (tmp.value === value) return i;
      tmp = tmp.nextNode;
    }
  }
  insert(value, index) {
    let tmp = this.head;
    if (index === 0) {
      this.prepend(value);
      return console.log("this is the same as prepending");
    }
    if (tmp === null) return console.log("list is empty and index is not 0");
    const node = new Node(value);
    for (let i = 0; i < index - 1; i++) {
      tmp = tmp.nextNode;
      if (tmp === null)
        return console.log("list is shorter then inserted index");
    }
    node.nextNode = tmp.nextNode;
    tmp.nextNode = node;
  }
  removeAt(index) {
    let tmp = this.head;
    if (tmp === null) {
      return console.log("list is empty can't remove anything");
    }
    if (index === 0) {
      this.head = this.head.nextNode;
      return;
    }
    for (let i = 0; i < index - 1; i++) {
      tmp = tmp.nextNode;
      if (tmp.nextNode === null)
        return console.log("list is shorter then inserted index");
    }
    tmp.nextNode = tmp.nextNode.nextNode;
  }
  toString() {
    let tmp = this.head;
    let res = "";
    while (tmp !== null) {
      res += `(${tmp.value})->`;
      tmp = tmp.nextNode;
    }
    res += "null";
    console.log(res);
  }
}
class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}

let test = new LinkedList();
test.append(5);
test.prepend(9);
test.append(42);
test.toString();
