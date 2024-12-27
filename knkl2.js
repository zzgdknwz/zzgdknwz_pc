//三行诗1
var tjj2=1

function knkl2(){
		if(tjj2==1){
			var num2=Math.floor(Math.random()*5)
						const textEl3 = document.getElementById('xj2')
					const text3 =  ['愿你的未来纯净明朗，想你此刻的可爱目光在时间的美好命运中，愿你的命运美好欢畅。','烟火起，照人间，喜悦无边，举杯敬来年。','所愿皆如意化坦途。多喜乐，常安宁。','我托人间寄讯，邀雪称庆，为你捎来清佳冬令。','从暗夜，由荆棘，行至春光。']
					
					var idx3 = 1
					writeText2()
					function writeText2() {
						textEl3.innerText = text3[num2].slice(0, idx3)
						idx3++
						if(idx3 > text3.length) {
							clearTimeout(js2)
						}
						js2=setTimeout(writeText2, 100)
					}
			
			
			
				const textEl4 = document.getElementById('xj2')
				const text4 =  ['愿你的未来纯净明朗，想你此刻的可爱目光在时间的美好命运中，愿你的命运美好欢畅。','烟火起，照人间，喜悦无边，举杯敬来年。','所愿皆如意化坦途。多喜乐，常安宁。','我托人间寄讯，邀雪称庆，为你捎来清佳冬令。','从暗夜，由荆棘，行至春光。']
				
			
			setInterval(function(){
					var num=Math.floor(Math.random()*5)
					let idx4 = 1
					
					writeText()
					function writeText() {
						textEl4.innerText = text4[num].slice(0, idx4)
						idx4++
						if(idx3> text4[num].length) {
							clearTimeout(js2)
						}
						js2=setTimeout(writeText, 100)
						
					}
					},8000)	
		}
		else{
			
		}
		tjj2++
		}