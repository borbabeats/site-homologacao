import localforage from 'localforage'

localforage.config({
  driver: [localforage.LOCALSTORAGE, localforage.INDEXEDDB],
  name: 'iMasters',
  storeName: 'iMasters_keys'
})

export default localforage