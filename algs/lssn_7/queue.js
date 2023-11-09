class CustomQueue {
  capacity;
  #head = 0;
  #tail = 0;
  #count = 0;

  constructor(size) {
    this.capacity = size;
    this.storage = Array(this.capacity);
  }

  enqueue(item) {
    if (this.#count === this.storage.length) throw new Error("нет места");

    this.storage[this.#head++] = item;
    this.#count++;
    this.#head %= this.capacity;
  }

  dequeue() {
    if (this.#count === 0) throw new Error("пустая очередь");

    const element = this.storage[this.#tail];
    this.storage[this.#tail++] = 0;
    this.#count--;
    this.#tail %= this.capacity;

    return element;
  }

  print() {
    let response = "";

    for (let i = 0; i < this.storage.length; i++) {
      if (this.storage[i] === undefined || this.storage[i] === 0) {
        continue;
      } else {
        response += `${this.storage[i]} `;
      }
    }

    return `[ ${response.trim()} ]`;
  }
}

const customQueue = new CustomQueue(5);
