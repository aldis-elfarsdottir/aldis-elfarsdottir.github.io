(function () {
  const container = document.getElementById("world-map");
  const detailPanel = document.getElementById("map-detail");
  if (!container) return;

  const width = container.clientWidth || 800;
  const height = Math.round(width * 0.52);

  const svg = d3
    .select(container)
    .append("svg")
    .attr("viewBox", `0 0 ${width} ${height}`)
    .attr("width", "100%")
    .style("height", "auto");

  const projection = d3.geoNaturalEarth1();
  const path = d3.geoPath(projection);

  d3.json("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json")
    .then((world) => {
      const countries = topojson.feature(world, world.objects.countries);
      projection.fitSize([width, height], countries);

      svg
        .append("g")
        .selectAll("path")
        .data(countries.features)
        .join("path")
        .attr("d", path)
        .attr("class", "map-country");

      const pins = svg
        .append("g")
        .selectAll("circle")
        .data(MAP_LOCATIONS)
        .join("circle")
        .attr("class", "map-pin")
        .attr("r", 6)
        .attr("cx", (d) => projection([d.lon, d.lat])[0])
        .attr("cy", (d) => projection([d.lon, d.lat])[1])
        .attr("tabindex", 0)
        .attr("role", "button")
        .attr("aria-label", (d) => `Show roles in ${d.city}`)
        .on("click", (event, d) => selectLocation(d, pins))
        .on("keydown", (event, d) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            selectLocation(d, pins);
          }
        });

      renderLegend(pins);

      // Open the first location by default so the panel isn't empty.
      if (MAP_LOCATIONS.length) selectLocation(MAP_LOCATIONS[0], pins);
    })
    .catch((err) => {
      console.error("World map failed to load:", err);
      container.innerHTML =
        '<p class="map-error">Map failed to load. Check your internet connection and refresh.</p>';
    });

  function selectLocation(location, pins) {
    pins.classed("active", (d) => d === location);

    const rolesHtml = location.roles
      .map(
        (r) => `
        <li class="map-role">
          <p class="map-role-years">${r.years}</p>
          <h4>${r.title}</h4>
          <p class="map-role-org">${r.org}</p>
          <p class="map-role-note">${r.note}</p>
        </li>`
      )
      .join("");

    detailPanel.innerHTML = `
      <h3>${location.city}</h3>
      <ul class="map-role-list">${rolesHtml}</ul>
    `;
  }

  function renderLegend(pins) {
    const legend = document.getElementById("map-legend");
    if (!legend) return;

    legend.innerHTML = "";
    MAP_LOCATIONS.forEach((loc) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "map-legend-item";
      btn.textContent = loc.city;
      btn.addEventListener("click", () => selectLocation(loc, pins));
      legend.appendChild(btn);
    });
  }
})();