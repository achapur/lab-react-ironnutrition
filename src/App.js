import './App.css';
import foodsData from './foods.json';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import {useState} from 'react'
import FoodBox from './components/foodbox';
import AddFoodForm from './components/addfoodform';
import Search from './components/search';

function App() {
  const [foods, setFood] = useState(foodsData)
  const [search, setSearch] = useState('')

  const handleDelete = (name) => {
    const newFoods = foods.filter(food => food.name !== name)
    setFood(newFoods)
  }

  const handleSearch = () => {}

  return (
    <div className="App">

      <div>
        <Search searching={setSearch}  />
      </div>

      <div>
        <AddFoodForm foods={foods} />
      </div>

      <div>
        <Divider> Food List </Divider>
        {foods.map((food, index) => (
          <Row key={index} >
            <Col >
              <div  >
                <FoodBox 
                food={{name: food.name, calories: food.calories, image: food.image, servings: food.servings}} 
                foods={foods} 
                handleDelete = {handleDelete}
                />
              </div>
            </Col>
          </Row>
        ))}
      </div>

    </div>
  );
}

export default App