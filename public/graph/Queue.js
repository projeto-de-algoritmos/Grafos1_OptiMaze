class Queue {
    constructor() {
        this.queue = [];
    }
    enqueue(node) {
        this.queue.push(node);
    }
    dequeue() {
        return this.queue.shift();
    }
    isEmpty() {
        return this.queue.length === 0;
    }
}