export default function IngredientsList(props) {
  const ingredientsList = props.ingredients.map((item) => <li key={item}>{item}</li>);

  return (
    <section className='p-10 font-mono space-y-4'>
      <h2 className='text-3xl  font-bold'>Ingredients on hand:</h2>
      <ul className='list-disc ml-5' aria-live='polite'>
        {ingredientsList}
      </ul>
      {props.ingredients.length > 3 && (
        <div className='flex text-sm bg-slate-200 p-5 justify-between rounded-lg items-center max-w-lg mx-auto'>
          <div ref={props.ref} className='space-y-5 '>
            <h3 className='font-bold text-lg '>Ready for a recipe?</h3>
            <p className='text-gray-500 text-sm'>
              Generate a recipe from your list of ingredients
            </p>
          </div>

          <button
            onClick={props.getRecipe}
            className='bg-[#6f6866] text-base text-white p-2 rounded-md'
          >
            Get a recipe
          </button>
        </div>
      )}
    </section>
  );
}

