function parseData(json) {
  return Object.keys(ds).map(y => {
    const {
      hero_shoe_image_url: heroShoeImageUrl,
      hero_shoe_name: heroShoeName,
      hero_shoe_copy: heroShoeCopy,
      moment_copy: momentCopy,
    } = ds[y];
    const runnerUps = [];
    
    [...Array(9).keys()]
      .map(k => k + 1)
      .map(n => {
        const runnerUp = {
          imageUrl: ds[y][`runner_up_shoe_image_url_${n}`],
          copy: ds[y][`runner_up_shoe_copy_${n}`],
          name: ds[y][`runner_up_shoe_name_${n}`],
        };
        runnerUps.push(runnerUp);
      });

    return {
      year: y,
      heroShoeImageUrl,
      heroShoeName,
      heroShoeCopy,
      momentCopy,
      runnerUps,
    };
  });
}

function generateHtml(data) {
  const all = data.map(d => {
    const runnerUpHtml = d.runnerUps.map(r => `
    <div class="runner-up">
      <div class="runner-up-image"><img src="${r.imageUrl}" /></div>
      <div class="runner-up-info">
        <h3 class="runner-up-name">${r.name}</h3>
        <p class="runner-up-copy">${r.copy}</p>
      </div>
    </div>
      `);

    const html = `
<section class="" id="${d.year}">
  <h2 class="section-header">${d.year}</h2>
  <div class="hero-image"><img src="${d.heroShoeImageUrl}" alt="${d.heroShoeName}" /></div>
  <div class="hero-info">
    <h3 class="hero-shoe-name">${d.heroShoeName}</h3>
    <p class="hero-shoe-copy">${d.heroShoeCopy}</p>
  </div>
  <div class="runner-ups">
    ${runnerUpHtml.join('')}
  </div>
  <div class="moment">
    <h3 class="moment-header">Moment</h3>
    <p class="moment-copy">${d.momentCopy}</p>
  </div>
</section>
    `;

    return html;
  });
  
  return all.join('');
}

module.exports = {
  parseData,
  generateHtml,
}
