import { ListNode } from "../data-structures/linked-lists";
function mergeKLists(
  lists: Array<ListNode<number> | null>
): ListNode<number> | null {
  let mergedLists: ListNode<number> | null = null;
  const getSmallest = () => {
    let min: null | number = null;
    let index = -1;
    for (let i = 0; i < lists.length; i++) {
      if (!lists[i]) continue;

      if (min === null) {
        min = lists[i]!.val;
        index = i;
      } else if (lists[i]!.val < min) {
        min = lists[i]!.val;
        index = i;
      }
    }
    if (index === -1) return null;
    lists[index] = lists[index]!.next;
    return min;
  };
  const firstVal = getSmallest();

  if (firstVal === null) return null;
  mergedLists = new ListNode<number>(firstVal);
  let head = mergedLists;
  while (true) {
    const next = getSmallest();
    if (next === null) break;
    mergedLists.next = new ListNode<number>(next);
    mergedLists = mergedLists.next;
  }
  return head;
}
