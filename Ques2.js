/* Q2) Given an array of strings str, group the anagrams together. You can return the answer in
any order.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
typically using all the original letters exactly once.
Example 1:
Input: str = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:
Input: str = [""]
Output: [[""]] */

const Anagram = (str) => {
    const anagramGroup = {};
    for(let string of str){
        const sortedString = string.split("").sort().join("");
        if(!anagramGroup[sortedString]){
            anagramGroup[sortedString] = [string];
        } else {
            anagramGroup[sortedString].push(string);
        }
    }
    return Object.values(anagramGroup);
}