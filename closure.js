
// Tish consept is importent
// Function er vitor a function call kora jai sei function ke abr block er baire babohar kora jai.


function Counter(woner){
    let count = 0;
    function incriment(){
        count = count + 1;
        console.log(woner,count);
    }
    return incriment;
}
const korimCounter = Counter("korim");
const rohimCountr = Counter("rohim");
rohimCountr();
rohimCountr();
rohimCountr();
rohimCountr();

korimCounter()
korimCounter()
korimCounter()

rohimCountr();
rohimCountr();
rohimCountr();



// function korimCounter(korim){
//     let count = 0;
//     function incriment(){
//         count++;
//         console.log(count)
//     }
//     return incriment;
// }

// const rohim = rohimCounter();
// rohim()
// rohim()
// rohim()
// rohim()
// rohim()