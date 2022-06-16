import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  foodDetails =[{

    id:1,
    foodName:"Paneer Grilled SandWich",
    foodDetails:"pan-fried-masala-paneer",
    foodPrice:200,
    foodImg:"../../assets/paneersandwich.jpg"
  },
  {
    id:2,
    foodName:"Spicy cheese Pizza",
    foodDetails:"extra-cheese-pizza",
    foodPrice:399,
    foodImg:   "../../assets/pizzaa.jpg"
    },

    {
      id:3,
      foodName:"Cheese Burger",
      foodDetails:"extra-cheese-burger",
      foodPrice:199,
      foodImg:   "../../assets/burgerr.jpg"
      },

      {
        id:4,
        foodName:"Non-Veg Thali",
        foodDetails:"All-in-one-thali",
        foodPrice:599,
        foodImg:   "../../assets/non.jpg"
        },

        {
          id:5,
          foodName:"Coffee",
          foodDetails:"dark-coffee",
          foodPrice:129,
          foodImg:   "../../assets/coffee.jpg"
          },
          {
            id:6,
            foodName:"Ice-Cream",
            foodDetails:"flawored-icecream",
            foodPrice:49,
            foodImg:   "../../assets/icecream.jpg"
            },

            {
              id:7,
              foodName:"Diet Food",
              foodDetails:"High protein foods",
              foodPrice:169,
              foodImg:   "../../assets/diet.jpg"
              },
  
              {
                id:8,
                foodName:"Chaap",
                foodDetails:"tandoori-chaap",
                foodPrice:249,
                foodImg:   "../../assets/chaap.jpg"
                },

     {
                id:9,
                foodName:"South Indian",
                foodDetails:"Paneer Dosa",
                foodPrice:139,
                foodImg:   "../../assets/dosa.jpg"
                }
]

}
