import { FunctionalComponent } from 'preact';
import { NadeThrow } from '../../Nade';

import styles from './style.module.css';

export const NadeItem: FunctionalComponent<{ nade: NadeThrow }> = ({
  nade
}) => {
  const listFormatter = new Intl.ListFormat('en', {
    style: 'narrow',
    type: 'conjunction'
  });

  return (
    <div>
      <dl>
        <dt>From</dt>
        <dd>{nade.location.name}</dd>

        <dt>To</dt>
        <dd>{nade.target.name}</dd>

        <dt>Server tick</dt>
        <dd>{nade.tickRate}</dd>

        <dt>Stance</dt>
        <dd>{nade.throw.stance}</dd>

        <dt>Movement</dt>
        <dd>{listFormatter.format(nade.throw.movement)}</dd>
      </dl>

      <img src={nade.throwPointImageUrl} />
      <img src={nade.throwReleaseImageUrl} />

      <video autoplay controls loop>
        <source src={nade.throwAnimationUrl} type="video/mp4" />
      </video>
    </div>
  );
};

export const NadeItemPreview: FunctionalComponent<{ nade: NadeThrow }> = ({
  nade
}) => {
  const listFormatter = new Intl.ListFormat('en', {
    style: 'narrow',
    type: 'conjunction'
  });

  return (
    <div>
      <dl>
        <dt>From</dt>
        <dd>{nade.location.name}</dd>

        <dt>To</dt>
        <dd>{nade.target.name}</dd>

        <dt>Server tick</dt>
        <dd>{nade.tickRate}</dd>

        <dt>Stance</dt>
        <dd>{nade.throw.stance}</dd>

        <dt>Movement</dt>
        <dd>{listFormatter.format(nade.throw.movement)}</dd>
      </dl>

      <div class={styles.imageContainer}>
        <img src={nade.throwPointImageUrl} />
        {nade.throwReleaseImageUrl && <img src={nade.throwReleaseImageUrl} />}
      </div>
    </div>
  );
};

export const NadeItemList: FunctionalComponent<{ nades: NadeThrow[] }> = ({
  nades
}) => (
  <>
    {nades.length > 0 && (
      <ul class={styles.itemList}>
        {nades.map((nade) => (
          <NadeItem key={nade.throwAnimationUrl} nade={nade} />
        ))}
      </ul>
    )}
  </>
);
