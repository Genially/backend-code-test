export default class GeniallyNotExist extends Error {
  constructor(id: string) {
    super(`Genially <${id}> does no exist`);
  }
}
