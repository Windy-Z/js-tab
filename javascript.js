window.onload = function() {
	var lis = document.querySelectorAll('.details');
	var goodsDescription = document.querySelectorAll('.goodsDescription');
	for(var i=0; i<lis.length; i++) {
		lis[i].setAttribute('index', i);
		lis[i].onmouseover = function() {
			for(var j=0; j<lis.length; j++) {
				lis[j].className = "details";
				goodsDescription[j].style.display = 'none';
			}
			this.className = "details details_chose";
			var index = this.getAttribute('index');
			goodsDescription[index].style.display = 'block';
		}
	}
}