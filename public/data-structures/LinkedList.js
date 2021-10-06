"use strict";
// linear data structure whise node includes two information = [item in list, reference to it's next item]
// single linked list - node stores reference to it's successor
// doubly linked list - node stores reference to both it's predecessor and successor
class node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.next;
    }
}
class linkedList {
    constructor(head = null) {
        this.head = head;
        this.isEmpty = () => this.head === null;
        this.size = () => {
            let counter = 0;
            let pointer = this.head;
            while (pointer) {
                pointer = pointer.next;
                counter += 1;
            }
            return counter;
        };
        this.search = (data) => {
            let pointer = this.head;
            while (pointer) {
                if (pointer.data !== data.data) {
                    pointer = pointer.next;
                }
                else {
                    return pointer;
                }
            }
            return null;
        };
        this.append = (data) => {
            let pointer = this.head;
            if (!pointer) {
                pointer = data;
            }
            else {
                while (pointer && pointer.next) {
                    pointer = pointer.next;
                }
                pointer.next = data;
            }
        };
        this.prepend = (data) => {
            let pointer = this.head;
            if (!pointer) {
                pointer = data;
            }
            else {
                data.next = this.head;
                this.head = data;
            }
        };
        this.insert = (data, index) => {
            if (index > this.size() || index <= 1 || index === this.size())
                return null;
            let preceedingNode = this.head;
            const preceedingIndex = index - 1;
            for (let i = 1; i !== preceedingIndex; i++) {
                preceedingNode = preceedingNode.next;
            }
            data.next = preceedingNode.next;
            preceedingNode.next = data;
        };
        this.remove = (value) => {
            if (typeof value === 'number') {
                return 1;
            }
            return -1;
        };
        this.visualize = () => {
            let pointer = this.head;
            let result = '';
            while (pointer) {
                result += `[${pointer.data}] ->`;
                pointer = pointer.next;
            }
            result += `${null}`;
            return result;
        };
    }
}
const node1 = new node(5);
const linked1 = new linkedList(node1);
linked1.append(new node(10));
linked1.append(new node(30));
linked1.append(new node(50));
linked1.prepend(new node(20));
linked1.insert(new node(40), 2);
console.log(linked1.size());
console.log(linked1.remove(new node(30)));
