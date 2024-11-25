import Markdown from 'react-markdown';

export default function ClaudeRecipe(props) {
  return (
    <section aria-live='polite' className='text-[#475467] leading-7 text-xl '>
      <h2 className='font-bold'>Chef Claude Recommends: </h2>
      <Markdown>{props.recipe}</Markdown>
    </section>
  );
}
