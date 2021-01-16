let key_input=document.getElementById("key-input")
let list=document.getElementById("list")
let piano_memory=[]

 function run(x){
 let a=new Audio(`sound/${x}.mp3`)
 a.play()
 key_input.value+=x+" "
}

document.getElementById("delete_btn").addEventListener('click',()=>{
 key_input.value=""
 list.innerHTML=""
 runmemory()
})
document.getElementById("back_btn").addEventListener('click',()=>{
   key_input.value = key_input.value.substring(0, key_input.value.length - 4);
})

let ind=0
document.getElementById("save_btn").addEventListener('click',()=>{
   let input=key_input.value
 piano_memory.push(input)
 console.log(piano_memory)
 key_input.value=""
//  list.innerHTML+=""
function add(){
      let div=document.createElement("div")
       let ntdiv=document.createElement("div")
       ntdiv.setAttribute('class','ntdiv')
       div.setAttribute('class','libox')
       let li=document.createElement("li")
       let content=document.createTextNode(`${input}`)
       li.setAttribute("class","animate__animated animate__backInLeft")
       let btn=document.createElement("button")
       let btn_content=document.createTextNode("Replay")
       btn.setAttribute('onclick',`replay(${ind})`)
       btn.setAttribute('class','replay_btn')
       li.appendChild(ntdiv)
       ntdiv.appendChild(div)
       div.appendChild(content)
       btn.appendChild(btn_content)
       ntdiv.appendChild(btn)
       list.appendChild(li)
    //  list.innerHTML+=`<li class="animate__animated animate__backInLeft">${el}<button id="replay_btn" onclick="replay(${index})" >Replay</button></li>`
       ind++
   
 }
add()
 key_input.value=""
})


let m=["C4","D4","E4"]
        function runmemory(arr,delay=1000){
            let x=delay
        arr.map(function(el,index){
            setTimeout(run,x,el);
            x+=delay
        })}
        function replay(x){
            let current=piano_memory[x].split(" ")
            current.pop()
            runmemory(current)
            console.log('gg')
        }
        

document.addEventListener('keyup',(e)=>{
   switch(e.keyCode){
      case 65:
      run('C4');
      keyrun()
      break;

      case 83:
      run('D4');
      break;

      case 68:
      run('E4');
      break;

      case 70:
      run('F4');
      break;

      case 74:
      run('G4');
      break;

      case 75:
      run('A4');
      break;

      case 76:
      run('B4');
      break;

      case 186:
      run('C5');
      break;
      case 87:
      run('A4');
      break;

      case 69:
      run('F4');
      break;

      case 80:
      run('E4');
      break;

      case 79:
      run('D4');
      break;

      case 89:
      run('C4');
      break;
   }
})

