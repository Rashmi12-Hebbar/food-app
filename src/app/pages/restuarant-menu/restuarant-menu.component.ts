import { Component, OnInit } from '@angular/core';
import { restaurantList } from '../restuarant/restuarant.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restuarant-menu',
  templateUrl: './restuarant-menu.component.html',
  styleUrls: ['./restuarant-menu.component.css']
})
export class RestuarantMenuComponent implements OnInit {
  menuList;
  selectedDish = null;
  selectedResto = null;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(res => {
      console.log(res)
      let resto = restaurantList;
      this.selectedResto = resto.find(r => r.rid == res.rid)//
    })
  }

  ngOnInit() {
    this.menuList = menuList;

  }
  onSelectDishFromMenu(dish) {
    this.selectedDish = dish;
  }
}

let menuList = [
  {
    "menu_name": "dosa",
    "mid": 2,
    "menuurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvijVczrNS6VoAWA4swn32MWBfHsSfDtKI1SWBrza4LLyuB6HN",
    "description": "A dosa is a cooked flat thin layered rice batter, originating from the Indian subcontinent, made from a fermented batter.",
    "price": 100
  },
  {
    "menu_name": "mysorepak",
    "mid": 3,
    "menuurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI-dUl-_9OYFaEmIqfs9qQNd9J8cxovPtwEj_U43LDkmLLfeSf6Q",
    "description": "Mysore pak is an Indian sweet prepared in ghee that is popular in Southern India. ... It is made of generous amounts of ghee, sugar, gram flour, and often cardamom. The texture of this sweet is similar to fudge.",
    "price": 250
  },
  {
    "menu_name": "idali",
    "mid": 4,
    "menuurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlux8bMpBecqLxTdIz56q2kzeIU557VUF6H3BR1rkoxj7dRD8T",
    "descrpition": "Idli batter is fermented which gives it a fermentation aroma and a little bit sour taste.",
    "price": 50
  },
  {
    "menu_name": "neera dosa",
    "mid": 5,
    "menuurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP9FqEWzLgmIPgzizcifPHWDHQnch52goXt96mBhuKonbzuq7F",
    "description": " thin, fluffy and lacy crepes made with rice batter. these super soft and tasty dosas are also called as neer dose in karnataka.",
    "price": 100
  },
  {
    "menu_name": "uppitu",
    "mid": 6,
    "menuurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlRNMyBqO2JnhnD5cFt5IjTzRkb63krzV5e6m-aorUm3vLh_Ob",
    "description": "Essentially, upma is a thick, porridge-like breakfast dish that is made from coarse rice flour or semolina that has been dry-roasted.",
    "price": 75
  },
  {
    "menu_name": "paddu",
    "mid": 7,
    "menuurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_xsQ0BEUDNxPFZiCtKLZe2gAMg_q5LkmxhoGJWHMHHns2uI2H2w",
    "description": "The dish can also be made sweet or spicy depending on the ingredients jaggery and chillies respectively.",
    "price": 50
  },
  {
    "menu_name": "puri",
    "mid": 9,
    "menuurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIVAGKTFKHl_8TWbFW8YGY1U9n1RBNXSUNWtNAW0wz_FAM0e8o0g",
    "description": "Puri (also spelled Poori) is an unleavened deep-fried bread, originating from the Indian subcontinent.",
    "price": 60
  },
  {
    "menu_name": "roti",
    "mid": 9,
    "menuurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPoibEkkvknbNEXd7VvdT4E0YMePxakgYUzLuiLwFicCeJXnMQ",
    "description": "It is easier to press dough into round or oval shape, than any other particluar shape. The choice between round and oval is more related to aesthetics.",
    "price": 45
  },
  {
    "menu_name": "curdrice",
    "mid": 10,
    "menuurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBBZh-znIHx1I0I3qorToIZDddtafkfsDaejUydcXUUjPwVH4R7g",
    "description": "Curd rice is a south Indian dish made with precooked rice, curd (yogurt) & tempering spices. It is more often eaten by south Indians as a part of a meal.",
    "price": 60
  }

]

