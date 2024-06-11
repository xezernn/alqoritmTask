async function go() {
    let res = await fetch("https://papaapi.yetim.me/food")
    let data = await res.json()

    let arr = data.map(item => item.id)
    let set = new Set([...arr])
    
    if(arr.length === set.size) console.log("tekrarlanan element yoxdur");
}

go() 