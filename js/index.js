var app = angular.module('myApp', ['zingchart-angularjs']); 

app.controller('MainController', function($scope){
	$scope.spData = { 
	  type : 'bar',
	  title: {
    		text: 'Mr XYZ'
  		},
	  subtitle: {
	   	text: 'Graph of my skills on a scale of 10'
	  },
	  scaleY: {
		label: {
		  text: 'Scale'
		}
	  },
		scaleX: {
			values: [''],
			label: {
				text: 'Skills'
			}
		},
		 'plot':{
            'animation':{
                'delay':10,
                'effect':'3',
                'speed':'200',
                'method':'4',
                'sequence':'ANIMATION_BY_PLOT_AND_NODE',
            },
        },
  	  legend: {
		 'max-items' : 6,
		  overflow : 'page',
		  minimize: 1,
		  'margin-right' : '80px',
		  'margin-top' : '60px',
		header : {
			text: '<b>Skills</b> (Click on a skill below to toggle graph)',
			'background-color': 'silver'
		 }
	  },
	  series:[
		  
			{
				text: 'C',
				backgroundColor : 'navy', 
				values: [8],
			}, 
			{
				text: 'C++',
				backgroundColor : 'paleturquoise',
				values : [7] 
			},
			{
				text: 'Core Java',
				backgroundColor : 'yellow',
				values : [8] 
			},
			{
				text: 'J2EE',
				backgroundColor : 'red',
				values : [7] 
			},
			{
				text: 'Python',
				backgroundColor : 'green',
				values : [6] 
			},
			{
				text: 'Ruby on Rails',
				backgroundColor : 'orange',
				values : [5] 
			},
			{
				text: 'Javascript',
				backgroundColor : 'blue',
				values : [8] 
			},
			{
				text: 'MVC (AngularJS)',
				backgroundColor : 'teal',
				values : [7] 
			},
			{
				text: 'Node.js',
				backgroundColor : 'violet',
				values : [7] 
			},
			{
				text: 'jQuery',
				backgroundColor : 'black',
				values : [8] 
			},
			{
				text: 'HTML5',
				backgroundColor : 'pink',
				values : [9] 
			},
			{
				text: 'CSS/Sass/Less',
				backgroundColor : 'darkgoldenrod',
				values : [8] 
			},
			{
				text: 'Android',
				backgroundColor : 'lavender',
				values : [7] 
			},
			{
				text: 'Hybrid Apps(Ionic)',
				backgroundColor : 'gray',
				values : [8] 
			},
			{
				text: 'RDBMS [Oracle,MySQL]',
				backgroundColor : 'purple',
				values : [8] 
			},
			{
				text: 'NoSQL[MongoDB]',
				backgroundColor : 'aqua',
				values : [9] 
			},
			{
				text: 'Git',
				backgroundColor : 'crimson',
				values : [8] 
			},
			{
				text: 'Cloud [GAE, Heroku]',
				backgroundColor : 'brown',
				values : [7] 
			},
			{
				text: 'Hadoop',
				backgroundColor : 'wheat',
				values : [6] 
			},
			{
				text: 'SAP',
				backgroundColor : 'yellowgreen',
				values : [6] 
			},
			{
				text: 'Data Structures',
				backgroundColor : 'burlywood',
				values : [7] 
			},
			{
				text: 'OS Concepts',
				backgroundColor : 'gray',
				values : [7] 
			},
			{
				text: 'Chef/Puppet',
				backgroundColor : 'cyan',
				values : [5] 
			},
			{
				text: 'R',
				backgroundColor : 'darkorchid',
				values : [4] 
			},
			{
				text: 'Jenkins',
				backgroundColor : 'darksalmon',
				values : [3] 
			},
		  {
				text: 'Selenium',
				backgroundColor : 'palegreen',
				values : [2] 
			},
			{
				text: '',
				backgroundColor : 'white',
				values : [10] 
			},
		] 
	}; 
});