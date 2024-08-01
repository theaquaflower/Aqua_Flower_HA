class AquaFlowerHa extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this._initialize();
    }

    setConfig(config) {
        if (!config) {
            throw new Error("Invalid configuration");
        }
        this._config = config;
        this._render();
    }

    connectedCallback() {
        if (this._config) {
            this._render();
        }
    }

    _initialize() {
        const template = document.createElement("template");
        template.innerHTML = `
          <style>
            ha-card {
              padding: 16px;
            }
          </style>
          <div id="root"></div>
        `;
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this._root = this.shadowRoot.getElementById("root");
    }

    _render() {
        if (!this._hass || !this._config) {
            return;
        }

        // Clear the root element
        this._root.innerHTML = "";

        // Define the card layout configuration
        const layoutCardConfig = {
            type: "custom:layout-card",
            layout_type: "custom:grid-layout",
            cards: [
                {
                    type: "entities",
                    title: "Watering Schedule",
                    entities: [
                        { entity: "input_select.select_zone", name: "Select Zone" },
                        { entity: "input_boolean.show_zone_settings", name: "Show Zone Settings" }
                    ]
                },
                ...[1, 2, 3, 4, 5, 6].map(zoneNumber => ({
                    type: "conditional",
                    conditions: [
                        { entity: "input_boolean.show_zone_settings", state: "on" },
                        { entity: `input_select.select_zone`, state: `Zone ${zoneNumber}` }
                    ],
                    card: {
                        type: "entities",
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
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
          <ha-card>
            <h1>${cardConfig.title || ""}</h1>
          </ha-card>
        `;
        cardConfig.entities.forEach(entity => {
            const entityElement = document.createElement("div");
            entityElement.className = "entity";
            const haEntityToggle = document.createElement("ha-entity-toggle");
            haEntityToggle.hass = this._hass;
            haEntityToggle.stateObj = this._hass.states[entity.entity];
            entityElement.appendChild(haEntityToggle);
            card.appendChild(entityElement);
        });
        return card;
    }

    set hass(hass) {
        this._hass = hass;
        if (this._config) {
            this._render();
        }
    }

    getCardSize() {
        return 3;
    }
}

customElements.define("aqua-flower-ha", AquaFlowerHa);
