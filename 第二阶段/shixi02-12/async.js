let fs = require('fs')

function readFile(file) {
  return new Promise(reslove => {
    fs.readFile(file, (err, data) => {
      reslove(data.toString())
    })
  });
}

async function awaitReadFile(arr) {
  let data
  for(let i of arr) {
    data = await readFile(i)
    console.log(data)
  }
}

awaitReadFile(['./test/a.txt','./test/b.txt'])

