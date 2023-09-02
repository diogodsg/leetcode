import { ListNode } from "../data-structures/linked-lists";

function addTwoNumbers(
  l1: ListNode<number> | null,
  l2: ListNode<number> | null,
  carry: number = 0
) {
  if (!l1 && !l2 && !carry) return null;

  const total = (l1?.val || 0) + (l2?.val || 0) + (carry || 0);

  carry = Math.floor(total / 10);

  return new ListNode(
    total % 10,
    addTwoNumbers(l1?.next || null, l2?.next || null, carry)
  );
}
