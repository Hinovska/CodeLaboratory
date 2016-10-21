/* KnockOut Code */

var initialProducts= [
    { name: "Destacado Especial", price: 83000.00 },
    { name: "Destacado Detalle", price: 54000.00 },
    { name: "Etiqueta Personalizable", price: 49500.00 },
    { name: "Inmueble Destacado", price: 42000.00 },
    { name: "Asciende tu aviso temporalmente", price: 10000.00 },
    { name: "Cupo Extendido (3 Anuncios Adicionales)", price: 75000.00 }
];
 
var PagedGridModel = function(items) {
    this.items = ko.observableArray(items);
 
    this.addItem = function() {
        this.items.push({ name: "New item", price: 100 });
    };
 
    this.sortByName = function() {
        this.items.sort(function(a, b) {
            return a.name < b.name ? -1 : 1;
        });
    };
 
    this.jumpToFirstPage = function() {
        this.gridViewModel.currentPageIndex(0);
    };
 
    this.gridViewModel = new ko.simpleGrid.viewModel({
        data: this.items,
        columns: [
            { headerText: "Item Name", rowText: "name" },
            { headerText: "Price", rowText: function (item) { return "$" + item.price.toFixed(2) } }
        ],
        pageSize: 3
    });
};

var persona = {name: ko.observable("Andres"), lastName: ko.observable("Gomez")};

persona.fullName = ko.dependentObservable(function(){
	return this.name() + ' ' + this.lastName() + '.';
}, persona);

ko.applyBindings(new PagedGridModel(initialProducts));
ko.applyBindings(persona);