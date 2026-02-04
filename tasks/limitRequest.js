/*
Дан массив ссылок: ['url1', 'url2', ...] и лимит одновременных запросов (limit)
Необходимо реализовать функцию, которая опросит урлы в том порядке, в котором они идут в массиве,
и вызовет callback c массивом ответов
['url1_answer', 'url2_answer', ...] так, чтобы в любой момент времени выполнялось не более limit
запросов (как только любой из них завершился, сразу же отправляется следующий)
Т.е. нужно реализовать шину с шириной равной limit.

Требования:
- Порядок в массиве ответов должен совпадать с порядком в массиве ссылок
Дополнительно:
- Функция должна обладать мемоизацией (один и тот же урл не опрашивать дважды)

Для опроса можно использовать fetch
Ошибки обрабатывать не нужно
*/

function parallelLimit(links, limit, callback) {
  const indexMap = new Map();
  const result = new Array(links.length);

  links.forEach((link, i) => {
    if (!indexMap.has(link)) indexMap.set(link, []);
    indexMap.get(link).push(i);
  });

  const queue = Array.from(indexMap.keys());
  let active = 0;

  function runNext() {
    if (!queue.length && active === 0) {
      callback(result);
      return;
    }

    while (active < limit && queue.length) {
      const link = queue.shift();
      active++;

      fetch(link)
        .then((res) => {
          for (const i of indexMap.get(link)) {
            result[i] = res;
          }
        })
        .catch((err) => {
          for (const i of indexMap.get(link)) {
            result[i] = err;
          }
        })
        .finally(() => {
          active--;
          runNext();
        });
    }
  }

  runNext();
}

const db = { link1: "1", link2: "2", link3: "3", link7: "7" };
const links = [
  "link1",
  "link2",
  "link1",
  "link3",
  "link1",
  "link2",
  "link2",
  "link7",
];
const expected = [1, 2, 1, 3, 1, 2, 2, 7];

// declare function fetch(url: string): Promise<string>;
function fetch(url) {
  console.log(`fetching: ${url}`);
  const response = db[url];

  if (response === undefined) {
    throw new Error("No such url");
  }

  return new Promise((resolve) => {
    const timeout = Math.random() * 100 + 20;
    setTimeout(() => resolve(response), timeout);
  });
}

function callOnce(fn) {
  this.called = false;

  return (...args) => {
    if (this.called) {
      throw new Error("Callback called second time");
    }

    this.called = true;

    return fn(...args);
  };
}

function test(results) {
  if (!Array.isArray(results) || results.toString() !== expected.toString()) {
    console.error(`Expected: ${expected.toString()}`);
    console.error(`Received: ${results.toString()}`);
    return;
  }

  console.log("Test passed");
}

console.clear();

parallelLimit(links, 3, callOnce(test));
