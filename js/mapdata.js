var simplemaps_countrymap_mapdata={
  main_settings: {
   //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#2a2a35",
    
    //State defaults
    state_description: "",
    state_color: "#1e1e26",
    state_hover_color: "#252530",
    state_url: "",
    border_size: 1.2,
    all_states_inactive: "no",
    all_states_zoomable: "no",
    
    //Location defaults
    location_description: "",
    location_url: "",
    location_color: "#ffcc00",
    location_opacity: 0.9,
    location_hover_opacity: 1,
    location_size: 18, // Трохи збільшив для кращого вигляду
    location_type: "circle",
    location_image_source: "frog.png",
    location_border_color: "#020617",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#ffffff",
    label_hover_color: "#ffffff",
    label_size: 11,
    label_font: "Arial",
    label_display: "all",
    label_scale: "yes",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
    //Zoom settings
    zoom: "no",
    manual_zoom: "no",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_nocss: "no",
    popup_centered: "yes",
    popup_lossy_eyeball: "no",
    popup_outline: "no",
    popup_shadow: "no",
    popup_corners: "0",
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    popups: "detect",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },
  state_specific: {
    UA01: { name: "Крим" }, UA05: { name: "Вінницька" }, UA07: { name: "Волинська" },
    UA12: { name: "Дніпропетровська" }, UA14: { name: "Донецька" }, UA18: { name: "Житомирська" },
    UA21: { name: "Закарпатська" }, UA23: { name: "Запорізька" }, UA26: { name: "Івано-Франківська" },
    UA32: { name: "Київська" }, UA35: { name: "Кіровоградська" }, UA44: { name: "Луганська" },
    UA46: { name: "Львівська" }, UA48: { name: "Миколаївська" }, UA51: { name: "Одеська" },
    UA53: { name: "Полтавська" }, UA56: { name: "Рівненська" }, UA59: { name: "Сумська" },
    UA61: { name: "Тернопільська" }, UA63: { name: "Харківська" }, UA65: { name: "Херсонська" },
    UA68: { name: "Хмельницька" }, UA71: { name: "Черкаська" }, UA73: { name: "Чернівецька" },
    UA74: { name: "Чернігівська" }
  },
  locations: {
    "0": { name: "Київ", lat: "50.45", lng: "30.52" },
    "1": { name: "Львів", lat: "49.83", lng: "24.02" },
    "2": { name: "Одеса", lat: "46.48", lng: "30.72" },
    "3": { name: "Полтава", lat: "49.58", lng: "34.55" },
    "4": { name: "Житомир", lat: "50.25", lng: "28.65" },
    "5": { name: "Дніпро", lat: "48.46", lng: "35.04" },
    "6": { name: "Івано-Франківськ", lat: "48.92", lng: "24.71" }
  }
};
