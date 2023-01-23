
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
                "Декабрь",]

export const parseTime = date => {
  const ymd = date.split('T')[0];
  const time = date.split('T')[1];
  const year = ymd.split('-')[0];
  const month = months[parseInt(ymd.split('-')[1] - 1)];
  const day = ymd.split('-')[2];
  const hour = time.split(':')[0];
  const minutes = time.split(':')[1];

  return {
    year,
    month,
    day,
    hour,
    minutes,
  }
}