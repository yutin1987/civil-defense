import { component$ } from '@builder.io/qwik';
import styles from './header.module.css';

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={['container', styles.wrapper]}>
        <div class={styles.logo}>
          <a href="/" title="qwik">
            銀河防衛隊
          </a>
        </div>
        <ul>
          <li>
            <a href="https://qwik.builder.io/docs/components/overview/" target="_blank">
              招募
            </a>
          </li>
          <li>
            <a href="https://qwik.builder.io/examples/introduction/hello-world/" target="_blank">
              關於我們
            </a>
          </li>
          <li>
            <a href="https://qwik.builder.io/tutorial/welcome/overview/" target="_blank">
              註冊 / 登陸
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
});
