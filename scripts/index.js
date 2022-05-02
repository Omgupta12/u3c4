// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import navbar from "../components/navbar.js"
document.getElementById('navbar').innerHTML=navbar()
import getdata from "./fetch.js"

let container=document.getElementById("results")

let query=document.getElementById("search_input")
query.addEventListener('keydown',myfun)
function myfun(){

    let query=document.getElementById("search_input").value
    let url=`https://masai-mock-api.herokuapp.com/news?q=tesla`
    console.log(url)
    getdata(url).then((res)=>{

    })
}

// async function search(){
//     // event.preventDefault()

//     let value=document.getElementById("search_input").value
//     try{
//         let res=await fetch(`https://masai-mock-api.herokuapp.com/news?q=tesla`)
//         let data= await res.json()
//         console.log(data)
        
//     }
//     catch(err){
//         console.log(err)
//     }
   
// }
// search()
