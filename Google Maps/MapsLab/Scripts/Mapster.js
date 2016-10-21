(function(window,google){
	var Mapster = (function(){
		function Mapster(element,opts){
			this.gMap = new google.maps.Map(element,opts);
		}
		Mapster.prototype = {
			center: function(point){
				if (point){
					this.gMap.setCenter(point);
				}
				else{
					return this.gMap.getCenter();
				}
			},
			zoom: function(level){
				if (level){
					this.gMap.setZoom(level);
				}
				else{
					return this.gMap.getZoom();
				}
			},
			_on: function(opts){
				var self = this;
				google.maps.event.addListener(opts.obj, opts.event, function(e){
					opts.callback.call(self, e, opts.obj);
				});
			},
			_dragend: function(center){
				if (center){
					this.gMap.setCenter(center);
				}
				else{
					return this.gMap.getCenter();
				}
			},
			_GetLocation: function(){
						if (navigator.geolocation){
								var optionsGeo = {enableHighAccuracy: true, timeout: 60000, maximumAge: 0};
								navigator.geolocation.getCurrentPosition(function GeoSucces(MePosition){
													var ClientLocation = new google.maps.LatLng({lat: MePosition.coords.latitude, lng: MePosition.coords.longitude});
													if (ClientLocation){
														var mkoptsMePosition = {
															position: ClientLocation,
															icon: "./MapIcons/you-are-here-2.png",
															title:"Mi Posicion",
															draggable: true,
															opacity:0.8,
															visible: true,
															id: "MkPosition",
															content:{
																name: 'click',
																message:"<div style='color:#454545;'>Yo estoy Aqui.</div>"
															},
															AutoCloseInfo: true,
															saveposition:{
																name: "dragend"
															}
														}
														map.center(ClientLocation);
														CurrentPosition	= ClientLocation;
														console.log(map.addMarker(mkoptsMePosition));
														UserLocated = true;
														for (var item in MyLocations){
																if (ClientLocation == MyLocations[item]){
																			alert("Estas en tu " + item);
																}
															}
													}
										},
										function GeoError(){
											alert("Error obteniendo tu localizacion.");
										}, optionsGeo);
						}
						else{
							alert("Geolocation no esta soportada por tu navegador.");
						}
			},
			addMarker: function(mkopts){
				var newmarker = this._createMarker(mkopts);
				var infoWindow;
				if (mkopts.event){
					this._on({
						obj: newmarker,
						event: mkopts.event.name,
						callback: mkopts.event.callback
					});
				}
				if (mkopts.content){
					this._on({
						obj: newmarker,
						event: mkopts.content.name,
						callback: function(){
							infoWindow = new google.maps.InfoWindow({content: mkopts.content.message});
							infoWindow.open(this.gMap, newmarker);
						}
					});
				}
				if (mkopts.saveposition){
					this._on({
						obj: newmarker,
						event: mkopts.saveposition.name,
						callback: function(){
							CurrentPosition = newmarker.getPosition();
							if (CurrentPosition != undefined){
								//newmarker.setIcon("./MapIcons/male-2U.png");
								newmarker.setIcon("./MapIcons/you-are-here-2B.png");
							}
							else{
								newmarker.setIcon("./MapIcons/male-2.png");
							}
							//alert(CurrentPosition);
						}
					});
				}
				if (mkopts.AutoCloseInfo){
					this._on({
						obj: newmarker,
						event: 'mouseout',
						callback: function(){
							if (infoWindow){
								infoWindow.close();
							}
						}
					});
				}
				return newmarker;
			},
			_createMarker: function(mkopts){
				mkopts.map = this.gMap;
				return new google.maps.Marker(mkopts);
			}
		};
		return Mapster;
	}());

	Mapster.create = function(element,opts){
		return new Mapster(element,opts);
	};

	window.Mapster = Mapster;
}(window,google));
