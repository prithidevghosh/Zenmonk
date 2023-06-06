function oddEvenList(head) {
    if (!head || !head.next) {
        return head; // No need to reorder if the list is empty or has only one node
    }

    let oddHead = head;
    let evenHead = head.next;
    let odd = oddHead;
    let even = evenHead;

    while (even && even.next) {
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    }

    odd.next = evenHead; // Connect the odd list with the even list

    return oddHead;
}

class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(element) {
        let node = new Node(element);
        let current;

        if (this.head == null) {
            this.head = node;
        } else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }
        this.size++;
    }

    print() {
        let current = this.head;
        while (current != null) {
            console.log(current.element);
            current = current.next;
        }
    }
}

let ll1 = new LinkedList();
ll1.add(1);
ll1.add(2);
ll1.add(3);
ll1.add(4);
ll1.add(5);
ll1.add(6);
ll1.add(7);
let res = oddEvenList(ll1.head); // Pass the head of the linked list
ll1.print();
