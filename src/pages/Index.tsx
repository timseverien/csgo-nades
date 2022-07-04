import { useState } from 'preact/hooks';

import { FilterRow } from '../components/FilterRow';
import { NadeItemList } from '../components/NadeItem';
import { PillList } from '../components/Pill';

import tricknades from '../tricknades';

export function Index() {
  // TODO: remove doubles
  const tickRateOptions = tricknades.map((nade) => ({
    label: nade.tickRate.toString(),
    value: nade.tickRate
  }));

  const mapOptions = tricknades.map((nade) => ({
    label: nade.map,
    value: nade.map
  }));

  const [currentLocation, setLocation] = useState(null);
  const [currentMap, setMap] = useState('de_mirage');
  const [currentTickRate, setTickRate] = useState(64);

  const trickNadesSubselection = tricknades.filter(
    (nade) => nade.map === currentMap && nade.tickRate === currentTickRate
  );

  const locationOptions = trickNadesSubselection
    .filter((nade) => nade.map === currentMap)
    .map((nade) => ({
      label: nade.location.name,
      value: nade.location.name
    }));

  const nades = trickNadesSubselection.filter(
    (nade) =>
      !currentLocation ||
      nade.location.name === currentLocation ||
      nade.target.name === currentLocation
  );

  return (
    <main>
      <h1>Counter-Strike: Global Offensive nades</h1>

      {/* <NadeFilter
        map={currentMap}
        mapOptions={mapOptions}
        tickRate={currentTickRate}
        tickRateOptions={tickRateOptions}
        onMapChange={(map) => setMap(map as string)}
        onTickRateChange={(tickRate) => setTickRate(tickRate as number)}
      /> */}

      <dl>
        {tickRateOptions.length > 1 && (
          <FilterRow label="Tick rate">
            <PillList
              options={tickRateOptions}
              value={currentTickRate}
              onSelect={(tickRate: number) => setTickRate(tickRate)}
            />
          </FilterRow>
        )}

        {mapOptions.length > 1 && (
          <FilterRow label="Map">
            <PillList
              options={mapOptions}
              value={currentMap}
              onSelect={(map: string) => setMap(map)}
            />
          </FilterRow>
        )}

        {locationOptions.length > 1 && (
          <FilterRow label="Location">
            <PillList
              options={locationOptions}
              value={currentLocation}
              onSelect={(location: string) => setLocation(location)}
            />
          </FilterRow>
        )}
      </dl>

      <NadeItemList nades={nades} />

      {nades.length === 0 && <div>No nades yet!</div>}
    </main>
  );
}
