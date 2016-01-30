window.onload=function() {
	var kaishi=document.getElementById('kaishi');
	kaishi.style.background='url(./imgs/zhong.png)no-repeat ';
	var test=document.getElementById('test');
    var test2=document.getElementById('test2');
    // onscroll滚动触发  onclik 点击触发  ondblclick 双击触发
kaishi.onclick=function(){
   kaishi.style.display='none';
	// 1.在控制台中输出10行*
	var star=function(){
		var s='';
		for(var i=0;i<5;i++){
			s+='*';
			console.log(s);
			console.log(' ');
			
		}
	};

	star();
	var fn=function(){
		for(var i=0;i<5;i++){
			var s='';
			for(var j=0;j<5;j++){
				s+='*';
				
			}	
			console.log(s);
			console.log(' ');
		}
	};

	fn();
	// 2.写一个函数在页面中输出五行*
	// document.write('*');
	// document.write('<br/>')
	// document.write('*');
	// var fn2=function(){
		
	// 	for(var i=0;i<5;i++){
	// 		for(var k=0;k<4-i;k++){
	// 			document.write('-');
	// 		}
	// 		for(var j=0;j<2*i+1;j++){

	// 			document.write('*');
			
	// 		}
	// 		document.write('<br/>');
	// 	}
	// };
	// fn2();


	// 3.写一个函数  在页面中用定位创建28个元素

	// 28个元素都用定位  1.1（top:0） 2.2(top:30px)  ....7.7(top:180px)
	var body=document.getElementById('body');
	
	// kaishi.style.display='block';
	var da=document.createElement('div');

	da.setAttribute('id','da');
	body.appendChild(da);
	// var da=document.getElementById('da');
	// var kaishi=document.createElement('div');
	// kaishi.setAttribute('id','kaishi');
	// da.appendChild(kaishi);
	var poker;
	var fn3=function(){
		for(var i=0;i<7;i++){
			for(var j=0;j<i+1;j++){
				poker=document.createElement('div');
				poker.setAttribute('id',i+'_'+j);
				poker.setAttribute('class','poker');
				poker.style.top=45*i+'px';
				poker.style.left=(7-i)*75+150*j+'px';
				da.appendChild(poker);
			}
			

		}
	};
	fn3();
	console.table(poker);
	
	var shuzi={A:'1',2:'2',3:'3',4:'4',5:'5',6:'6',7:'7',8:'8',9:'9',10:'10',J:'11',Q:'12'};
	var pokerLeft=document.createElement('div');
	pokerLeft.setAttribute('class','pokerLeft');
	da.appendChild(pokerLeft);
	for(var i=0;i<24;i++){
		var poker1=document.createElement('div');
		poker1.setAttribute('class','poker1');
		pokerLeft.appendChild(poker1);
		
	}
	console.table(poker1);
	var pokerRight=document.createElement('div');
	pokerRight.setAttribute('class','pokerRight');
	da.appendChild(pokerRight);
	pokerRight.style.display='block';


	var next=document.createElement('div');
	var again=document.createElement('div');
	next.setAttribute('class','button');
	again.setAttribute('class','button');
	next.style.top='580px';
	again.style.top='640px'
	next.innerHTML='next';
	again.innerHTML='again';
	da.appendChild(again);
	da.appendChild(next);

	var previous=null,index=0;
	da.onclick=function(e){
		var el=e.target;
		console.log(el.parentElement);
		el.style.cursor='pointer';
		console.log(el.innerHTML);
		if(el.getAttribute('id')){
			var x=Number(el.getAttribute('id').split('_')[0]),
			y=Number(el.getAttribute('id').split('_')[1]);
		}
			
	    join=function(x,y){
			return x+'_'+y;
		}
		$=function(id){
			return document.getElementById(id);
		};
		if($(join(x+1,y))||$(join(x+1,y+1))){
			return;
		}
		if(el==this)return;
		if(previous!=null){
			previous.style.boxShadow='2px 4px 6px black';
			if(Number(shuzi[el.innerHTML])+Number(shuzi[previous.innerHTML])==13){
				el.parentElement.removeChild(el);
				previous.parentElement.removeChild(previous);
				previous=null;
				return;
			}
		}
		el.style.boxShadow='-2px -2px 20px #7A4648 inset,2px 2px 20px #7A4648 inset';
		if(el.innerHTML=='K'){
			el.parentElement.removeChild(el);
		}	
		previous=el;
		if(el.innerHTML=='next'){
			pokerRight.style.display='block';
			el.style.boxShadow='-1px -1px 10px #D0D0D0 inset,1px 1px 10px #D0D0D0 inset';
			pokerRight.appendChild(pokerLeft.removeChild(pokerLeft.lastElementChild));
		}
		if(!pokerLeft.lastElementChild){
			pokerLeft.style.display='none';
		}
		
		
		if(el.innerHTML=='again'){
			if(!pokerRight.lastElementChild){
				pokerRight.style.display='none';
			}
			el.style.boxShadow='-1px -1px 10px #D0D0D0 inset,1px 1px 10px #D0D0D0 inset';
			pokerLeft.style.display='block';
			pokerRight.style.display='none';
			while(pokerRight.lastElementChild){
				pokerLeft.appendChild(pokerRight.removeChild(pokerRight.lastElementChild));
			}
			index++;
		}
		
		if(index>3){
			tip('游戏失败!');
		}
		if(!poker&&!pokerLeft&&!pokerRight){
			tip('游戏成功!');
		}
		
		
	};
	
	var tip=function(s){
	    var tip=document.createElement('div');
		var reload=document.createElement('div');
		reload.setAttribute('class','button');
		reload.style.left='130px';
		reload.style.top='200px';
		reload.innerHTML='再来一局!';
		reload.style.fontSize='28px';
		// tip.setAttribute('id','tip');
		tip.style.height='300px';
		tip.style.width='400px';
		tip.style.position='relative';
		tip.style.left='387.5px';
		tip.style.top='200px';
		tip.style.boxShadow='5px 5px 5px black';
		tip.style.backgroundImage='url(./imgs/body.jpg)';
		tip.style.backgroundSize='cover';
		tip.style.lineHeight='200px';
		tip.style.textAlign='center';
		tip.style.fontSize='40px';
		tip.style.borderRadius='10px';

		tip.innerHTML=s;
		tip.appendChild(reload);
		da.appendChild(tip);
		reload.onclick=function(){
			location.reload();
		};
	};
	

	
	

	// 事件委托->target

	// 5.
	var number={1:'A',2:'2',3:'3',4:'4',5:'5',6:'6',7:'7',8:'8',9:'9',10:'10',11:'J',12:'Q',13:'K'};
	// 生成一个随机数组，长度为13，里面为1-13的随机数;[]
	// 遍历这个数组  按我们的规则输出数组

	var fn4=function(){
		var	arr=[];
		for(var i=0;i<13;i++){
			var num=Math.floor(Math.random()*13+1);
			arr.push(num);
		}
		for(var i=0;i<arr.length;i++){
			return number[arr[i]];
		}
		
	};
	// console.log(fn4());
	//6.写一个函数，生成一副乱序的扑克牌
    // var poker=[
    // {huase:'ht',number:8},
    // {huase:'bk',number:7},
    // {huase:'fk',number:9},
    // {huase:'mh',number:J}] ;
	var huase=['ht','bk','fk','mh'];
    var fn5=function(){
    	var pokers=[],pai,num1,huase1;
    	var zidian={};
    		while(pokers.length!=52){
    			num1=number[Math.floor(Math.random()*13+1)],
    			huase1=huase[Math.floor(Math.random()*4)];
    			pai={huase:huase1,number:num1};
    			if(!zidian[huase1+num1]){
    				pokers.push(pai);
    				zidian[huase1+num1]=true;
    			}
    		}
    	return pokers;
    };
    var pokersUp=fn5(),

		els=document.getElementsByClassName('poker');
		els1=document.getElementsByClassName('poker1');
    
    pokersDown=pokersUp.slice(-24);
    pokersUp.length=28;

     
    for(var i=0;i<els.length;i++){
    	els[i].innerHTML=pokersUp[i].number;
    	if(pokersUp[i].huase=='ht'){
    		els[i].style.backgroundImage='url(./imgs/hongt.jpg)';
    		els[i].style.color='red';
    	}
    	if(pokersUp[i].huase=='bk'){
    		els[i].style.backgroundImage='url(./imgs/heit.jpg)';
    		els[i].style.color='black';
    	}
    	if(pokersUp[i].huase=='fk'){
    		els[i].style.backgroundImage='url(./imgs/fangp.jpg)';
    		els[i].style.color='red';
    	}
    	if(pokersUp[i].huase=='mh'){
    		els[i].style.backgroundImage='url(./imgs/meih.jpg)';
    		els[i].style.color='black';
    	}

    }
    for(var j=0;j<els1.length;j++){
    	els1[j].innerHTML=pokersDown[j].number;
    	if(pokersDown[j].huase=='ht'){
    		els1[j].style.backgroundImage='url(./imgs/hongt.jpg)';
    		els1[j].style.color='red';
    	}
    	if(pokersDown[j].huase=='bk'){
    		els1[j].style.backgroundImage='url(./imgs/heit.jpg)';
    		els1[j].style.color='black';
    	}
    	if(pokersDown[j].huase=='fk'){
    		els1[j].style.backgroundImage='url(./imgs/fangp.jpg)';
    		els1[j].style.color='red';
    	}
    	if(pokersDown[j].huase=='mh'){
    		els1[j].style.backgroundImage='url(./imgs/meih.jpg)';
    		els1[j].style.color='black';
    	}

    }
    console.log(els1[els1.length-1]);
    console.table(pokersUp);
    console.table(pokersDown);

}
};