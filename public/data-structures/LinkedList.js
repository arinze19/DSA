"use strict";
// linear data structure whise node includes two information = [item in list, reference to it's next item]
// single linked list - node stores reference to it's successor
// doubly linked list - node stores reference to both it's predecessor and successor
Object.defineProperty(exports, "__esModule", { value: true });
exports.linkedList = exports.node = void 0;
var node = /** @class */ (function () {
    function node(data) {
        this.data = data;
        this.next = null;
        this.next;
    }
    return node;
}());
exports.node = node;
var linkedList = /** @class */ (function () {
    function linkedList(head) {
        var _this = this;
        if (head === void 0) { head = null; }
        this.head = head;
        this.isEmpty = function () { return _this.head === null; };
        this.size = function () {
            var counter = 0;
            var pointer = _this.head;
            while (pointer) {
                pointer = pointer.next;
                counter += 1;
            }
            return counter;
        };
        this.search = function (data) {
            var pointer = _this.head;
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
        this.append = function (data) {
            var pointer = _this.head;
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
        this.prepend = function (data) {
            var pointer = _this.head;
            if (!pointer) {
                pointer = data;
            }
            else {
                data.next = _this.head;
                _this.head = data;
            }
        };
        this.insert = function (data, index) {
            if (index > _this.size() || index <= 1 || index === _this.size())
                return null;
            var preceedingNode = _this.head;
            var preceedingIndex = index - 1;
            for (var i = 1; i !== preceedingIndex; i++) {
                preceedingNode = preceedingNode.next;
            }
            data.next = preceedingNode.next;
            preceedingNode.next = data;
        };
        this.visualize = function () {
            var pointer = _this.head;
            var result = '';
            while (pointer) {
                result += "[" + pointer.data + "] ->";
                pointer = pointer.next;
            }
            result += "" + null;
            return result;
        };
    }
    return linkedList;
}());
exports.linkedList = linkedList;
