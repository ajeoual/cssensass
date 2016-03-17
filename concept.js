var set = require('./hashset');
var extents = require('./fcaelement');

function Concept() {
	this.parents = set.HashSet();
	this.children = set.HashSet();
	this.extents = set.HashSet();
	this.intents = set.HashSet();

	this.addParent = function(concept){
		this.parents.add(concept);
		concept.children.add(this);
	}

	this.addChild = function(concept){
		this.children.add(concept);
		concept.parents.add(this);
	}	

	this.removeParent = function(concept){
		this.parents.remove(concept);
		concept.children.remove(this);
	}

	this.removeChild = function(concept){
		this.children.remove(concept);
		concept.parents.remove(this);
	}

	this.getParents = function(){
		return this.parents;
	}

	this.getChildren = function(){
		return this.children;
	}

	this.getExtents = function(){
		return this.extents;
	}

	this.getIntents = function(){
		return this.intents;
	}

	this.getSimplifiedExtents = function() {
		this.simplifiedExtents = set.HashSet();
		this.getExtents();
	}

}