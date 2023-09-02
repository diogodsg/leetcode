export class ListNode<T> {
  val: T;
  next: ListNode<T> | null;
  constructor(val: T, next?: ListNode<T> | null) {
    this.val = val;
    this.next = next === undefined ? null : next;
  }

  static build<T>(
    arr: T[],
    listNode: ListNode<T> | null = null
  ): ListNode<T> | null {
    if (!arr.length) return listNode;

    const el = arr.slice(0, arr.length - 1);

    const next = new ListNode(arr[arr.length - 1], listNode);

    return this.build<T>(el, next);
  }
}
