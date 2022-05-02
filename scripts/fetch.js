let getdata=async(url)=>{
    let res=await fetch(url)
    let data= await res.json()
    console.log(data.articles)
    return data;
    console.log(data)
}
export default getdata;

let append=(data,container)=>{
    data.forEach(({title,url})=>{
let div=document.createElement('div')

let p1=document.createElement('p')
p1.innerText=title
let img=document.createElement('img')
img.src=url

container.append(img,p1)
    })

}
