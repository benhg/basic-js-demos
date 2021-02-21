
   function pimp_text(){
       var text_to_pimp = document.getElementById("js_cool");
       text_to_pimp.style["font-size"] = "36pt";
       text_to_pimp.style["color"] = "#00F";
       text_to_pimp.style["text-decoration"] = "underline";
       text_to_pimp.style["text-shadow"] = "3px 3px red";
       text_to_pimp.style["font-weight"] = "bold";
       text_to_pimp.style["font-style"] = "italic";
   }

   function unpimp_text(){
       var text_to_pimp = document.getElementById("js_cool");
       text_to_pimp.style = "";
   }
   
   
   
   function add_to_page(message, id, parentID){
       var title = document.getElementById(parentID);
       secret_message = document.createElement("p");
       secret_message.classList.add("secret_class");
       secret_message.id = "secret";
       secret_message.innerHTML = message;
       secret_message.style['font-family'] ="arial";
       title.appendChild(secret_message);
   }

   function removeElement(node) {
       node.parentNode.removeChild(node);
   }

   function bye_punishment(){
   	  var node = document.getElementsByClassName("secret_class");
   	  for (var i=0; i<node.length;i++){
   	  	removeElement(node[i]);
   	  }

   }

   function clean(){
       var node = document.getElementById("secret");
       removeElement(node);
       
   }
   
   function accept_fate(){
   	   var el = document.getElementById("inbox2");
       var text = el.value;
       var numTimes = document.getElementById("how-bad-of-a-child-am-i").value;
       for(var i=0;i<numTimes;i++){
        console.log("The loop looped");
	   	  add_to_page(text, "loop2", "loop");
       }
   }
   function input_fn(){
       var el = document.getElementById("inbox");
       var text = el.value;
       var res = text.split(" ");
       console.log(res);
       var total = 0;
       for(var i=0;i<res.length;i++){
           total += Number(res[i]);
       }
       message = document.createElement("p");
       message.innerHTML = String(total)
       el2 =  document.getElementById("arr");
       el2.appendChild(message)   
   }


   

   //Now, it's your turn!
   // How do we:
   // Modify the add_to_page to make the message prettier?
   // Write any given punishment?
   // Clean up all of the loops?


   

   