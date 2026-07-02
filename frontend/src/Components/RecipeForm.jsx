import { useState } from "react";
import { generateRecipeAPI } from "../api/recipeAPI"
import Loader from "./Loader";
import RecipeHistory from "./RecipeHistory";

export default function RecipeForm() {
  const [ingredients, setIngredients] = useState("");
  const [recipe, setRecipe] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [history, setHistory] = useState([]);

  const handleGenerateRecipe = async () => {
    if (!ingredients.trim()) {
      setError("Please enter ingredients");
      return;
    }

    setError("");
    setLoading(true);
    setRecipe("");

    try {
      const data = await generateRecipeAPI(ingredients);

      setRecipe(data.recipe);

      setHistory((prev) => [
        { ingredients, recipe: data.recipe },
        ...prev,
      ]);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="recipe-card">
      <h2 className="title">🍽️ AI Recipe Generator</h2>

      <textarea
        className="recipe-textarea"
        placeholder="Enter ingredients (e.g. rice, onion, tomato)"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        rows={4}
      />

      <button className="recipe-button" onClick={handleGenerateRecipe} disabled={loading}>
        Generate Recipe
      </button>

      {loading && <Loader />}
      {error && <p className="error-text">{error}</p>}

      {recipe && (
  <pre
    className="recipe-output"
    dangerouslySetInnerHTML={{
      __html: recipe
        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") 
        .replace(/\*(.*?)\*/g, "$1")                      
        .replace(/\n\d+\.\s/g, "<br><strong>$&</strong>") 
        .replace(/\n/g, "<br>")                           
    }}
  ></pre>
)}

      <RecipeHistory history={history} />
    </div>
  );
}