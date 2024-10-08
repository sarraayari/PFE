sap.ui.define(['sap/ui/core/mvc/Controller', 'sap/m/MessageToast', 	"sap/ui/model/json/JSONModel","sap/m/MessageBox"],
	function(Controller, MessageToast,JSONModel,MessageBox) {
	"use strict";


    
	return Controller.extend("sap.m.sample.NavContainer.controller.messagebox", {
        onInit: function() { 

            
        },
		onInitialFocusOnAction: function () {
			MessageBox.warning(
				"Initial button focus is set by attribute \n initialFocus: sap.m.MessageBox.Action.CANCEL",
				{
					icon: MessageBox.Icon.WARNING,
					title: "Focus on a Button",
					actions: [MessageBox.Action.OK, MessageBox.Action.CANCEL],
					emphasizedAction: MessageBox.Action.OK,
					initialFocus: MessageBox.Action.CANCEL,
					dependentOn: this.getView()
				}
			);
		},

		onInitialFocusOnCustomAction: function () {
			MessageBox.show(
				'Initial button focus is set by attribute \n initialFocus: \"Custom button\" \n Note: The name is not case sensitive',
				{
					icon: MessageBox.Icon.WARNING,
					title: "Focus on a Custom Action",
					actions: [MessageBox.Action.YES, MessageBox.Action.NO, "Custom Action"],
					emphasizedAction: "Custom Action",
					initialFocus: "Custom Action",
					dependentOn: this.getView()
				}
			);
		}
	});
});