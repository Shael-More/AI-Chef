import { useEffect, useRef, useState } from 'react';
import ClaudeRecipe from './ClaudeRecipe';
import IngredientsList from './IngredientsList';
import { getRecipeFromMistral } from '../ai';
const HomePage = () => {
  const [ingredients, setIngredients] = useState([]);

  const [recipe, setRecipe] = useState('');
  const recipeSection = useRef(null);

  useEffect(() => {
    if (recipe !== '' && recipeSection.current !== null) {
      recipeSection.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [recipe]);

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    setRecipe(recipeMarkdown);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newIngredient = formData.get('ingredient');
    setIngredients((prevIngredient) => [...prevIngredient, newIngredient]);
  }

  return (
    <main className='p-10'>
      <form
        className='flex gap-3 justify-center h-[40px] mb-10'
        onSubmit={handleSubmit}
      >
        <input
          type='text'
          name='ingredient'
          aria-label='Add ingredients'
          placeholder='e.g. oregano'
          className='p-2 rounded-sm border border-[#d1d5d8] shadow-sm grow min-w-32 max-w-96'
          // value={ingredients}
        />
        <button
          type='submit'
          aria-label='Add ingredients to list'
          className='font-montserrat rounded-md border-none bg-[#141413] text-[#fafaf8] px-4 text-sm font-semibold'
        >
          + Add ingredient
        </button>
      </form>
      {ingredients.length > 0 && (
        <IngredientsList
          ref={recipeSection}
          ingredients={ingredients}
          getRecipe={getRecipe}
        />
      )}
      {recipe && <ClaudeRecipe recipe={recipe} />}
    </main>
  );
};

export default HomePage;
