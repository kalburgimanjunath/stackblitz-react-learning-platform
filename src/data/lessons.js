export const LESSONS = [
  {
    id: 1,
    url: 'https://docs.google.com/presentation/d/e/2PACX-1vTcLKXXrVZeRKC0DRVyJG2wBAEFEIw84xwiS1DfnFT0tnukstnihT2V6tAWeK9AsZsmR1SdmWxG0cC6/embed?start=false&loop=false&delayms=3000',
    title: 'What is an Algorithm? ',
    content: `In computer programming terms, an algorithm is a set of well-defined instructions to solve a particular problem. It takes a set of input(s) and produces the desired output. For example,

    An algorithm to add two numbers:
    
    Take two number inputs
    
    Add numbers using the + operator
    
    Display the result
    
    Qualities of a Good Algorithm
    Input and output should be defined precisely.
    Each step in the algorithm should be clear and unambiguous.
    Algorithms should be most effective among many different ways to solve a problem.
    An algorithm shouldn't include computer code. Instead, the algorithm should be written in such a way that it can be used in different programming languages.`,
    solution: `Step 1: Start
    Step 2: Declare variables a,b and c.
    Step 3: Read variables a,b and c.
    Step 4: If a > b
               If a > c
                  Display a is the largest number.
               Else
                  Display c is the largest number.
            Else
               If b > c
                  Display b is the largest number.
               Else
                  Display c is the greatest number.  
    Step 5: Stop`,
    preview: true,
  },
  {
    id: 2,
    url: 'https://docs.google.com/presentation/d/e/2PACX-1vTcLKXXrVZeRKC0DRVyJG2wBAEFEIw84xwiS1DfnFT0tnukstnihT2V6tAWeK9AsZsmR1SdmWxG0cC6/embed?start=false&loop=false&delayms=3000',
    title: 'Find the largest number among three numbers ',
    content: 'comming soon',
    solution: `Step 1: Start
    Step 2: Declare variables a,b and c.
    Step 3: Read variables a,b and c.
    Step 4: If a > b
               If a > c
                  Display a is the largest number.
               Else
                  Display c is the largest number.
            Else
               If b > c
                  Display b is the largest number.
               Else
                  Display c is the greatest number.  
    Step 5: Stop`,
    preview: true,
  },
  {
    id: 3,
    url: 'https://docs.google.com/presentation/d/e/2PACX-1vTcLKXXrVZeRKC0DRVyJG2wBAEFEIw84xwiS1DfnFT0tnukstnihT2V6tAWeK9AsZsmR1SdmWxG0cC6/embed?start=false&loop=false&delayms=3000',
    title: 'Find Roots of a Quadratic Equation ax2 + bx + c = 0 ',
    content: 'lesson 3 content',
    solution: `Step 1: Start
    Step 2: Declare variables a, b, c, D, x1, x2, rp and ip;
    Step 3: Calculate discriminant
             D ← b2-4ac
    Step 4: If D ≥ 0
                  r1 ← (-b+√D)/2a
                  r2 ← (-b-√D)/2a 
                  Display r1 and r2 as roots.
            Else     
                  Calculate real part and imaginary part
                  rp ← -b/2a
                  ip ← √(-D)/2a
                  Display rp+j(ip) and rp-j(ip) as roots
    Step 5: Stop  `,
    preview: true,
  },
  {
    id: 4,
    url: 'https://docs.google.com/presentation/d/e/2PACX-1vTcLKXXrVZeRKC0DRVyJG2wBAEFEIw84xwiS1DfnFT0tnukstnihT2V6tAWeK9AsZsmR1SdmWxG0cC6/embed?start=false&loop=false&delayms=3000',
    title: ' Find the factorial of a number',
    content: 'comming soon',
    solution: `Step 1: Start
    Step 2: Declare variables n, factorial and i.
    Step 3: Initialize variables
              factorial ← 1
              i ← 1
    Step 4: Read value of n
    Step 5: Repeat the steps until i = n
         5.1: factorial ← factorial*i
         5.2: i ← i+1
    Step 6: Display factorial
    Step 7: Stop`,
    preview: true,
  },
  {
    id: 5,
    url: 'https://docs.google.com/presentation/d/e/2PACX-1vTcLKXXrVZeRKC0DRVyJG2wBAEFEIw84xwiS1DfnFT0tnukstnihT2V6tAWeK9AsZsmR1SdmWxG0cC6/embed?start=false&loop=false&delayms=3000',
    title: 'Check whether a number is prime or not',
    content: 'coming soon',
    solution: `Step 1: Start
    Step 2: Declare variables n, i, flag.
    Step 3: Initialize variables
            flag ← 1
            i ← 2  
    Step 4: Read n from the user.
    Step 5: Repeat the steps until i=(n/2)
         5.1 If remainder of n÷i equals 0
                flag ← 0
                Go to step 6
         5.2 i ← i+1
    Step 6: If flag = 0
               Display n is not prime
            else
               Display n is prime
    Step 7: Stop `,
    preview: true,
  },
  {
    id: 6,
    url: 'https://docs.google.com/presentation/d/e/2PACX-1vTcLKXXrVZeRKC0DRVyJG2wBAEFEIw84xwiS1DfnFT0tnukstnihT2V6tAWeK9AsZsmR1SdmWxG0cC6/embed?start=false&loop=false&delayms=3000',
    title: 'Arrays ',
    content: `An array is a linear data structure that represents a collection of elements. In JavaScript, arrays don't have a fixed size, while their contents can be of any valid type, even arrays themselves. Arrays are probably the most commonly used data structure and come with a plethora of methods that allow easy manipulation and transformation of their contents.`,
    solution: `
    const nums = [1, 2, 3];
    const strs = Array.from('est');
    
    nums.push(6);
    nums.push(4, 9);
    strs.unshift('t');
    
    nums.length;                     // 6
    nums[nums.length - 1];           // 9
    strs[0];                         // 't'
    strs[2];                         // 's'
    
    nums.slice(1, 3);                // [2, 3]
    nums.map(n => n * 2);            // [2, 4, 6, 12, 8, 18]
    nums.filter(n => n % 2 === 0);   // [2, 6, 4]
    nums.reduce((a, n) => a + n, 0); // 25
    
    strs.reverse();                  // ['t', 's', 'e', 't']
    strs.join('');                   // 'test'`,
    preview: true,
  },
  {
    id: 7,
    url: 'https://docs.google.com/presentation/d/e/2PACX-1vTcLKXXrVZeRKC0DRVyJG2wBAEFEIw84xwiS1DfnFT0tnukstnihT2V6tAWeK9AsZsmR1SdmWxG0cC6/embed?start=false&loop=false&delayms=3000',
    title: 'Sets',
    content: `A set is a linear data structure that represents an ordered collection of unique values. Sets in JavaScript can store any valid type of value, however each value can only occur once based on value equality checking.`,
    solution: `
    const nums = new Set([1, 2, 3]);

    nums.add(4);
    nums.add(1);
    nums.add(5);
    nums.add(4);
    
    nums.size;                       // 5
    nums.has(4);                     // true
    
    nums.delete(4);
    nums.has(4);                     // false
    
    [...nums];                       // [1, 2, 3, 5]
    
    nums.clear();
    nums.size;                       // 0`,
    preview: true,
  },
  {
    id: 8,
    url: 'https://docs.google.com/presentation/d/e/2PACX-1vTcLKXXrVZeRKC0DRVyJG2wBAEFEIw84xwiS1DfnFT0tnukstnihT2V6tAWeK9AsZsmR1SdmWxG0cC6/embed?start=false&loop=false&delayms=3000',
    title: 'Maps',
    content: `A map is an associative data structure that represents a keyed collection of elements. Each key in a JavaScript Map has to be unique and either a primitive value or an object, whereas the values of the map can be of any valid type.`,
    solution: `
    const items = new Map([
      [1, { name: 'John' }],
      [2, { name: 'Mary' }]
    ]);
    
    items.set(4, { name: 'Alan' });
    items.set(2, { name: 'Jeff' });
    
    items.size;                      // 3
    items.has(4);                    // true
    items.get(2);                    // { name: 'Jeff' }
    
    items.delete(2);
    items.size;                      // 2
    
    [...items.keys()];               // [1, 4]
    [...items.values()];             // [{ name: 'John' }, { name: 'Alan' }]
    
    items.clear();
    items.size;                      // 0`,
    preview: true,
  },
  {
    id: 9,
    url: 'https://docs.google.com/presentation/d/e/2PACX-1vTcLKXXrVZeRKC0DRVyJG2wBAEFEIw84xwiS1DfnFT0tnukstnihT2V6tAWeK9AsZsmR1SdmWxG0cC6/embed?start=false&loop=false&delayms=3000',
    title: 'JavaScript Data Structures - Queue',
    content: `A queue is a linear data structure that behaves like a real-world queue. It follows a first in, first out (FIFO) order of operations, similar to its real-world counterpart. This means that new items are added to the end of the queue, whereas items are removed from the start of the queue.

    JavaScript Queue visualization
    The main operations of a queue data structure are:
    
    enqueue: Adds an element to the end of the queue
    dequeue: Removes an element from the start of the queue
    peek: Retrieves the element at the start of the queue, without removing it
    isEmpty: Checks if the queue is empty
    Implementation
    class Queue {
      constructor() {
        this.items = [];
      }
    
      enqueue(item) {
        this.items.push(item);
      }
    
      dequeue(item) {
        return this.items.shift();
      }
    
      peek(item) {
        return this.items[0];
      }
    
      isEmpty() {
        return this.items.length === 0;
      }
    }
    Create a class with a constructor that initializes an empty array, items, for each instance.
    Define an enqueue() method, which uses Array.prototype.push() to add an element to the end of the items array.
    Define a dequeue() method, which uses Array.prototype.shift() to remove an element from the start of the items array.
    Define a peek() method, which retrieves the value of the first element in the items array, without removing it.
    Define an isEmpty() method, which uses Array.prototype.length to determine if the items array is empty.`,
    solution: `
    const queue = new Queue();

    queue.isEmpty();    // true
    
    queue.enqueue('A');
    queue.enqueue('B');
    queue.enqueue('C');
    queue.enqueue('D');
    queue.enqueue('E');
    
    queue.isEmpty();    // false
    
    queue.peek();       // 'A'
    
    queue.dequeue();    // 'A'
    queue.dequeue();    // 'B'
    queue.dequeue();    // 'C'`,
    preview: true,
  },
  {
    id: 10,
    url: 'https://docs.google.com/presentation/d/e/2PACX-1vTcLKXXrVZeRKC0DRVyJG2wBAEFEIw84xwiS1DfnFT0tnukstnihT2V6tAWeK9AsZsmR1SdmWxG0cC6/embed?start=false&loop=false&delayms=3000',
    title: 'JavaScript Data Structures - Stack',
    content: `A stack is a linear data structure that behaves like a real-world stack of items. It follows a last in, first out (LIFO) order of operations, similar to its real-world counterpart. This means that new items are added to the top of the stack and items are removed from the top of the stack as well.

    JavaScript Stack visualization
    The main operations of a stack data structure are:
    
    push: Adds an element to the top of the stack
    pop: Removes an element from the top of the stack
    peek: Retrieves the element at the top of the stack, without removing it
    isEmpty: Checks if the stack is empty
    Implementation
    class Stack {
      constructor() {
        this.items = [];
      }
    
      push(item) {
        this.items.unshift(item);
      }
    
      pop(item) {
        return this.items.shift();
      }
    
      peek(item) {
        return this.items[0];
      }
    
      isEmpty() {
        return this.items.length === 0;
      }
    }
    Create a class with a constructor that initializes an empty array, items, for each instance.
    Define a push() method, which uses Array.prototype.unshift() to add an element to the start of the items array.
    Define a pop() method, which uses Array.prototype.shift() to remove an element from the start of the items array.
    Define a peek() method, which retrieves the value of the first element in the items array, without removing it.
    Define an isEmpty() method, which uses Array.prototype.length to determine if the items array is empty.`,
    solution: `
    const stack = new Stack();

    stack.push('apples');
    stack.push('oranges');
    stack.push('pears');
    
    stack.isEmpty();    // false
    
    stack.peek();       // 'pears'
    
    stack.pop();        // 'pears'
    stack.pop();        // 'oranges'
    stack.pop();        // 'apples'
    
    stack.isEmpty();    // true`,
    preview: true,
  },
  {
    id: 11,
    url: 'https://docs.google.com/presentation/d/e/2PACX-1vTcLKXXrVZeRKC0DRVyJG2wBAEFEIw84xwiS1DfnFT0tnukstnihT2V6tAWeK9AsZsmR1SdmWxG0cC6/embed?start=false&loop=false&delayms=3000',
    title: 'JavaScript Data Structures - Linked List',
    content: `A linked list is a linear data structure that represents a collection of elements, where each element points to the next one. The first element in the linked list is the head and the last element is the tail.

    JavaScript Linked List visualization
    Each element of a linked list data structure must have the following properties:
    
    value: The value of the element
    next: A pointer to the next element in the linked list (null if there is none)
    The main properties of a linked list data structure are:
    
    size: The number of elements in the linked list
    head: The first element in the linked list
    tail: The last element in the linked list
    The main operations of a linked list data structure are:
    
    insertAt: Inserts an element at the specific index
    removeAt: Removes the element at the specific index
    getAt: Retrieves the element at the specific index
    clear: Empties the linked list
    reverse: Reverses the order of elements in the linked list
    Implementation
    class LinkedList {
      constructor() {
        this.nodes = [];
      }
    
      get size() {
        return this.nodes.length;
      }
    
      get head() {
        return this.size ? this.nodes[0] : null;
      }
    
      get tail() {
        return this.size ? this.nodes[this.size - 1] : null;
      }
    
      insertAt(index, value) {
        const previousNode = this.nodes[index - 1] || null;
        const nextNode = this.nodes[index] || null;
        const node = { value, next: nextNode };
    
        if (previousNode) previousNode.next = node;
        this.nodes.splice(index, 0, node);
      }
    
      insertFirst(value) {
        this.insertAt(0, value);
      }
    
      insertLast(value) {
        this.insertAt(this.size, value);
      }
    
      getAt(index) {
        return this.nodes[index];
      }
    
      removeAt(index) {
        const previousNode = this.nodes[index - 1];
        const nextNode = this.nodes[index + 1] || null;
    
        if (previousNode) previousNode.next = nextNode;
    
        return this.nodes.splice(index, 1);
      }
    
      clear() {
        this.nodes = [];
      }
    
      reverse() {
        this.nodes = this.nodes.reduce(
          (acc, { value }) => [{ value, next: acc[0] || null }, ...acc],
          []
        );
      }
    
      *[Symbol.iterator]() {
        yield* this.nodes;
      }
    }
    Create a class with a constructor that initializes an empty array, nodes, for each instance.
    Define a size getter, that returns that uses Array.prototype.length to return the number of elements in the nodes array.
    Define a head getter, that returns the first element of the nodes array or null if empty.
    Define a tail getter, that returns the last element of the nodes array or null if empty.
    Define an insertAt() method, which uses Array.prototype.splice() to add a new object in the nodes array, updating the next key of the previous element.
    Define two convenience methods, insertFirst() and insertLast() that use the insertAt() method to insert a new element at the start or end of the nodes array respectively.
    Define a getAt() method, which retrieves the element in the given index.
    Define a removeAt() method, which uses Array.prototype.splice() to remove an object in the nodes array, updating the next key of the previous element.
    Define a clear() method, which empties the nodes array.
    Define a reverse() method, which uses Array.prototype.reduce() and the spread operator (...) to reverse the order of the nodes array, updating the next key of each element appropriately.
    Define a generator method for Symbol.iterator, which delegates to the nodes array's iterator using the yield* syntax.`,
    solution: `
    const list = new LinkedList();

    list.insertFirst(1);
    list.insertFirst(2);
    list.insertFirst(3);
    list.insertLast(4);
    list.insertAt(3, 5);
    
    list.size;                      // 5
    list.head.value;                // 3
    list.head.next.value;           // 2
    list.tail.value;                // 4
    [...list.map(e => e.value)];    // [3, 2, 1, 5, 4]
    
    list.removeAt(1);               // 2
    list.getAt(1).value;            // 1
    list.head.next.value;           // 1
    [...list.map(e => e.value)];    // [3, 1, 5, 4]
    
    list.reverse();
    [...list.map(e => e.value)];    // [4, 5, 1, 3]
    
    list.clear();
    list.size;                      // 0`,
    preview: true,
  },
  {
    id: 12,
    url: 'https://docs.google.com/presentation/d/e/2PACX-1vTcLKXXrVZeRKC0DRVyJG2wBAEFEIw84xwiS1DfnFT0tnukstnihT2V6tAWeK9AsZsmR1SdmWxG0cC6/embed?start=false&loop=false&delayms=3000',
    title: 'JavaScript Data Structures - Doubly Linked List',
    content: `A doubly linked list is a linear data structure that represents a collection of elements, where each element points both to the next and the previous one. The first element in the doubly linked list is the head and the last element is the tail.

    JavaScript Doubly Linked List visualization
    Each element of a doubly linked list data structure must have the following properties:
    
    value: The value of the element
    next: A pointer to the next element in the linked list (null if there is none)
    previous: A pointer to the previous element in the linked list (null if there is none)
    The main properties of a doubly linked list data structure are:
    
    size: The number of elements in the doubly linked list
    head: The first element in the doubly linked list
    tail: The last element in the doubly linked list
    The main operations of a doubly linked list data structure are:
    
    insertAt: Inserts an element at the specific index
    removeAt: Removes the element at the specific index
    getAt: Retrieves the element at the specific index
    clear: Empties the doubly linked list
    reverse: Reverses the order of elements in the doubly linked list
    Implementation
    class DoublyLinkedList {
      constructor() {
        this.nodes = [];
      }
    
      get size() {
        return this.nodes.length;
      }
    
      get head() {
        return this.size ? this.nodes[0] : null;
      }
    
      get tail() {
        return this.size ? this.nodes[this.size - 1] : null;
      }
    
      insertAt(index, value) {
        const previousNode = this.nodes[index - 1] || null;
        const nextNode = this.nodes[index] || null;
        const node = { value, next: nextNode, previous: previousNode };
    
        if (previousNode) previousNode.next = node;
        if (nextNode) nextNode.previous = node;
        this.nodes.splice(index, 0, node);
      }
    
      insertFirst(value) {
        this.insertAt(0, value);
      }
    
      insertLast(value) {
        this.insertAt(this.size, value);
      }
    
      getAt(index) {
        return this.nodes[index];
      }
    
      removeAt(index) {
        const previousNode = this.nodes[index - 1] || null;
        const nextNode = this.nodes[index + 1] || null;
    
        if (previousNode) previousNode.next = nextNode;
        if (nextNode) nextNode.previous = previousNode;
    
        return this.nodes.splice(index, 1);
      }
    
      clear() {
        this.nodes = [];
      }
    
      reverse() {
        this.nodes = this.nodes.reduce((acc, { value }) => {
          const nextNode = acc[0] || null;
          const node = { value, next: nextNode, previous: null };
          if (nextNode) nextNode.previous = node;
          return [node, ...acc];
        }, []);
      }
    
      *[Symbol.iterator]() {
        yield* this.nodes;
      }
    }
    Create a class with a constructor that initializes an empty array, nodes, for each instance.
    Define a size getter, that returns that uses Array.prototype.length to return the number of elements in the nodes array.
    Define a head getter, that returns the first element of the nodes array or null if empty.
    Define a tail getter, that returns the last element of the nodes array or null if empty.
    Define an insertAt() method, which uses Array.prototype.splice() to add a new object in the nodes array, updating the next and previous keys of the previous and next elements respectively.
    Define two convenience methods, insertFirst() and insertLast() that use the insertAt() method to insert a new element at the start or end of the nodes array respectively.
    Define a getAt() method, which retrieves the element in the given index.
    Define a removeAt() method, which uses Array.prototype.splice() to remove an object in the nodes array, updating the next and previous keys of the previous and next elements respectively.
    Define a clear() method, which empties the nodes array.
    Define a reverse() method, which uses Array.prototype.reduce() and the spread operator (...) to reverse the order of the nodes array, updating the next and previous keys of each element appropriately.
    Define a generator method for Symbol.iterator, which delegates to the nodes array's iterator using the yield* syntax.`,
    solution: `
    const list = new DoublyLinkedList();

    list.insertFirst(1);
    list.insertFirst(2);
    list.insertFirst(3);
    list.insertLast(4);
    list.insertAt(3, 5);
    
    list.size;                      // 5
    list.head.value;                // 3
    list.head.next.value;           // 2
    list.tail.value;                // 4
    list.tail.previous.value;       // 5
    [...list.map(e => e.value)];    // [3, 2, 1, 5, 4]
    
    list.removeAt(1);               // 2
    list.getAt(1).value;            // 1
    list.head.next.value;           // 1
    [...list.map(e => e.value)];    // [3, 1, 5, 4]
    
    list.reverse();
    [...list.map(e => e.value)];    // [4, 5, 1, 3]
    
    list.clear();
    list.size;                      // 0`,
    preview: true,
  },
  {
    id: 13,
    url: 'https://docs.google.com/presentation/d/e/2PACX-1vTcLKXXrVZeRKC0DRVyJG2wBAEFEIw84xwiS1DfnFT0tnukstnihT2V6tAWeK9AsZsmR1SdmWxG0cC6/embed?start=false&loop=false&delayms=3000',
    title: 'JavaScript Data Structures - Binary Tree',
    content: `A binary tree is a data structure consisting of a set of linked nodes that represent a hierarchical tree structure. Each node is linked to others via parent-children relationship. Any given node can have at most two children (left and right). The first node in the binary tree is the root, whereas nodes without any children are the leaves.

    JavaScript Binary Tree visualization
    Each node in a binary tree data structure must have the following properties:
    
    key: The key of the node
    value: The value of the node
    parent: The parent of the node (null if there is none)
    left: A pointer to the node's left child (null if there is none)
    right: A pointer to the node's right child (null if there is none)
    The main operations of a binary tree data structure are:
    
    insert: Inserts a node as a child of the given parent node
    remove: Removes a node and its children from the binary tree
    find: Retrieves a given node
    preOrderTraversal: Traverses the binary tree by recursively traversing each node followed by its children
    postOrderTraversal: Traverses the binary tree by recursively traversing each node's children followed by the node
    inOrderTraversal: Traverses the binary tree by recursively traversing each node's left child, followed by the node, followed by its right child
    Implementation
    class BinaryTreeNode {
      constructor(key, value = key, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
      }
    
      get isLeaf() {
        return this.left === null && this.right === null;
      }
    
      get hasChildren() {
        return !this.isLeaf;
      }
    }
    
    class BinaryTree {
      constructor(key, value = key) {
        this.root = new BinaryTreeNode(key, value);
      }
    
      *inOrderTraversal(node = this.root) {
        if (node.left) yield* this.inOrderTraversal(node.left);
        yield node;
        if (node.right) yield* this.inOrderTraversal(node.right);
      }
    
      *postOrderTraversal(node = this.root) {
        if (node.left) yield* this.postOrderTraversal(node.left);
        if (node.right) yield* this.postOrderTraversal(node.right);
        yield node;
      }
    
      *preOrderTraversal(node = this.root) {
        yield node;
        if (node.left) yield* this.preOrderTraversal(node.left);
        if (node.right) yield* this.preOrderTraversal(node.right);
      }
    
      insert(
        parentNodeKey,
        key,
        value = key,
        { left, right } = { left: true, right: true }
      ) {
        for (let node of this.preOrderTraversal()) {
          if (node.key === parentNodeKey) {
            const canInsertLeft = left && node.left === null;
            const canInsertRight = right && node.right === null;
            if (!canInsertLeft && !canInsertRight) return false;
            if (canInsertLeft) {
              node.left = new BinaryTreeNode(key, value, node);
              return true;
            }
            if (canInsertRight) {
              node.right = new BinaryTreeNode(key, value, node);
              return true;
            }
          }
        }
        return false;
      }
    
      remove(key) {
        for (let node of this.preOrderTraversal()) {
          if (node.left.key === key) {
            node.left = null;
            return true;
          }
          if (node.right.key === key) {
            node.right = null;
            return true;
          }
        }
        return false;
      }
    
      find(key) {
        for (let node of this.preOrderTraversal()) {
          if (node.key === key) return node;
        }
        return undefined;
      }
    }
    Create a class for the BinaryTreeNode with a constructor that initializes the appropriate key, value, parent, left and right properties.
    Define an isLeaf getter, that uses Array.prototype.length to check if both left and right are empty.
    Define a hasChildren getter, that is the reverse of the isLeaf getter.
    Create a class for the BinaryTree with a constructor that initializes the root of the binary tree.
    Define a preOrderTraversal() generator method that traverses the binary tree in pre-order, using the yield* syntax to recursively delegate traversal to itself.
    Define a postOrderTraversal() generator method that traverses the binary tree in post-order, using the yield* syntax to recursively delegate traversal to itself.
    Define a inOrderTraversal() generator method that traverses the binary tree in in-order, using the yield* syntax to recursively delegate traversal to itself.
    Define an insert() method, that uses the preOrderTraversal() method to find the given parent node and insert a new child BinaryTreeNode either as the left or right child, depending on the passed options object.
    Define a remove() method, that uses the preOrderTraversal() method and Array.prototype.filter() to remove a BinaryTreeNode from the binary tree.
    Define a find() method, that uses the preOrderTraversal() method to retrieve the given node in the binary tree.`,
    solution: `
    const tree = new BinaryTree(1, 'AB');

    tree.insert(1, 11, 'AC');
    tree.insert(1, 12, 'BC');
    tree.insert(12, 121, 'BG', { right: true });
    
    [...tree.preOrderTraversal()].map(x => x.value);
    // ['AB', 'AC', 'BC', 'BCG']
    
    [...tree.inOrderTraversal()].map(x => x.value);
    // ['AC', 'AB', 'BC', 'BG']
    
    tree.root.value;                // 'AB'
    tree.root.hasChildren;          // true
    
    tree.find(12).isLeaf;           // false
    tree.find(121).isLeaf;          // true
    tree.find(121).parent.value;    // 'BC'
    tree.find(12).left;             // null
    tree.find(12).right.value;      // 'BG'
    
    tree.remove(12);
    
    [...tree.postOrderTraversal()].map(x => x.value);
    // ['AC', 'AB']`,
    preview: true,
  },
  {
    id: 14,
    url: 'https://docs.google.com/presentation/d/e/2PACX-1vTcLKXXrVZeRKC0DRVyJG2wBAEFEIw84xwiS1DfnFT0tnukstnihT2V6tAWeK9AsZsmR1SdmWxG0cC6/embed?start=false&loop=false&delayms=3000',
    title: 'JavaScript Data Structures - Binary Search Tree',
    content: `A binary search tree is a data structure consisting of a set of ordered linked nodes that represent a hierarchical tree structure. Each node is linked to others via parent-children relationship. Any given node can have at most two children (left and right). The first node in the binary search tree is the root, whereas nodes without any children are the leaves. The binary search tree is organized in such a way that for any given node, all nodes in its left subtree have a key less than itself and all nodes in its right subtree have a key greater than itself.

    JavaScript Binary Search Tree visualization
    Each node in a binary search tree data structure must have the following properties:
    
    key: The key of the node
    value: The value of the node
    parent: The parent of the node (null if there is none)
    left: A pointer to the node's left child (null if there is none)
    right: A pointer to the node's right child (null if there is none)
    The main operations of a binary search tree data structure are:
    
    insert: Inserts a node as a child of the given parent node
    remove: Removes a node and its children from the binary search tree
    has: Checks if a given node exists
    find: Retrieves a given node
    preOrderTraversal: Traverses the binary search tree by recursively traversing each node followed by its children
    postOrderTraversal: Traverses the binary search tree by recursively traversing each node's children followed by the node
    inOrderTraversal: Traverses the binary search tree by recursively traversing each node's left child, followed by the node, followed by its right child
    Implementation
    class BinarySearchTreeNode {
      constructor(key, value = key, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
      }
    
      get isLeaf() {
        return this.left === null && this.right === null;
      }
    
      get hasChildren() {
        return !this.isLeaf;
      }
    }
    
    class BinarySearchTree {
      constructor(key, value = key) {
        this.root = new BinarySearchTreeNode(key, value);
      }
    
      *inOrderTraversal(node = this.root) {
        if (node.left) yield* this.inOrderTraversal(node.left);
        yield node;
        if (node.right) yield* this.inOrderTraversal(node.right);
      }
    
      *postOrderTraversal(node = this.root) {
        if (node.left) yield* this.postOrderTraversal(node.left);
        if (node.right) yield* this.postOrderTraversal(node.right);
        yield node;
      }
    
      *preOrderTraversal(node = this.root) {
        yield node;
        if (node.left) yield* this.preOrderTraversal(node.left);
        if (node.right) yield* this.preOrderTraversal(node.right);
      }
    
      insert(key, value = key) {
        let node = this.root;
        while (true) {
          if (node.key === key) return false;
          if (node.key > key) {
            if (node.left !== null) node = node.left;
            else {
              node.left = new BinarySearchTreeNode(key, value, node);
              return true;
            }
          } else if (node.key < key) {
            if (node.right !== null) node = node.right;
            else {
              node.right = new BinarySearchTreeNode(key, value, node);
              return true;
            }
          }
        }
      }
    
      has(key) {
        for (let node of this.postOrderTraversal()) {
          if (node.key === key) return true;
        }
        return false;
      }
    
      find(key) {
        for (let node of this.postOrderTraversal()) {
          if (node.key === key) return node;
        }
        return undefined;
      }
    
      remove(key) {
        const node = this.find(key);
        if (!node) return false;
        const isRoot = node.parent === null;
        const isLeftChild = !isRoot ? node.parent.left === node : false;
        const hasBothChildren = node.left !== null && node.right !== null;
    
        if (node.isLeaf) {
          if (!isRoot) {
            if (isLeftChild) node.parent.left = null;
            else node.parent.right = null;
          } else {
            this.root = null;
          }
          return true;
        } else if (!hasBothChildren) {
          const child = node.left !== null ? node.left : node.right;
          if (!isRoot) {
            if (isLeftChild) node.parent.left = child;
            else node.parent.right = child;
          } else {
            this.root = child;
          }
          child.parent = node.parent;
          return true;
        } else {
          const rightmostLeft = [...this.inOrderTraversal(node.left)].slice(-1)[0];
          rightmostLeft.parent = node.parent;
          if (!isRoot) {
            if (isLeftChild) node.parent.left = rightmostLeft;
            else node.parent.right = rightmostLeft;
          } else {
            this.root = rightmostLeft;
          }
          rightmostLeft.right = node.right;
          node.right.parent = rightmostLeft;
          return true;
        }
      }
    }
    Create a class for the BinarySearchTreeNode with a constructor that initializes the appropriate key, value, parent, left and right properties.
    Define an isLeaf getter, that uses Array.prototype.length to check if both left and right are empty.
    Define a hasChildren getter, that is the reverse of the isLeaf getter.
    Create a class for the BinarySearchTree with a constructor that initializes the root of the binary search tree.
    Define a preOrderTraversal() generator method that traverses the binary search tree in pre-order, using the yield* syntax to recursively delegate traversal to itself.
    Define a postOrderTraversal() generator method that traverses the binary search tree in post-order, using the yield* syntax to recursively delegate traversal to itself.
    Define a inOrderTraversal() generator method that traverses the binary search tree in in-order, using the yield* syntax to recursively delegate traversal to itself.
    Define an insert() method, that uses a while loop to search the binary search tree, moving through each node's children, until an appropriate position is found to insert a new child BinarySearchTreeNode either as the left or right child, depending on the given key.
    Define a has() method, that uses the preOrderTraversal() method to check if the given node exists in the binary search tree.
    Define a find() method, that uses the preOrderTraversal() method to retrieve the given node in the binary search tree.
    Define a remove() method, that removes the given BinarySearchTreeNode from the binary search tree, deleting any links to it and updating the binary search tree to retain its order.`,
    solution: `
    const tree = new BinarySearchTree(30);

    tree.insert(10);
    tree.insert(15);
    tree.insert(12);
    tree.insert(40);
    tree.insert(35);
    tree.insert(50);
    
    [...tree.preOrderTraversal()].map(x => x.value);
    // [30, 10, 15, 12, 40, 35, 50]
    
    [...tree.inOrderTraversal()].map(x => x.value);
    // [10, 12, 15, 30, 35, 40, 50]
    
    [...tree.postOrderTraversal()].map(x => x.value);
    // [12, 15, 10, 35, 50, 40, 30]
    
    tree.root.value;                // 30
    tree.root.hasChildren;          // true
    
    tree.find(12).isLeaf;           // true
    tree.find(40).isLeaf;           // false
    tree.find(50).parent.value;     // 40
    tree.find(15).left.value;       // 12
    tree.find(12).right;            // null
    
    tree.remove(12);
    
    [...tree.preOrderTraversal()].map(x => x.value);
    // [30, 10, 15, 40, 35, 50]
    
    tree.remove(10);
    
    [...tree.preOrderTraversal()].map(v => ({
      key: v.key,
      parent: v.parent ? v.parent.key : null,
    })); // [30, 15, 40, 35, 50]
    
    tree.remove(40);
    
    [...tree.preOrderTraversal()].map(x => x.value);
    // [30, 15, 40, 35, 50]
    
    tree.remove(30);
    
    [...tree.preOrderTraversal()].map(x => x.value);
    // [15, 35, 50]`,
    preview: true,
  },
  {
    id: 15,
    url: 'https://docs.google.com/presentation/d/e/2PACX-1vTcLKXXrVZeRKC0DRVyJG2wBAEFEIw84xwiS1DfnFT0tnukstnihT2V6tAWeK9AsZsmR1SdmWxG0cC6/embed?start=false&loop=false&delayms=3000',
    title: `JavaScript Data Structures - Tree`,
    content: `A tree is a data structure consisting of a set of linked nodes that represent a hierarchical tree structure. Each node is linked to others via parent-children relationship. The first node in the tree is the root, whereas nodes without any children are the leaves.

    JavaScript Tree visualization
    Each node in a tree data structure must have the following properties:
    
    key: The key of the node
    value: The value of the node
    parent: The parent of the node (null if there is none)
    children: An array of pointers to the node's children
    The main operations of a tree data structure are:
    
    insert: Inserts a node as a child of the given parent node
    remove: Removes a node and its children from the tree
    find: Retrieves a given node
    preOrderTraversal: Traverses the tree by recursively traversing each node followed by its children
    postOrderTraversal: Traverses the tree by recursively traversing each node's children followed by the node
    Implementation
    class TreeNode {
      constructor(key, value = key, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.children = [];
      }
    
      get isLeaf() {
        return this.children.length === 0;
      }
    
      get hasChildren() {
        return !this.isLeaf;
      }
    }
    
    class Tree {
      constructor(key, value = key) {
        this.root = new TreeNode(key, value);
      }
    
      *preOrderTraversal(node = this.root) {
        yield node;
        if (node.children.length) {
          for (let child of node.children) {
            yield* this.preOrderTraversal(child);
          }
        }
      }
    
      *postOrderTraversal(node = this.root) {
        if (node.children.length) {
          for (let child of node.children) {
            yield* this.postOrderTraversal(child);
          }
        }
        yield node;
      }
    
      insert(parentNodeKey, key, value = key) {
        for (let node of this.preOrderTraversal()) {
          if (node.key === parentNodeKey) {
            node.children.push(new TreeNode(key, value, node));
            return true;
          }
        }
        return false;
      }
    
      remove(key) {
        for (let node of this.preOrderTraversal()) {
          const filtered = node.children.filter(c => c.key !== key);
          if (filtered.length !== node.children.length) {
            node.children = filtered;
            return true;
          }
        }
        return false;
      }
    
      find(key) {
        for (let node of this.preOrderTraversal()) {
          if (node.key === key) return node;
        }
        return undefined;
      }
    }
    Create a class for the TreeNode with a constructor that initializes the appropriate key, value, parent and children properties.
    Define an isLeaf getter, that uses Array.prototype.length to check if children is empty.
    Define a hasChildren getter, that is the reverse of the isLeaf getter.
    Create a class for the Tree with a constructor that initializes the root of the tree.
    Define a preOrderTraversal() generator method that traverses the tree in pre-order, using the yield* syntax to recursively delegate traversal to itself.
    Define a postOrderTraversal() generator method that traverses the tree in post-order, using the yield* syntax to recursively delegate traversal to itself.
    Define an insert() method, that uses the preOrderTraversal() method and Array.prototype.push() to add a new TreeNode to the tree.
    Define a remove() method, that uses the preOrderTraversal() method and Array.prototype.filter() to remove a TreeNode from the tree.
    Define a find() method, that uses the preOrderTraversal() method to retrieve the given node in the tree.`,
    solution: `
    const tree = new Tree(1, 'AB');

    tree.insert(1, 11, 'AC');
    tree.insert(1, 12, 'BC');
    tree.insert(12, 121, 'BG');
    
    [...tree.preOrderTraversal()].map(x => x.value);
    // ['AB', 'AC', 'BC', 'BCG']
    
    tree.root.value;              // 'AB'
    tree.root.hasChildren;        // true
    
    tree.find(12).isLeaf;         // false
    tree.find(121).isLeaf;        // true
    tree.find(121).parent.value;  // 'BC'
    
    tree.remove(12);
    
    [...tree.postOrderTraversal()].map(x => x.value);
    // ['AC', 'AB']`,
    preview: true,
  },
  {
    id: 16,
    url: 'https://docs.google.com/presentation/d/e/2PACX-1vTcLKXXrVZeRKC0DRVyJG2wBAEFEIw84xwiS1DfnFT0tnukstnihT2V6tAWeK9AsZsmR1SdmWxG0cC6/embed?start=false&loop=false&delayms=3000',
    title: 'JavaScript Data Structures - Graph',
    content: `A graph is a data structure consisting of a set of nodes or vertices and a set of edges that represent connections between those nodes. Graphs can be directed or undirected, while their edges can be assigned numeric weights.

    JavaScript Graph visualization
    Each node in a graph data structure must have the following properties:
    
    key: The key of the node
    value: The value of the node
    Each edge in a graph data structure must have the following properties:
    
    a: The starting node of the edge
    b: The target node of the edge
    weight: An optional numeric weight value for the edge
    The main operations of a graph data structure are:
    
    addNode: Inserts a new node with the specific key and value
    addEdge: Inserts a new edge between two given nodes, optionally setting its weight
    removeNode: Removes the node with the specified key
    removeEdge: Removes the edge between two given nodes
    findNode: Retrieves the node with the given key
    hasEdge: Checks if the graph has an edge between two given nodes
    setEdgeWeight: Sets the weight of a given edge
    getEdgeWeight: Gets the weight of a given edge
    adjacent: Finds all nodes for which an edge exists from a given node
    indegree: Calculates the total number of edges to a given node
    outdegree: Calculates the total number of edges from a given node
    Implementation
    class Graph {
      constructor(directed = true) {
        this.directed = directed;
        this.nodes = [];
        this.edges = new Map();
      }
    
      addNode(key, value = key) {
        this.nodes.push({ key, value });
      }
    
      addEdge(a, b, weight) {
        this.edges.set(JSON.stringify([a, b]), { a, b, weight });
        if (!this.directed)
          this.edges.set(JSON.stringify([b, a]), { a: b, b: a, weight });
      }
    
      removeNode(key) {
        this.nodes = this.nodes.filter(n => n.key !== key);
        [...this.edges.values()].forEach(({ a, b }) => {
          if (a === key || b === key) this.edges.delete(JSON.stringify([a, b]));
        });
      }
    
      removeEdge(a, b) {
        this.edges.delete(JSON.stringify([a, b]));
        if (!this.directed) this.edges.delete(JSON.stringify([b, a]));
      }
    
      findNode(key) {
        return this.nodes.find(x => x.key === key);
      }
    
      hasEdge(a, b) {
        return this.edges.has(JSON.stringify([a, b]));
      }
    
      setEdgeWeight(a, b, weight) {
        this.edges.set(JSON.stringify([a, b]), { a, b, weight });
        if (!this.directed)
          this.edges.set(JSON.stringify([b, a]), { a: b, b: a, weight });
      }
    
      getEdgeWeight(a, b) {
        return this.edges.get(JSON.stringify([a, b])).weight;
      }
    
      adjacent(key) {
        return [...this.edges.values()].reduce((acc, { a, b }) => {
          if (a === key) acc.push(b);
          return acc;
        }, []);
      }
    
      indegree(key) {
        return [...this.edges.values()].reduce((acc, { a, b }) => {
          if (b === key) acc++;
          return acc;
        }, 0);
      }
    
      outdegree(key) {
        return [...this.edges.values()].reduce((acc, { a, b }) => {
          if (a === key) acc++;
          return acc;
        }, 0);
      }
    }
    Create a class with a constructor that initializes an empty array, nodes, and a Map, edges, for each instance. The optional argument, directed, specifies if the graph is directed or not.
    
    Define an addNode() method, which uses Array.prototype.push() to add a new node in the nodes array.
    
    Define an addEdge() method, which uses Map.prototype.set() to add a new edge to the edges Map, using JSON.stringify() to produce a unique key.
    
    Define a removeNode() method, which uses Array.prototype.filter() and Map.prototype.delete() to remove the given node and any edges connected to it.
    
    Define a removeEdge() method, which uses Map.prototype.delete() to remove the given edge.
    
    Define a findNode() method, which uses Array.prototype.find() to return the given node, if any.
    
    Define a hasEdge() method, which uses Map.prototype.has() and JSON.stringify() to check if the given edge exists in the edges Map.
    
    Define a setEdgeWeight() method, which uses Map.prototype.set() to set the weight of the appropriate edge, whose key is produced by JSON.stringify().
    
    Define a getEdgeWeight() method, which uses Map.prototype.get() to get the eight of the appropriate edge, whose key is produced by JSON.stringify().
    
    Define an adjacent() method, which uses Map.prototype.values(), Array.prototype.reduce() and Array.prototype.push() to find all nodes connected to the given node.
    
    Define an indegree() method, which uses Map.prototype.values() and Array.prototype.reduce() to count the number of edges to the given node.
    
    Define an outdegree() method, which uses Map.prototype.values() and Array.prototype.reduce() to count the number of edges from the given node.`,
    solution: `
    const g = new Graph();

    g.addNode('a');
    g.addNode('b');
    g.addNode('c');
    g.addNode('d');
    
    g.addEdge('a', 'c');
    g.addEdge('b', 'c');
    g.addEdge('c', 'b');
    g.addEdge('d', 'a');
    
    g.nodes.map(x => x.value);  // ['a', 'b', 'c', 'd']
    [...g.edges.values()].map(({ a, b }) => $ {a} => $ {b});
    // ['a => c', 'b => c', 'c => b', 'd => a']
    
    g.adjacent('c');            // ['b']
    
    g.indegree('c');            // 2
    g.outdegree('c');           // 1
    
    g.hasEdge('d', 'a');        // true
    g.hasEdge('a', 'd');        // false
    
    g.removeEdge('c', 'b');
    
    [...g.edges.values()].map(({ a, b }) => $ {a} => $ {b});
    // ['a => c', 'b => c', 'd => a']
    
    g.removeNode('c');
    
    g.nodes.map(x => x.value);  // ['a', 'b', 'd']
    [...g.edges.values()].map(({ a, b }) => $ {a} => $ {b});
    // ['d => a']
    
    g.setEdgeWeight('d', 'a', 5);
    g.getEdgeWeight('d', 'a');  // 5`,
    preview: true,
  },
  // {
  //   id: 3,
  //   url:'https://docs.google.com/presentation/d/e/2PACX-1vTcLKXXrVZeRKC0DRVyJG2wBAEFEIw84xwiS1DfnFT0tnukstnihT2V6tAWeK9AsZsmR1SdmWxG0cC6/embed?start=false&loop=false&delayms=3000',
  //   title: 'lesson 3 ',
  //   content: 'lesson 3 content',
  //   solution: 'lesson 3 solution',
  //   preview: true,
  // },
];
