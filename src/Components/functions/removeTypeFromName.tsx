export function removeTypeFromName(name: string) {
  const words = name.split(" ");
  const wordsToRemove = ["Earphones", "Wireless", "Headphones", "Speaker"];

  while (words.length > 0) {
    const lastWord = words[words.length - 1];
    if (wordsToRemove.includes(lastWord)) {
      words.pop();
    } else {
      break;
    }
  }
  const result = words.join(" ");

  return result;
}
