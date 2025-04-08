import React from 'react';

const iconMap = {
  biomass: '🌱',
  coal: '⬛',
  imports: '🚢',
  gas: '🔥',
  nuclear: '☢️',
  other: '❓',
  hydro: '💧',
  solar: '☀️',
  wind: '🌬️',
};

function EnergyTiles({ generationMix }) {
  return (
    <div className="tilesGrid">
      {generationMix.map((item) => (
        <div key={item.fuel} className="tile">
          <div className="icon">{iconMap[item.fuel]}</div>
          <h3>{item.fuel}</h3>
          <p>{item.perc}%</p>
        </div>
      ))}
    </div>
  );
}

export default EnergyTiles;
