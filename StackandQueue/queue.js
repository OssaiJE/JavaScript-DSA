/**
 * QUEUE DATA STRUCTURE
 */

// Big O(1)

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  //   Add value to the queue
  enqueue(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  // Remove value from the queue
  dequeue() {
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

var queue = new Queue();

queue.enqueue(100);
queue.enqueue(201);
queue.enqueue(250);
queue.enqueue(350);
queue.enqueue(999);

// COMMANDS                               OUTPUT
/**
 * * $> queue.methodName
 * $> queue                      Queue {first: Node, last: Node, size: 5}
 * $> queue.print()                   [100, 201, 250, 350, 999]
 */
