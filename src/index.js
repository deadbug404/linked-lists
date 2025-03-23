import { LinkedList } from "./linkedLists";

let list = new LinkedList();
list.append("cat");
list.append("dog");
list.append("bird");
list.prepend("lizard");
console.log(list.size());
console.log(list.head());
console.log(list.tail());
console.log(list.at(3));
list.pop();
console.log(list.contains("dog"));
console.log(list.contains("anime"));
console.log(list.find("girl"));
list.insertAt("bug",1);
list.removeAt(2);

console.log(list.toString())