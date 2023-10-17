import { Information } from './Information';
import { NAFbuttons } from './NAFbuttons';
import { NAFfooter } from './NAFfooter';
import './NAFschedule';
import { NAFschedule } from './NAFschedule';
import BarraPrincipal from '../../BarraPrincipal';

export default function NAFpage() {
  return (
    <div>
      <BarraPrincipal titulo="NAF" />
      <Information />
      <NAFbuttons />
      <NAFschedule />
      <NAFfooter />
    </div>
  );
}
