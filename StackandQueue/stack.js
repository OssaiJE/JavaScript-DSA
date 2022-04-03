class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  //   Add to the top of the stack
  push(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  //   Remove from the top of the stack
  pop() {
    if (!this.first) return null;
    var temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
  //   Convert the stack to array and log to console
  print() {
    var arr = [];
    var current = this.first;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    console.log(arr);
  }
}

var stack = new Stack();

stack.push(100);
stack.push(201);
stack.push(250);
stack.push(350);
stack.push(999);

// COMMANDS                               OUTPUT
/**
 * * $> stack.methodName
 * $> stack                      Stack {first: Node, last: Node, size: 5}
 * $> stack.print()                   [999, 350, 250, 201, 100]
 */
