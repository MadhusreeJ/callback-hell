let count = 10;
let countBox = document.getElementById("timer");
setTimeout(()=>{
    countBox.innerText = count; //10

    setTimeout(()=>{
        count--;
        countBox.innerText = count; //9
        
        setTimeout(()=>{
            count--;
            countBox.innerText = count; //8

            setTimeout(()=>{
                count--;
                countBox.innerText = count; //7

                setTimeout(()=>{
                    count--;
                    countBox.innerText = count; //6

                    setTimeout(()=>{
                        count--;
                        countBox.innerText = count; //5

                        setTimeout(()=>{
                            count--;
                            countBox.innerText = count; //4

                            setTimeout(()=>{
                                count--;
                                countBox.innerText = count; //3

                                setTimeout(()=>{
                                    count--;
                                    countBox.innerText = count; //2

                                    setTimeout(()=>{
                                        count--;
                                        countBox.innerText = count; //1

                                        setTimeout(()=>{
                                            count--;
                                            countBox.innerText = "Happy Independence Day"; //0
                                            document.body.style.backgroundImage = "url('happy.gif')";
                                            let element = document.getElementById("div1");
                                            element.style.backgroundImage = "url('happy.gif')";
                                            element.style.backgroundRepeat = "no-repeat"; 
                                            element.style.backgroundPosition = "center";  
                                        },1000);
                                    },1000);
                                },1000);
                            },1000);
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000);
},1000);