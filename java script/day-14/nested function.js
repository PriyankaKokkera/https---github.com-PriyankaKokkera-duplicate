function parent(){
    console.log("This is Parent Function")
    function child(){
        console.log("This is Child Function")  
    
    function child1(){
        console.log("This is Child 1 Function")  
    
    
    function child2(){
        console.log("This is Child 2 Function")  
    }
    child2();
}
child1();
    
}
    child();
}
parent();

// function parent(){
//         console.log("This is Parent Function")
//        function child(){
//        console.log("This is Child Function")
//        }
//        return child;
//     }
//     var childfun= parent();
//     childfun();
