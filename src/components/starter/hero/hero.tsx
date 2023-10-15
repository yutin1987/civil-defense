import { component$ } from '@builder.io/qwik';
import styles from './hero.module.css';

export default component$(() => {
  return (
    <div class={['container', styles.hero]}>
      <h1>
        你的存在，本身就是一種愛與力量
      </h1>
    </div>
  );
});
