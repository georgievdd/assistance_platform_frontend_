

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
export const minLengthE   = new Error("Слишком мало символов!",        102);
export const maxLengthE   = new Error("Слишком много символов!",       102);
export const isEmailE     = new Error("Это не email",                  103);
export const isCheckedE   = new Error("Нужно согласиться",             100);
export const compareE     = new Error("Пароли не совпадают",           101);



export const getErrorTextByKey = key => {

  switch (key) {
    case 'application_already_exists':
      return "Ваша заявка уже отправлена, ее можно настроить в разделе 'Мои заявки'";
    case 'creator_cant_be_implementer':
      return "Нельзя отправить заявку на собственное задание";
    default:
      break;
  }

}