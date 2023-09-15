import { ListNode } from "../data-structures/linked-lists";

function reverseKGroup(
  head: ListNode<number> | null,
  k: number
): ListNode<number> | null {
  let groupCount = 0;

  if (!head) return null;

  let node: ListNode<number> | null = head;
  let lastNodeFromLastGroup;
  while (true) {
    let listGroup: ListNode<number>[] = [];
    for (let i = 0; i < k; i++) {
      if (!node) return head;
      listGroup[i] = node;
      node = node.next;
    }

    for (let i = k - 1; i > 0; i--) {
      listGroup[i].next = listGroup[i - 1];
    }

    if (lastNodeFromLastGroup) lastNodeFromLastGroup.next = listGroup[k - 1];

    lastNodeFromLastGroup = listGroup[0];
    listGroup[0].next = node;

    if (groupCount == 0) head = listGroup[k - 1];
    groupCount++;
  }
}
