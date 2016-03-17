function FcaElement(){
	this.element = element;

	this.getElement = function(){
		return this.element;
	}

	this.equals = function(obj){
		if(obj == null){
			return false;
		} else if (obj == this){
			return true;
		} else if (!(obj instanceof FcaElement)) {
			return false;
		} else {
			return null;
		}
	}
}