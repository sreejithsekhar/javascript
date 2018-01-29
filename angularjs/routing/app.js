var angular = require("angular");
require("angular-ui-router");

angular.module("mainApp", ["ui.router"])
	.config(function ($stateProvider, $urlRouterProvider) {
		console.log("hello configs");
		$urlRouterProvider.otherwise("/");

		$stateProvider.state("home", {
			url: "/",
			template: "<p>Home page</p> <a href='#' ui-sref='contact'>Contacts</a> |" + 
				"<a href='#' ui-sref='todo'>Todo</a> |" +
				"<a href='#' ui-sref='todo.list'>Todo List</a> |" +
				"<a href='#' ui-sref='report'>Multi View</a>"
		}).state("contact", {
			url: "/contact",
			template: "<p>Contacts</p><a href='#' ui-sref='home'>Home</a> |" +
				"<a href='#' ui-sref='contact.list'>Contact List</a>" +
				"<div ui-view></div>"
		}).state("contact.list", {
			url: "/list",
			template: "<p>Contacts List</p><a href='#' ui-sref='home'>Home</a> |" +
				"<a href='#' ui-sref='contact'>Contact</a>"
		}).state("todo", {
			url: "/todo",
			abstract: true,
			template: "<ui-view/>"
		}).state("todo.list", {
			url: "/list",
			template: "<p> Todo List</p><a href='#' ui-sref='home'>Home</a> |" +
			"<a href='#' ui-sref='contact'>Contacts</a>"
		}).state("report", {
			url: "/report",
			template: "<a href='#' ui-sref='home'>Home</a> |" +
				"<a href='#' ui-sref='report.details'>Details</a> |" +
				"<a href='#' ui-sref='report.features'>Features</a>" +
				"<div ui-view='filters'></div>" +
				"<div ui-view='tabledata'></div>" +
				"<div ui-view='graph'></div>"		
		}).state("report.details", {
			url: "/details",
			views: {
				filters: {
					template: "<p>Filters for details</p>"
				},
				tabledata: {
					template: "<p>Table data for details</p>"
				},
				graph: {
					template: "<p>Graph for details</p>"
				}
			}
		}).state("report.features", {
			url: "/features",
			views: {
				filters: {
					template: "<p>Filters for features</p>"
				},
				tabledata: {
					template: "<p>Table data for features</p>"
				},
				graph: {
					template: "<p>Graph for features</p>"
				}
			}
		})
	});