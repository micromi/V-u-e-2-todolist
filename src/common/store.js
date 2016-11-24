const STORAGE_KEY = 'todos-vuejs';

export default {
  fetch: function fetch() {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]');
  },
  save: function save(items) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  },
};

// function fetch() {
//   return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]');
// }
// function save(items) {
//   window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
// }
// export default { fetch, save };
