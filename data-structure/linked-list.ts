interface ListNode<T> {
  value: T
  previous: ListNode<T> | undefined
  next: ListNode<T> | undefined
}

interface LinkedList<T> {
  head: ListNode<T> | undefined
  tail: ListNode<T> | undefined
  insert: (value: T) => void
  print: () => void
  remove: (value: T) => boolean
}

class ListNodeImpl<T> {
  value: T
  previous: ListNode<T> | undefined
  next: ListNode<T> | undefined
  constructor(value: T) {
    this.value = value
    this.previous = undefined
    this.next = undefined
  }
}

class LinkedListImpl<T> {
  head: ListNode<T> | undefined
  tail: ListNode<T> | undefined
  size: number

  constructor() {
    this.head = undefined
    this.tail = undefined
    this.size = 0
  }

  /**
   * Cases:
   * 1. List is empty
   * 2. List size is one
   * 3. Node to remove is head
   * 4. Node to remove is tail
   * 5. Node to remove is somewhere in middle
   * 6. Node to remove not found
   */
  remove(value: T){
    // Case 1: List is empty
    if (!this.head) {
      console.log('Case 1: List is empty')
      return false
    }

    let currentNode: ListNode<T> | undefined = this.head
    while(currentNode) {
      if (currentNode.value === value) {
        // Case 2: List size is 1
        if (this.head == this.tail) {
          console.log('Case 2: List size is 1')
          this.head = this.tail = undefined
        } else if (this.head == currentNode) {
          // Case 3: Found in head, advance head to next node
          console.log('Case 3: Found in head')
          this.head = currentNode.next
          this.head!.previous = undefined
        } else if (this.tail == currentNode) {
          // Case 4: Found in tail
          console.log('Case 4: Found in tail')
          this.tail = currentNode.previous
          this.tail!.next = undefined
        } else {
          // Case 5: Found somewhere in middle
          // A <-> B <-> C
          console.log('Case 5: Found somewhere in middle')
          currentNode.previous!.next = currentNode.next
          currentNode.next!.previous = currentNode.previous
        }

        return true
      }

      currentNode = currentNode.next
    }

    // Case 6: Not found
    console.log('Case 6: Not found')
    return false
  }

  insert(value: T) {
    const newNode: ListNode<T> = new ListNodeImpl(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.previous = this.tail
      // 'tail' can't be undefined because it was assigned a list node during first list node insertion in if() above
      this.tail!.next = newNode
      this.tail = newNode
    }
    this.size++
  }

  print() {
    let currentNode: ListNode<T> | undefined = this.head
    while (currentNode) {
      console.log(currentNode.value)
      currentNode = currentNode.next
    }
  }
}


// Test
const myList: LinkedList<number> = new LinkedListImpl<number>()
myList.insert(1)
myList.insert(2)
myList.insert(3)
myList.print()

// Case 6: Not found
console.log(myList.remove(4))
myList.print()

// Case 3: Found in head
console.log(myList.remove(1))
myList.print()

// Case 4: Found at tail
console.log(myList.remove(3))
myList.print()

// Case 2: List size is 1
console.log(myList.remove(2))
myList.print()

// Case 1: List is empty
console.log(myList.remove(999))
myList.print()

