function Onsubmit(){ 
	window.location.href="files/home.html";
}

        function myFunction(){
            var value=[];
            var index=[];
            for(var i=1;i<=Number(localStorage.clickcount);i++){
                var temp=localStorage.getItem("test"+i);
                index.push(i);
                value.push(Number(temp));
            }

            var layout={
                title:'Your test record',
                xaxis:{
                    title:'Number of tests',
                    nticks:localStorage.clickcount
                },
                yaxis:{
                    range:[0,100],
                    title:'Score'
                }
            }
            Plotly.plot("container",[{
                x:index,
                y:value,
                mode:'lines+markers',
                type:'scatter'
            }],layout);
        }
    
function clear(){
			localStorage.clear();
		}

	 function save(){
            var result=0;
            if(typeof(Storage)!=="undefined"){
                if(localStorage.clickcount){
                    localStorage.clickcount=Number(localStorage.clickcount)+1;
                }else{
                    localStorage.clickcount=1;
                }
            }else{
                alert("Error!");
            }

            if(document.getElementById("b1").checked){
                result+=20;
            }

            if(document.getElementById("c2").checked){
                result+=20;
            }
            if(document.getElementById("c3").checked){
                result+=20;
            }
            if(document.getElementById("c4").checked){
                result+=20;
            }
            if(document.getElementById("c5").checked){
                result+=20;
            }

            localStorage.setItem("test"+localStorage.clickcount,String(result));
        }
