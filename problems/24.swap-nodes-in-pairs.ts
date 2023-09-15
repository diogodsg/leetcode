import { ListNode } from "../data-structures/linked-lists";

function swapPairs(head: ListNode<number> | null): ListNode<number> | null {
  if (!head) return null;
  if (!head.next) return head;
  let left: ListNode<number> | null = head;
  let mid: ListNode<number> | null = left.next;
  let right: ListNode<number> | null = mid?.next || null;

  mid!.next = left;
  left.next = right;
  head = mid;
  mid = right;
  if (!right?.next) return head;

  right = right?.next;

  while (true) {
    left!.next = right;
    mid!.next = right.next;

    right!.next = mid;

    mid = left?.next || null;

    if (!mid?.next) return head;
    right = mid.next;
    left = right;

    mid = left.next;

    if (!mid?.next) return head;
    right = mid.next;
  }
}
