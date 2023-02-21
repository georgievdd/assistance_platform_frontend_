
export const getElById = (id, arr) => {
  for (let element of arr)
    if (element.id === id)
      return element.name;
}

export const getIdByEl = (name, arr) => {
  for (let element of arr)
    if (element.name === name)
      return element.id;
}

export const urlCreatePartOfPath = (type, array) => {
  let path = "";

  console.log(array);

  array.map(element => {

    if (element.length !== 1) if (element[1].length !== 0) {
      if (element[1].length === 1) {
        if (typeof element[1][0] === 'string') {
          if (element[1][0].length !== 0) {
            path += element[0] + "=" + element[1].join(",");
            path += "&";
          }
        } else {
          path += element[0] + "=" + element[1].join(",");
          path += "&";
        }
      } else {
        path += element[0] + "=" + element[1].join(",");
        path += "&";
      }
    }

  });
  if (type.length > 0) path = type + path;
  return path.slice(0, -1);
}

export const getKeyByValue = (value, object) => Object.keys(object).find(key => object[key] === value);

export const createTaskObject = (task, tags_info, subjects_info) => ({
  description: task.description,
  tags: task.tags.map(i => getElById(i, tags_info)),
  subject: task.subject,
  title: task.title,
  created_at: task.created_at,
  price: task.price,
  imgType: getElById(task.subject, subjects_info),
  id: task.id,
});

export const getSumByName = (name, arr) => {
  for (let element of arr)
    if (element[1] === name)
      return element[0];
}


const months = ["Январь",
                "Февраль",
                "Март",
                "Апрель",
                "Май",
                "Июнь",
                "Июль",
                "Август",
                "Сентябрь",
                "Октябрь",
                "Ноябрь",
                "Декабрь",];

const monthsV2 = ["Января",
                "Февраля",
                "Марта",
                "Апреля",
                "Мая",
                "Июня",
                "Июля",
                "Августа",
                "Сентября",
                "Октября",
                "Ноября",
                "Декабря",]

export const parseTime = time => {
  const date = new Date(time);

  const year     = date.getFullYear().toString();
  const day      = prettyDay((date.getDay() + 1).toString());
  const month    = months[date.getMonth().toString()];
  const inMonth  = monthsV2[date.getMonth().toString()];
  const hour     = date.getHours().toString();
  const minutes  = date.getMinutes().toString();

  const inDMH = day + ' ' + inMonth + ' в ' + hour + ':' + minutes;

  return {
    year,
    month,
    day,
    hour,
    minutes,
    inDMH,
  }
}


export const write = value => {
  console.log(Object.keys(value)[0] + ": " + value[Object.keys(value)[0]]);
}

const prettyDay = day => 
  day.length === 1 ? "0" + day : day;