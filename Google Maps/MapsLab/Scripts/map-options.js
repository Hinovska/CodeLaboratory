(function(window, google, mapster){
	mapster.MAP_OPTIONS = {
		//Tipo de Mapa Satelite(satellite)/Satelite con vias(hybrid)/Relieve(terrain)/Mapa(roadmap)-Default
		mapTypeId:google.maps.MapTypeId.ROADMAP,
		//Focus de Apertura Inicial
		center: {lat: 4.737767, lng: -74.049054},		
		//Permite desplazamiento
		draggable: true,
		//Color de fondo en Cambios de Zomm o Load
		backgroundColor: '#77B3EB',
		//Habilitar atajos de teclado
		keyboardShortcuts: false,	
		//Habilitar Control de StreetView
		streetViewControl: false,			
		//Habilitar Control de Cambio de Tipo de Mapa Satelite/Relieve/Mapa
		mapTypeControl: false,
		//???
		//disableDefaultUI:false,		
		//Habilitar Control de Zoom
		zoomControl: true,
		//Zoom con rueda central de mouse
		scrollwheel: true,
		//Zoom de Apertura inicial
		zoom: 15,		
		//Zomm Maximo Limite para Acercar
		maxZoom: 19,
		//Zomm Minimo Limite para Alejar
		minZoom: 1,
		//Opciones de Control de Zoom		
		zoomControlOptions: {
			position: google.maps.ControlPosition.RIGHT_TOP,
			style: google.maps.ZoomControlStyle.SMALL
		},
		//Habilitar Control de Paneo
		panControl: false,
		//Opciones de Control de Paneo
		panControlOptions:{
			position: google.maps.ControlPosition.RIGHT_TOP
		}
	};
}(window, google, window.Mapster || (window.Mapster = {})))