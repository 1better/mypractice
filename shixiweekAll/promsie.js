let p = new Promise((reslove,reject)=>{
  setTimeout(
    ()=>{reslove(1)},5000
  )
})

p.then(data=>console.log(data))


