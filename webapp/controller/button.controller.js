sap.ui.define(['sap/ui/core/mvc/Controller', 'sap/m/MessageToast', 	"sap/ui/model/json/JSONModel","sap/m/MessageBox"],
	function(Controller, MessageToast,JSONModel,MessageBox) {
	"use strict";


    
	return Controller.extend("sap.m.sample.NavContainer.controller.button", {
        onInit: function() { },

        onPress: function (evt) {
			MessageToast.show(evt.getSource().getId() + " Pressed");
		}

	});
});