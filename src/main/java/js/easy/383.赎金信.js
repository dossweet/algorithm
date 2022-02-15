/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let map = new Map();
    let ransomNoteArray = ransomNote.split('');
    let magazineArray = magazine.split('');
    let result = true;

    for (let j = 0; j < ransomNoteArray.length; j++){
        map.set(ransomNoteArray[j],(map.get(ransomNoteArray[j])||0) + 1);
    }
    for (let i = 0; i < magazineArray.length; i++){
        if(map.get(magazineArray[i])){
            map.set(magazineArray[i],(map.get(magazineArray[i]) - 1));
        }
    }

    map.forEach((item) => {
        if (item > 0){
            result = false;
        }
    });
    return result;
};

console.log(canConstruct('aa','ab'));
