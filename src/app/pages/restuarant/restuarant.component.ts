import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restuarant',
  templateUrl: './restuarant.component.html',
  styleUrls: ['./restuarant.component.css']
})
export class RestuarantComponent implements OnInit {
  restaurantList = []
  constructor(private router: Router) { }

  ngOnInit() {
    this.restaurantList = restaurantList;
  }
  onVisitResto(resto) {
    this.router.navigate([`resto-menu/${resto.rid}`])
  }
}




export let restaurantList: any = [
  {
    "restaurants_name": "a2b",
    "rid": 2,
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvJ08AIFIsW4zgzrUGMd2HK9ZB1RI9UH7kbfOst1Ktag1A7QaFmg"
  },
  {
    "restaurants_name": "vishu priya",
    "rid": 3,
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdwLEPYraPE_h41Bys21WRaaP7KVdIje7_hybvOvv9k-0R4u9s0g"
  },
  {
    "restaurants_name": "priyadharshini",
    "rid": 4,
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXBOM0LSYgNMD5d6ogw7oyCIo1zOa0esbUpGDt4ipXKf1uHVxA"
  },
  {
    "restaurants_name": "ab",
    "rid": 5,
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW8SIcoO9mEh7jHzINpdgxpKsh5mzsGVLF2DZlkJZvEYOTMuFF3w"
  },
  {
    "restaurants_name": "udupi grand",
    "rid": 6,
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQnwtADyNqnxSMAKWkwXWo_WWlZ7BEHc34zNeFFCSYBB5hTlBl6Q"
  },
  {
    "restaurants_name": "empire",
    "rid": 8,
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYZ3MYvTayKV2u7YcF6BiIt8v07c6tYUBNe-Ls6V7kw8DxdKiSsQ"
  },
  {
    "restaurants_name": "taj",
    "rid": 9,
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAemb0gSrY0vIrC0q2Db76mXDEhF8IC0V9pn10aD21EG37_vK3"
  },
  {
    "restaurants_name": "vishu upahara",
    "rid": 10,
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgrsXCTlXEAxuiEphmZPHPmcHkAs2Dd35sfAb0YXjmSY8i-VPneQ"
  }

]