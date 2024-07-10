import React, { useState ,useEffect} from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App(){
  return(
  <div className="container">
    <Header  />
    <Menu   />
    <Footer/>
  </div>);
}


function Header(){
  return(
    <header className="header">
    <h1 >Fast React Pizza Co.</h1>
    </header>)
}

function Menu(){
  const pizzas=pizzaData;
  //const pizzas=[];
  const numPizzas=pizzas.length;
  return(
    <main className="menu">
      <h2>Our Menu</h2>
      { numPizzas>0 ?(
      <>
      <p>Authentic Italian Pizza.Bake in oven,freshly made ,organic and delicious</p>
      <ul className="pizzas">
      {pizzas.map((pizza)=>(
        <Pizza pizzaObj={pizza} key={pizza.name}/>
      ))}
      </ul>
      </>
      )
      :(<p>We're currently restocking.Please come back later!</p>)
    
      }
    </main>
  )
}

function Pizza({pizzaObj}){
  
  return(
    <li className={`pizza ${pizzaObj.soldOut?"sold-out":""}`}>
    <img src={pizzaObj.photoName} alt={pizzaObj.name} />
    <div>
    <h1>{pizzaObj.name}</h1>
    <p>{pizzaObj.ingredients}</p>
    <span>{pizzaObj.soldOut? "SOLD OUT":pizzaObj.price}</span>
    </div>
    </li>
    )
    
}

function Footer(){
  const hour=new Date().getHours();
  const openHour=10;
  const closeHour=22;
  const isOpen=(hour>=openHour && hour<=closeHour);
  const [time,setTime]=useState(new Date().toLocaleTimeString());
  return <footer className="footer">
  {useEffect(function(){
    const timer=setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      return()=>clearInterval(timer);
    }, 1000);
    
  },[])}
  <p>Current time:{time}</p>
  <p>Current time:{new Date().getHours()}:{new Date().getMinutes()}</p> 
  {isOpen?<Order closeHour={closeHour}/>:
  <p>We're are Close right now.Please Visit us between {openHour}:00 and {closeHour}:00</p>
  } </footer>
}


function Order({closeHour}){
  return (<div className="order">
    <p>We're Currently Open upto {closeHour}!</p>
    <button className="btn">Order Now</button>
  </div>);
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode>
  <App />
</React.StrictMode>);