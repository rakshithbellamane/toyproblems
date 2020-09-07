const findMatch = (comp,guess) => {
  let hit=0,psuedoHit=0;
  let usedIndicator = {};

  // loop through each guess
  for (let i=0; i<guess.length; i++) {
    // if it is a straight up match, increment the hits
    if (comp[i] === guess[i]) hit++;
    else {
      let j=0, noPseudoHit = false, foundPseudoHit = false;
      let index;

      // loop through the computer until
        // we check all the chars OR
        // we found a pseudo hit OR
        // there was no hit at all
      while (j<comp.length && !foundPseudoHit && !noPseudoHit) {
        // search the computer string to see if there is a match anywhere for the guess char
        index = comp.substring(j).search(guess[i]);

        // if there is no match, set the indicator that there is no pseudohit
        if (index < 0) noPseudoHit = true;
        
        // we have found a pseudohit if 
          // there is a match AND 
          // at the matched index there is no hit AND 
          // index was not previously used for another pseudohit
        else if (index >= 0 && comp[j+index] !== guess[j+index] && !usedIndicator[j+index]) {
          foundPseudoHit = true;
          usedIndicator[index] = true;
          psuedoHit++;
        // we found a pseudohit but it was already used OR that slot had a hit
        // then search for another pseudohit but moving the pointer past the current pseudohit
        } else {
          j += index+1;
        }
      }
    }
  }

  console.log(`hit: ${hit} pseudoHit: ${psuedoHit}`);
}

findMatch('RRBG','GGBR');