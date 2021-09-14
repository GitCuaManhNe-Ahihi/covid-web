var speed = 10;

/* Call this function with a string containing the ID name to
 * the element containing the number you want to do a count animation on.*/
function incEltNbr(id) {
  var elt = document.getElementById(id);
  var endNbr = Number(document.getElementById(id).innerHTML);
  const endNbrs = Number(document.getElementById(id).innerHTML);
  incNbrRec(0, endNbr, elt,endNbrs,id);
}

/*A recursive function to increase the number.*/
function incNbrRec(i, endNbr, elt,endNbrs,id) {
  if (i <= endNbr) {
    elt.innerHTML = i;
    var check = (""+id).search("nbr1")+1;
    setTimeout(function() {
        //Delay a bit before calling the function again.
        if(check){
            incNbrRec(i + 5000, endNbr, elt,endNbrs,id);
        }
        else{
            var check2 = (id).search('nbr0')+1;
            if(check2){
                incNbrRec(i + 1, endNbr, elt,endNbrs,id);}
            else{
                var check3 = (id).search('nbr3')+1;
                if(check3){
                incNbrRec(i + 10, endNbr, elt,endNbrs,id);
                }
                else
                {
                    incNbrRec(i + 200, endNbr, elt,endNbrs,id);
                }
           }
        }
    },1);
  }
  else{
  elt.innerHTML = endNbrs;
  }
}

/*Function called on button click*/
function incNbr(){
  incEltNbr("nbr0");
}
/*Call this funtion with the ID-name for that element to increase the number within*/
function incNbr1(){
    incEltNbr("nbr1");
  }
function incNbr2(){
    incEltNbr("nbr2");
  }
function incNbr3(){
    incEltNbr("nbr3");
  }
  incEltNbr("nbr0"); 
  incEltNbr("nbr1"); 
  incEltNbr("nbr2"); 
  incEltNbr("nbr3"); 