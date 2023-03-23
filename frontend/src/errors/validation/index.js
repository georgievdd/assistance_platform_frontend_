import { Error } from "../../datafunc";


export const isEmptyE     = new Error("Поле не должно быть пустым!",   100);
export const minLengthE   = new Error("слишком мало символов!",        101);
export const maxLengthE   = new Error("слишком много символов!",       101);
export const isEmailE     = new Error("Это не email",                  102);