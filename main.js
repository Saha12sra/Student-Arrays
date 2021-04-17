student_array=[];
function submit(){
    var display_array=[];
for(var i=1; i<=4; i++){
    var student_name= document.getElementById("name_of_the_student_"+i).value;
    console.log(student_name);
student_array.push(student_name);
}
console.log(student_array);
var length_of_array=student_array.length;
for(var j=0; j<length_of_array; j++){
    display_array.push("<h4> Name: "+student_array[j]+"</h4>");
    
}
console.log(display_array);
document.getElementById("display_name_with_commas").innerHTML=display_array;

var remove_commas=display_array.join(" ");
console.log(remove_commas);
document.getElementById("display_name_without_commas").innerHTML=remove_commas;

document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    student_array.sort();
    console.log(student_array);
    var length_of_array=student_array.length;
    var display_array=[];
for(var j=0; j<length_of_array; j++){
    display_array.push("<h4> Name: "+student_array[j]+"</h4>");
    
}
console.log(display_array);
document.getElementById("display_name_with_commas").innerHTML=display_array;

var remove_commas=display_array.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
    
}