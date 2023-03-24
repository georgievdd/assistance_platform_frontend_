

export class Error {
  constructor(text, priopity) {
    this.text = text;
    this.priopity = priopity;
  }
}

export const priorityError = errorList => {
  let minPriority = 10000, index;
  errorList.map((e, i) => {
    if (e != null)
      if (e.priopity < minPriority) {
        minPriority = e.priopity;
        index = i;
      }
  });
  return errorList[index];
}

export const isEmptyE     = new Error("Поле не должно быть пустым!",   100);
export const minLengthE   = new Error("слишком мало символов!",        101);
export const maxLengthE   = new Error("слишком много символов!",       101);
export const isEmailE     = new Error("Это не email",                  102);