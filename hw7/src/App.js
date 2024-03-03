import { useEffect,useState } from "react";
import './App.css';

const people =[
{ id:1,
  name:'Susan Smith',
  job:'web developer',
  image:'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
  text:"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",},
{ id:2,
  name:'Anna Johnson',
  job:'web designer',
  image:'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
  text:'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',},
{ id:3,
  name:'Peter Jones',
  job:'intern',
  image:'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
  text:'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',},
{ id:4,
  name:'Bill Anderson',
  job:'the boss',
  image:'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
  text:'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',}
  ,]
function App() {
const [currIndex,setCurrIndex] = useState(0);
const [isRandom,setIsRandom] = useState(true);

useEffect(() => {
  let newIndex = 0;
  if(isRandom){
    while(newIndex === currIndex )
  newIndex=Math.floor(Math.random() * people.length);
}
setCurrIndex(newIndex);
},[isRandom]);  

const next = () => {
  setCurrIndex((currIndex + 1) % people.length);
}

const prev = () => {
  setCurrIndex((currIndex + people.length -1) % people.length);
}

const setRandom = () =>{
setIsRandom(!isRandom);
}


  return (
    <div className="App">
 <div className="box">
  <div className="container">
  <div className="dot">&#10080;</div> 
  <img src={people[currIndex].image }alt={people[currIndex].name} />
  </div>
  <h2>{people[currIndex].name}</h2>
  <p className="title">{people[currIndex].job}</p>
  <p className="text">{people[currIndex].text}</p>
  <button className='prev' onClick={prev}>&#8249;</button>
  <button className='next' onClick={next}>&#8250;</button>
  <div className = "clear-fix"> </div>
  <button className='random'onClick={setRandom}>Surprize Me</button>
 </div>
    </div>
  );
}

export default App;
