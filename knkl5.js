//三行诗1
var tjj5=1

function knkl5(){
			if(tjj5==1){
				var num5=Math.floor(Math.random()*5)
							const textEl9 = document.getElementById('xj5')
						const text9 =  ['万物更新，旧疾当愈，岁岁无虞，长安常安。','祝你童心未泯，仍怀傲骨与仁慈，有前程可奔赴，有岁月可回首。','所求皆如愿，所行皆坦途，多喜乐，长安宁，新年好，旧年也好。','去岁千般皆如意，今年万事定称心。','万物迎春送残蜡，一年结局在今宵。']
						
						var idx9 = 1
						writeText5()
						function writeText5() {
							textEl9.innerText = text9[num5].slice(0, idx9)
							idx9++
							if(idx9 > text9.length) {
								clearTimeout(js5)
							}
							js5=setTimeout(writeText5, 100)
						}
				
				
				
					const textEl10 = document.getElementById('xj5')
					const text10 =  ['万物更新，旧疾当愈，岁岁无虞，长安常安。','祝你童心未泯，仍怀傲骨与仁慈，有前程可奔赴，有岁月可回首。','所求皆如愿，所行皆坦途，多喜乐，长安宁，新年好，旧年也好。','去岁千般皆如意，今年万事定称心。','万物迎春送残蜡，一年结局在今宵。']
				
				setInterval(function(){
						var num=Math.floor(Math.random()*5)
						let idx10 = 1
						
						writeText()
						function writeText() {
							textEl10.innerText = text10[num].slice(0, idx10)
							idx10++
							if(idx9> text10[num].length) {
								clearTimeout(js5)
							}
							js5=setTimeout(writeText, 100)
							
						}
						},8000)	
						
			}
			else{
				
			}

			tjj5++
		}