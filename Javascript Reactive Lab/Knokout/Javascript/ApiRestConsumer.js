function DragonSoulBreaker() {
     var self = this;
     self.ApiRestUrl = "http://192.168.0.182:53467/api/v1/";
     self.HeaderAuth = {"Authorization": "Basic MFFDT00zTUxJMU9MMExaRzRVT0pCUzUyTklBTTFRVDk=", "Content-Type": "application/json"};
     self.TimeOutIndicator =   ko.observable(0);
     self.ApiController =  ko.observable();
     self.Identificator = ko.observable();
     self.ResponseData = ko.observable();
     self.ResponseError = ko.observable();
     self.ShotApiRestRequest = ko.pureComputed(function () {
       debugger;
         if (self.Identificator() != undefined && self.Identificator() > 0) {
             //Call de ApiRest
             var TimeOut = 2000;
             if (self.TimeOutIndicator() > 0) {
                 clearTimeout(seft.TimeOutIndicator());
             }
             self.TimeOutIndicator(setTimeout(function () {debugger; callRestApi("GET", true,  self.ApiRestUrl, self.ApiController(), self.Identificator(), "json", self.SuccessRequest,  self.FailRequest, null) ; seft.TimeOutIndicator(0);}, TimeOut));
         }
         return true;
     }, self);

     self.SuccessRequest = function Request_onSuccess(result,params) {
        self.ResponseData ( jQuery.parseJSON(result));
     };

     self.FailRequest =function Request_onFailed(error) {
         self.ResponseError (error._message);
       };
}
(function () {
  if (window.vmApiRestConsumer == undefined) { window.vmApiRestConsumer = new DragonSoulBreaker(); };
  ko.applyBindings(window.vmApiRestConsumer);
})();
