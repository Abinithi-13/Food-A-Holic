import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import RecipeForm from './components/RecipeForm';
import React from 'react';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <RecipeForm />
    </div>
  )
}

export default App
