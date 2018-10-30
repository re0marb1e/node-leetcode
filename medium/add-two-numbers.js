"use strict"

// problem at https://leetcode-cn.com/problems/add-two-numbers/

// ******************** Description ********************

/**
 * You are given two non-empty linked lists representing two non-negative 
 * integers. The digits are stored in reverse order and each of their nodes contain 
 * a single digit. Add the two numbers and return it as a linked list.
 * 
 * You may assume the two numbers do not contain any leading zero, except the 
 * number 0 itself.
 * 
 * Example:
 * 
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
 */

// ******************** Solution ********************

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let result;
    let prev;
    let tmpAcc = 0;
    let ln;
    let lnl = l1;
    let lnr = l2;
    while(true){
        if(!lnl && !lnr){
            break;
        }
        
        let lnlVal = (lnl && lnl.val) ? lnl.val : 0;
        let lnrVal = (lnr && lnr.val) ? lnr.val : 0;
        
        let tmpSum = lnlVal+ lnrVal + tmpAcc;
        if(tmpSum >= 10){
            tmpAcc = 1;
        } else {
            tmpAcc = 0;
        }
        ln = new ListNode();
        ln.val = tmpSum % 10;
        if(!result){
            result = ln;
        }
        if(prev){
            prev.next = ln;
        }
        prev = ln;

        if(!lnl.next && !lnr.next && tmpAcc <= 0){
            break;
        }

        lnl = (lnl && lnl.next) ? lnl.next : new ListNode(0);
        lnr = (lnr && lnr.next) ? lnr.next : new ListNode(0);
    }
    return result; 
};

// ******************** Test ********************

function ListNode(val) {
    this.val = val;
    this.next = null;
}

(function (){
    let l1 = new ListNode(2);
    l1.next = new ListNode(4);
    l1.next.next = new ListNode(3);

    let l2 = new ListNode(5);
    l2.next = new ListNode(6);
    l2.next.next = new ListNode(4);

    let result = addTwoNumbers(l1, l2)
    console.log(result.val === 7 && result.next.val === 0 && result.next.next.val === 8 && result.next.next.next == null);
})();

(function (){
    let l1 = new ListNode(1);
    l1.next = new ListNode(8);

    let l2 = new ListNode(0);

    let result = addTwoNumbers(l1, l2);
    console.log(result.val === 1 && result.next.val === 8 && result.next.next == null);
})();

(function (){
    let l1 = new ListNode(5);

    let l2 = new ListNode(5);

    let result = addTwoNumbers(l1, l2);
    console.log(result.val === 0 && result.next.val === 1 && result.next.next == null);
})();

(function (){
    let l1 = new ListNode(1);

    let l2 = new ListNode(9);
    l2.next = new ListNode(9);

    let result = addTwoNumbers(l1, l2);
    console.log(result.val === 0 && result.next.val === 0 && result.next.next.val === 1 && result.next.next.next == null);
})();