var simplemaps_countrymap_mapdata={
  main_settings: {
   //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    
    //State defaults
    state_description: "State description",
    state_color: "#000000",
    state_hover_color: "#ffcc00",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    
    //Location defaults
    location_description: "Location description",
    location_url: "",
    location_color: "#FFcc00",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#ffffff",
    label_hover_color: "#ffffff",
    label_size: 16,
    label_font: "Arial",
    label_display: "auto",
    label_scale: "yes",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
    //Zoom settings
    zoom: "yes",
    manual_zoom: "yes",
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
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
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
    UA05: {
      name: "Vinnytska"
    },
    UA07: {
      name: "Volynska"
    },
    UA09: {
      name: "Luhanska"
    },
    UA12: {
      name: "Dnipropetrovska"
    },
    UA14: {
      name: "Donetska"
    },
    UA18: {
      name: "Zhytomyrska"
    },
    UA21: {
      name: "Zakarpatska"
    },
    UA23: {
      name: "Zaporizka"
    },
    UA26: {
      name: "Ivano-Frankivska"
    },
    UA30: {
      name: "Kyivska"
    },
    UA32: {
      name: "Kyivska"
    },
    UA35: {
      name: "Kirovohradska"
    },
    UA40: {
      name: "Sevastopilska"
    },
    UA43: {
      name: "Avtonomna Respublika Krym"
    },
    UA46: {
      name: "Lvivska"
    },
    UA48: {
      name: "Mykolaivska"
    },
    UA51: {
      name: "Odeska"
    },
    UA53: {
      name: "Poltavska"
    },
    UA56: {
      name: "Rivnenska"
    },
    UA59: {
      name: "Sumska"
    },
    UA61: {
      name: "Ternopilska"
    },
    UA63: {
      name: "Kharkivska"
    },
    UA65: {
      name: "Khersonska"
    },
    UA68: {
      name: "Khmelnytska"
    },
    UA71: {
      name: "Cherkaska"
    },
    UA74: {
      name: "Chernihivska"
    },
    UA77: {
      name: "Chernivetska"
    }
  },
  locations: {
    "0": {
      name: "Kiev",
      lat: "50.433333",
      lng: "30.516667"
    },
    "1": {
      lat: "49.8397",
      lng: "24.0297",
      name: "Львів"
    },
    "2": {
      lat: "48.9226",
      lng: "24.7111",
      name: "Івано-Франківськ"
    },
    "3": {
      lat: "50.2547",
      lng: "28.6587",
      name: "Житомир"
    },
    "4": {
      lat: "49.5883",
      lng: "34.5514",
      name: "Полтава"
    },
    "5": {
      lat: "49.9935",
      lng: "36.2304",
      name: "Харків"
    },
    "6": {
      lat: "48.4647",
      lng: "35.0462",
      name: "Дніпро"
    },
    "7": {
      lat: "46.4825",
      lng: "30.7233",
      name: "Одеса"
    }
  },
  labels: {
    UA05: {
      name: "Vinnytska",
      parent_id: "UA05"
    },
    UA07: {
      name: "Volynska",
      parent_id: "UA07"
    },
    UA09: {
      name: "Luhanska",
      parent_id: "UA09"
    },
    UA12: {
      name: "Dnipropetrovska",
      parent_id: "UA12"
    },
    UA14: {
      name: "Donetska",
      parent_id: "UA14"
    },
    UA18: {
      name: "Zhytomyrska",
      parent_id: "UA18"
    },
    UA21: {
      name: "Zakarpatska",
      parent_id: "UA21"
    },
    UA23: {
      name: "Zaporizka",
      parent_id: "UA23"
    },
    UA26: {
      name: "Ivano-Frankivska",
      parent_id: "UA26"
    },
    UA30: {
      name: "Kyivska",
      parent_id: "UA30"
    },
    UA32: {
      name: "Kyivska",
      parent_id: "UA32"
    },
    UA35: {
      name: "Kirovohradska",
      parent_id: "UA35"
    },
    UA40: {
      name: "Sevastopilska",
      parent_id: "UA40"
    },
    UA43: {
      name: "Avtonomna Respublika Krym",
      parent_id: "UA43"
    },
    UA46: {
      name: "Lvivska",
      parent_id: "UA46"
    },
    UA48: {
      name: "Mykolaivska",
      parent_id: "UA48"
    },
    UA51: {
      name: "Odeska",
      parent_id: "UA51"
    },
    UA53: {
      name: "Poltavska",
      parent_id: "UA53"
    },
    UA56: {
      name: "Rivnenska",
      parent_id: "UA56"
    },
    UA59: {
      name: "Sumska",
      parent_id: "UA59"
    },
    UA61: {
      name: "Ternopilska",
      parent_id: "UA61"
    },
    UA63: {
      name: "Kharkivska",
      parent_id: "UA63"
    },
    UA65: {
      name: "Khersonska",
      parent_id: "UA65"
    },
    UA68: {
      name: "Khmelnytska",
      parent_id: "UA68"
    },
    UA71: {
      name: "Cherkaska",
      parent_id: "UA71"
    },
    UA74: {
      name: "Chernihivska",
      parent_id: "UA74"
    },
    UA77: {
      name: "Chernivetska",
      parent_id: "UA77"
    }
  },
  legend: {
    entries: []
  },
  regions: {}
};