import React, { Component } from 'react';
import './App.css';
import Header from './Header.js'
import Section from './Section.js'
import MenuItem from './MenuItem.js'
import Footer from './Footer.js'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      venue: 'Lemon, Middle & Orange',
      sections: [
        {
          name: 'All Day Menu',
          items: [
            {
              id: "0",
              name: "Toast",
              price: "7.5",
              tags: "V",
              image: "/LMO/7.jpg",
              description: "with preserves, vegemite or peanut butter"
            },
            {
              id: "1",
              name: "Porridge",
              price: "12.5",
              tags: "V, GF",
              image: "/LMO/8.jpg",
              description: "organic buckwheat & wild rice, vanilla labneh, poached pear & rhubarb, yuzu gel, pecan"
            },
            {
              id: "2",
              name: "Pannacotta Granola",
              price: "14.0",
              tags: "V",
              image: "/LMO/7.jpg",
              description: "vanilla pannacotta, toasted granola, goji berries, hazelnut..."
            },
            {
              id: "3",
              name: "Eggs on Toast",
              price: "10.5",
              tags: "V",
              image: "/LMO/8.jpg",
              description: "free range eggs your way, sourdough"
            },
            {
              id: "4",
              name: "Pea & Avo Smash",
              price: "16.5",
              tags: "V",
              image: "/LMO/7.jpg",
              description: "minted pea & avocado smash, feta, poached egg, crispy quinoa, radish, pumpkin hummus..."
            },
            {
              id: "5",
              name: "Chilli Kimchi Fritters",
              price: "16.5",
              tags: "V",
              image: "/LMO/6.jpg",
              description: "kimchi, charred sweet corn, house relish, pickled fennel, dukkah..."
            },
            {
              id: "6",
              name: "Green Bowl",
              price: "16.0",
              tags: "V, GF",
              image: "/LMO/7.jpg",
              description: "spiced roasted chickpea, avocado, grilled broccolini & kale, edamame..."
            },
            {
              id: "7",
              name: "Haloumi Salad",
              price: "16.5",
              tags: "V, GF",
              image: "/LMO/8.jpg",
              description: "grilled haloumi, ancient grains, roasted cauliflower, sweet potato, shredded kale..."
            },
            {
              id: "8",
              name: "Moroccan Bowl",
              price: "16.5",
              tags: "",
              image: "/LMO/9.jpg",
              description: "poached chicken, ras-el-hanout spices, freekeh & wild rice, kalamata olive, cherry tomato..."
            },
            {
              id: "9",
              name: "Middle Eastern Lamb",
              price: "18.0",
              tags: "",
              image: "/LMO/8.jpg",
              description: "slow cooked honey braised lamb, freekeh & mint tabouleh..."
            },
            {
              id: "10",
              name: "Chorizo Scramble",
              price: "14.5",
              tags: "",
              image: "/LMO/7.jpg",
              description: "chorizo & chilli scramble, manchego, confit tomato, kale pesto, rocket..."
            },
            {
              id: "11",
              name: "Full English Breakfast",
              price: "17.0",
              tags: "",
              image: "/LMO/8.jpg",
              description: "chilli baked beans, black pudding, feta, confit tomato, fried egg..."
            },
            {
              id: "12",
              name: "LM&O Benedict",
              price: "17.0",
              tags: "",
              image: "/LMO/13.jpg",
              description: "spiced pulled pork, apple cider & beetroot hollandaise..."
            },
          ]
        },
        {
          name: 'Lunch',
          items: [
            {
              id: "13",
              name: "Beef Brisket Sandwich",
              price: "17.5",
              tags: "",
              image: "/LMO/14.jpg",
              description: "8hr beef brisket, aged cheddar, house slaw, chipotle mayo..."
            },
            {
              id: "14",
              name: "Wagyu Beef Burger",
              price: "19.5",
              tags: "",
              image: "/LMO/7.jpg",
              description: "grass fed beef, crispy bacon, smoked cheese, tomato, bourbon..."
            },
            {
              id: "15",
              name: "Southern Style Chicken Burger",
              price: "19.0",
              tags: "",
              image: "/LMO/7.jpg",
              description: "cajun spiced crispy chicken, house slaw, jalapeno, chipotle..."
            }
          ]
        }
      ]
    }
  }

  printMenu() {
    let sections = this.state.sections
    let menu = []

    for (let s = 0; s < sections.length; s++) {
      menu.push(
        <Section
          name = { sections[s].name }
          id = {"s" + s }
          key = { s }
        />
      )
      for (let i = 0; i < sections[s].items.length; i++) {
        menu.push(
          <MenuItem
            id = { sections[s].items[i].id }
            name = { sections[s].items[i].name }
            price = { sections[s].items[i].price }
            tags = { sections[s].items[i].tags }
            image = { sections[s].items[i].image }
            description = { sections[s].items[i].description }
            key = { sections[s].items[i].id + sections.length }
          />
        )
      }
    }

    return menu
  }

  render() {

    let venue = this.state.venue
    let sections = this.state.sections

    return (
      <div className="App">

        <Header
          name = { venue }
          sections = { sections }
        />

        <div className="menu">

          { this.printMenu() }

        <Footer />

        </div>

      </div>
    );
  }
}

export default App;
