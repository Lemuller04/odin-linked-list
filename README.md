# 🧬 Linked List Practice — Recursion & Iteration

This project is a learning exercise based on **The Odin Project** curriculum. It implements a singly linked list in JavaScript using two distinct approaches:

- **Recursive Version:** Focused on exploring recursion and understanding how call stacks can be used to traverse nodes. It’s less efficient and not suited for production.
- **Iterative Version:** A more performance-oriented implementation that uses loop-based traversal. It is clearer and safer for handling large lists.

## 🧪 Features

- `append(value)` — Adds a node to the end
- `prepend(value)` — Adds a node to the beginning
- `size()` — Returns total number of nodes
- `head()` / `tail()` — Returns first/last node
- `at(index)` — Returns node at specific index
- `pop()` — Removes the last node
- `contains(value)` — Checks if a value exists in the list
- `find(value)` — Returns index of the node containing the value
- `toString()` — Outputs the list as a string
- **Extra credit:**
  - `insertAt(value, index)` — Inserts a node at a specific index
  - `removeAt(index)` — Removes the node at a specific index

## 🎯 Learning Goals

- Practice building data structures from scratch
- Explore the differences between recursive and iterative traversal
- Develop comfort with pointer manipulation and node relationships
- Understand time complexity tradeoffs in algorithm design

## ⚠️ Notes

- The recursive version was built deliberately for educational purposes. While elegant, it's not optimized for performance due to stack depth limitations.
- The iterative version is a more realistic approach for handling larger datasets.
