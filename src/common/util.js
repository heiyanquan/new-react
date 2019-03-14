export function deleteObjEmpty(search = {}) {
  for (let i in search) {
    (search[i] == undefined || search[i] == 'none') && delete search[i];
  }
}