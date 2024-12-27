//三行诗1
	var tjj1=1
function knkl1(){
	

	
	if(tjj1==1){
		var num1=Math.floor(Math.random()*5)
					const textEl = document.getElementById('xj1')
				const text1 =  ['吉吉利利，百事都如意。','愿保兹善，千载为常。欢笑尽娱，乐哉未央。','愿天上人间，暂得欢娱，年年今夜。','愿你被这个世界温柔相待，愿你目之所及，心之所向慢慢都是爱，愿你绽放如花，愿你长开不败。','从今诸事愿、胜如旧。人生安康，喜一年入手。']
				var idx1 = 1
				writeText1()
				function writeText1() {
					textEl.innerText = text1[num1].slice(0, idx1)
					idx1++
					if(idx1 > text1.length) {
						clearTimeout(js)
					}
					js=setTimeout(writeText1,100)
				}
		
		
		
		
		
		setInterval(function(){
				const textEl2 = document.getElementById('xj1')
				const text2 =  ['吉吉利利，百事都如意。','愿保兹善，千载为常。欢笑尽娱，乐哉未央。','愿天上人间，暂得欢娱，年年今夜。','愿你被这个世界温柔相待，愿你目之所及，心之所向慢慢都是爱，愿你绽放如花，愿你长开不败。','从今诸事愿、胜如旧。人生安康，喜一年入手。']
			
				var num=Math.floor(Math.random()*5)
				let idx2 = 1
				writeText()
				function writeText() {
					textEl2.innerText = text2[num].slice(0, idx2)
					idx2++
					if(idx1> text2[num].length) {
						clearTimeout(js)
					}
					js=setTimeout(writeText, 100)
					
				}
				},8000)	
		
		
	}
	else{
		
	}
	tjj1++
}
