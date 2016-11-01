var SliderInfos = function(){
	this.setProperties();
	this.memberClick();
	this.closeInfoClick();
};

SliderInfos.prototype.setProperties = function() {
	this.infoTitle = document.getElementById('info-title');
	this.infoContent = document.getElementById('info-content');
	this.infoContainer = document.getElementById('info-container');
	this.closeInfo = document.getElementById('close-info');
	this.members = document.querySelectorAll(".members");
	this.slideInfo = document.querySelectorAll(".slide-info");
	this.infoImage = document.getElementById('info-image');
};

SliderInfos.prototype.memberClick = function() {
	$self = this;
	for(i = 0; i < this.members.length; i++){
		this.members.item(i).addEventListener('click', function(){
			$self.infoTitle.innerHTML = this.querySelector('.member-info')
										   .querySelector('.member-name')
										   .innerHTML;
			$self.infoContent.innerHTML = this.querySelector('.member-info')
										   .querySelector('.member-content')
										   .innerHTML;
			$self.infoImage.src = this.querySelector('.member-image')
									  .getAttribute('src');
			$self.slideInfo.item(0).className = "slide-info show";

			setTimeout(function(){
				$self.closeInfo.className = "show";
			}, 500, $self);
		});
	}
};

SliderInfos.prototype.resetInfo = function(){
	this.infoTitle.innerHTML = "Selecione o integrante abaixo";
	this.infoContent.innerHTML = "para ver mais informações.";
};

SliderInfos.prototype.closeInfoClick = function(){
	$self = this;
	this.closeInfo.addEventListener('click', function(){
		$self.slideInfo.item(0).className = "slide-info";
	});
};
