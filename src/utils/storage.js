const DATA_PREFIX = "first-interview::";
export function saveItem(key, value) {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.setItem(`${DATA_PREFIX}${key}`, JSON.stringify(value));
}

export function getItem(key) {
  if (typeof window === "undefined") {
    return null;
  }

  const got = localStorage.getItem(`${DATA_PREFIX}${key}`);
  return got ? JSON.parse(got) : null;
}

export function exportData() {
  const data = {};
  for (let key in localStorage) {
    if (key.startsWith(DATA_PREFIX)) {
      const stored = localStorage.getItem(key);
      if (stored) {
        data[key] = JSON.parse(stored);
      }
    }
  }

  return data ? JSON.stringify(data) : null;
}
