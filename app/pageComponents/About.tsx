import { person } from '../__data__/person';

export default function About() {
  const { personalDescription } = person.personal;
  return (
    <section>
      <p>Hi!</p>
      <p>{personalDescription}</p>
    </section>
  );
}
