import { component$, $, useOnWindow, useSignal } from '@builder.io/qwik';

export default component$(() => {
  const gettingStartedStep = useSignal(0);

  useOnWindow(
    'keydown',
    $((e) => {
      if ((e as KeyboardEvent).key === 'Alt') {
        gettingStartedStep.value = 1;
      }
    })
  );

  return (
    <div class="container container-purple container-center">
      <h2>線上學習</h2>
      <h2>參與討論</h2>
      <h2>取得徽章</h2>
      <h2>實體受訓</h2>
    </div>
  );
});
