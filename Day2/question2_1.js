// User defined class node
class Node {
    // constructor
    constructor(element) {
        this.element = element;
        this.next = null
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    add = (element) => {
        let node = new Node(element);
        let current;

        if (this.head == null) {
            this.head = node;
        }
        else {
            current = this.head;


            while (current.next) {
                current = current.next;
            }


            current.next = node;
        }
        this.size++;
    }

    print = () => {
        let current = this.head;
        while (current != null) {
            console.log(current.element);
            current = current.next;
        }
    }

}



function deleteDuplicates(head) {

    if (!head || !head.next) {
        return head;
    }


    let dummy = new Node(0);
    dummy.next = head;

    let prev = dummy;
    let current = head;

    while (current) {

        while (current.next && current.element === current.next.element) {
            current = current.next;
        }


        if (prev.next === current) {
            prev = prev.next;
        } else {
            prev.next = current.next;
        }

        current = current.next;
    }

    return dummy.next;
}



let ll1 = new LinkedList();
ll1.add(1);
ll1.add(2);
ll1.add(3);
ll1.add(3);
ll1.add(4);
ll1.add(4);
ll1.add(5);

ll1.head = deleteDuplicates(ll1.head);
ll1.print();
