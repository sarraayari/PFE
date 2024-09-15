sap.ui.define(['sap/ui/core/mvc/Controller', 'sap/m/MessageToast', 	"sap/ui/model/json/JSONModel","sap/m/MessageBox"],
	function(Controller, MessageToast,JSONModel,MessageBox) {
	"use strict";


    
	return Controller.extend("sap.m.sample.NavContainer.controller.forms", {
        onInit: function() { 

			var oModel = new sap.ui.model.json.JSONModel({
                BillingName: "",
                BillingStreet: "",
                BillingStreetNumber: "",
                BillingZipCode: "",
                BillingCity: "",
				BillingCountry: "",
				DiscountCode: "",
				CreditCardVendor: "",
				CreditCardNumber: "",
				CreditCardMonth: "",
				CreditCardYear: "",
				CreditCardValidationCode: "",
				OnlineMail: "",
				OnlineTwitter: ""
            });
			this.getView().setModel(oModel);

            
        },

		onAccept:function(){
			
			var oModel = this.getView().getModel();
            var mData = oModel.getData();
            console.log("Form Values: ", mData);


		}

	});
});