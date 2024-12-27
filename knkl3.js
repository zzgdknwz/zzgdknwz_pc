//三行诗1

var tjj3=1

function knkl3(){
		if(tjj3==1){
			var num3=Math.floor(Math.random()*5)
						const textEl5 = document.getElementById('xj3')
					const text5 = ['愿你有你灿烂的前程，愿你有情人终成眷属，愿你在尘世获得幸福。','还有三百六十四天就要跨年了，回想上次跨年，仿佛还在刚才，嘿嘿。','一列跨年的小火车欢快的驶来，嘟嘟嘟~ 要上车嘛','身边碎碎念念的人，要成为岁岁年年的人。祝你天天开心，围巾。','唯愿你，常开心，常欣喜，有趣有盼，无灾无难。']
					
					var idx5 = 1
					writeText3()
					function writeText3() {
						textEl5.innerText = text5[num3].slice(0, idx5)
						idx5++
						if(idx5 > text5.length) {
							clearTimeout(js3)
						}
						js3=setTimeout(writeText3, 100)
					}
			
			
			
				const textEl6 = document.getElementById('xj3')
				const text6 = ['愿你有你灿烂的前程，愿你有情人终成眷属，愿你在尘世获得幸福。','还有三百六十四天就要跨年了，回想上次跨年，仿佛还在刚才，嘿嘿。','一列跨年的小火车欢快的驶来，嘟嘟嘟~ 要上车嘛','身边碎碎念念的人，要成为岁岁年年的人。祝你天天开心，围巾。','唯愿你，常开心，常欣喜，有趣有盼，无灾无难。']
				
			
			setInterval(function(){
					var num=Math.floor(Math.random()*5)
					let idx6 = 1
					
					writeText()
					function writeText() {
						textEl6.innerText = text6[num].slice(0, idx6)
						idx6++
						if(idx5> text6[num].length) {
							clearTimeout(js3)
						}
						js3=setTimeout(writeText, 100)
						
					}
					},8000)	
			
		}
		else{
			
		}
		tjj3++
	}