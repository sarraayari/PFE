sap.ui.define(['sap/ui/core/mvc/Controller', 'sap/m/MessageToast', 	"sap/ui/model/json/JSONModel","sap/m/MessageBox", "sap/ui/core/Fragment"],
	function(Controller, MessageToast,JSONModel,MessageBox,Fragment) {
	"use strict";


    
	return Controller.extend("sap.m.sample.NavContainer.controller.NavContainer", {

		onInit: function() {
},
				onSliderMoved: function (oEvent) {
					var fValue = oEvent.getParameter("value");
					this.byId("panelCSSGrid").setWidth(fValue + "%");
				},
		onNavigateTobutton: function () {
            // var oRouter = this.getOwnerComponent().getRouter();
            // oRouter.navTo("Routebutton");


			var oView2 = sap.ui.xmlview({
                viewName: "project2.view.button"
            });

            // Place the new view into the container
            var oContainer = this.byId("container");
            oContainer.removeAllItems(); // Clear existing content
            oContainer.addItem(oView2);


        },
		onNavigateTotable: function () {
            // var oRouter = this.getOwnerComponent().getRouter();
            // oRouter.navTo("Routetable");

			var oView2 = sap.ui.xmlview({
                viewName: "project2.view.table"
            });

            // Place the new view into the container
            var oContainer = this.byId("container");
            oContainer.removeAllItems(); // Clear existing content
            oContainer.addItem(oView2);
        },
		onNavigateTomessagebox: function () {
            // var oRouter = this.getOwnerComponent().getRouter();
            // oRouter.navTo("Routemessagebox");


			var oView2 = sap.ui.xmlview({
                viewName: "project2.view.messagebox"
            });

            // Place the new view into the container
            var oContainer = this.byId("container");
            oContainer.removeAllItems(); // Clear existing content
            oContainer.addItem(oView2);

        }
		,
		onNavigateTocarousel: function () {
            // var oRouter = this.getOwnerComponent().getRouter();
            // oRouter.navTo("Routecarousel");
			var oView2 = sap.ui.xmlview({
                viewName: "project2.view.carousel"
            });

            // Place the new view into the container
            var oContainer = this.byId("container");
            oContainer.removeAllItems(); // Clear existing content
            oContainer.addItem(oView2);

        }
		,
		onNavigateToforms: function () {
            // var oRouter = this.getOwnerComponent().getRouter();
            // oRouter.navTo("Routeforms");
			var oView2 = sap.ui.xmlview({
                viewName: "project2.view.forms"
            });

            // Place the new view into the container
            var oContainer = this.byId("container");
            oContainer.removeAllItems(); // Clear existing content
            oContainer.addItem(oView2);

        },
		onNavigateToicons: function () {
            // var oRouter = this.getOwnerComponent().getRouter();
            // oRouter.navTo("Routeicons");

			var oView2 = sap.ui.xmlview({
                viewName: "project2.view.icons"
            });

            // Place the new view into the container
            var oContainer = this.byId("container");
            oContainer.removeAllItems(); // Clear existing content
            oContainer.addItem(oView2);

        },
		onNavigateTomessagestrip: function () {
            // var oRouter = this.getOwnerComponent().getRouter();
            // oRouter.navTo("Routemessagestrip");
			var oView2 = sap.ui.xmlview({
                viewName: "project2.view.messagestrip"
            });

            // Place the new view into the container
            var oContainer = this.byId("container");
            oContainer.removeAllItems(); // Clear existing content
            oContainer.addItem(oView2);

        },

		onNavigateToMonitorTile: function () {
            // var oRouter = this.getOwnerComponent().getRouter();
            // oRouter.navTo("RouteMonitorTile");

			var oView2 = sap.ui.xmlview({
                viewName: "project2.view.MonitorTile"
            });

            // Place the new view into the container
            var oContainer = this.byId("container");
            oContainer.removeAllItems(); // Clear existing content
            oContainer.addItem(oView2);

        },
		onNavigateToswitch: function () {
            // var oRouter = this.getOwnerComponent().getRouter();
            // oRouter.navTo("Routeswitch");

			var oView2 = sap.ui.xmlview({
                viewName: "project2.view.switch"
            });

            // Place the new view into the container
            var oContainer = this.byId("container");
            oContainer.removeAllItems(); // Clear existing content
            oContainer.addItem(oView2);

        }

		

	});
});
