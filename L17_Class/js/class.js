class Node {
  value;
  next;
}
class List {
  #head = null;
  #tail = null;

  add(item) {
    let temp = new Node();
    temp.value = item;
    if (this.head == null) {
      this.head = temp;
    } else {
      this.tail.next = temp;
    }
    this.tail = temp;
  }
  printList() {
    let temp = this.head;
    while (temp != null) {
      document.write(temp.value + "<br></br>");
      console.log(temp.value);
      temp = temp.next;
    }
  }
}
let list = new List();

console.log(list);

list.add(10);
list.add(20);
list.add(30);
list.printList();
