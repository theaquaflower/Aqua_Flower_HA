class AquaFlowerCard extends HTMLElement {
  set hass(hass) {
    this._hass = hass;
    if (!this._initialized) {
      this._initialize();
      this._initialized = true;
    }
    this._render();
  }

  _initialize() {
    const shadow = this.attachShadow({ mode: 'open' });
    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        ha-card {
          padding: 16px;
        }
      </style>
      <div id="root"></div>
    `;
    shadow.appendChild(template.content.cloneNode(true));
    this._root = shadow.querySelector('#root');
  }

  _render() {
    if (!this._hass || !this._config) return;

    // Clear the root element
    this._root.innerHTML = '';

    // Define the card layout configuration
    const layoutCardConfig = {
      type: 'custom:layout-card',
      layout_type: 'custom:grid-layout',
      cards: [
        // Watering Schedule entities card
        {
          type: 'entities',
          title: 'Watering Schedule',
          entities: [
            { entity: 'input_select.select_zone', name: 'Select Zone' },
            { entity: 'input_boolean.show_zone_settings', name: 'Show Zone Settings' }
          ]
        },
        // Conditional cards for each zone's settings
        ...[1, 2, 3, 4, 5, 6].map(zoneNumber => ({
          type: 'conditional',
          conditions: [
            { entity: 'input_boolean.show_zone_settings', state: 'on' },
            { entity: 'input_select.select_zone', state: `Zone ${zoneNumber}` }
          ],
          card: {
            type: 'entities',
            title: `Zone ${zoneNumber} Settings`,
            entities: [
              { entity: `input_boolean.zone_${zoneNumber}_toggle`, name: `Zone ${zoneNumber}` },
              { entity: `input_text.zone_${zoneNumber}_start_time`, name: `Zone ${zoneNumber} Start Time` },
              { entity: `input_select.zone_${zoneNumber}_days`, name: `Zone ${zoneNumber} Days` },
              { entity: `input_number.zone_${zoneNumber}_duration`, name: `Zone ${zoneNumber} Duration (min)` }
            ]
          }
        }))
      ]
    };

    // Build HTML for each card defined in layoutCardConfig
    layoutCardConfig.cards.forEach(cardConfig => {
      const cardElement = this._createCardElement(cardConfig);
      this._root.appendChild(cardElement);
    });
  }

  _createCardElement(cardConfig) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <ha-card>
        <h1>${cardConfig.title || ''}</h1>
        ${cardConfig.entities.map(entity => `
          <div class="entity">
            <ha-entity-toggle
              .hass="${this._hass}"
              .stateObj="${this._hass.states[entity.entity]}"
            ></ha-entity-toggle>
          </div>
        `).join('')}
      </ha-card>
    `;
    return card;
  }

  setConfig(config) {
    if (!config.entity) {
      throw new Error('You need to define an entity');
    }
    this._config = config;
  }

  getCardSize() {
    return 3;
  }
}

customElements.define('aqua-flower-card', AquaFlowerCard);
