function findMissingLetter(array)
{
  for (let i = 0; i < array.length;i++) {
    if (array[i+1].charCodeAt() - (array[i].charCodeAt()) !== 1) {
      return (String.fromCharCode(array[i].charCodeAt() + 1));
    }
  }
}