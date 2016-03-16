function Concept() {
	this.parents = new Set();
	this.children = new Set();
	this.extents = new Set();
	this.intents = new Set();

	this.addParent = function(concept){
		this.parents.add(concept);
		concept.children.add(this);
	}

	this.addChild = function(concept){
		this.children.add(concept);
		concept.parents.add(this);
	}

	this.removeParent = function(concept){
		this.parents.delete(concept);
		concept.children.delete(this);
	}

	this.removeChild = function(concept){
		this.children.delete(concept);
		concept.parents.delete(this);
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
		this.simplifiedExtents = new Set();
		this.getExtents().
	}

}