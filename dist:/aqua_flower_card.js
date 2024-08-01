const layoutCardConfig = {
  type: 'custom:layout-card',
  layout_type: 'custom:grid-layout',
  cards: [
    {
      type: 'vertical-stack',
      cards: [
        {
          type: 'entities',
          title: 'Watering Schedule',
          entities: [
            { entity: 'input_select.select_zone', name: 'Select Zone' },
            { entity: 'input_boolean.show_zone_settings', name: 'Show Zone Settings' }
          ],
          card_mod: {
            style: `
              ha-card {
                background: transparent;
                border-style: none;
                text-align: center;
              }
            `
          }
        },
        {
          type: 'conditional',
          conditions: [
            { entity: 'input_boolean.show_zone_settings', state: 'on' },
            { entity: 'input_select.select_zone', state: 'All Zones' }
          ],
          card: {
            type: 'entities',
            title: 'All Zones Settings',
            entities: [
              { entity: 'input_boolean.all_zones_toggle', name: 'All Zones' },
              { entity: 'input_text.all_zones_start_time', name: 'All Zones Start Time' },
              { entity: 'input_select.all_zones_days', name: 'All Zones Days' },
              { entity: 'input_number.all_zones_duration', name: 'All Zones Duration (min)' }
            ],
            card_mod: {
              style: `
                ha-card {
                  background: transparent;
                  border-style: none;
                  text-align: center;
                }
              `
            }
          }
        },
        {
          type: 'conditional',
          conditions: [
            { entity: 'input_boolean.show_zone_settings', state: 'on' },
            { entity: 'input_select.select_zone', state: 'Zone 1' }
          ],
          card: {
            type: 'entities',
            title: 'Zone 1 Settings',
            entities: [
              { entity: 'input_boolean.zone_1_toggle', name: 'Zone 1' },
              { entity: 'input_text.zone_1_start_time', name: 'Zone 1 Start Time' },
              { entity: 'input_select.zone_1_days', name: 'Zone 1 Days' },
              { entity: 'input_number.zone_1_duration', name: 'Zone 1 Duration (min)' }
            ],
            card_mod: {
              style: `
                ha-card {
                  background: transparent;
                  border-style: none;
                  text-align: center;
                }
              `
            }
          }
        },
        {
          type: 'conditional',
          conditions: [
            { entity: 'input_boolean.show_zone_settings', state: 'on' },
            { entity: 'input_select.select_zone', state: 'Zone 2' }
          ],
          card: {
            type: 'entities',
            title: 'Zone 2 Settings',
            entities: [
              { entity: 'input_boolean.zone_2_toggle', name: 'Zone 2' },
              { entity: 'input_text.zone_2_start_time', name: 'Zone 2 Start Time' },
              { entity: 'input_select.zone_2_days', name: 'Zone 2 Days' },
              { entity: 'input_number.zone_2_duration', name: 'Zone 2 Duration (min)' }
            ],
            card_mod: {
              style: `
                ha-card {
                  background: transparent;
                  border-style: none;
                  text-align: center;
                }
              `
            }
          }
        },
        {
          type: 'conditional',
          conditions: [
            { entity: 'input_boolean.show_zone_settings', state: 'on' },
            { entity: 'input_select.select_zone', state: 'Zone 3' }
          ],
          card: {
            type: 'entities',
            title: 'Zone 3 Settings',
            entities: [
              { entity: 'input_boolean.zone_3_toggle', name: 'Zone 3' },
              { entity: 'input_text.zone_3_start_time', name: 'Zone 3 Start Time' },
              { entity: 'input_select.zone_3_days', name: 'Zone 3 Days' },
              { entity: 'input_number.zone_3_duration', name: 'Zone 3 Duration (min)' }
            ],
            card_mod: {
              style: `
                ha-card {
                  background: transparent;
                  border-style: none;
                  text-align: center;
                }
              `
            }
          }
        },
        {
          type: 'conditional',
          conditions: [
            { entity: 'input_boolean.show_zone_settings', state: 'on' },
            { entity: 'input_select.select_zone', state: 'Zone 4' }
          ],
          card: {
            type: 'entities',
            title: 'Zone 4 Settings',
            entities: [
              { entity: 'input_boolean.zone_4_toggle', name: 'Zone 4' },
              { entity: 'input_text.zone_4_start_time', name: 'Zone 4 Start Time' },
              { entity: 'input_select.zone_4_days', name: 'Zone 4 Days' },
              { entity: 'input_number.zone_4_duration', name: 'Zone 4 Duration (min)' }
            ],
            card_mod: {
              style: `
                ha-card {
                  background: transparent;
                  border-style: none;
                  text-align: center;
                }
              `
            }
          }
        },
        {
          type: 'conditional',
          conditions: [
            { entity: 'input_boolean.show_zone_settings', state: 'on' },
            { entity: 'input_select.select_zone', state: 'Zone 5' }
          ],
          card: {
            type: 'entities',
            title: 'Zone 5 Settings',
            entities: [
              { entity: 'input_boolean.zone_5_toggle', name: 'Zone 5' },
              { entity: 'input_text.zone_5_start_time', name: 'Zone 5 Start Time' },
              { entity: 'input_select.zone_5_days', name: 'Zone 5 Days' },
              { entity: 'input_number.zone_5_duration', name: 'Zone 5 Duration (min)' }
            ],
            card_mod: {
              style: `
                ha-card {
                  background: transparent;
                  border-style: none;
                  text-align: center;
                }
              `
            }
          }
        },
        {
          type: 'conditional',
          conditions: [
            { entity: 'input_boolean.show_zone_settings', state: 'on' },
            { entity: 'input_select.select_zone', state: 'Zone 6' }
          ],
          card: {
            type: 'entities',
            title: 'Zone 6 Settings',
            entities: [
              { entity: 'input_boolean.zone_6_toggle', name: 'Zone 6' },
              { entity: 'input_text.zone_6_start_time', name: 'Zone 6 Start Time' },
              { entity: 'input_select.zone_6_days', name: 'Zone 6 Days' },
              { entity: 'input_number.zone_6_duration', name: 'Zone 6 Duration (min)' }
            ],
            card_mod: {
              style: `
                ha-card {
                  background: transparent;
                  border-style: none;
                  text-align: center;
                }
              `
            }
          }
        }
      ],
      card_mod: {
        style: `
          ha-card {
            background: transparent;
            border-style: none;
            text-align: center;
          }
        `
      }
    },
    {
      type: 'custom:stack-in-card',
      card_mod: {
        style: `
          ha-card {
            background: transparent;
            border-style: none;
            text-align: center;
          }
        `
      },
      cards: [
        {
          type: 'vertical-stack',
          cards: [
            {
              show_name: true,
              show_icon: true,
              icon_height: '40px',
              type: 'button',
              tap_action: { action: 'toggle' },
              entity: 'switch.all_zones_switch',
              show_state: false,
              name: 'All Zones',
              icon: 'mdi:pipe-valve',
              card_mod: {
                style: `
                  ha-card {
                    background: transparent;
                    border-style: none;
                    text-align: center;
                  }
                `
              }
            },
            {
              type: 'custom:mushroom-number-card',
              entity: 'number.all_zones_timer',
              name: 'All Zones Timer',
              icon: 'mdi:timer',
              icon_color: 'white',
              card_mod: {
                style: `
                  ha-card {
                    background: transparent;
                    border-style: none;
                    text-align: center;
                  }
                `
              }
            },
            {
              type: 'grid',
              columns: 2,
              square: false,
              cards: [
                {
                  type: 'custom:stack-in-card',
                  card_mod: {
                    style: `
                      ha-card {
                        background: transparent;
                        border-style: none;
                        text-align: center;
                      }
                    `
                  },
                  cards: [
                    {
                      type: 'vertical-stack',
                      cards: [
                        {
                          show_name: true,
                          show_icon: true,
                          icon_height: '40px',
                          type: 'button',
                          tap_action: { action: 'toggle' },
                          entity: 'switch.zone_1',
                          show_state: false,
                          name: 'Zone 1',
                          icon: 'mdi:pipe-valve',
                          card_mod: {
                            style: `
                              ha-card {
                                background: transparent;
                                border-style: none;
                              }
                            `
                          }
                        },
                        {
                          type: 'custom:mushroom-number-card',
                          entity: 'number.zone_1_timer',
                          icon: 'mdi:timer',
                          icon_color: 'white'
                        },
                        {
                          type: 'entity',
                          entity: 'sensor.zone_1_on_time',
                          name: 'Zone 1 On Time Today',
                          icon: 'mdi:timer-outline',
                          card_mod: {
                            style: `
                              ha-card {
                                background: transparent;
                                border-style: none;
                              }
                            `
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  type: 'custom:stack-in-card',
                  card_mod: {
                    style: `
                      ha-card {
                        background: transparent;
                        border-style: none;
                        text-align: center;
                      }
                    `
                  },
                  cards: [
                    {
                      type: 'vertical-stack',
                      cards: [
                        {
                          show_name: true,
                          show_icon: true,
                          icon_height: '40px',
                          type: 'button',
                          tap_action: { action: 'toggle' },
                          entity: 'switch.zone_2',
                          show_state: false,
                          name: 'Zone 2',
                          icon: 'mdi:pipe-valve',
                          card_mod: {
                            style: `
                              ha-card {
                                background: transparent;
                                border-style: none;
                              }
                            `
                          }
                        },
                        {
                          type: 'custom:mushroom-number-card',
                          entity: 'number.zone_2_timer',
                          icon: 'mdi:timer',
                          icon_color: 'white'
                        },
                        {
                          type: 'entity',
                          entity: 'sensor.zone_2_on_time',
                          name: 'Zone 2 On Time Today',
                          icon: 'mdi:timer-outline',
                          card_mod: {
                            style: `
                              ha-card {
                                background: transparent;
                                border-style: none;
                              }
                            `
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  type: 'custom:stack-in-card',
                  card_mod: {
                    style: `
                      ha-card {
                        background: transparent;
                        border-style: none;
                        text-align: center;
                      }
                    `
                  },
                  cards: [
                    {
                      type: 'vertical-stack',
                      cards: [
                        {
                          show_name: true,
                          show_icon: true,
                          icon_height: '40px',
                          type: 'button',
                          tap_action: { action: 'toggle' },
                          entity: 'switch.zone_3',
                          show_state: false,
                          name: 'Zone 3',
                          icon: 'mdi:pipe-valve',
                          card_mod: {
                            style: `
                              ha-card {
                                background: transparent;
                                border-style: none;
                              }
                            `
                          }
                        },
                        {
                          type: 'custom:mushroom-number-card',
                          entity: 'number.zone_3_timer',
                          icon: 'mdi:timer',
                          icon_color: 'white'
                        },
                        {
                          type: 'entity',
                          entity: 'sensor.zone_3_on_time',
                          name: 'Zone 3 On Time Today',
                          icon: 'mdi:timer-outline',
                          card_mod: {
                            style: `
                              ha-card {
                                background: transparent;
                                border-style: none;
                              }
                            `
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  type: 'custom:stack-in-card',
                  card_mod: {
                    style: `
                      ha-card {
                        background: transparent;
                        border-style: none;
                        text-align: center;
                      }
                    `
                  },
                  cards: [
                    {
                      type: 'vertical-stack',
                      cards: [
                        {
                          show_name: true,
                          show_icon: true,
                          icon_height: '40px',
                          type: 'button',
                          tap_action: { action: 'toggle' },
                          entity: 'switch.zone_4',
                          show_state: false,
                          name: 'Zone 4',
                          icon: 'mdi:pipe-valve',
                          card_mod: {
                            style: `
                              ha-card {
                                background: transparent;
                                border-style: none;
                              }
                            `
                          }
                        },
                        {
                          type: 'custom:mushroom-number-card',
                          entity: 'number.zone_4_timer',
                          icon: 'mdi:timer',
                          icon_color: 'white'
                        },
                        {
                          type: 'entity',
                          entity: 'sensor.zone_4_on_time',
                          name: 'Zone 4 On Time Today',
                          icon: 'mdi:timer-outline',
                          card_mod: {
                            style: `
                              ha-card {
                                background: transparent;
                                border-style: none;
                              }
                            `
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  type: 'custom:stack-in-card',
                  card_mod: {
                    style: `
                      ha-card {
                        background: transparent;
                        border-style: none;
                        text-align: center;
                      }
                    `
                  },
                  cards: [
                    {
                      type: 'vertical-stack',
                      cards: [
                        {
                          show_name: true,
                          show_icon: true,
                          icon_height: '40px',
                          type: 'button',
                          tap_action: { action: 'toggle' },
                          entity: 'switch.zone_5',
                          show_state: false,
                          name: 'Zone 5',
                          icon: 'mdi:pipe-valve',
                          card_mod: {
                            style: `
                              ha-card {
                                background: transparent;
                                border-style: none;
                              }
                            `
                          }
                        },
                        {
                          type: 'custom:mushroom-number-card',
                          entity: 'number.zone_5_timer',
                          icon: 'mdi:timer',
                          icon_color: 'white'
                        },
                        {
                          type: 'entity',
                          entity: 'sensor.zone_5_on_time',
                          name: 'Zone 5 On Time Today',
                          icon: 'mdi:timer-outline',
                          card_mod: {
                            style: `
                              ha-card {
                                background: transparent;
                                border-style: none;
                              }
                            `
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  type: 'custom:stack-in-card',
                  card_mod: {
                    style: `
                      ha-card {
                        background: transparent;
                        border-style: none;
                        text-align: center;
                      }
                    `
                  },
                  cards: [
                    {
                      type: 'vertical-stack',
                      cards: [
                        {
                          show_name: true,
                          show_icon: true,
                          icon_height: '40px',
                          type: 'button',
                          tap_action: { action: 'toggle' },
                          entity: 'switch.zone_6',
                          show_state: false,
                          name: 'Zone 6',
                          icon: 'mdi:pipe-valve',
                          card_mod: {
                            style: `
                              ha-card {
                                background: transparent;
                                border-style: none;
                              }
                            `
                          }
                        },
                        {
                          type: 'custom:mushroom-number-card',
                          entity: 'number.zone_6_timer',
                          icon: 'mdi:timer',
                          icon_color: 'white'
                        },
                        {
                          type: 'entity',
                          entity: 'sensor.zone_6_on_time',
                          name: 'Zone 6 On Time Today',
                          icon: 'mdi:timer-outline',
                          card_mod: {
                            style: `
                              ha-card {
                                background: transparent;
                                border-style: none;
                              }
                            `
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

export default layoutCardConfig;
