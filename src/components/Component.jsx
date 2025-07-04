
export function Component(start, end, exclude = []) {
  
  const excludeArr = Array.isArray(exclude) ? exclude : [exclude];

  // Safety: prevent infinite loop
  const maxAttempts = 100;
  let attempts = 0;

  while (attempts < maxAttempts) {
    const rand = Math.floor(Math.random() * (end - start + 1)) + start;
    if (!excludeArr.includes(rand)) {
      return rand;
    }
    attempts++;
  }

  return 0;
}