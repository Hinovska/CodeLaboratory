var Step = 0;
var UserLocated = false;
var MyLocations;
var CurrentPosition;
(function(window, mapster){
	//Opciones para Mapa
	var MapOptions = mapster.MAP_OPTIONS;
	//Contenedor de Mapa
	var DivContenedor = document.getElementById('MapDreamSold');
	//Creacion de Mapa
	map = mapster.create(DivContenedor, MapOptions);
	//Opciones para Eventos de Mapa
	var optionEventRuta = {
			obj: this.map.gMap,
			event:'dragend',
			callback: function(){
					Step = Step + 1;
					var num = Step;
					var mkoptsCenter = {
						//Posicion de Icono
						position: this._dragend(),
						//Icono
						icon: "./MapIcons/award.png",
						//Tooltip de Icono
						title:"Ruta",
						//Habilita Movimiento
						draggable: false,
						//Opacidad de Icono
						opacity:0.8,
						//Visible
						visible: true,
						id: 'DivStep' + num,
						content: {
							name: 'click',
							message: "<div id='InfoW" + num.toString() + "' style='color:#454545;'>Este fue el paso #" + num.toString()  + ".</div>"
						},
						AutoCloseInfo: true
						//Mapa en que se utilizara
						//map:map
					}
				console.log(this.addMarker(mkoptsCenter));
			}
	};
	var optionEventPosition = {
		obj: this.map.gMap,
		event:'idle',
		callback: function (){
				if (!UserLocated){
						this._GetLocation();
				}
		}
	};
	//Adicion de Eventos de Mapa
	//map._on(optionEventRuta);
	map._on(optionEventPosition);

	//Opciones de Markers
	// var mkoptsCamion = {
		// //Posicion de Icono
		// position: new google.maps.LatLng({lat: 4.758767, lng: -74.088054}),
		// //Icono
		// icon: "./MapIcons/truck3.png",
		// //Tooltip de Icono
		// title:"Transporte",
		// //Habilita Movimiento
		// draggable: true,
		// //Opacidad de Icono
		// opacity:0.8,
		// //Visible
		// visible: true,
		// id: "MkCamion",
		// content:{
			// name: 'dragend',
			// message:"<div style='color:#454545;'>Me has movido el Camion.</div>"
		// },
		// AutoCloseInfo: true
		// //Mapa en que se utilizara
		// //map:map
	// }

	//Items Aleatorios
	 //for (var i = 0; i < 10; i++){
		 //MyLocations[i] = new google.maps.LatLng({lat: 4.735447 + Math.random(), lng: -74.050238 + Math.random()});
	 //}

	//Adicion de Markers Iniciales
	for (var location in MyLocations){
		switch (location){
			case "University":
				var mkoptsItem = {
					position: MyLocations[location],
					icon: "./MapIcons/university.png",
					title: "University",
					draggable: false,
					opacity:0.8,
					visible: true,
					id: "Mk" + location,
					content:{
						name: 'click',
						message:"<div style='color:#454545;'>Aqui esta tu Universidad.</div>"
					},
					AutoCloseInfo: true
				}
				console.log(map.addMarker(mkoptsItem));
			break;
			case "Work":
				var mkoptsItem = {
					position: MyLocations[location],
					icon: "./MapIcons/workoffice.png",
					title: "Work",
					draggable: false,
					opacity:0.8,
					visible: true,
					id: "Mk" + location,
					content:{
						name: 'click',
						message:"<div style='color:#454545;'>Aqui esta tu trabajo.</div>"
					},
					AutoCloseInfo: true
				}
				console.log(map.addMarker(mkoptsItem));
			break;
			case "Home":
				var mkoptsItem = {
					position: MyLocations[location],
					icon: "./MapIcons/home-2.png",
					title: "Home",
					draggable: false,
					opacity:0.8,
					visible: true,
					id: "Mk" + location,
					content:{
						name: 'click',
						message:"<div style='color:#454545;'>Esta es tu Casa.</div>"
					},
					AutoCloseInfo: true
				}
				console.log(map.addMarker(mkoptsItem));
			break;
			case "Love":
				var mkoptsItem = {
					position: MyLocations[location],
					icon: "./MapIcons/loveinterest.png",
					title: "Home",
					draggable: false,
					opacity:0.8,
					visible: true,
					id: "Mk" + location,
					content:{
						name: 'click',
						message:"<div style='color:#454545;'>Aqui vive tu novia.</div>"
					},
					AutoCloseInfo: true
				}
				console.log(map.addMarker(mkoptsItem));
			break;
			default:
				var mkoptsItem = {
					position: MyLocations[location],
					//icon: "./MapIcons/office-building.png",
					icon: "./MapIcons/factory.png",
					//icon: "./MapIcons/office-townhouse.png",
					title: "Proveedor",
					draggable: false,
					opacity:0.8,
					visible: true,
					id: "Mk" + location,
					AutoCloseInfo: true
				}
				console.log(map.addMarker(mkoptsItem));
			break;
		}
	}

}(window, window.Mapster));
