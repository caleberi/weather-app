// Aim is to build a max-heap from an
// array of integers with support for following methods:
// buildHeap(array): to build the heap from array
// bubbleDown(currentIdx, endIdx, heap): to bubble an element down
// bubbleUp(currentIdx, heap): to bubble an element up
// peek(): returns min value without removing it
// remove(): removes min value
// insert(): inserts a new element into heap
import { flattenMap } from "./flattenArray";
export type MaxHeapInput = { word: string; frequency: number };
export type MaxHeapInputArray = MaxHeapInput[];

export class MaxHeap {
  heap: MaxHeapInputArray;
  // Build heap using array of ints
  constructor(array: MaxHeapInputArray) {
    this.heap = this.buildHeap(array);
  }
  // O(n) time | O(1) space
  buildHeap(array: MaxHeapInputArray) {
    const firstParentIdx = Math.floor((array.length - 2) / 2);
    for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
      this.bubbleDown(currentIdx, array.length - 1, array);
    }
    return array;
  }
  // O(log(n)) time | O(1) space
  bubbleDown(currentIdx: number, endIdx: number, heap: MaxHeapInputArray) {
    let childOneIdx: number = currentIdx * 2 + 1;
    while (childOneIdx <= endIdx) {
      const childTwoIdx: number =
        currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
      let idxToSwap;
      if (
        childTwoIdx !== -1 &&
        heap[childTwoIdx].frequency > heap[childOneIdx].frequency
      ) {
        idxToSwap = childTwoIdx;
      } else {
        idxToSwap = childOneIdx;
      }
      if (heap[idxToSwap].frequency > heap[currentIdx].frequency) {
        this.swap(currentIdx, idxToSwap, heap);
        currentIdx = idxToSwap;
        childOneIdx = currentIdx * 2 + 1;
      } else {
        return;
      }
    }
  }
  // O(log(n)) time | O(1) space
  bubbleUp(currentIdx: number, heap: MaxHeapInputArray) {
    let parentIdx = Math.floor((currentIdx - 1) / 2);
    while (
      currentIdx > 0 &&
      heap[currentIdx].frequency > heap[parentIdx].frequency
    ) {
      this.swap(currentIdx, parentIdx, heap);
      currentIdx = parentIdx;
      parentIdx = Math.floor((currentIdx - 1) / 2);
    }
  }
  // O(1) time | O(1) space
  peek() {
    return this.heap[0];
  }
  // O(log(n)) time | O(1) space
  remove() {
    this.swap(0, this.heap.length - 1, this.heap);
    const valueToRemove = this.heap.pop();
    this.bubbleDown(0, this.heap.length - 1, this.heap);
    return valueToRemove;
  }
  // O(log(n)) time | O(1) space
  insert(value: MaxHeapInput) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1, this.heap);
  }
  swap(i: number, j: number, heap: MaxHeapInputArray) {
    const temp = heap[i];
    heap[i] = heap[j];
    heap[j] = temp;
  }
}

class TrieNode {
  symbol: string;
  children: { [key: string]: TrieNode };
  frequency: number;
  isEnd: boolean;
  constructor() {
    this.symbol = "*";
    this.children = {};
    this.frequency = 0;
    this.isEnd = false;
  }

  giveSuggestions(
    word: string,
    k: number,
    ret: string[]
  ) {
    if (this.isEnd) {
      return [this.symbol];
    }
    let entries = Object.keys(this.children);
    for (let key of entries) {
      ret = ret.concat(this.children[key].giveSuggestions(word + key, k, ret));
    }   
    return ret;
  }
}

export class Trie {
  root: TrieNode;
  constructor() {
    this.root = new TrieNode();
  }
  // FIX : the insertion shuld only stord data in the
  // at the end of a complete end of the word
  insert(word: string) {
    let self: TrieNode = this.root;
    let prev: TrieNode = this.root;
    let current = "";
    for (let w of word) {
      current += w;
      if (!(w in self.children)) {
        self.children[w] = new TrieNode();
        self.children[w].symbol = current;
      }
      prev = self;
      self = self.children[w];
      self.frequency += 1;
    }
    self.frequency += 1;
    self.symbol = current;
    self.isEnd = true;
  }


  search(word: string, k: number) {
    if (!word.length || word.length === 1) return [];
    let self: TrieNode = this.root;
    let ret: string[] = [];
    for (let w of word) {
      if (!(w in self.children)) {
        return ret;
      }
      self = self.children[w];
    }
    return  [...new Set(self.giveSuggestions(word, k, []))];
  }
}

export const generateTrie = (data: string[]) => {
  const trie: Trie = new Trie();
  data.forEach((w) => trie.insert(w));
  return trie;
};
