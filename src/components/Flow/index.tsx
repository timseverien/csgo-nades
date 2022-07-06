import { FunctionalComponent } from 'preact';
import style from './style.module.css';

export const Flow: FunctionalComponent = ({ children }) => <div class={style.flow}>{children}</div>;
