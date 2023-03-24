//using map 3
		
		  const users1=[
		 {   f_n:"Alex",
			 location:"London"},
			 {   f_n:"Raja",
			  location:"USA"},
			 {   f_n:"Ram",
			 location:"Singapore"},
		 ];
		 var x=users1.map(function (info){
		      return info.f_n+" "+"lives in"+" "+info.location 
			 });
		 console.log(x);