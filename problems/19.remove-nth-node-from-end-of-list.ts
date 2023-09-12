import { ListNode } from "../data-structures/linked-lists";

function removeNthFromEnd(
  head: ListNode<number> | null,
  n: number
): ListNode<number> | null {
  let lastNodeToRemove = head;
  let currentNode = head;
  let count = 0;

  while (currentNode) {
    count++;
    currentNode = currentNode.next;

    if (count > n + 1) {
      lastNodeToRemove = lastNodeToRemove?.next || null;
    }
  }
  if (n == count) {
    return head?.next || null;
  }

  if (count > n) {
    if (lastNodeToRemove?.next) {
      lastNodeToRemove.next = lastNodeToRemove.next.next;
    }
  }

  return head;
}
