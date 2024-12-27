//三行诗1
var tjj4=1

function knkl4(){
			if(tjj4==1){
				var num4=Math.floor(Math.random()*5)
							const textEl7 = document.getElementById('xj4')
						const text7 =  ['愿你有人陪你颠沛流离，如果没有，愿你成为自己的太阳。','希望在奔赴未来的路上，我们有着生生不息的热爱，如星灿烂，如风自由。','身边碎碎念念的人，也要成为年年岁岁的人。','往后的日子是崭新的，谁也不许回头看咯。','我与旧事归于尽，来年依旧迎花开。','天边失去今年的最后一缕晚霞，来年愿你的心中仍有不灭的灯塔。']
						
						var idx7 = 1
						writeText4()
						function writeText4() {
							textEl7.innerText = text7[num4].slice(0, idx7)
							idx7++
							if(idx7 > text7.length) {
								clearTimeout(js4)
							}
							js4=setTimeout(writeText4, 100)
						}
				
				
				
					const textEl8 = document.getElementById('xj4')
					const text8 =  ['愿你有人陪你颠沛流离，如果没有，愿你成为自己的太阳。','希望在奔赴未来的路上，我们有着生生不息的热爱，如星灿烂，如风自由。','身边碎碎念念的人，也要成为年年岁岁的人。','往后的日子是崭新的，谁也不许回头看咯。','我与旧事归于尽，来年依旧迎花开。','天边失去今年的最后一缕晚霞，来年愿你的心中仍有不灭的灯塔。']
				
				setInterval(function(){
						var num=Math.floor(Math.random()*5)
						let idx8 = 1
						
						writeText()
						function writeText() {
							textEl8.innerText = text8[num].slice(0, idx8)
							idx8++
							if(idx7> text8[num].length) {
								clearTimeout(js4)
							}
							js4=setTimeout(writeText, 100)
							
						}
						},8000)	
						
			}
			else{
				
			}
			tjj4++

		}