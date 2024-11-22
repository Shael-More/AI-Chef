const Main = () => {
  const ingredients = ['Chicken', 'Oregano'];

  const ingredientsList = ingredients.map((item) => <li key={item}>{item}</li>);

  function handleSubmit(e) {
    e.preventDefault();
    // get the form data
    const formData = new FormData(e.currentTarget);
    const newIngredient = formData.get('ingredient');
    ingredients.push(newIngredient);
    console.log(ingredients);
  }

  return (
    <main className='p-10'>
      <form
        className='flex gap-3 justify-center h-[40px]'
        onSubmit={handleSubmit}
      >
        <input
          type='text'
          name='ingredient'
          aria-label='Add ingredients'
          placeholder='e.g. oregano'
          className='p-2 rounded-sm border border-[#d1d5d8] shadow-sm grow min-w-32 max-w-96'
        />
        <button
          type='submit'
          className='font-montserrat rounded-md border-none bg-[#141413] text-[#fafaf8] px-4 text-sm font-semibold'
        >
          + Add ingredient
        </button>
      </form>

      <ul>{ingredientsList}</ul>
    </main>
  );
};

export default Main;
