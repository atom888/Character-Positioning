//Lighthouse Labs W1D3 exercise - Character Positioning //

function countLetters(str) {
  var freq = {};
    for (var i = 0; i < str.length; i+= 1) {
      var letter = str.charAt(i);
      if (freq[letter]) {
        freq[letter].push(i);
      } else {
        freq[letter] = [i];
      }
    }
    return freq;
}

console.log(countLetters("lighthouse in the house"));