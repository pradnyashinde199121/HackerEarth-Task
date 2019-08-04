
     var A=[ 15478,8452, 8232, 874, 985 ,4512];
     var length = A.length;
     var new1=[];
     var new2=[];
     for(i=0; i<(A.length)/2;i++){
             new1.push(A[i]);
     }
     for(i=(A.length)/2; i<A.length;i++){
        new2.push(A[i]);
}
     console.log( "first half array"+ new1);
     console.log( "Second half of array"+new2);

 
 function getfirstdigit( no){
while (no>=10){
no/=10;
}
return no;

}
var d= parseInt(getfirstdigit(new1[0])); 
var e=parseInt(getfirstdigit(new1[1])); 
var f=parseInt(getfirstdigit(new1[2])); 
var cocad1=d +"" +e+"" +f;
console.log(cocad1);
var a=new2[0] % 10; 
 var b=new2[1] % 10; 
 var c=new2[2] % 10; 

 var concad2=a +"" +b+"" +c;
console.log(concad2);
concadfinal=cocad1 +"" +concad2 ;
result=parseInt(concadfinal);
console.log(result);
if(result % 11 == 0){
    console.log("OUI");
}
else{
    console.log("NON");
}