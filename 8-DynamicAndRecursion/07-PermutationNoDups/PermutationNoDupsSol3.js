const getPerms = (prefix, str, result=[]) => {
  if (str.length === 0) return result.push(prefix);

  // for each char in the str, get the perms for the remainder of the str with new prefix = prefix+char
  for (let i=0; i<str.length; i++) {
    let char = str[i];
    getPerms(prefix+char, str.slice(0,i)+str.slice(i+1), result);
  }

  return result;
}

console.log(getPerms('','abcd'));