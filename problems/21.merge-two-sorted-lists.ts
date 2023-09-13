import { ListNode } from "../data-structures/linked-lists";

function mergeTwoLists(
  list1: ListNode<number> | null,
  list2: ListNode<number> | null
): ListNode<number> | null {
  if (!list1 && !list2) return null;

  if (!list1) return list2;

  if (!list2) return list1;

  const getNextNode = () => {
    let newNode: ListNode<number>;
    if (list1!.val < list2!.val) {
      newNode = new ListNode<number>(list1!.val);
      list1 = list1!.next;
    } else {
      newNode = new ListNode<number>(list2!.val);
      list2 = list2!.next;
    }

    return newNode;
  };

  const head = getNextNode();
  let tail = head;

  while (list1 && list2) {
    tail.next = getNextNode();
    tail = tail.next;
  }

  if (!list1 && tail) tail.next = list2;
  else tail.next = list1;

  return head;
}
