var Controls = function(){
	this.setProperties();
	this.setHeaderPos();
	this.setMenuContainerPos();
	this.positionLogo();
	this.menuClick();
	this.windowResize();
};
Controls.prototype.setProperties = function() {
	this.fullWidth = window.innerWidth;
	this.fullHeight = window.innerHeight;
	this.header = document.getElementById('header');
	this.video = document.getElementById('video');
	this.videoWidth = 1280;
	this.videoHeight = 720;
	this.videoNewHeight = 0;
	this.videoNewWidth = 0;
	this.menuContainer = document.getElementById('menu-container');
	this.menu = document.getElementById('menu');
	this.menuStatus = false;
	this.logo = document.getElementById('logo');
};
Controls.prototype.setHeaderPos = function() {
	this.header.style.maxHeight = this.fullHeight + 'px';
};
Controls.prototype.setMenuContainerPos = function() {
	this.menuContainer.style.top = -this.fullHeight + "px";
};
Controls.prototype.positionLogo = function() {
	if(this.logo){
		this.logo.style.marginTop = -(this.logo.height / 2) + "px";
	}
}
Controls.prototype.menuClick = function() {
	self = this;
	this.menu.addEventListener('click', function(){
		if(self.menuStatus == false){
			self.menuContainer.style.top = 0;
			self.menuStatus = true;
			self.menu.className = "focused";
		}else{
			self.menuContainer.style.top = -self.fullHeight + "px";
			self.menuStatus = false;
			self.menu.className = "";
		}
	});

};
Controls.prototype.windowResize = function() {
	self = this;
	window.addEventListener('resize', function(){
		self.setProperties();
		self.setHeaderPos();
		self.positionLogo();
	});
};