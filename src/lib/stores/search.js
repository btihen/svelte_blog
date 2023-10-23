import { writable } from "svelte/store"

export const createSearchStore = (data) => {
  const { subscribe, set, update } = writable({
    data: data,
    filtered: data,
    search: "",
  })

  return {
    subscribe,
    set,
    update,
  }
}

export const searchHandler = (store) => {
  // Make sure store.search is not undefined before calling toLowerCase()
  const searchTerm = (store.search || "").toLowerCase();

  store.filtered = store.data.filter((item) => {
    // Use optional chaining ?. to safely access toLowerCase() method
    return item.searchTerms?.toLowerCase().includes(searchTerm);
  });
}

// export const searchHandler = (store) => {
//   const searchTerm = store.search.toLowerCase() || ""

//   store.filtered = store.data.filter((item) => {
//     return item.seachTerms.toLowerCase().includes(searchTerm)
//   })
// }
